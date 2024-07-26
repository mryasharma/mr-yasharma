const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { log } = require("console");

const userModel = require("./models/user");
const postModel = require("./models/post");
const { render } = require("ejs");

mongoose.connect('mongodb://localhost:27017/dataAsso', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isloggedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email }).populate("posts");
    res.render("profile", { user });
  } catch (err) {
    res.status(500).send("Error retrieving profile");
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) return res.send("Something went wrong");
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ email, userid: user._id }, "shhhh");
        res.cookie("token", token);
        res.status(200).redirect("/profile");
      } else {
        res.redirect("/login");
      }
    });
  } catch (err) {
    res.status(500).send("Error during login");
  }
});

app.post("/register", async (req, res) => {
  let { username, email, age, name, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) return res.status(500).send("User already registered");
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        let newUser = await userModel.create({
          username,
          name,
          age,
          email,
          password: hash,
        });

        let token = jwt.sign({ email, userid: newUser._id }, "shhhh");
        res.cookie("token", token);
        res.send(newUser);
      });
    });
  } catch (err) {
    res.status(500).send("Error during registration");
  }
});

app.post("/post", isloggedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    let post = await postModel.create({
      user: user._id,
      content: req.body.content
    });
    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
  } catch (err) {
    res.status(500).send("Error creating post");
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/like/:id", isloggedIn ,async (req,res)=>{
  let post = await postModel.findOne({_id:req.params.id}).populate("user")
  if(post.likes.indexOf(req.user.userid)===-1){
    post.likes.push(req.user.userid);
  }
  else{
    post.likes.splice(post.likes.indexOf(req.user.userid),1);
  }
 await post.save();
 res.redirect("/profile")
});

app.get("/edit/:id", isloggedIn ,async (req,res)=>{
  let post = await postModel.findOne({_id:req.params.id}).populate("user")
  
  res.render("edit",({post}))
});

app.post("/update/:id", isloggedIn ,async (req,res)=>{
  let post = await postModel.findOneAndUpdate({_id:req.params.id},{content:req.body.content});
  
  res.redirect("/profile")
})

function isloggedIn(req, res, next) {
  if (!req.cookies.token) return res.send("You must be logged in");
  try {
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  } catch (err) {
    res.clearCookie("token");
    res.redirect("/login");
  }
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

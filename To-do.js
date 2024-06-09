// Select elements
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const editSuccessMessage = document.getElementById('edit-success');

// Event listener for adding a new task
addTaskButton.addEventListener('click', function(event) {
    // event.preventDefault();
    addTask();
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task elements
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editTask(listItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(listItem);
    });

    // Append buttons to list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Function to edit a task
function editTask(listItem) {
    const newTaskText = prompt('Edit your task:', listItem.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        listItem.firstChild.textContent = newTaskText.trim();
        editSuccessMessage.style.display = 'block';
        setTimeout(() => {
            editSuccessMessage.style.display = "none";
        }, 1000);
    }
}

// Function to delete a task
function deleteTask(listItem) {
    if (confirm('Are you sure you want to delete this task?')) {
        listItem.remove();
    }
}

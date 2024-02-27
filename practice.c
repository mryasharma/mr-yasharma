// Write a program to calculate perimeter of rectangle.
// Take sides, a & b, from the user.
#include<stdio.h>
int main(){
    int side;
    printf("Enter ur side");
    scanf("%d",&side);
    printf("ur area of square is:%d",side*side);
    return 0;
}

// Write a program to print the average of 3 numbers.
#include<stdio.h>
int main(){
    int a,b,c;
    printf("Enter ur first number:");
    scanf("%d",&a);
    printf("Enter ur second number:");
     scanf("%d",&b);
    printf("Enter ur third number:");
       scanf("%d",&c);
       printf("the avg of three num are :%d",(a+b+c)/2);
       return 0;
}

// area of circle
#include<stdio.h>
int main(){
float radius;
printf("enter ur radius");
scanf("%f",&radius);
printf("your square is:%f",3.14*radius*radius);
    return 0;
}

// Write a program to check if given character is digit or not.

#include<stdio.h>
int main(){
char ch;
printf("enter a value:");
scanf("%c",&ch);
if(ch>='0',ch<='9'){
    printf("yes");
}
else{
    printf("no");
}
return 0;
}

// Write a program to print the smallest number of two
#include<stdio.h>
int main(){
int a,b;
printf("first number");
scanf("%d",&a);
printf("second number");
scanf("%d",&b);
if(a>b){
    printf("%d is bigger then %d",a,b);
}
else if(a==b){
    printf("both values are same");
}
else{
    printf("%d is bigger then  %d",b, a);
}
return 0;
}
// Write a program to check if a given number is Armstrong number or not

#include<stdio.h>  
 int main()    
{    
int n,r,sum=0,num;    
printf("enter the number=");    
scanf("%d",&n);    
num=n;    
while(n>0)    
{    
r=n%10;    
sum=sum+(r*r*r);    
n=n/10;    
}    
if(num==sum)    
printf("armstrong  number ");    
else    
printf("not armstrong number");    
return 0;  
}   
// Write a program to check if the given number is a natural number.

#include<stdio.h>
int main (){
    int n;
    printf("enter a number");
    scanf("%d",&n);
    if(n<0){
        printf("%d is  a natuar number",n);
    }
    return 0;
}
//  print like  this pattern
// *****
// *****
// *****
// *****

#include<stdio.h>
int main(){
    char ch;
    printf("enter a charcter=");
    scanf("%c",&ch);
    for (int  i = 0; i < 5; i++)
    {
        printf("%c",ch);
        printf("%c",ch);
          printf("%c",ch);
        printf("%c\n",ch);
    
    }
    
}
//  print like  this pattern
// *****
// *****
// *****   (ny nested loop)
// *****



#include<stdio.h>
int main(){
    char ch;
    printf("enter a charcter=");
    scanf("%c",&ch);
    for (int  i = 0; i < 5; i++)
    {
        for (int j = 0; i < 4; j++)
        {
            
        printf("%c",ch,j);
        }
        
       
    
    }
    
}
//
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

#include <stdio.h>
int main() {
 int i, j;
 for (i = 1; i <= 5; i++) {
 for (j = 1; j <= i; j++) {
 printf("%d ", j);
 }
 printf("\n");
 }
 return 0;
}

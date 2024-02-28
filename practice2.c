// Write a program to print prime numbers in a range!!
#include<stdio.h>
int isprime( int n);
int main(){
    int n1,n2;
    printf("Enter a  1st number:");
    scanf("%d",&n1);
    printf("Enter a  2nd number:");
    scanf("%d",&n2);
    for ( int i = n1; i <= n2; i++)
    {
      if(isprime(i)){
        printf("%d,",i);
      }
    }
    return 0; 
}
    int isprime( int n)
    {
        for (int  i = 2; i*i <= n; i++)
        {
           if (n%i==0)
           {
               return 0;
           }
           
        }
        return 1;
    }

    // Write a function to find sum of digits of a number.
    #include<stdio.h>
    int add(int a,int b);
    int main(){
        int a, b;
          printf("enter first num");
          scanf("%d",&a);
          printf("enter second num");
          scanf("%d",&b);
         add(a,b);
          return 0;

    }
       int add(int a,int b){
        printf("%d",a+b);

       }
    //    Write a function to find square root of a number.
    #include<stdio.h>
    #include<math.h>

    int main(){
        int a,sqr;
          printf("enter num");
          scanf("%d",&a);
          sqr=pow(a,0.5);
          printf("%d",sqr);
          return 0;
    }

    // pass fail
#include<stdio.h>
int main(){
  int marks;
  printf("Enter ur marks ");
  scanf("%d",&marks);
  if (marks>30)
  {
   printf("pass");
  }
  else{
    printf("fail");
  }
    return 0;
}

// pass fail 2
#include <stdio.h>
int main(){
    int marks;
    printf("enter ur marks");
    scanf("%d",&marks);
 if (90<=marks&&marks<=100)
 {
    printf("A+");
 }
 else if (70<=marks&&marks<90)
 {
       printf("A");
 }
  else if (30<=marks&&marks<70)
  {
       printf("B");
  }
  else
  {
        printf("c");
  }
  return 0;
}

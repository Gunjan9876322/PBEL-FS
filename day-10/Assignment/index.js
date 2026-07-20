
//Part A: Conditions and Operators

//1. Take a number as input. If the number is divisible by 2, print 'Even'; otherwise print 'Odd'.
let num = 8;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//2. Take a number as input. If it is divisible by 3, print 'Fizz'. If it is divisible by 7, print 'Buzz'. If it is divisible by both 3 and 7, print 'FizzBuzz'.
let n = 21;

if (n % 3 === 0 && n % 7 === 0) {
    console.log("FizzBuzz");
} else if (n % 3 === 0) {
    console.log("Fizz");
} else if (n % 7 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible");
}

//3. Take three numbers and print the greatest number among them.
let a = 15, b = 45, c = 30;

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}

//4. Check whether a student has passed or failed. Marks greater than or equal to 40 means Pass.
let marks = 65;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//5. Predict the output of logical operators (&& and ||).
console.log(true && false);
console.log(true || false);

//Part B: Strings---

//1. Print all vowels from the string 'JavaScript is awesome'.
let str = "JavaScript is awesome";
let vowels = "";

for (let ch of str) {
    if ("aeiouAEIOU".includes(ch)) {
        vowels += ch;
    }
}
console.log(vowels);

//2. Count the number of vowels in 'Masai School'.
str = "Masai School";
let count = 0;

for (let ch of str) {
    if ("aeiouAEIOU".includes(ch)) {
        count++;
    }
}
console.log(count);

//3. Print every character of 'Full Stack Development' using a loop.
str = "Full Stack Development";

for (let ch of str) {
    console.log(ch);
}

//4. Count the number of spaces in 'We are learning JavaScript'.
str = "We are learning JavaScript";
let spaces = 0;

for (let ch of str) {
    if (ch === " ") {
        spaces++;
    }
}
console.log(spaces);

//5. Reverse the string 'Hello'.
str = "Hello";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
console.log(rev);

//Part C: Loops---

//1. Using a for loop, print numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//2. Using a while loop, print numbers from 20 to 1.
let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

//3. Print the multiplication table of 7.
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
}

//4. Print all even numbers from 1 to 50.
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//5. Find the sum of all numbers from 1 to 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Part D: Arrays---

//1. Create an array [10, 20, 30, 40, 50] and perform array operations such as push, pop, length and update values.
let arr = [10,20,30,40,50];

arr.push(60);
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.length);

arr[2]=35;
console.log(arr);

//2. Using a for...of loop, print all elements of ['Apple', 'Mango', 'Banana', 'Orange'].
let fruits=["Apple","Mango","Banana","Orange"];

for(let item of fruits){
    console.log(item);
}

//3. Find the largest number in [23, 56, 89, 12, 100, 45].
arr=[23,56,89,12,100,45];

let largest=arr[0];

for(let num1 of arr){
    if(num1>largest){
        largest=num1;
    }
}
console.log(largest);

//4. Find the sum of all elements in [5, 10, 15, 20, 25].
arr=[5,10,15,20,25];

sum=0;

for(let x of arr){
    sum+=x;
}
console.log(sum);

//5. Count the number of even numbers in [2, 5, 8, 11, 14, 17, 20].
arr=[2,5,8,11,14,17,20];

count=0;

for(let x of arr){
    if(x%2==0){
        count++;
    }
}
console.log(count);

//Part E: Objects and for...in---

//1. Print all keys from a student object using for...in.
let student={
    name:"Gunjan",
    age:20,
    course:"CSE"
};

for(let key in student){
    console.log(key);
}

//2. Print all values from the object.
for(let key in student){
    console.log(student[key]);
}

//3. Find the subject with the minimum marks from a marks object.
let Marks = {
    Math: 80,
    English: 60,
    Science: 75
};

let minSubject = "Math";

for (let subject in marks) {
    if (marks[subject] < marks[minSubject]) {
        minSubject = subject;
    }
}

console.log(minSubject, marks[minSubject]);

//4. Count the total number of properties in an object.
count=0;

for(let key in student){
    count++;
}
console.log(count);

//5. Predict the output of iterating through an object using for...in.
for(let key in student){
    console.log(key,student[key]);
}

//Part F: Functions---

//1. Create a function that takes two numbers and prints their sum.
function add(x,y){
    console.log(x+y);
}
add(10,20);

//2. Create a function that takes a number and prints its square.
function square(x){
    console.log(x*x);
}
square(5);

//3. Create an arrow function that takes three numbers and prints their average.
const average=(a,b,c)=>{
    console.log((a+b+c)/3);
}
average(10,20,30);

//4. Create a function that takes a string and prints its length.
function lengthStr(s){
    console.log(s.length);
}
lengthStr("JavaScript");

//5. Create a function that takes two numbers and prints the greater number.
function greater(a,b){
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }
}
greater(25,40);

//Part G: Variables (let, const, var)---

//1. Predict the output of using a variable before declaration with var.
console.log(test);
var test=10;

//2. Predict the output of using a variable before declaration with let.
console.log(a);
let a = 10;

//3. Predict the output when modifying a const variable.
const PI = 3.14;
PI = 3.1416;

console.log(PI);

//4. Write the difference between var, let and const.
// var
var x = 10;
var x = 20;   // Allowed
x = 30;       // Allowed

// let
let y = 10;
// let y = 20; // Error
y = 20;       // Allowed

// const
const z = 10;
// z = 20;     // Error
console.log(z);

//Challenge Questions---

//1. Find the second largest number in an array.
arr=[10,30,20,50,40];
arr.sort((a,b)=>b-a);
console.log(arr[1]);

//2. Count vowels and consonants in the string 'Programming'.
str="Programming";

let v=0,cn=0;

for(let ch of str.toLowerCase()){
    if("aeiou".includes(ch)){
        v++;
    }else{
        cn++;
    }
}
console.log("Vowels:",v);
console.log("Consonants:",cn);

//3. Create a student object containing name, age, university, subjects and hobbies, then print all information.
student={
    name:"Gunjan",
    age:20,
    university:"ADTU",
    subjects:["Java","DBMS","JS"],
    hobbies:["Coding","Reading"]
};

console.log(student);

//4. Write a function that checks whether a number is prime or not.
function prime(n){
    let flag=true;

    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=false;
            break;
        }
    }

    if(flag && n>1){
        console.log("Prime");
    }else{
        console.log("Not Prime");
    }
}

prime(17);

//5. Write a function that reverses a string.
function reverse(str){
    let ans="";

    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
    }

    console.log(ans);
}

reverse("Hello");

//6. Create an array of students and print only those whose names start with 'A'.
let students=["Aman","Rahul","Ankit","Riya","Akash"];

for(let name of students){
    if(name.startsWith("A")){
        console.log(name);
    }
}

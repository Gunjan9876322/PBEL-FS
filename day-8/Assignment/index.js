//Part 1: Variables and Data Types---

// 1. Create two variables named firstName and lastName and print your full name.
let firstName = "Gunjan";
let lastName = "Malakar";
console.log(firstName + " " + lastName);

//2. Create a variable age and store your age in it. Print the value and its data type.
let age = "20";
console.log(age);
console.log(typeof age);

//3. Create variables of type string, number, boolean, undefined, and null. Print their data types.
let str = "Hello, World!";
let num = 42;
let bool = true;
let undef;
let nul = null;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul);

//4. Create two numbers and print their sum, difference, product, and division.
let num1 = 10;
let num2 = 20;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Division:", num1 / num2);

//5. Create a variable price = 99.99 and print its data type.
let price = 99.99;
console.log(typeof price);

//6. Predict the output of:
console.log(typeof null)
console.log(typeof undefined)

//Part 2: Comparison Operators---

//1. Create two variables and check ==, ===, !=, !==, >, <, >=, and <=.
let a = 10;
let b = 20;
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//2. Predict the output of:
console.log(10 == '10')
console.log(10 === '10')

//3. Predict the output of:
console.log(null == undefined)
console.log(null === undefined)

//4. Write a program to compare the ages of two people and print who is older.

let age1 = 20;
let age2 = 30;

if (age1 > age2) {
    console.log("Person 1 is older.");
}else {
    console.log("Person 2 is older.");
}

//Part 3: Conditional Statements---

//1. Write a program to check whether a number is positive or negative.
let number = 5;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

//2. Write a program to check whether a student has passed or failed. Passing marks are 40.
let marks = 45;
if (marks >= 40) {
    console.log("The student has passed.");
} else {
    console.log("The student has failed.");
}

//3. Write a program to find the larger number between two numbers.
let numA = 15;
let numB = 25;
if (numA > numB) {
    console.log("The larger number is:", numA);
} else {
    console.log("The larger number is:", numB);
}

//4. Write a program to find the largest among three numbers.
let numX = 10;
let numY = 20;
let numZ = 15;

if (numX >= numY && numX >= numZ) {
    console.log("The largest number is:", numX);
} else if (numY >= numX && numY >= numZ) {
    console.log("The largest number is:", numY);
} else {
    console.log("The largest number is:", numZ);
}

//5. Write a program to check whether a number is even or odd.
let evenOdd = 11;

if (evenOdd % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//6. Write a program that prints:
//Excellent (marks above 90)
//Good (75–90)
//Average (50–74)
//Fail (below 50)
let studentMarks = 85;

if (studentMarks > 90) {
    console.log("Excellent");
} else if (studentMarks >= 75 && studentMarks <= 90) {
    console.log("Good");
} else if (studentMarks >= 50 && studentMarks < 75) {
    console.log("Average");
} else {
    console.log("Fail");
}

//Part 4: Arrays---

//1. Create an array containing a string, number, boolean, null, and undefined.
let arr = ["Hello", 25, true, null, undefined];
console.log(arr);

//2. Print the first element, last element, and length of the array.
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);
console.log("Length of the array:", arr.length);

//3. Add two elements using push().
arr.push("JavaScript");
arr.push(500);
console.log(arr);

//4. Remove the last element using pop().
arr.pop()
console.log(arr);

//5. Replace the third element with your city name.
arr[2] = "Guwahati";
console.log(arr);

//6. Create the array [10, 20, 30, 40, 50] and perform the following operations:
//Print the length
let numbers = [10, 20, 30, 40, 50];
console.log("Length of the array:", numbers.length);
//Add 60
numbers.push(60);
console.log(numbers);
//Remove the last element
numbers.pop();
console.log(numbers);
//Change 30 to 100
numbers[2] = 100;
console.log(numbers);
//Print the final array
console.log("Final array:", numbers);

//7. Create a nested array:
let data = [1, 2, [3, 4, 5], 6];

//Print 3, 5, and the length of the nested array.
console.log(data[2][0]);
console.log(data[2][2]);
console.log("Length of the nested array:", data[2].length);

//Part 5: Output Prediction---

//1. Predict the output:
let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);

//2. Predict the output:
let array = [1, 2, 3];
array.push(4);
array.pop();
console.log(array);

//3. Predict the output:
let arr1 = ['A', 'B', 'C'];
arr1[1] = 'Z';
console.log(arr1);

//Challenge Questions---

//1. Create an array of 10 elements and replace every even index with 'JavaScript'.
let A = [];

for (let i = 0; i < 10; i++) {
    A.push(i + 1);
}

for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
        A[i] = "JavaScript";
    }
}
console.log(A);

//2. Create three variables: name, age, and city, and print a complete sentence using them.
let myName = "Gunjan";
let myAge = 20;
let city = "Guwahati";
console.log("My name is " + myName + ". I am " + myAge + " years old and I live in " + city + ".");

//3. Create an array with mixed data types and count the number of elements without using length.
let mixed = ["JS", 10, true, null, undefined, 50];

let count = 0;

for (let item of mixed) {
    count++;
}

console.log("Number of elements =", count);





































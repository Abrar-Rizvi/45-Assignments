"use strict";
// More Conditional Tests
Object.defineProperty(exports, "__esModule", { value: true });
//• Tests for equality and inequality with strings
let name = "Abrar";
let resultName = name === "Abrar" ? true : false;
console.log(resultName); //True
let resultName2 = name !== "Abrar" ? true : false;
console.log(resultName2); //False
// Tests using the lower case function
let fatherName = "Muhammad Suhail";
if (fatherName.toLowerCase() === "muhammad suhail") {
    console.log("name is in lower case");
}
else {
    console.log("name is not in lower case");
}
// Numerical tests
// equality and inequality
let age = 30;
if (age == 30) {
    console.log("ture");
}
else {
    console.log("false");
}
// greater than and less than,
let marksMath = 88.9;
let marksUrdu = 77;
if (marksMath > marksUrdu) {
    console.log("your got higher marks than urdu");
}
else {
    console.log("you got lower marks");
}
// greater than or equal to,
let age2 = 50;
if (age2 >= 42) {
    console.log("age is greater");
}
else {
    console.log("age is less");
}
// less than or equal to
let salary = 15000;
if (salary <= 25000) {
    console.log("salary is less than 25000");
}
else {
    console.log("salary is greater than 25000");
}
// Tests using "and" and "or" operators
let numOfEmpl = 300;
if (numOfEmpl >= 300 && numOfEmpl == 300) {
    console.log("if will run");
}
else {
    console.log("else will not run ");
}
if (numOfEmpl == 300 || numOfEmpl > 300) {
    console.log("if will run");
}
else {
    console.log("else will not run");
}
//Test whether an item is in a array
const fruits = ["apple", "banana", "orange"];
for (let val of fruits) {
    if (val == fruits[1]) {
        console.log("banana is in array");
        break;
    }
    else {
        console.log("else will not run");
    }
}
// Test whether an item is not in a array
const num = [1, 2, 3, 4, 5];
for (let value of num) {
    if (value == num[5]) {
        console.log("item not in array");
    }
    else {
        console.log("item not");
        break;
    }
}

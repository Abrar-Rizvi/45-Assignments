"use strict";
// Ans 28
Object.defineProperty(exports, "__esModule", { value: true });
// Stages of life will be describe by the help of if-else chain.
let age = 2;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is adult.");
}
else {
    console.log("The person is elder.");
}

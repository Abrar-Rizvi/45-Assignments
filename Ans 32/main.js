"use strict";
// Ans 32  incompete
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["john", "smith", "siril", "almidah", "nelson", "mandela", "hitlar", "albert"];
let new_users = ["ali", "imran", "junaid", "Mandela", "siril", "raza", "kashif", "JOHN"];
// for of loop
for (let name of new_users) {
    if (current_users.includes(name.toLowerCase())) {
        console.log("You need to creat a new user name");
    }
    else {
        console.log("user name is available");
    }
}
// let str: string = "Hello";
// let arr: string[] = ["hello", "world", "foo", "bar"];
// if (arr.includes(str.toLowerCase())) {
//     console.log("String found in the array (case insensitive)");
// } else {
//     console.log("String not found in the array");
// }

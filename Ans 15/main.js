"use strict";
// My name is Muhammad Abrar.
// Current date is 19 March 2024.
//This program is being used to print a message to invite every one in the list.
Object.defineProperty(exports, "__esModule", { value: true });
let guest = ["Mr.Ali", "Mr.Azeem", "Mr.Faheem"];
let i = 0;
// I am using for-of loop this Time.
for (let i of guest) {
    console.log(`${i}, you are invited into my party.`);
}
//Mr.Azeem cant attent the party.
console.log(`unfortunately, ${guest} can't come to the party.`);
// modifing list and replaced Mr Faheem with Mr kashif
let x = guest.splice(1, 1, "Mr.kashif");
//Now these following people coming to the party.
console.log(`Now Mr Azeem cant come at his place Mr kashif has been inveted`);
console.log(guest);

"use strict";
//There are two version of if-else. In ist is will execute and show output while 
// in 2nd if will not execute no output will be.
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}
alien_color = "yellow";
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}

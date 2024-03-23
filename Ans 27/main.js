"use strict";
// let alien_color : string = "green"
// if (alien_color === "green"){
//     console.log("The player earned 5 points.")
// }else if(alien_color === "yellow"){
//     console.log("The player earned 10 points.")
// }else{
//     console.log("The player earned 15 points.")
// }
Object.defineProperty(exports, "__esModule", { value: true });
// alien_color : string = "yellow";
// if (alien_color === "yellow"){
//     console.log("The player earned 10 points.");
// }
// function green(){
//     if (alien_color === "green"){
//         console.log();
//     }
// }
// function yellow(){
//     if (alien_color === "yellow"){
//         console.log("The player earned 5 points.");
//     }
// }
const alien_color = ["green", "red", "yellow"];
for (let val of alien_color) {
    if (alien_color.includes("green")) {
        console.log("The player earned 5 points.");
        if (alien_color.includes("yellow")) {
            console.log("The player earned 10 points.");
            if (alien_color.includes("red")) {
                console.log("The player earned 15 points.");
                break;
            }
        }
    }
}

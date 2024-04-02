"use strict";
// const originalArr: string[] = ["Turky", "Saudia Arab", "UAE", "Africa", "Singapoor"]
// console.log(originalArr);
// let sorted: string[] = originalArr.slice().sort()
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(sorted);
//  console.log(originalArr);
//  let revesed = sorted.reverse()
//  console.log(revesed);
//  console.log(originalArr);
//  let origlRev = originalArr.reverse()
//  console.log(origlRev);
//  let backOrignl = origlRev.reverse()
//  console.log(backOrignl);
//  let sort2 = backOrignl.sort()
//  console.log(sort2);
//  let rev2 = backOrignl.reverse()
//  console.log(rev2);
const originalArr = ["Turky", "Saudia Arab", "UAE", "Africa", "Singapoor"];
console.log(originalArr); //printing array in its original order
const newArr = originalArr.slice();
// console.log(newArr);
// in alphabatical order without modifing original order
let sorted = originalArr.sort();
console.log(sorted);
//array is still in its oiriginal order
console.log(newArr);
// array in reverse alphabetical order without changing the order of the original list.
let revAlp = sorted.reverse();
console.log(revAlp);
//array is still in its oiriginal order
console.log(newArr);
//Reverse the order of your list. Print the array to show that its order has changed.
let newToChange = newArr.reverse();
console.log(newToChange);
//Reverse the order of your list again. Print the list to show it’s back to its original order
let backToOriginal = newToChange.reverse();
console.log(backToOriginal);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let sortToAlpha = backToOriginal.sort();
console.log(sortToAlpha);
let revAlpha = sortToAlpha.reverse();
console.log(revAlpha);

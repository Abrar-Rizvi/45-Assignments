
//Ans 18 

const originalArr: string[] = ["Turky", "Saudia Arab", "UAE", "Africa", "Singapoor"]
console.log(originalArr);  //printing array in its original order

const newArr: string[] = originalArr.slice()
// console.log(newArr);

// in alphabatical order without modifing original order
let sorted = originalArr.sort()
console.log(sorted);


//array is still in its oiriginal order
console.log(newArr);

// array in reverse alphabetical order without changing the order of the original list.
let revAlp = sorted.reverse()
console.log(revAlp);

//array is still in its oiriginal order
console.log(newArr);

//Reverse the order of your list. Print the array to show that its order has changed.
let newToChange = newArr.reverse()
console.log(newToChange);

//Reverse the order of your list again. Print the list to show it’s back to its original order
let backToOriginal = newToChange.reverse()
console.log(backToOriginal);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let sortToAlpha = backToOriginal.sort()
console.log(sortToAlpha);


// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let revAlpha = sortToAlpha.reverse()
console.log(revAlpha);










 
 
 
 
 




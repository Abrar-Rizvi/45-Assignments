
// My name is Muhammad Abrar.
// Current date is 19 March 2024.
//This program is being used to exclude guest from list at the end list will be
// remain empty. 


let invGuest : string[] = ["Haris", "Ali", "Mr.Hassan", "Mr.kashif", "Mr.Faheem", "Mr.Kaleem"]

// printing messge that i can invite only two people.
console.log("I can invite only two people to the party.")

// now popping the people those cant be invited

let person1 = invGuest.pop()
console.log(`Sorry! you cant invited to dinner ${person1}`)

let person2 = invGuest.pop()
console.log(`Sorry! you cant invited to dinner ${person2}`)

let person3 = invGuest.pop()
console.log(`Sorry! you cant invited to dinner ${person3}`)

let person4 = invGuest.pop()
console.log(`Sorry! you cant invited to dinner ${person4}`)


// now letting two people know those are invited

console.log(`Both of you are invited to dinner ${ invGuest }`)

// // further remaing two invited people gonna be excluded form list.

let index1 = invGuest.pop()
let index0 = invGuest.pop()
console.log("Afrer every guest has been excluded form list now list is empty")
console.log(invGuest)










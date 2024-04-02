
// Ans.15

// My name is Muhammad Abrar.
// Current date is 19 March 2024.
//This program is being used to print a message to invite every one in the list.

let guest : string[] = ["Mr.Ali", "Mr.Azeem", "Mr.Faheem"];

// Modify your list, replacing the name of the guest who can’t make it with 
//the name of the new person you are inviting.

//I just heard azeem cant come. so Ms shibra coming at his place

guest.splice(1,1, "Ms.Shibra")

// I am using for-of loop this Time.
for (let i of guest){
    console.log(`${i}, you are invited into my party.`);
} 

//Mr.Azeem cant come
console.log("Mr.Azeem cant come to the party.");
















// console.log(`Now Mr Azeem cant come at his place Mr kashif has been inveted`)
// console.log(guest)








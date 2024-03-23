
// My name is Muhammad Abrar.
// Current date is 19 March 2024.
//This program is being used to add more guest because found a bigger dinner table.


const moreGuest :string[] = ["Mr.Ali", "Mr.kashif", "Mr.Faheem"]

// new guest haris is  being added at beginning of this Array.
moreGuest.unshift("Mr.Haris")
console.log(`Mr haris has been invited too\n ${moreGuest}`)

// one guest hassan is being added at middle.
moreGuest.splice(2,0,"Mr.Hassan")
console.log(`one new guest is invited\n ${moreGuest}`)

// // one guest hassan is being added at end .
moreGuest.push("Mr.Kaleem")
console.log(moreGuest)

for (let value of moreGuest){
    console.log(value)
}
console.log("I have found a bigger dinner table that's why i increased invitations.")
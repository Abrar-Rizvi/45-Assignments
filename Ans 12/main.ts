// My name is Muhammad Abrar.
// Current date is 18 February 2024.
//This program is printing indices one by one with same message for each.


let friends : string[] = ["Haris", "Waris", "Abdul", "Shaikh","Aehsan"];


let i: number = 0;    //initialization
for(i = 0; i < friends.length; i++){
    console.log(friends[i])
    console.log(`The person whose name is being printed is : ${friends[i]}`);
};
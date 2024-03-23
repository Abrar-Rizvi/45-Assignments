// // Ans 30

let user_name : string[] = ["Admin", "Eric", "Tony", "Eich", "Albert", "Rambo"]
// for -of loop
for (let names of user_name){
    if (names === "Admin"){
        console.log(`Hello ${names}, would you like to see a status report?`)
    }else {
        console.log(`Hello ${names}, Thank you for logging in again.`)
    }
};
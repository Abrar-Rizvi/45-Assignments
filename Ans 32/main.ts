

let current_users : string[] = ["john", "smith", "siril", "almidah", "nelson", "mandela", "hitlar", "albert"]
let new_users : string[] = ["ali", "imran", "junaid", "Mandela", "siril", "raza", "kashif", "JOHN"]
// for of loop
for(let name of new_users){
    if(current_users.includes(name.toLowerCase())) {
        console.log("You need to creat a new user name")
    }else{
        console.log("user name is available");
        
    }
}



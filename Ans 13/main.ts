// My name is Muhammad Abrar.
// Current date is 20 February 2024.
// My own array is printing a series of statement about items stored in List.

let vehicle: string[] = [
  "car",
  "bike",
  "bus",
  "auto rikhshaw",
  "train",
  "ship",
];

let i: number = 0; //initialization

for (let i = 0; i < vehicle.length; i++) {
  if (vehicle[i] === "car") {
    console.log(`i love having Honda ${vehicle[i]}`);
  } else if (vehicle[i] === "bike") {
    console.log(`My cousin has 150 ${vehicle[i]}`);
  } else if (vehicle[i] === "bus") {
    console.log(`There are usually rush in the ${vehicle[i]}`);
  } else if (vehicle[i] === "auto rikhshaw") {
    console.log(`I used to travel in the ${vehicle[i]}`);
  }else if(vehicle[i] === "train"){
    console.log(`i never travelled in the ${vehicle[i]}`)
  }else{
    console.log(`The people used to go USA through the ${vehicle[i]} in early 90s`)
  }
}

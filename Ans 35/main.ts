const animal: string[] = ["Dog", "Cat", "Goat"];

// just printing names of animals


for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

//Modifing a program simply printing a sentence with the animals


for (let i = 0; i < animal.length; i++) {
  if (animal[i] == "Dog") {
    console.log(`A ${animal[i]} would make a great pet.`);
  } else if (animal[i] == "Cat") {
    console.log(`A ${animal[i]} would make a great mano.`);
  } else if (animal[i] == "Goat") {
    console.log(`A ${animal[i]} is a domestic animal`);
  }
}

//adding a line at the end

console.log("Any of these would make a great pet");

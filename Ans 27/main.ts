

const alien_color: string[] = ["green", "red", "yellow"];

for (let val of alien_color) {
  if (alien_color.includes("green")) {
    console.log("The player earned 5 points.");

    if (alien_color.includes("yellow")) {
      console.log("The player earned 10 points.");

      if (alien_color.includes("red")) {
        console.log("The player earned 15 points.");
        break;
      }
    }
  }
}

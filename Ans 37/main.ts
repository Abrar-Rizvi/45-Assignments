function make_shirt(
  size: string = "large",
  text: string = "I love Typescript"
) {
  if (size === "small") {
    console.log(`creating a shirt ${size} and message : I love Javascript`);
  } else {
    console.log(`Creating a Shirt ${size} and message : ${text}`);
  }
}
make_shirt("medium");

let personName: string = "Muhammad Abrar";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

function toTitleCase(input: string): string {
  return input.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}
let message = "i love Karachi because i live here";
let print = toTitleCase(message);
console.log(print);

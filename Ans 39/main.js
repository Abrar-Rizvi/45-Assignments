"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city}, ${country}`;
}
let printName1 = city_country("Karachi", "pakistan");
console.log(printName1);
let printName2 = city_country("New york", "America");
console.log(printName2);
let printName3 = city_country("Toronto", "Canada");
console.log(printName3);

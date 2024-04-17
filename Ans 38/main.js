"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "United States") {
    console.log(`${city} is in the ${country}`);
}
describe_city("New York"); // with default country name
describe_city("california"); //with default country  name
describe_city("Karachi", "Pakistan"); //not default country name

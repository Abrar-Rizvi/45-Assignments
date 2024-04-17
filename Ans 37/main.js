"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", text = "I love Typescript") {
    if (size === "small") {
        console.log(`creating a shirt ${size} and message : I love Javascript`);
    }
    else {
        console.log(`Creating a Shirt ${size} and message : ${text}`);
    }
}
make_shirt("medium");


function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title, tracks };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));



























// function make_album(name: string, title: string): string{

// }

// // Define a function that builds an object
// function buildObject(name: string, age: number): { name: string, age: number } {
//     return { name: name, age: age };
// }

// // Call the function to create an object
// const person = buildObject("John", 30);

// // Access properties of the object
// console.log(person.name); // Output: John
// console.log(person.age); // Output: 30

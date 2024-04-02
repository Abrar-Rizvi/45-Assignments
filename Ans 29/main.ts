
// Ans 29

// After making an array of favorite_fruits, every index will be iterated by highr order function then check certain kind 
// of fruit in array or not.
// if it found within array a msg will be printed.





let favorite_fruits : string[] = ["banana", "apple", "lichi"]

// ist if statement
favorite_fruits.forEach((fruit) =>{
    if ( fruit === "banana"){
        console.log("I like bananas!");
    }
})

// 2nd if statetment
favorite_fruits.forEach((fruit) =>{
    if (fruit === "apple"){
        console.log("i like apple!")
    }
})

// 3rd if statement

favorite_fruits.forEach((fruit) =>{
    if (fruit === "lichi"){
        console.log("i like lichi!")
    }
})

// 4th if statement

favorite_fruits.forEach((fruit) =>{
    if (fruit === "orange"){
        console.log("i like lichi!")
    }
})

// 5th if statement

favorite_fruits.forEach((fruit) =>{
    if (fruit === "guava"){
        console.log("i like guava!")
    }
})

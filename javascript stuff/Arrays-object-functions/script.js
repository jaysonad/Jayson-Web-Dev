// console.log("JavaScript is running...");
// letmixArray = [10, "A string", [2,3,4], {"myValue"},
// true];

// console.log(mixArray);

// console.log(mixArray[0]); // return the element a sindex 0 fom the array

// mixArray.push("Dinosaur");

// mixArray.pop(); //will remove the last element in the array

// console.log(mixArray);

// mixArray.unshift(200)// adds new element to start of array
// let copy OfMixArray = [...mixArray];//will copy with contents of an iterable object (ex.arrays, objects,strings)

let car = {
    type: "Supercar" // type --> key , supercar -> value
    brand: "Bugatti", // These are key - Value pairs
    year: 2016,
    color: "White",
    subCar: { colour: "red" }, // on=bject Nesting
    numsArray:  [1, 2, 3],
}

console.log(Object.keys(car)); // Returns an array of all the keys in the object car
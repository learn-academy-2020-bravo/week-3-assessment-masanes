// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//create a function that takes in a number
//add first two numbers together to make the next number 
//should loop 10 times
//add values and push to new array

const fibonacci = () => {
    let newArray = [1,1];
    let count = 0;

    for (let i = 0; i < newArray.length; i++) {
        if (newArray.length > 10) {
            break; //prevents infinite loop
        }
        count = newArray[i] + count;
        newArray.push(count)
    }
 
   return newArray.slice(1); //I was able to get the first 10 numbers, but I think the logic is way off. plus I had 3 extra 1s because my starter array had [1,1] so I had to remove one of them w/slice. 
}

console.log(fibonacci())

//----------------------------------------------------------------
// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function called oddOnly that takes in an array
//use typeof to check if numbers
//push number to new array
//then sort descending

const oddOnly = (array) => {
   return array.filter(val => typeof val === "number")
   .sort((a,b) => a - b);
}
  

console.log(oddOnly(fullArr1))
console.log(oddOnly(fullArr2))

//----------------------------------------------------------------
// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//create a function called middleWord
//split the string
//if odd return the middle word
//use math.ceil or floor to get letter
//check if array is even
//if even slice the two middle words
//might not even need to turn to array

const middleWord = (string) => {
    if (string.length % 2 === 1) {
    return string.slice(Math.floor(string.length/2), Math.floor(string.length/2) + 1)
    }
    else if (string.length % 2 === 0) {
        return string.slice(Math.floor(string.length/2) -1, Math.floor(string.length/2) + 1)
    }
}

console.log(middleWord(middleLetters1))
console.log(middleWord(middleLetters2))
//----------------------------------------------------------------
// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
    constructor(sphere) {
        this.radius = sphere
    }
    calculateArea() {
        let solved = 4 * Math.PI * this.radius**2
        return solved.toFixed(2) //rounds number to two decimal places
    }
}

findArea = new Sphere(1)
console.log(findArea.calculateArea())
findArea = new Sphere(2)
console.log(findArea.calculateArea())
findArea = new Sphere(3)
console.log(findArea.calculateArea())

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const sum = (array) => {
    if (array.length === 0) {
        return [];
    }
    let newArray = array.map(val => val)
    return newArray.reduce(function(a, b) {
        return a + b
    })
}

console.log(sum(numbersToAdd1))
console.log(sum(numbersToAdd2))
console.log(sum(numbersToAdd3))
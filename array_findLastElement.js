//JavaScript
//Different methods of Getting Last Elements of an Array


const fruits=["Apples","Oranges","Pomegranates"];

//Method 1: Using at operator
console.log("M1: Last element of an array is "+fruits.at(-1));

//Method 2: Using Length Property
let fruitsLen = fruits.length;
console.log("M2: Last element of an array is "+fruits[fruitsLen-1]);

//Method 3: Using ES6 Spread Operator and Pop Method
const fruitsBuffer = [...fruits]; //Take a copy of the array
let newEle = fruitsBuffer.pop();
console.log("M3: Last element of an array is "+newEle);

//Method 4: Using Slice Method
//Array Slice is a non-mutable method which creates new array
const newSlicedArray = fruits.slice(-1);
console.log("M4: Last element of an array is "+newSlicedArray);

//Method 5: Using ES6 Spread Operator and Splice Method
//Array Splice is a mutable method which removes element(s) from existing array
const splicedArray = [...fruits]; //Take a copy of the array
let newSplicedElement = splicedArray.slice(-1);
console.log("M5: Last element of an array is "+newSplicedElement);
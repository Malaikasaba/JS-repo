
// Arrays 
// Methods of Array Declarations
// We cna declare numbers, strings, objects, and also arrays inside another array.

const myArray = [1,2,3,4,5,]
const newArray = ["A", "B","C","D"]

const myArray2 = new Array(1,2,3,4,5)
console.log(myArray2[1]);

// Array methods

// myArray.push(6) /*Add new values to the existing Array */
// myArray.push(7);
// myArray.pop(); /* Reoves the last value from the Array */

myArray.unshift(9);
 /*Inserts new element at the start of an array and 
returns the new length of the array */
myArray.shift();  
/*Removes new element from the start of an array and 
returns the new length of the array */
// console.log(myArray);

// console.log(myArray.includes(9)); /** It checks wether the given number is from the Array or not */
// console.log(myArray.indexOf(3)); /*it will return the index of the nmber & if the number dont exists in the Array then it will return -1*/

const newArr = myArray.join()/*Adds all the element of the array into string, separated by the specified seperator*/
// console.log(myArray);
// console.log(typeof newArr);

// Slice Or Splice
// Slice example
// console.log("A", myArray);
// const myn1 = myArray.slice(1,3) /*it will start from 1 index & 3 will not be included */
// console.log(myn1);
// console.log("B ", myn1);

// Splice Example
console.log("A", myArray);
const myn2 = myArray.splice(1,3) /*it will all the index numbers out from the Array */
console.log(myn2);
console.log("B ", myn2);




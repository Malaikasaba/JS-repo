

const AB_array = ["A", "B","C","D"]
const ab_array = ["a", "b", "c", "d"]

// AB_array.push(ab_array);
// console.log(AB_array);
// console.log(AB_array[4][1]);

// const AbMerge = AB_array.concat(ab_array);
// console.log(AbMerge); /* CONCAT combines 2 or more arrays & returns new array without modifying existing array*/

// Spread-Operator
const AbMerge = [...AB_array,...ab_array]
// console.log(AbMerge); /*Spread-Operator does the same work as concat do */

// .Flat Property in Arrays [Returns a new array with all sub array elements concatenated into it recursively up to the specified depth]
const anotherArray = [1,2,3, [4,5,6],7,8,[3,4,5,[1,2,0]]]
const real_another_array = anotherArray.flat(Infinity)/*used infinty because we want to resolve all the depths into a single array */
// console.log(real_another_array);

// console.log(Array.isArray("Malaika Saba")); /*We use Array.isArray method to find out wther this is an array or not */
// console.log(Array.from("Malaika Saba"));/*Using this Array.from method we can convert an object or any other type into Array */
// console.log(Array.from({name: "Malaika Saba"}));/*It will not directly convert this type of format into array so it will always return an empty array but if specifed that convert keys or the value within it nto array then it will work*/

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); /*Works same as Array.from */

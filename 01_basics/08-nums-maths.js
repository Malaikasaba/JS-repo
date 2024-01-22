
const score = 400;                         
// console.log(score);
const balance = new Number(100);    /* we use new to strictly allocate its value */
// console.log(balance);

// console.log(balance.toString().length);  /* we can change the number value to string*/
// console.log(balance.toFixed(2));

const otherNumberOne = 123.44040
// console.log(otherNumberOne.toPrecision(3)); /* precises value to the given number*/
const otherNumbertwo = 1123.44040
// console.log(otherNumbertwo.toPrecision(3)); 

const hundreds = 100000;
// console.log(hundreds.toLocaleString()); /* it changes the number to the by default US standard includes commas.*/
// console.log(hundreds.toLocaleString('en-IN')); /* changes to indian standards*/


// +++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-5)); /* abs(absolute) it changes the negative value to the positive value */
// console.log(Math.round(6.6)); /* roud offs the number */
// console.log(Math.ceil(6.6)); /*ceil offs to the upper  number */
// console.log(Math.floor(6.6)); /* roud offs to the lower  number */
// console.log(Math.min(3,4,5,6,7)); /* returns the minimum value form the Array */
// console.log(Math.max(3,4,5,6,7)); /* returns the minimum value form the Array */

console.log(Math.random()); /*Always returns the value in between 0 and 1 */
console.log((Math.random()*10) + 1); /*will return minimum 1 value or more than 1 */

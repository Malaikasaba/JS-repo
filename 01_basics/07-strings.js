

const name = "malaika";
const repoCount = 50;

// console.log(name + repoCount + " value");

// The below format is string interpulation
console.log(`My name is ${name} and my repos are ${repoCount}`);

const gameName = new String('malaika-saba');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));  /*To check the charcter on the index value */
console.log(gameName.indexOf('k'));/*To check the index value of the character */

const newString = gameName.substring(0, 4)
console.log(newString); /*substring is used to get the values of the string in the example about 4th value will not be included */

const anotherString = gameName.slice(-6, 4) /* we use slice for negative values*/
console.log(anotherString);

const newStringOne = "  Saba  ";
console.log(newStringOne); 
console.log(newStringOne.trim()); /*We use .trim to remove the unneccessary space  */

const url = "https://saba.com/saba%30khan";  /*To change URL spaces */
console.log(url.replace ('%30', '-') );       /*Replaced %30 with - in the url*/
console.log(url.includes('saba')); /* To know wather this word is include in the url or not*/
console.log(url.includes('malaika'));/* for example malaika in not inlcude in the url so it will return false*/
console.log(gameName.split('-'));/* Split the data basis on - */
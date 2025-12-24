let score = "20abc";
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1
//  false => 0
//  null => 0

let isLoggedIn =1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "malaika" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************Operations*********************/ 

let value = 20;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); => 4
// console.log(2-2); => 0
// console.log(2*2); => 4
// console.log(2**2); /*2 to the power of 2 */
// console.log(2/2); => 1
// console.log(2%2); => 0

let str1 = "hello";
let str2 = " saba";
let str3 = str1 + str2;
// console.log(str3); Output hello saba
// console.log(+true); => 1
// console.log(+""); => 0


let gameCounter = 100;
gameCounter++; /* Prefix and Postfix Operators (Precedence Operators)*/
console.log(gameCounter);  /* Output: 101 */

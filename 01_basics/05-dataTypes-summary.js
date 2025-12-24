/* How data is stored and accessed from a memory location 
on the basis of this the data is categorized into the following categories
Primitive DataType & Non-primitive OR Referenc */

/* 01) Primitive DataType
   7 Categories: 
   a) Number b) Null c) String d) Boolean d) Undefined e) Symbol f)Bigint */
// Symbol is used for uniqueness.
// 02) Non-primitive OR Referenc


const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outSideTemp = null;
const bigNumber = 12345678;
let userEmail;

const id = Symbol('123') 
const anotherId = Symbol('123')

// console.log(id === anotherId);
// Array, Object, Functions are non primitive DataTypes
const myArray = ['1','2','3']; /*Array */

const object = {
    name: "Malaika",        // Object declaration
    age: "20"
};

const myFunction = function(){
    console.log(myFunction);

}
/* Return Types of variables an Javascript
1) Primitive DataTypes:
    Number => number
    String => string
    Boolean => Boolean
    null => object
    undefined => undefined
    symbol => symbol
    Bigint => Bigint
2) Non Primitive DataTypes
    Arrays => object
    Function => function
    Object => object

JavaScript is a dynamically typed language. This means that variable
types are determined at runtime, and you do not need to explicitly declare
the type of a variable before using it. You can assign different types of 
values to a variable during its lifetime.
For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's
type explicitly, and the type checking is done at compile-time, before the code is
executed.Languages like Java, C++, and TypeScript are statically typed, and they 
require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential 
runtime errors if not handled carefully. Static typing, on the other hand, provides
 better type safety at the cost of some initial verbosity and strictness.
    */


 
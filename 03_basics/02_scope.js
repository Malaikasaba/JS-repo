/* let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);  */

// {} if we use curly braces with functions or if else statement the we call it scope

if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);   /** a  is not defined out of scope */
// console.log(b);   /* b is also no defined out of scope */
// console.log(c);      /* mostly we prefer not to use var within scope */


// Blog Scope and Global Scope

let a = 100 /*Global Scope */
if(true){
   let a = 10
   const b = 20
   console.log("INNER ", a);  /*blog scope */
} 
// console.log(a);


// Nested Scope

function one (){
    const username = "malaika"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()

}
one()



// ++++++++++++++++ Interesting ++++++++++++++++++++++++++++++
function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(7)
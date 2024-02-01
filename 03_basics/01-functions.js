
// Functions
/* function myName(){
    console.log("S");        (This is the basic syntax of functions)
    console.log("a");
    console.log("b");
    console.log("a");
}
myName()*/


function addTwonumbers(num1, num2){ /*Here num1 & num2 are called parameters */
// let result = num1 + num2
// return result
return num1 + num2;
}
addTwonumbers(3, "4") /*Here 3 & 4 are called arguments  */
const result = addTwonumbers(12,10)
// console.log("Result:", result);

function UserLoginM (username){
    return `${username} just Logged In`
    if(username === undefined){
    console.log("please enter a username");
    return
    }
}
/* function UserLoginMessage (username){
  
    if(!username){
    console.log("please enter a username");
    return
    }
    return `${username} User just Logged In`
}
console.log(UserLoginM("malaika")); */

function UserLoginMessage (username = "saba"){
  
    if(!username){
    console.log("please enter a username");
    return
    }
    return `${username} User just Logged In`
}
console.log(UserLoginM("malaika"));
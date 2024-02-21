
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

/*function UserLoginMessage (username = "saba"){
  
    if(!username){
    console.log("please enter a username");
    return
    }
    return `${username} User just Logged In`
}
console.log(UserLoginM("malaika")); */

// it is used when user don't know how many parametters are about to add

function calculateCartPrice(...num1){  /*Here we call this operator as rest operator */
    return num1
}
// console.log(calculateCartPrice(200,300,400));

function calculateCartPrice2(val1,val2,...num1){  /*Here we call this operator as rest operator */
    return num1
}
// console.log(calculateCartPrice2(200,300,400,500,600,700)); /*Here the first and 2nd numbers are considered as val1 and val2 and the rest of the numbers are printeded through rest operator */


const user = {
    username: "Malaika",
    age:20
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Age is ${anyObject.age}`);

}
// handleObject(user)
handleObject({
    username:"saba", /*This is how we can decode/de-structure the given objects */
    age:21
})

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500,600,700,800]));
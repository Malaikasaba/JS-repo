
// Stack (Primitive) & Heap (Non Primitive) 

 let myname= "malaika";
 let anothername = "myname";
 anothername = "saba";

//  console.log(myname);
//  console.log(anothername);

let userOne = {
    email:"saba@gmail.com",
    password: "1234",

}
let userTwo = userOne;
userTwo.email = "malaika@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
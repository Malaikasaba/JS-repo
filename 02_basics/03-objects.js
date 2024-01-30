
// Object Declaration Methods
// There are two types of object declaration 01) literals & 02)Constructors
// object.create this is callled constructor method

//  01) Object Literals
const mysym = Symbol("saba")
const jsUser = {
    [mysym] : "abc",
    name: "malaika ",
    full_name: "malaika saba",
    "full name": "malaika sba ",
    age: 20,
    location: "Gilgit",
    email: "saba@gmail.com",
    isLoggedIn:false,
    lastLogingDays: ["monday", "tuesday"]

}
// we can access the objects using these methods:
// console.log(jsUser.email);
// console.log(jsUser.full_name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

// how to access and change the values of the object and can also freeze the objcet so no one can change the values
jsUser.email = "malaikasaba@gmail.com";
Object.freeze(jsUser)
jsUser.email = "abc@gmail.com"
// console.log(jsUser);

// How to get greetings with a function
jsUser.greetings = function(){
    console.log("Hello There");
}
jsUser.greetingTwo = function(){
    console.log(`Hello There, ${this.age}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());
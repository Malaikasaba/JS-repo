
// Object Constructors OR Object Singleton
// const tinderUser1 = new Object()    [Singleton Object]
// can also declare as below but the difference is the first one is singleton object and thw second one is non singleton object
// const tinderUser2 = {}              [non-singleton object]
// console.log(tinderUser1);
// console.log(tinderUser2);

const tinderUser1 = {}
tinderUser1.id = "123",
tinderUser1.name = "saba",
tinderUser1.isLoggedIn = false
// console.log(tinderUser1);

const regularUser = {       /*Nesting */
    email: "abcd@gmail.com",
    fullName: {
        userfullname:{
            firstname:"malaika",
            lastname:"saba"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.firstname);

// Objects inside other objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const objj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(objj4);

// instead of this we can use spread-operator to combine all the objects
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// This will be the syntax when we are accessing the data from database
const user = [
    {
        name:"malaika",
        age:20
    },
    {
        id:1,
        email:"saba@gmail.com"
    }
]
user[1].email
// console.log(tinderUser1);
// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));
// console.log(tinderUser1.hasOwnProperty(isLoggedIn));


// Object Destructuring

const course = {
    coursename: "Abc",
    price:1000,
    courseInstructor:"malaika"

}
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);


/*Apis and JSon */
// {
//     "name":"malaika",        "this is called json format where keys band values both are couted in double strings"
//     "last-name":"saba",
//     "organization":"shedev"
// }

[
    {},
    {},
    {}
]



// Dates

const myDate = new Date();
// console.log(myDate.toString());
/*Date Conversions . Output is 
Tue Jan 23 2024 11:22:14 GMT+0500 (Pakistan Standard Time)  */

// console.log(myDate.toDateString());
/*OUTPUT:
Tue Jan 23 2024 */

// console.log(myDate.toISOString());
/*OUTPUT:
2024-01-23T06:25:04.005Z */

// console.log(myDate.toJSON());
/*OUTPUT:
2024-01-23T06:25:55.588Z */

// console.log(myDate.toLocaleDateString());
/*OUTPUT:
1/23/2024 */

// console.log(myDate.toLocaleString());
/*OUTPUT:
1/23/2024, 11:27:44 AM */

// console.log(myDate.toLocaleTimeString());
/*OUTPUT:
11:28:28 AM */

// console.log(myDate.toTimeString());
/*OUTPUT:
11:29:15 GMT+0500 (Pakistan Standard Time) */

// console.log(myDate.toUTCString());
/*OUTPUT:
Tue, 23 Jan 2024 06:30:07 GMT */

// console.log(myDate.getTimezoneOffset());
/*OUTPUT:
-300 */
// console.log(typeof myDate);/*typeof date is Object  */

let myCreatedDate = new Date(2024, 0, 23); /*Months starts with ) in JS */
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); 
/* Changes the comparisons from miliseconds to seconds */

let newDate = new Date();
// console.log(newDate); 
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long", 
})





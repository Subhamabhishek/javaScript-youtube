let date = new Date();
/*
console.log(date);
console.log(date.toString()); //proper with time and standard
console.log(date.toDateString()); //without time //-> IMP
console.log(date.toLocaleString()); //--> IMP //->proper date and time with am/pm
console.log(date.toUTCString()); //without time
console.log(typeof date); //without time
*/

let myCreatedDate = new Date(2023, 0, 23, 5, 3) //month in JS starts from 0
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myDate = new Date("01-14-2023") 
// console.log(myDate.toLocaleString());



//  Time stamps ->used in quizes, polls
let myTimeStamps = Date.now()
// console.log(myTimeStamps); //returns time in milliseconds since 1/1/1970

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

newDate.toLocaleString("default", {
    weekday : "long",
    // timeZone : ""
})
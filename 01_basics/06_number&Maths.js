const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //always use this when you are building a ecommerce application


//  MAIN FOCOUS OF PRECISION IS IT TAKES PRECISON BEFORE DECIMAL POINT  //
const otherNumber = 23.896547
const anotherNumber = 123.8546
// console.log("other :- ", otherNumber.toPrecision(3)); 
// console.log("another :- ", anotherNumber.toPrecision(3)); 


const num = 1000000
// console.log(num.toLocaleString("en-IN")); //it makes large number to read properly as it puts comma


// ****************************** MATHS(OBJECT) - LIB *******************************//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.round(4.6));
console.log(Math.max(4, 5, 6, 7, 8))
console.log(Math.min(4, 5, 6, 7, 8))


console.log(Math.random()) ; //-->ALWAYS GIVES VALUES FROM 0-1
console.log((Math.random() * 10) + 1) 
console.log(Math.floor(Math.random() * 10) + 1) ; /*-> but sometimes it gives 0.1 and after 
using floor() it will give 1 thats why we add + 1 */

//In case of min and max value range 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); /*if we do this without adding + min at the end 
it will give value less than min range so to avoid this we add min at the end*/



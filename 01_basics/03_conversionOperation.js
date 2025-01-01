// let score = "33"  => 33
// if //
// let score = "33abc"  => NaN
//if//
// let score = null  => 0
//if//
// let score = undefined => NaN
//if//
let score = "twenty"




/*mainly for backend we need to check type and convert it into suitable format 
as we dont know what type of value will come from frontend in a form , when we 
are fetching data as Request.body */

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber); 


// console.log(typeof (valueInNumber));

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// ****************** OPERATION ************************//

// console.log(2**3); //=> power of 2**3 = 8

let str1 = "hello"
let str2 = " world"

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2); //=>12
// console.log(1 + "2"); //=>12
// console.log("1" + 2 + 2); //=> 122
// console.log(1 + 2 + "2"); //=> 32


// console.log((5 + 4) * 5 % 2);

//***BAD PRACTICE****/
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+3 //Not good for readability 

let gameCounter = 100
// gameCounter++;   //=>post-fix
++gameCounter; //pre-fix

console.log(gameCounter);



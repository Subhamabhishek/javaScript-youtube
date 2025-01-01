const name = "Subham"
const repocount = 50

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`);


const gameName = new String("Subham Abhishek")  // in object type
// console.log(gameName);  //Stored as an array of key value pair
// console.log(gameName[0]); 
// console.log(gameName.__proto__); //to see all proto types you can see it in browser console

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(12)); 
// console.log(gameName.indexOf("A")); 

const newString = gameName.substring(2, 10)
// console.log(newString);
 
const str = gameName.slice(-15, 2)
// console.log(str);

const newStr = "   Hu haa huu   "
// console.log(newStr.trim()); //to trim start and end spaces 


const url = "https://subham.com/subham%20abhishek"
//HERE %20 -> mean s white space, basically used in browser to show white space in url
// console.log(url);

// console.log(url.replace("%20", " "))

// console.log(url.includes("subhm"))

console.log(url.split(""));



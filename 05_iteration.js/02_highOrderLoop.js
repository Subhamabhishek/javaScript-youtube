// these are array specific loops 

const arr = [1, 2, 3, 4, 5]

//////////////// for-of //////////////
for (const num of arr) {
    // console.log(num);
}

const greetings ="Hello World"
//for-of loop for strings
for (const greet of greetings) {
    // console.log(greet);
}


/////////////// new Map() /////////////////

const map = new Map()
map.set("a", 1)
map.set("b", 2)
map.set("c", 3)
map.set("a", 4)
// console.log(map);



for (const key of map) {
    // console.log(key);  
} 
/*Above will print like 
['a', 4 ]
[ 'b', 2 ]
[ 'c', 3 ]*/

//-> but if we do 
for (const [key, value] of map) {
    // console.log(key, ":-", value);  
} 
/*Above will print like 
a :- 4
b :- 2
c :- 3
*/



//here by this format of object is not iterable
/* 
const myObject = {
    name: "John",
    age: 30,
    occupation: "Developer"
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);  
}
    */




/////////////// for-each - will not return anything //////////////////////////

const coding = ['js', 'ruby', 'java', 'python', 'cpp']
coding.forEach((language, index, arr) => {
    // console.log(language, ":-", index, ":-", arr);
})


const values = coding.forEach((item)=>{
    // console.log(item);
    return item;  
})
// console.log(values); //undefined




const mycoding = [
    {
        language : 'javascript',
        fileName : "js"
    },
    {
        language : 'java',
        fileName : "java"
    },
    {
        language : 'python',
        fileName : "py"
    },
]
mycoding.forEach ((item, index)=>{
    // console.log(item.language)
})




///////////////// filter - it returns value with new array ////////////////

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = myArray.filter((number) => {
    return number % 2 === 0
})
// console.log(evenNumbers)





//////////////// map() in array - returns a new array ///////////////////

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNum.map( (number, index) => {
//     return number * 10
// })


// -------> chaining <------ //
const newNums = myNum.map( (number, index) => {
    return number * 10
}).map((num) => num + 1 )
.filter((num) => num >= 40)

// console.log(newNums);




/////////////// reduce() mainly used in shopping cart ////////////////////
const initialValue = 0;
const sumOfNum = myNum.reduce((accumulator, currentValue) => {

    console.log(`accumulator ${accumulator} && currentValue ${currentValue}`);
    return accumulator + currentValue
    
}, initialValue)
console.log(sumOfNum)



///////////////// for-in ///////////////
// WATCH 03_OBJECT_ITERABLES.JS  
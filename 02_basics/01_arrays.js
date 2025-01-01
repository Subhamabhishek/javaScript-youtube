//javascripts array are resizeable
//array in js creates shallow copy -> changes made in copy affects in original means same references
//deep copy -> shares no references 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["batman", "superman", "spiderman"]
const arr = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

//Array methods
myArr.push(6)
myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9) //push in first
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join() //converts array to string



//      slice , splice
console.log("A", myArr)

const myn1 = myArr.slice(1,3) //last range not included nor original array have any changes 
console.log(myn1)
console.log(myArr)

console.log("B", myArr)
const myn2 = myArr.splice(1,3) //last range included and also manupulate original array by cutting the ranges 
console.log(myn2)
console.log(myArr)

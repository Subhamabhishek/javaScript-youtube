const marvel_heros =["thor", "iron man", "hulk", "captain"]
const dc = ['superman', 'batman', 'flash']

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros.flat());

/////// OR /////////
const heros = marvel_heros.concat(dc) //need to store in variable and it returns new array
// console.log(heros)


// SPREAD operator //
const allNewHeros = [...marvel_heros, ...dc] 
// console.log(allNewHeros)



console.log(Array.isArray("Hitesh"))//this is not an array
console.log(Array.from("Hitesh")) //will convert to an array
console.log(Array.from({name : "hitesh"})) //intersting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
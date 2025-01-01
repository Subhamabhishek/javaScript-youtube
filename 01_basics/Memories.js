// STACK (primitive) and HEAP(non-primitive)
// HEAP is a pool of memory that is used to store objects, arrays, functions, etc.
// STACK is a pool of memory that is used to store primitive data types and copy of original value

let myYoutubeName = "Subhma 69"

let anotherName = myYoutubeName

anotherName = "Walahala"

// console.log(myYoutubeName);
// console.log(anotherName);


let user1 = {
    email :"subham@gmail.com",
    password : 123456
}

let user2 = user1

user2 .email = "subhamabhishek@gmail.com"

console.log(user1.email);
console.log(user2.email);



//////very very imp////////

/*
object can be declaration by object literals(no singleton) 
and 
by constructors(singleton)->Object.create()
*/

//************* object literals ***************/

const mySym = Symbol("key1")


const jsUser = {
    name : "subham",
    "full Name" : "Abhishek",
    [mySym] : "mykey1", //syntax of using symbol
    age:22,
    city : "cuttack",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Saturday"]
}

/*

console.log(jsUser.name); //can but not suitable way to access 
console.log(jsUser["email"]); //is suitable method to access
//now you caannot access fullName using . method 
console.log(jsUser["full Name"]) //this is only way to access this kind of key 
console.log(jsUser[mySym])
// console.log(typeof mySym)

*/

/*

jsUser.email = "bcd@gmail.com"

console.log(jsUser)

Object.freeze(jsUser) //it will freeze object and now no one can change values in object
jsUser.email = "jsUser@gmail.com"
console.log(jsUser)

*/

jsUser.greeting1 = function(){
    console.log("hello jsUser")
}

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}

// console.log(jsUser)
// console.log(jsUser.greeting1())
// console.log(jsUser.greeting2())




//************* objects by constructors ***************/

const tinder = new Object()

tinder.id = "123abc"
tinder.name = "bhumika"
tinder.isLoggedIn = false;

// console.log(tinder)

const regularUser = {
    email : "bhumi@gmail.com",
    fullName : {
        userFullName : {
            firstname : "shuu",
            lastname : "abhi"
        }
    }
}

// console.log(regularUser["fullName"].userFullName)


//if we are getting response from API then we can also use -> ?.
// console.log(regularUser.fullName?.userFullName.firstname)


//******** TO Merge */
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj3 = {
    5:"c",
    6:"d"
}


// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}  //*****IMP */
// console.log(obj4);



//*****When values come from data base */
const user =[
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "efg@gmail.com"
    }
]
// console.log(user[1].email)

////**********  IMP  *****************/
console.log(tinder);
console.log(Object.keys(tinder)) //-> will return keys in form of array
console.log(Object.values(tinder)) //-> will retun values in form of array
console.log(Object.entries(tinder)) 

console.log(tinder.hasOwnProperty("isLoggedIn")) 
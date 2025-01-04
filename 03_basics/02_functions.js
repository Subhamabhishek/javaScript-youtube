/*in shopping cart, we need to add the product to the cart 
and we dont know how many products a customer is going to add
and we need to add the price*/

//so using rest operator whatever number will be the argument but we can store and return it in an array

/********* REST OPERATOR-> returns an array *********/
function calculatePrice(val1, val2, ...num1){
    return num1
}

console.log(calculatePrice(200, 400, 500, 2000));


const user = {
    name : "Rahul",
    price : 696
}

function handleObject(anyObj){
    console.log(`userName is ${anyObj.name} and price is ${anyObj.price}`)
}

handleObject(user)
/*  falsy value

    false, 0, "", null, undefined, 
    NaN(Not a number), "", 0.0, -0, BigInt 0n 
*/ 


/*  truthy value
"0", 'false', " ", [], {}, function(){} */

const emptyArr = [];
if(emptyArr.length === 0){
    console.log("Array is empty"); 
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}



//Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10
// val1 = null ?? undefined 
val1 = undefined ?? null

console.log(val1);
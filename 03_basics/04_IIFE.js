/*Immidiately Invoked Function Expression -> IIFE
not because it immidiately executes the function but it is called IIFE because
we need to face pollution due to global scope toh woh global scope ke variable ya pollution hatane ke liye we use this 
*/

(function coffee(){
    // named IIFE
    console.log(`Db Connected`); 
})();

//-> Because this execution dont know where to stop so a semicolon ; is necessary to put 
( () => {
    //unnamed IIFE
    console.log(`DB Connected again`)
    
} )()


























// Repeat Lecture 25
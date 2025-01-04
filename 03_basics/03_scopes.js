function one(){
    const user = "suhani"

    function two(){
        const website = "amazon"
        console.log(user);
    }
    // console.log(website);

    two()
}
// one()


//+++++++++++++++     INTERESTING    ++++++++++++++//

console.log(addOne(5))

function addOne(num){
    return num+1
}


console.log(addtwo(5)) //gives error and this is called hoising
const addtwo = function(num){
    return num+2
} 

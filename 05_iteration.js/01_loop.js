// for loop


for (let i = 0; i < 10; ++i) {
    const element = i
    if(element == 5){
        // break;
        continue;
    }
    // console.log(element);  
}



//while

let i = 0 //give false but if we do "0" it will run infinitely
while(i){
    // console.log(i);
    i++;    
}


//do-while 
//here it will print 11 because only in do-while loop -> kaam pehle condition baad mein hota hai 

let score = 11
do{
    console.log(`score is ${score}`)
    score++
}while(score <= 10)
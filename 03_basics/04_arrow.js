const user = {
    username : "dablu",
    price : 699,

    welcomeMessage : function(){
        console.log(`Welcome to the store, ${this.username} `);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


function one(){
    console.log(this); 
}
// one()



const chai = () => {
    console.log(this); 
}
// chai()


const addOne = ((num1, num2) => 
    console.log(num1 + num2)
)(3,4)


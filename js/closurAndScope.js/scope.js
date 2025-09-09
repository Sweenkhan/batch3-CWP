//SCOPE: in javascript, scope defines the accessbility of variables, functions and object within
// different parts of a program.

//global scope , fucntional scope, block or local scope.



//A. ---------------------------------------------GLOBAL SCOPE:-------------------------- ->
//  When you are difinig a variable outside of any function or block scope..
//  They are accessible from anywhere withing the entire javascript programe.


let name = "sween"
var age = 23

function greet(){ 
    console.log("hello and welcome to our website")
}


//accessbility
// greet()
// console.log(name)

// if(true){
//     console.log(name)
//      greet()
//}




//------------------------------BLOCK SCOPE: local ------------------------------------------
// Let and const are block-scoped vairable, but only if you have declared the variable inside the curly bracket {}
// they are only accessible within the block. 

if(true){
    //block scope
    let firstName = "shabir"
}


for(let i = 0; i < 2; i++){
    //block scope
    const lastName= "khan"
}




//-----------------------------------FUNCTIONAL SCOPE:------------------------
// Varible declared with var inside a function are functional-scoped.
// they are only accessivel within the function where the are declared.

function byeBye(){
    var message = "bye bye user"
    console.log(message)
}

byeBye()

//-------------------------HOISTING----------------------------
//Hoisting in JavaScript is a behavior where variable and function declarations are conceptually moved to the top
//  of their containing scope during the compilation phase, before the code is executed.
//  This allows variables and functions to be used before they are explicitly declared in the code.


//var variable's name and function decleration with code are hoisted
console.log(email)     // you will get undefined 

var email = "sween@gmail.com"




//----------------function delcration---------------------
console.log(greet())   


function greet(){
    return "welcome to our website"
}



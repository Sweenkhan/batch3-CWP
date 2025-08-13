//variables in js


//types of variable in js?
//let, const, var

// naming rules in js.
//first letter should be in lowerace
//if you are using two words for naming, then it should be in camelCase
// you can also add number in variable name, 



//-----------------------------------------------------------------------------------------------//
//A. let variable:    you can reAssign the value in let variable
let studentName = "roshan" 
let student2 = "rahul" 
let student3 = "bhanwar"

student3 = "bhanwar lal"


 
// console.log(studentName, student2, student3) 
//B. const vairable:     you should create const variable for constant values
const dob = "3jun 2002"



//C. var variable:    you should'nt use this variable. its a global variable
var mobile = 588588585588 
var mobile = 958958588585

 



//-----------------------------------deep dive in vairables--------------------------------
//block scope

function add(){
  //function scope or block scope
}


if(true){
    //block scope
}

for(let i = 0; i < 10; i++){
  // block scope
}


//-----------------------------------let vairables-------------------------------
//a.  you can update the value,
//b.  you can't redeclare the variable
//c.  let is a block scope variable   
//d.  it can be hoisted         


let name = "sween"
    name = "sween khan"

if(true){
    let age = 22
}

// console.log(age)                     //it will not come out



//-------------------------------------var vairables------------------------------
//a. old format variable
//b. you can reassign the value
//c. you can redeclare the variable
//d. it is not blocked scoped variable


var firstName = "lokesh"
 firstName = "lokesh kumar"


 if(true){
    var lastName = "kumar"
}

console.log(lastName)         //you can access here

 

//-----------------------------------const vairables-------------------------------
//a.  you can't reassign the value,
//b.  you can't redeclare the variable
//c.  let is a block scope variable   
 
const tel = 599595995 

 if(true){
    const mobile = 989545
}

console.log(mobile)                // you cant access here






let passport = prompt("do you have your passport?") 
let permission ;


if(passport === "yes"){
  permission = "yes"
}else {
  permission = "no"
}

 
console.log("permission ", permission)

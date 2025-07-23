// data types in js

//A. --------------------------------primitive data types 7-----------------
//1. String
let name = "sween"   
let firstName = 'sween'


//2. Number
let age = 25


//3. Boolean      true or false
let marriedStatus = false  


//4. BigInt 
let creditCardNumber = BigInt(372685922783)


//5. undefined
let email


//6. null
let mobileNumber = null


//7. Symbol
let lastName = Symbol("khan")
let serName = Symbol("khan")



//B. ------------------------------------------Non-Primitive data type 3------------------------------------
//1. Array []
let coins = [1, 2, 5, 10, 20]
let studentsName = ["anjali", "lokesh", "banwar", "roshan"]


//2. Object {}
let profile = {}

let studentProfile = {
    name: "roshan",
    age: 22,
    email: "roshan@gmail.com",
    phone: 7995900543
}


//3. functions 
function add(){
    
}




//-------------------------------------operator in js---------------------------------
//A. Airthmetic operator in js
let addition = 2 + 4                 //6
let sub = 4 - 2                         //2
let mul = 4 * 4                         //16
let div = 16 / 4                        //4
let remainder = 10 % 3                  //1



//B. ------------------------------ comparison operator--------- 
// greater than            >
// less than               <
// doubleEqual             ==
// tripleEqual             === 
// notEqual                !=
 

console.log(5 == 5  )                  //true
console.log("sween" == "sween")        //true 
console.log(10 > 5)                    //true
console.log(40 < 5)                    //false    

console.log(5 == "5")                  //true      note: it will check only value
console.log("5" === 5)                 //false     note: it will check value and data types

console.log(10 != 5)                   //true
console.log(10 != 10)                  //false 




//c. Logical operator in js








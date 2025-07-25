// if else statement in js
//syntax

// if(true){
//     // execution code
// } else {
//     // 
// }


// ----------------------------------------------if else----------------------------------
 
let age = prompt("What is your age?")

// if(age >= 18 &&  age <= 60){
//     console.log("yes sir, you are eligible for the driving license, here is your form")
// } else {
//     console.log("sorry sir, you are not eligible. please come next year")
// }


console.log(typeof age)

// --------------------------------------if else-if else--------------------------------------
if(age >= 18 &&  age <= 60){
    console.log("yes sir, you are eligible for the driving license, here is your form")

} else if(age < 18) {
    console.log("sorry sir, you are under age . we can't provide you driving license")

} else {
    console.log("sorry sir, you are over age. its danger to give you driving license")
}
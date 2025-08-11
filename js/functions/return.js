//return statement in js

//basic
function add(num, num2){ 
    return num + num2
}

// console.log(add(10, 15))
// console.log(add(20, 25))




//--------------------------------------intermediat level------------------------------
function counting(num){

    let counting = []
    let sum = 0

    for(let i = 1; i <= num; i++){
        counting.push(i)
        sum = sum + i
    }
    
    // console.log("working")
    return {counting: counting, sum: sum}
}


// console.log(counting(10))
// console.log(counting(20))




//-----------------------------------------------advanced level---------------------------

function evenOrOdd(num){
 
    console.log("this line is working")
    
    if(num % 2 === 0){
        return num + " is even number"
    } else {
        return num + " is odd number"
     
    }
    
}


console.log(evenOrOdd(40))






 
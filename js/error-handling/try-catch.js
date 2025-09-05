// costum error
//throw-error  : you can create your own error using (throw new Error ) key word



function divide(a, b){

    if(b === 0){
        throw new Error("cannot divide by zero, please write some another number")
    }
    return a / b
}



//------------------------------------error handling with try and catch------------------------------------
try{
    console.log(divide(10, 0))
}catch(err){
    console.log(err)
}



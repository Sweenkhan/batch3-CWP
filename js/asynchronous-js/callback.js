//what is a callback?
// A callback is a function passed as an argument to another function.


//Why use callbacks?
// to handle asynchronous operations, like:

//API REQUEST
//reading files
//timers (setTimeout, setInterval)



//-----------------------basic callback-----------------------------
function greet(name, callback){
    console.log(`hello ${name}, welcome to our website`)

    callback()
}


function goodBye(){
    console.log("good bye ")
}


greet("roshan", goodBye)







function sum(a, b, callback){
    console.log(`your sum is ${a + b}`)

    callback()
}


function done(){
    console.log('your task has been completed')
}


function done2(){
 console.log('your task has been completed bhai sahab')
}


sum(4, 10, done2)
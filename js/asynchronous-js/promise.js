//The Promise object represents the eventual completion (or failure) of an asynchronous operations and its resulting value.

//every promise has three states.
//1. pending, 2 fullfilled,  3 reject

//API : application programming interface

 

//promise creating------
let promiseOne = new Promise((resolve, reject) => {
     // do an async task
     //DB calls, cryptography, network

     setTimeout(() =>{
        console.log("async task is completed ")
        resolve()
     }, 2000)
})


//promise CONSUMPTIN------
// promiseOne.then(() =>{
//     console.log('promise one has been completed')
// })




//2. PROMISE TWO

//  new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("your task has been completed")
//         resolve()
//     }, 2000)

// }).then(() => {
//   console.log("prosmie two has been completed")
// })




//3. PROMISE THREE

let promiseThree = new Promise((resolve, reject) => {

    setTimeout(() => {
       resolve({username: "banwar", email: "banwar@gmail.com"})

    }, 2000)
})


// promiseThree.then((data) => {
//   console.log(data)
// })



//4. PROMISE FOUR
let promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        let loggedIn = true;
        if(loggedIn === true){
           resolve({username: "lokesh", email: "lokesh@gmail.com"})
        } else {
            reject({message: "your password is wrong!"})
        }
        
    }, 2000);
})



promiseFour
.then((data) => {
   console.log(data)
})
.catch((err) => {
   console.log(err.message)
})

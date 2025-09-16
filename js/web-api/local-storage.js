// // LOCALE STORAGE

// // Local Storage in JavaScript is a web storage mechanism that allows web applications to store data locally 
// // within a user's browser with no expiration date. This means the data persists even after the user closes the browser
// // or restarts their computer.
// // It's part of the Web Storage API, which also includes Session Storage. 



// localStorage.setItem("username", "sween khan")        //data store locale storage
// localStorage.setItem("username", "shabir khan")       //update data

// localStorage.setItem("age", 24)                       

// console.log(localStorage.getItem("username"))         //data read or access

// localStorage.removeItem("age")                        // delete one item

// // localStorage.clear()                                 // clear all data 



// // web storage takes only json format data
// let profile = {
//     name: "ravi",
//     age: 26,
//     email: "ravi@gmail.com"
// }

// localStorage.setItem("userProfile", JSON.stringify(profile))


// let stringToLocal = localStorage.getItem("userProfile") 
// console.log(JSON.parse(stringToLocal))






// //session storag, once session is delete your data will go away. next time you have to login again
// sessionStorage.setItem("mobile", 548585885)
 
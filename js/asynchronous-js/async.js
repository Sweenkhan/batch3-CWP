//---------------------------------------synchronous programming  (blocking code) BY default----------------------------
//note: first taks will complete then only second task will start

console.log("one")

for(let i = 0; i < 20; i++)(
    console.log(i)
)

console.log("three")




//-----------------------------------------asynchronous programming (non-blocking code)--------------------------- 
//it will not wait for first task to complete. for starting
// setInterval, setTimeout, dom api, fetch api


console.log("form fill")


setTimeout(() => {
    if(false){
        console.log("form has been submitted")
    }else {
        console.log("this mail is already registered")
    }

}, 2000);

 

console.log("successfully created account")

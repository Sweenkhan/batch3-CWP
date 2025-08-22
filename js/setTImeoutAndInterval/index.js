//setTime out 
// its a javascript function or method which takes two arguments. one is a callback and second is the timer,
//  (based on given timer your action will get triggred once only)

// setTimeout(callback, timer)


// setTimeout( () => {
//  container.style.display = "block"
// }, 5000)



let container = document.querySelector(".contact-container")
let deletBtn = document.querySelector("button")


function showQueryForm(){
    container.style.display = "block"
}

setTimeout(showQueryForm, 3000)


deletBtn.addEventListener("click", () => {
   container.style.display = "none"
})

 





//setInterval:- it takes two arguments, one will be a callback and second will be your interval time (based on that timer, your action will repeat again and again)

let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let clearBtn = document.querySelector(".clear")
let result = document.querySelector(".result")

let timer = 0
let intervalId


startBtn.addEventListener("click", () => {

    intervalId  = setInterval(() => {                         //setting the interval
    timer++
   result.innerHTML = timer

}, 1000)

})



stopBtn.addEventListener("click", () => {
    clearInterval(intervalId)                                     //clearing the interval
})
 


clearBtn.addEventListener("click", () => {
    timer = 0;
    result.innerHTML = timer
})
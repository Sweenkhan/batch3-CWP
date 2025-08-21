let names = new Array()
let profile = new Object()
let timeELe = document.querySelector(".timeELe")


 


setInterval(() => {

let time = new Date()   
timeELe.innerText = time.toLocaleTimeString()

}, 1000)










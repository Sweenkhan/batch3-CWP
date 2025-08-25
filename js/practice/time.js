
setTimeout(() =>{
    alert("welcome to our website")
}, 2000)



let interValID;

document.querySelector(".start").addEventListener("click", () => {

     interValID = setInterval(() => {
    let time = new Date()
    console.log(time.toLocaleTimeString())
}, 1000)

})

 





document.querySelector(".stop").addEventListener("click", ()=> {
    clearInterval(interValID)
})
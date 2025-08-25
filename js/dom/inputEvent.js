let nameInput = document.querySelector("[type='text']")
let btn = document.querySelector(".submit")
let para = document.querySelector("p")



btn.addEventListener("click", (e) => {
    e.preventDefault() //                it prevent the default behaviour of submit btn

    para.innerHTML =   nameInput.value
    nameInput.value = ""
})

 


//when you are pressing the kay
// nameInput.addEventListener("keypress", (e) => {
//           console.log(e.key)
// })


//when you are downing the key
// nameInput.addEventListener("keydown", (e) => {
//           console.log(e.key)
// })


//when you are releasing the key
// nameInput.addEventListener("keyup", (e) => {
//           console.log("i am release")
// })


 

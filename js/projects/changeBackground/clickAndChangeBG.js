let names = ["sween", "rakesh", "rahul"]                           //you can use every array method for this array
let btns = document.querySelectorAll("button")                     //you will get a nodeList


let nodeToArray = Array.from(btns)                                 //converting from nodelist to an array


console.log(btns)
console.log(nodeToArray)


// btns[0].addEventListener("click", () => { 
//     document.body.style.backgroundColor = btns[0].innerHTML
// })

// btns[1].addEventListener("click", () => { 
//     document.body.style.backgroundColor = btns[1].innerHTML
// })



btns.forEach((btn) => {
      btn.addEventListener("click", (e) =>{ 
          document.body.style.backgroundColor = e.target.innerText
      })

})


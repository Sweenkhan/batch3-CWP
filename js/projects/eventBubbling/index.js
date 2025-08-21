//EVENT BUBBLING :-    It is the default behaviour of every event in js, -------------------------------------------
//                     it means your event will start from child to parent


let parent = document.querySelector(".parent")
let child = document.querySelector(".child")

// parent.addEventListener("click", (e) => {
//        console.log("parent your form has been submitted")
// } )


// child.addEventListener("click", (e) => { 
//       console.log("child your work is done")
// })




//EVENT CAPTURNING :-  When you are passing the third argument (true) to an eventListener ,-------------------------
//                     no it will behave from parent to child

// parent.addEventListener("click", () => {
//        console.log("parent your form has been submitted")
// }, true)


// child.addEventListener("click", (e) => { 
//       console.log("child your work is done")
// })





//STOP PROPAGATION :-  It will stop the behaviour for event bubbling or capturning
parent.addEventListener("click", () => {
       console.log("parent your form has been submitted")
})


child.addEventListener("click", (e) => { 
     e.stopPropagation()  
      console.log("child your work is done")
})


//What is an Event in javaScript?
//An event is an action that happens in the borwser that javascript can respond to.
//example : a user click a button,   a user type in an input field , a web page loads, a user moves the mouse


let btn = document.querySelector("button")


//property events in js. if you have given two same event to a button, last one will get execute only---
btn.onclick = ()=> {
     console.log("hello")
}

// btn.onclick = ()=> {
//      console.log("hii")
// }




//add event listener . you can events add as much as possible .--------------------------
btn.addEventListener("click",  greet)

function greet(){
    alert("welcome to our website")
}



btn.addEventListener("click",  () => {
    console.log("hello roshan lokesh banwar")
    alert("welcome to our website")
})



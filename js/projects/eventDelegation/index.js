//EVENT DELEGATION
//Note:  event delegation is a technique in javascript where a single event listens is attached to a parent
//          element to handle event for all its child elements. it leverages the concept of event bubbling
//          where an event trigred on a child element propgates up the DOM tree to its parent elements.             
//          instead of attaching individual event listeners to each child,a single listener on the parent can efficiently mangage event fo rall of them



let ul = document.querySelector("ul")

ul.addEventListener("click", (e) => {

     if(e.target.tagName === "LI"){
        console.log(e.target.textContent)
     }
})
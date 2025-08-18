//DOCUMENT OBJECT MODEL
// NOTE: The Document Object Model (DOM) in JavaScript is a programming interface for HTML and XML documents.
//  It represents the structure of a document as a logical tree, where each part of the document (elements, attributes, text) is represented as a node object.


//crud 
//Read and access of an elements--------------------READ-----------

console.log(document.getElementsByTagName("h2")[0])
console.log(document.getElementsByClassName("title1")[0])   
console.log(document.getElementById("heading")) 

console.log(document.querySelector("#heading1"))
console.log(document.querySelector(".title1"))
console.log(document.querySelector("p"))                    //you will get first pa tag

console.log(document.querySelectorAll("p")[1])




//upate an element--------------------------------UPDATA---------------------
let heading = document.querySelector("#heading2")

// heading.innerText = "hello sween"                           //you can updata text with innerText
// heading.innerHTML = "Hello Sween <span>Khan</span>"         //you can add html tag also with text
// heading.textContent                                         //you can see hidden text also


heading.style.backgroundColor = "red"
heading.style.color = "white"

heading.classList.add("title-two")
heading.classList.remove("title-two")
heading.classList.replace("title2", "titleTWO")
heading.classList.contains("titleTWO")                            //true or false

document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1683004411999-a05a153c72d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D")
document.querySelector("img").removeAttribute("src")



//delete an element ------------------------------DELETE--------------------------
// heading.innerHTML = ""                     //you can empty the tag 
// heading.remove()                           //you can delete tag also


// document.querySelector(".container").innerHTML = ""     //you can delter the all tags and text from container div



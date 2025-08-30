let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("please fill out the input");
    return;
  }

  ul.style.display = "block";

// creating li and adding innerHTML
  let createLi = document.createElement("li");
  createLi.innerHTML =  input.value + "<span> <button class='deleteBtn'>delete</button>  <button class='doneBtn'>done</button></span></li>";
  createLi.style.backgroundColor = "green"
  createLi.style.color = "white"


  // adding li to dom
  ul.appendChild(createLi);



  // delete btn eventListener
  let deleteBtn = createLi.firstElementChild.firstElementChild;
  deleteBtn.addEventListener("click", (e) => {
     createLi.remove() 
 
   if(ul.firstElementChild === null){
       ul.style.display = "none";
   }

  });



  // done btn eventListener
   let doneBtn = createLi.firstElementChild.lastElementChild;
   doneBtn.addEventListener("click", (e) => {

   createLi.style.opacity =  (createLi.style.opacity) === "0.5" ? "1" : "0.5"
   createLi.style.textDecorationLine =  (createLi.style.textDecorationLine ==="line-through") ? "none" :  "line-through" 
   doneBtn.innerText = ( doneBtn.innerText === "done") ? "undo" : "done"

  });

  // empty the input value
  input.value = "";
});

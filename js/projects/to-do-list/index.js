let btn = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")



btn.addEventListener("click", (e) => {
           e.preventDefault();

         if(input.value.trim() === ""){
            alert("please fill out the input")
            return 
         }  

        let createLi = document.createElement("li")
        createLi.innerHTML =  input.value + "<button class='delete'>delete</button>"

        ul.appendChild(createLi)
        input.value = ""
})
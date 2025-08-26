let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")
let imagesContainer = document.querySelector(".images")
let allImages = document.querySelectorAll("img")
let leftPx = 0                                                            //saving initial value of the left position



nextBtn.addEventListener("click" , () => {

    if(leftPx === 2000){

        imagesContainer.style.left =  "-" + leftPx + "px"

         alert("this was the last image")
    }else {
        leftPx += 500
        imagesContainer.style.left =  "-" + leftPx + "px"
    } 
})



prevBtn.addEventListener("click" , () => {

    if(leftPx === 0){
        alert("this is the first image")
        imagesContainer.style.left =  "-" + leftPx + "px"
    }else {
        leftPx -= 500
        imagesContainer.style.left =  "-" + leftPx + "px"
    }

})


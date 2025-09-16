let formDiv = document.querySelector("form"); 
 
let username = document.querySelector(".username");
let password = document.querySelector(".password");



formDiv.addEventListener("submit", (e)=> {
    e.preventDefault();
 

   let userProfile = localStorage.getItem("user")
   let userData = JSON.parse(userProfile)


   if(userData.username === username.value && userData.password === password.value){
    alert("you have successfully logged in") 
   }else {
    alert("wrong username or password")
   }

  
     
})
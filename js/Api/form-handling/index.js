let submitBtn = document.querySelector("button");
let formDiv = document.querySelector("form");
let allInputs = document.querySelectorAll("input")

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let mobile = document.querySelector(".mobile");
let username = document.querySelector(".username");
let password = document.querySelector(".password");



formDiv.addEventListener("submit", (e) => {
  e.preventDefault();

  if(!name.value || !email.value || !mobile.value || !username.value || !password.value ){
    alert("please fill out the all inputs")
    return
  }

  if(String(mobile.value.length) > 10 || String(mobile.value.length) < 10){
    alert("please enter 10 digit only")
    return
  }

  let studentData = {
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    username: username.value,
    password: password.value,
  };

  fetch("https://67fa4b3b8ee14a5426274c3c.mockapi.io/api/student/students", {
    method: "POST",                                            //request type
    headers: { "content-type": "application/json" },           //infromation reagarding your document(what kind of data sending)
    body: JSON.stringify(studentData),                         // converitng from object to json string
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
     console.log(error)
    })

 

    //emptying all the inputs
   allInputs.forEach((input) => {
          input.value = ""
   })


});

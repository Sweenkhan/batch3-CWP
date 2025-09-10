// API :-> Application programme interface

//In JavaScript, an API (Application Programming Interface) is a set of rules and protocols
//  that allows your code to communicate with other software components. This includes fetching or
//  sending data to a remote server,
//  integrating with a third-party service, or accessing built-in browser features.


//Browsing APIs :-> 
//Third APIs   :->  
//Backend APIs  :->  
 

//Request type of apis:  ->
// Get. when you are fetching data  (default)
// Post. when you are sending data
// Put.  when you are replacing full data
// Patch  when you are replacing one small data.
// Delete when you are deleting the data from server




//----------------------------------task with random user api-----------------------------------------
let btn = document.querySelector("button");

//adding eventlistener to button and fetching data
btn.addEventListener("click", () => {

  fetch("https://randomuser.me/api?results=5")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        console.log(response)
      fetchData(response.results[0]);
    });

});



function fetchData(data) {
     console.log(data)

  let div = document.querySelector(".data");
  div.innerHTML = "";

  let h2 = document.createElement("h2");
  h2.innerHTML = data.name.first + " " + data.name.last;

  let img = document.createElement("img");
  img.setAttribute("src", data.picture.large);

  div.appendChild(img);
  div.appendChild(h2);
}

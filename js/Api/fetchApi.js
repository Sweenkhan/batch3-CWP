// API :-> Application programme interface

//In JavaScript, an API (Application Programming Interface) is a set of rules and protocols
//  that allows your code to communicate with other software components. This includes fetching or
//  sending data to a remote server,
//  integrating with a third-party service, or accessing built-in browser features.

//Browsing APIs :-> built into web browser, network request
//Third APIs   :->  These are external servicec, such as googlemaps javascript APi,
//Backend APIs  :-> These Apis often called REST APIs are created by developers to enable comunnication between client-side application
// and a server

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

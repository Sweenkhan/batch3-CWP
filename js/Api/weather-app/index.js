let inp = document.querySelector("input")
let btn = document.querySelector("button")
let showDataDiv =  document.querySelector(".weather-data")

let apiKey = "1a4e51c7377e8cf939cbc51bb433a57f"


btn.addEventListener("click", () => {
    if(inp.value.trim() === ""){
        alert("please write a city name")
         return
    } 


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${apiKey}`)
    .then((res) => {
        
        return res.json()
    })
    .then((response) => { 

        if(response.cod == "404") {
            showDataDiv.innerHTML = `<p style="color: red"> City not found!</p>`
            inp.value = ""
            return
        }
         
        showDataDiv.innerHTML = ""
        inp.value = ""     //clear input

        console.log(response)
        console.log(Math.round(response.main.temp - 273))

    }).catch((err) => {
         console.log(err.message)
         showDataDiv.innerHTML = `<p style="color: red">Error fetching weather data. </p>`
    })


})



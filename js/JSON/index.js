let profile = {
    name : "sween",
    age: 24,
    married: null
}

let jsonString = JSON.stringify(profile)

console.log( JSON.stringify(profile))         //converting object to json string 

let mobile = 4994949949
console.log(mobile.length)
console.log(JSON.parse(jsonString))           //converting json string to normal data
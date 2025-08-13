// primitve data type----------------------------------note: you will get copy of original data-----------------
let firstName = "sween" 
let lastName = "khan"

let name = firstName                   //  note: you will get copy of original data
name = "lokesh"
// console.log(name, firstName)     




//non primitive data type ------------------------------note: you will get reference of original data----------
let profile = {
    name : "banwar",
    age: 22
}

let profile2 = profile                  //note: you will get reference of original data
profile2.name = "banwar lal"

console.log(profile);
console.log(profile2);
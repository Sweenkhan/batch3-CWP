//creating new object      CREATE
let prfile = {}
let profile = new Object()  

let profile2 = {
    firstName: "sween"
}


//adding new key and value in object   ADDING
profile2.lastName = "khan"
profile2.age = 24


//updating existing value             UPDATE
profile2.age = 25


//deleting property from object        DELETE
delete profile2.age


//access or read the value             READ
console.log(profile2.firstName)        //dot notation 
console.log(profile2["lastName"])      //square notation



//to get all the keys form an object
console.log(Object.keys(profile2))       

//to get all the values from an object
console.log(Object.values(profile2))


//to get all the keys and values in nested array format
console.log(Object.entries(profile2))



for(let key in profile2){ 
   console.log(key + " : " + profile2[key])
}



let data = [ 
    {name : "sween", age : 24},
     {name : "lokesh", age : 26, address: {home: "b-12, 1st avemue", office: "b-12, 2nd avenue"}}, 
     {name : "banwar", age : 25} ]


// console.log(data[1].address.office)
// console.log(data[1].address["office"])


// function revreseName(name){
// }
// revreseName("sween")
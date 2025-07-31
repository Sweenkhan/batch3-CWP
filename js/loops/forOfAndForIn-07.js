let coins = [1, 2, 5, 10 , 20]

let name = "sween khan"


//--------------------------------------------for of loop-----------------------------------------
//key: majorly you will use this loop for defined array. and it will traverse till end value.
//     variable name will give you all the values from the array

for(let value of coins){
    console.log(value, "rupees i have")
}





//---------------------------------------------for in loop------------------------------------------
//key : it will work only for an object, variable name will give you keys from the object
let profile = {
   name: "sween",
   age: 24,
   married: false,
   mobile: 7895885885
}

// console.log(profile.name)          //sween:    you will get the value
// console.log(profile["name"])      //sween:    you will get the value


for(let key in profile){

    console.log(key + " " + profile[key])
}

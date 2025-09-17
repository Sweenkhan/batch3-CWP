let name = {
    firstName: "sween",
    lastName: "khan",

    fullName: function(){
       return this.firstName + " " + this.lastName
    },


    intro: function(city, state){
       return `${this.firstName} ${this.lastName}. from ${city} ${state} `
   } ,
 
}


// console.log(name.intro("hyd", "telangana"))






//CALL:   method. its like borrowing method from other
let name2 = {
    firstName: "lokesh",
    lastName: "kumar"
}
 
console.log(name.fullName.call(name2))                      // using method only
console.log(name.intro.call(name2, "jaipur", "rajsthan"))   // using method with new arguments




//APPLY:  if you want to pass multiple argumetns it should be an array
let name3 = {
    firstName: "banwar",
    lastName: "lal"
}
console.log(name.intro.apply(name3, ["gurgaon", "delhi"]))  




//BIND: mehtod. it will bind your method and later on you can use it whereven you want
let name4 = {
    firstName: "roshan",
    lastName: "kumar"
}

let bindMethod = name.fullName.bind(name4)
console.log(bindMethod())









//-----------------------------------keeping method outside of th object---------------------------
let printFullName = function(){
    console.log(this.firstName, this.lastName)
}

let profile = {
    firstName: "rakesh",
    lastName: "kumar"
}

let profile2 = {
    firstName: "rahul",
    lastName: "sharma"
}

printFullName.call(profile)
printFullName.call(profile2)
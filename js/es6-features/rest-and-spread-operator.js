let profile = {
    name: "lokesh",
    age: "24",
    mobile: 5885858855,
    coursePurchasedName: "full stack developer",
    courseDuration: "5 months"
}


let profile2 = profile                      //it will point to the same data
// profile2.name = "sween"




//--------------------------------------------SPREAD OPERATOR--------------------------------------
//note: it willl extract the data from the array

let profile3 = {...profile}
profile3.name = "banwar"



//note: extracting object data form old object and adding in new object along with some new key value
let profile4 = {...profile, email: "lokesh@gmail.com", address: "b-12, 1st avenue"}      


//----------------------------------------adding two object data in one object with help of spread operator----------------------
let jobProfile= {firstJob:  "junior web developer",secondJoB:  "web developer"}


let fullProfile = {...profile, ...jobProfile}     //combining two object into one new object


// console.log(fullProfile)










//----------------------------------------------REST PARAMETER --------------------------------
//note: ...it will take care the rest of the items

function printNames( teacher, ...students){
  console.log(students)

}


printNames("sween", "lokesh", "banwar", "roshan")
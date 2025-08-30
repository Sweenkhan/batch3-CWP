let profile = {
    name: "lokesh",
    age: "24",
    mobile: 5885858855,
    coursePurchasedName: "full stack developer",
    courseDuration: "5 months"
}

// console.log(profile.coursePurchasedName)
// console.log(profile.courseDuration)


//----------------------------------OBJECT DESTRUCTERING-----------------------------------
// let {courseDuration, name, age, mobile} = profile

// console.log(name)



let {coursePurchasedName: courseName, name, age, mobile, courseDuration } = profile

// console.log(courseName)





//-----------------------------------ARRAY DESTRUCTERING-----------------------------------------
//note: you can give a new name in array. based on index numbering

let frutesName = ["apple", "banana", "orange", "mango", "melon"]
// console.log(frutesName[0])



let [first, second, ,, fifth] = frutesName 

console.log(first, second, fifth)                                      //apple, banana, orange
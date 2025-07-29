//String 
let name = "roshan "
let lastName = 'KUMAR'
let fullName = `rahul,kumar,sharma`




//method of string 

// console.log(name.length)          //count the alphabet in your string 
let stringTrim = name.trim()         //to remove empty space from both side(left and right)


// console.log(stringTrim.toUpperCase())     //to uppercase the string letter
// console.log(stringTrim.toLowerCase())     //ro lowerCase the string letter

// console.log(fullName.charAt(1))          //to find the character at given index number
// console.log(fullName.indexOf("l"))       //to find the index number based on given charachter

// console.log(fullName.substring(6, 11))      //to take the value form a string
//console.log(fullName.slice(6, 11))      //to take the value form a string

// console.log(fullName.replace("kumar", "sharma"))     //to replace some alphabet in string
// console.log(fullName.replaceAll("a", "e"))           //to replace all the given all the character


console.log(fullName.split(","))             //to make an array. and it will split value from the given character

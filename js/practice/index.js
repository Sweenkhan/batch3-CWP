let number = [14, 22, 0, 88, 5000, 5432, 5, 9]
let number2 = [14, 22, -5, 88, 5000, 5532, 5, 9]


// let sorting = numbers.sort((a, b) => b - a)[0]      biggest number
//let sorting = numbers.sort((a, b) => a - b)[0]       smallest number

//Q1. find the biggest and smallest number from given array?--------------------------

function bigAndSmall(numbers){

    let bigNumber = numbers[0]
    let smallNumber = numbers[0]


    for(let i = 0; i < numbers.length; i++){

         if(numbers[i] > bigNumber){
            bigNumber = numbers[i]
         }

         if(numbers[i] < smallNumber){
            smallNumber = numbers[i]
         }
    }

    return   {biggestNumber: bigNumber, samllestNumber: smallNumber}
}


// console.log(bigAndSmall(number))



//Q2. find the word if its palindrom or not?-----------------------------------------
 
// function palindrom(str){ 
//       let reversStr = str.split("").reverse().join("") 
//       return str === reversStr
// }


function palindrom(str){
    let splitArr = str.split("")

    let reverseString = ""

    for(let i = splitArr.length - 1; i >= 0; i--){
        reverseString += splitArr[i]
    }

    return reverseString === str
}

// console.log(palindrom("red"))




//Q3. find the number is even or odd -----------------------------------------------

function evenOrOdd(number){
   if(number % 2 === 0){
      return "even"
   } else {
    return "odd"
   }
}

// console.log(evenOrOdd(4))



//Q4. count the number of vowels in a string.-------------------------------------
function countVowels(str){

let vowels = ["a", "e", "i", "o", "u" ]
let count = 0

for(let i = 0; i < str.length; i++){

    if(vowels.includes(str[i])) {
         count++
    }
}

return count
}

console.log(countVowels("education"))




//Q5. Convert a string to Title Case(first letter capitalized)--------------------------------
let names = ["sween", "lokesh", "banwar", "roshan", "anjali", "ramu", "rahim"]

// function capitalFirstLetter(str){ 
//    return str.slice(0, 1).toUpperCase()  +   str.slice(1)
// }



function capitalFirstLetter(names){
    
    let namesChanged = []

    for(let name of names){
        namesChanged.push( name.substring(0, 1).toUpperCase() + name.substring(1))
    }

    return namesChanged
}


console.log(capitalFirstLetter(names))
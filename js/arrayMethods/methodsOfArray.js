let names = ["sween", "rakesh", "ravi", "ranjit"];

let profiles = [
  { name: "lokesh", Age: 22, mobile: 588585885, score: 99, rollNo: 111 },
  { name: "bhanwar", Age: 21, mobile: 998585885, score: 89, rollNo: 112 },
  { name: "roshan", Age: 24, mobile: 8888585885, score: 79, rollNo: 113 },
];

// console.log(profiles[1].name);

//----------------------------------------------------MAP METHOD------------------------------------------:
//notes : it will give you a new array
//        you will get all the data from this array

let mapResult = profiles.map((profile) => {
  return profile;
});


//-----------------------------------------------------FILTER METHOD---------------------------------------
// note: you will get a new array,
// this method espeacially for filtering data based on your given condition


// let userRollNo = prompt("what is your roll number?")

// let filterData = profiles.filter((profile) => {
//    return profile.rollNo == userRollNo
// })



//------------------------------------------REDUCE METHODE----------------------------------
//NOTE: it will give you a single value in return, which will be sum of your array

let coins = [1, 2, 10, 5, 20, 100, 0, -4,  500, 40, 55, 66];

let reduceData = coins.reduce((acc, curr) => {
  return acc = acc + curr;
});


// let count = 0
// count = count + 1
// count = count + 2
// count = count + 5


// console.log(count)
// console.log(reduceData);
 



//---------------------------------------SORT ARRAY---------------------------
// let sorting = coins.sort((a, b) =>   a - b)           //ascending format  , from small to high

// let sorting2 = coins.sort((a , b) =>   b - a )           //descending format , from high to small

 




// to make an array to a string              .join("")

let name = "shabir"
console.log(name.split("").reverse().join(""))


   
 

// --------------------CLOSURE --------------------
//In javascript a closure is the combination of a function and the lexical envirement within which that fucntion
// was declared. this mean that an  innner function "remember " and can access variable from the outer fucntions's scope.


// function like(){
//   let count = 0
//   count++
//   return count
// }

// console.log(like())    // 1
// console.log(like())    // 1
// console.log(like())    // 1




// CLOSURE FUCNTIONS.
//Note: we can privitaize a variable , and keep safe
function outer(){
   let count = 0;

  return function inner(){
      count ++
      return count
   }

}


let like = outer()

console.log(like())    //1
console.log(like())    //2
console.log(like())    //3
console.log(like())    //4



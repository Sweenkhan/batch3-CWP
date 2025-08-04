let names = ["sween", "rakesh", "ravi", "ranjit"]
let coins = [1, 2, 5, 10, 20]


//notes : it will give you a new array
//  let mapResult  = names.map((name) => {
//    return name+" kumar  "
//  })


let filterData = coins.filter((coin) => {
   return coin >= 5
})
 


console.log(filterData)
 
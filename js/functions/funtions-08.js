//what is functions in javaScript

//A javaScript function is a block of reusable code designed to  perform a specific task.
// functions are fundamental to orfanizing and structering code, promoting reausability and modularity.

//types of funcitons
//A. function declartion, B. function expression, arrow function or anonyms function



//A.---------------------------------------------function declarion------------------------------
// NOTE: it can be hoisted(befor execute)
// return is neccessary

function greet() {
  let firstName = "roshan";
  let lastName = "kumar";

  console.log(firstName, lastName, "welcome to our website");
}

// function execution, call a function, invoked a function
// greet()
// greet()

//a function with two parameters

greet2("sween", "khan");
function greet2(a, b) {
  console.log(a, b, "welcome to our website");
}

// fucntion execute with two arguments
// greet2("sween", "khan")
// greet2("roshan", "kumar")
// greet2("lokesh", "khan")
// greet2("banwar", "kumar")

//B.------------------------------------- function expression-----------------------------------
//note : 1. it can't be hoisted
// 2. better for condiiton scenaria
// 3  . return is neccessary
//4.  work with this keyword


let greet3 = function () {
  console.log("welcome to our website");
};

// greet3()




//B.-------------------------------------ARROW function -----------------------------------
//note: most of the time you will use this funciton for callbacks
//      it can't be hoisted
//      return is not neccessaary


let greet4 = () => {
  console.log("greet4 : welcome to our website");
};

// greet4()

//task:
function add(a, b) {
  console.log(a + b);
}

add(4, 6);

 
 console.log(this)
//------------------------------this keyword--------------------------------
//note: this refer to current context.
//In JavaScript, the this keyword refers to the object that is executing the current code or function.
//  Its value is determined at runtime based on how the function is called,


let profile = {
  name: "sween",
  age: 24,

  greet: function () {
    return this.name;
  },
};


let profile2 = {
  firstName: "lokesh",
  lastName: "kumar",
  age: 22,

  fullName: function () {
    return this.firstName + this.lastName;
  },

  greet: function () {
    return "Hello "+ this.firstName + this.lastName + " welcome to our website";
  },

};

// console.log(profile.name)
// console.log(profile.greet())
console.log(profile2.fullName());
console.log(profile2.greet());
//  console.log(profile)

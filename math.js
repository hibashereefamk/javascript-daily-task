//call(),apply(),blind()

//Question 1: What will this print?

function greet() {
  console.log("Hello " + this.name);
}

let user1= { name: "Hiba"};

greet.call(user1);
//Question 2: What does apply() do differently from call()?

function sum(a, b) {
  return a + b;
}

console.log(sum.apply(null, [5, 10]));
//Question 3: How to bind only the second argument (b = 2)?

function multiply(a, b) {
  return a * b;
}

let setB = multiply.bind(null, undefined, 2);
console.log(setB(4));
// Question 4: What is the output?

let obj = { name: "Ali" };

function intro(greeting) {
  console.log(greeting + ", I'm " + this.name);
}

let sayHi = intro.bind(obj, "Hi");
sayHi();
//Question 5: Fill in the blank to make it print Hiba

let person = {
  name: "Hiba"
};

function printName() {
  console.log(this.name);
}
//Question 6: What's the difference between call and bind?

let user = { name: "Hiba" };
function show() { console.log(this.name); }

show.call(user);  // ?
let boundFunc = show.bind(user);
boundFunc(); 
//Question 7: How to use apply with Math.max and array?

let nums = [4, 7, 2, 8];



console.log(Math.max.apply(null, nums)); // Output: 8

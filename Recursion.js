//Recursion
//q1Fibonacci using Recursion in JavaScript:


function fibonacci(n) {
  if (n === 0) return 0;                                                                   
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

                 // Print Fibonacci numbers from position 1 to 5
for (let i = 0; i <= 5; i++) {
  console.log(fibonacci(i));
}


//q2Recursive Function to Find Sum from 1 to n

function sumToN(n) {
  if (n === 1) return 1;             // Base case: sum of 1 is 1
  return n + sumToN(n - 1);          // Recursive call: n + sum of (n - 1)
}

console.log(sumToN(5)); // Output: 15
//q3Recursive Function to Print 1 to n:

function printOneToN(n, current = 1) {
  if (current > n) return;            // Base case: stop if current > n
  console.log(current);               // Print current number
  printOneToN(n, current + 1);        // Call the function with next number
}

printOneToN(5); // Output: 1 2 3 4 5
// //q4Recursive Function to Find the Sum from 1 to n


function sum(n) {
  if (n === 1) return 1;        // base case: sum of 1 is 1
  return n + sum(n - 1);        // recursive call: n + sum of (n - 1)
}

console.log(sum(5)); // Output: 15
//q5Recursive Countdown Function:

function countdown(n) {
  if (n < 0) return;         // base case: stop when n is less than 0
  console.log(n);            // print current number
  countdown(n - 1);          // recursive call with n - 1
}

countdown(5);
// Recursive Version:

function strreverse(x) {
  if (x === "") return "";                           // base case
  return strreverse(x.slice(1)) + x[0];              // recursive step
}

console.log(strreverse("hello")); // Output: "olleh"

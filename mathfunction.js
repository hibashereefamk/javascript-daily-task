//Problem 1: Area of a Circle (Function Statement)
//area = π × radius²
function circlAarea(r){
  let area=Math.PI*r*r;
  return area;
}
console.log(circlAarea(5));
// Problem 2: Power Function (Function Expression)
function power(b,e){
    
    return Math.pow(b,e);
}
console.log(power(2, 3));
//Problem 3: Max of 3 Numbers
function findmax(...nums){
return Math.max(...nums);

}
console.log(findmax(10, 25, 17)); // Output: 25
// Problem 4: Random Dice Roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice()); 
console.log(rollDice());console.log(rollDice());
console.log(rollDice());
//Call Function Statement:

function  hello(){
  console.log("hellhhjjjjjnbo");

}
hello();
//Custom Rounding Output: 3.14
function customRound(num,digits){
  const factor=Math.pow(10,digits);
  return Math.round(num*factor)/factor;
}
console.log(customRound(3.14159, 2)); // Output: 3.14
//Random OTP Generator
function generateOTP(){
  let arr="";
  for(let i=0;i<=6;i++){
   let value=Math.floor(Math.random() * 6) + 1;
   arr=arr+value;
  }return arr;
}
console.log(generateOTP());



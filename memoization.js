// memoization(fib)
function meomoization(){
     let cache={};
    return function fib(n){
    if(n<=1)return n;
    if(cache[n])return cache[n];
    cache[n]=fib(n-1)+fib(n-2)
    return cache[n];
}}
const memoize=meomoization();
console.log(memoize(5))
// factorial
function factorial(n,memo={}){
    if(n in memo)return memo[ n];
    if(n<=1) return 1;
    memo[n]=n* factorial(n-1,memo)
    return memo[n]

}
console.log(factorial(5))
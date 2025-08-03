//Q2: How does for...in work on an object?
const person={name:"alice",age:25};
for(let key in person){
    console.log(key,person[key]);
}
//Q3: How does for...of work on an array?
const colors=["red","green","blue"];
for(let color of colors){
    console.log(color);
}
//Q4: What happens if you use for...in on an array?
const arr=["a","b","c"];
for(let index in arr){
    console.log(index,arr[index]);
}
//Q6: Use for...of to loop over object values

const man = { name: "Alice", age: 25 };

for (let value of Object.values(man)) {
  console.log(value);
}
function multile(a){
    return function(b){
        return a*b;
    }
}
const multiple=multile(2);
console.log(multiple(4));
//with using arrow ()
const add=a=>b=>a=b;
console.log((5)(10))
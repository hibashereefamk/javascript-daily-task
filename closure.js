//closure q1
function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }return inner;
}
let a=outer();
a();
a();
a();
//q2 
function outer1(message){
return function (name1){
    console.log(message+" "+name1);
};
}
let great=outer1("hello");
great("hiba");

   

//high order function (hof)
function greet(wish){
    return wish(value);
}
function inenglish(value){
    return "hello"+" "+value;

}function inhindi(value){
    return "namesthe"+" "+value;
}
console.log(greet(inhindi,"hiba"));
console.log(greet(inenglish,"hiba"));



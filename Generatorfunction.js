//generator()
function *generator(){
    yield "hello"
    yield "hi"
    yield "good"

}
const greet=generator();
console.log(greet.next());
console.log(greet.next())
console.log(greet.next())
console.log(greet.next())
//Generator with Loop Example
function* countupto(max)
{
    for(let i=0;i<=max;i++){
        yield i;
    }
}
const counter=countupto(3);
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
//q1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person1 = new Person("Hiba", 22);
console.log(person1.greet());
// Q2. Create a Rectangle class with width and height. Add a method area() that returns area.
class recglr{
constructor (height,width){
this.height=height;
this.width=width;
    
}area(){
    return this.height*this.width;
    
}

}
let rec=new recglr(22,44)
console.log(rec.area())
//Create a class Student with name and marks.
//  Add a method isPass() that returns true if marks > 35
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  isPass() {
    return this.marks > 35;
  }
}

const s1 = new Student("Ali", 40);
console.log(s1.isPass()); // true

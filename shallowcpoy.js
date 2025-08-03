//shallow copywith Spread Syntax (...):
//objcet
let orginaobj={name:"alice",address:{street:"main str",city:"anytown"}};
let shallowobj={...orginaobj};
shallowobj.name="hiba";
shallowobj.address.city="manjeri";
console.log(shallowobj)
console.log(orginaobj)
//array
let arr1=[1,2,{id:3}]
let arr2={...arr1};
arr2[0]=10;
arr2[2].id=4;
console.log(arr1);
console.log(arr2)
//shallow with Object.assign():
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original);
shallowCopy .b.c=4;
shallowCopy .a=5;
console.log(shallowCopy );
//shallow with Array.prototype.slice() 
let org=[1,{value:2}];
let shallow=org.slice();
shallow[0]=1;
shallow[1].value=8;
console.log(shallow);

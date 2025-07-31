//deepcopy
let original={
    name:"hiba",
    age:22,
    city:"manjeri",
    person:{name:"muthu",age:"20"}
    
}
let deepcopy=JSON.parse(JSON.stringify(original))
deepcopy.name="fidha"
deepcopy.person.name="fidha"
console.log(deepcopy)
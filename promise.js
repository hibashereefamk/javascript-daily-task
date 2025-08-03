//Q3: Handle a Rejected Promise in the Chain
function step(n){
    return new Promise((resolve,reject)=>{
        if(n>=0){
            resolve(n+2)
        }else{
            reject("number is negative")
        }
    })
}
step(2)
.then(step)
.then(()=>step(-1))
.catch(err=>console.log(err)) 

//Real-World Example — Login + Fetch Profile
function login(username){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`loggin as ${username}` )
        },1000) })
       
    }
    function fetchprofile(){
        return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve("profile hiba js developer")
                },1000)
            })
        }
        
    
 login("hiba")
 .then(mssg=>{
  console.log(mssg)
  return fetchprofile()
 })
 .then(prfl=>{console.log(prfl)})
 //basic promise
 let thenew=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){
            resolve("complete successfully")
        }else{
            reject("something went wrong")
        }
    },1000)
})
thenew
.then((r)=>{console.log(r)})
.catch((err=>{
    console.log(err)
}))
// promise chain
function double(n){
    return Promise.resolve(n*2);
}
function addten(n){
    return Promise.resolve(n+10);
}
double(5)
.then(addten)
.then(r=>console.log(r))
//promise all
let p1= new Promise(res=> setTimeout(()=>res("a") ,1000)) 
let p2=new Promise(res=> setTimeout(()=>res("b"),1000))
let p3=new Promise(res=> setTimeout(()=>res("c"),1000))
let allpromise=Promise.all([p1,p2,p3])
.then((r)=>{console.log(r)})
.catch((err)=>{console.log(err)})
// promise any
let p11=new Promise((res,rej)=>setTimeout(()=>rej("a failed"),100))
let p22=new Promise((res,rej)=>setTimeout(()=>res("bsuccess"),100))
let p33=new Promise((res,rej)=>setTimeout(()=>res("csuccess"),100))
let promiseany=Promise.any([p11,p22,p33])
.then(r=>{console.log(r)})
.catch(err=>{console.log(err)})
//promise race
const fast=new Promise(res=>setTimeout(()=>res("fast won"),100))
const slow=new Promise(res=>setTimeout(()=>res("slow won"),100))
Promise.any([fast,slow])
.then(r=>console.log(r))
//promise allsettled
const pa=new Promise((res,rej)=>rej("failedA"))
const pb=new Promise((res,rej)=>res("success b"))
Promise.allSettled([pa,pb])
.then(r=>console.log(r))
.catch(err=>console.log(err))
//async /await(only resolve)
let person=new Promise(res=>setTimeout(()=>res("hello"),1000))
async function greet() {
    let mssg=await person;
    console.log(mssg) 
    
}
greet()
//async /await(res.rej)
function fetchData() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Failed to load data"), 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

getData();
// my answer(promise settled-async await)
let a1=new Promise((res,rej)=>setTimeout(()=>rej("something wrong"),1000))
let a2=new Promise((res,rej)=>setTimeout(()=>res("success"),1000))
async function greet(){
    try{
   const result= await Promise.allSettled([a1,a2])
    const msg1 = result[0];
  const msg2 = result[1];
    console.log(msg1,msg2);
    }
    catch(err){
        console.log(err);
    }
}
greet();
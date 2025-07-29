// Promise //

// all  :-  Checks all promise is resolved and prints **then**
// allSettled :- Checks whether the promise is fullfiled or unfullfiled and prints **then**
// race :- Checks first promise is resolved or not and prints accordingly
// any :- Check any one of the promise is resolved and runs **then**

function step1(){
    return new Promise((resolve,reject)=>{
    console.log(`step1 started`);
    setTimeout(() =>{
        let st1 = false;
        if(st1){
            // console.log("step1 Completed!!");
            resolve();
        }else{
            // console.log("step1 failed!!
            reject()
        }
    },5000);
})};

function step2(){
    return new Promise((resolve,reject)=>{
    console.log(`step2 started`);
    setTimeout(() =>{
        let st2 = true;
        if(st2){
            // console.log("step2 Completed!!");
            resolve();
        }else{
            // console.log("step2 failed!!")
            reject()
        }
    },5000);
})};

function step3(){
    return new Promise((resolve,reject)=>{
    console.log(`step3 started`);
    setTimeout(() =>{
        let st3 = false;
        if(st3){
            // console.log("step3 Completed!!");
            resolve();
        }else{
            // console.log("step3 failed!!")
            reject()
        }
    },5000);
})};

Promise.all([step1(),step2(),step3()])
.then(()=> console.log("Promise fulfilled"))
.catch(()=> console.log("Promise Failed"));


//---------------------------------------------------------------------------------//
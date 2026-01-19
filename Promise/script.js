console.log("Promises in JavaScript")
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of three states:
//1. Pending: initial state, neither fulfilled nor rejected.
//2. Fulfilled: meaning that the operation completed successfully.
//3. Rejected: meaning that the operation failed.
//Creating a Promise
const myPromise=new Promise((resolve,reject)=>{
    let success=true;    
    if(success){
        resolve("Promise is fulfilled");
    }
    else{
        reject("Promise is rejected");
    }   
});
//Consuming a Promise
myPromise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});

//Chaining Promises
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },1000);
}
);
promise1.then((value)=>{
    console.log("Value from promise1: "+value);
    return value*2;
}).then((value)=>{
    console.log("Value after first then: "+value);
    return value*3;
}).then((value)=>{
    console.log("Value after second then: "+value);
}).catch((error)=>{
    console.log("Error: "+error);
});

//Promise.all       
const promiseA=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise A resolved");
    },2000);        
});
const promiseB=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise B resolved");
    },1000);        
});
Promise.all([promiseA,promiseB]).then((messages)=>{
    console.log("All promises resolved: "); 
    messages.forEach((message)=>{
        console.log(message);
    });
}).catch((error)=>{
    console.log("Error: "+error);
});


//Example

const myPR=new Promise((resolve,reject)=>{
    let c=true;
    if(c){
        resolve("Promise Resolved Successfully");
    }
    else{
        reject("Promise Rejected");
    }
})


//Convert promise to async/await
async function myFunction(){
    try{
        const message=await myPR;
        console.log(message);
    }
    catch(message){
        console.log(message);
    }   

}
myFunction();
//End of Promise/script.js
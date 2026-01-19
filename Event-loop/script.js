console.log("Event Loop and Promises in JavaScript");

//Synchronous code
console.log("Start of Synchronous Code");
for(let i=1;i<=5;i++){
    console.log("Synchronous Loop: "+i);
}
console.log("End of Synchronous Code");

//Asynchronous code using setTimeout
console.log("Start of Asynchronous Code");
setTimeout(()=>{
    console.log("Asynchronous code executed after 2 seconds");
},2000);
console.log("End of Asynchronous Code");

//Event Loop demonstration
console.log("Event Loop Demonstration Start");
setTimeout(()=>{
    console.log("Timeout 1 executed");
},0);

console.log("Between Timeouts");
setTimeout(()=>{
    console.log("Timeout 2 executed");
},0);
console.log("Event Loop Demonstration End");


let name="Mahek";
setTimeout(()=>{
    console.log("Hello, "+name+"! This message is from setTimeout.");
},5000);
//clousers in JavaScript
//A closure is a function that remembers its outer variables and can access them.
//It is created when a function is defined inside another function and the inner function references variables from the outer function.
//Lexical scoping is the mechanism by which closures capture variables from their surrounding scope.
function init(){
    const name="Mahek";
    function displayName(){
        console.log("Hello, "+name);
    }
    displayName();
}
init();

//In this example, displayName is a closure that captures the variable name from its outer function init.
//When init is called, it defines name and displayName, and then calls displayName, which accesses name.

function main(){
    let counter=0;
    function increment(){
        counter++;
        console.log("Counter: "+counter);
    }
    return increment;
}
const counter1=main();

counter1();counter1();counter1();

//In this example, increment is a closure that captures the variable counter from its outer function main.

function adder(num){
    function add(value){
        console.log(value+num);
    }
    return add;
}
const add5=adder(5);
add5(10); //15
add5(20); //25
add5(2);//7

const add10=adder(10);
add10(10);
add10(5);

const myname=document.getElementById("myname");
const btn=document.getElementById("btn");

function makeTextSizer(size){
    function setSize(){
        myname.style.fontSize=size+"px";
    }
    return setSize;
}

const size20=makeTextSizer(20);
const size50=makeTextSizer(50);
const size80=makeTextSizer(80);

btn.addEventListener("click",size20);
// btn.addEventListener("click",size50);
// btn.addEventListener("click",size80);
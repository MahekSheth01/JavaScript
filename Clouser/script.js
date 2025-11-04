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
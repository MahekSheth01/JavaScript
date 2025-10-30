//Functions-->Instructions that perform a specific task

function sayName(name){
    console.log('Hello '+name)
}
sayName('Mahek')
sayName('John')
sayName('Doe')

function add(a,b){
    return a+b
}
const sum=add(5,10)
console.log(sum)

//function with unlimited number of arguments
//...-->spread operator

function addNumbersOld(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}
console.log(addNumbersOld(1,2,3,4,5))

function addNumbers(...numbers){
    let sum=0
    for(let number of numbers){
        sum+=number
    }
    return sum
}
console.log(addNumbers(1,2,3,4,5))
console.log(addNumbers(10,20,30))
// Arrow function
const multiply=(a,b)=>a*b
console.log(multiply(5,10))
// Immediately Invoked Function Expression(IIFE)
(function(){
    console.log("This is an IIFE function")
}
)();
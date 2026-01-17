
//Arrow function-->shorter syntax of function
//1. function keyword is not used
//2. if there is only one parameter then parentheses are not required
//3. if there is only one statement then curly braces are not required
//4. if there is only one statement and it returns a value then return keyword is not required

//1. Syntax

function greet(name){
    return 'Hello '+name
}
console.log(greet('Mahek'))

const greet=()=>{//Arrow function
    console.log('Hello World')
}
greet()

// const add1=(a,b)=>{
//     return a+b
// }
const add1=(a,b)=>a+b//if there is only one statement and it returns a value then return keyword is not required
console.log(add1(5,10))

//2. 'arguments' keyword

// function showArgs(){
//     console.log(arguments)
// }
// showArgs(1,2,3)//arguments keyword is not defined in arrow function

const showArgs=(...args)=>{
    console.log(args)
}
showArgs(1,2,3)
//use spread operator to get the arguments in arrow function

//3. Hoisting

sayHey()//function can be called before its declaration due to hoisting
function sayHey(){
    console.log('Hey')
}

// sayHello()//arrow function cannot be called before its declaration due to hoisting
const sayHello=()=>{
    console.log('Hello')
}
sayHello()

//4. 'this' keyword

const person={
    name:'Mahek',
    myfunction:function(){
        console.log("Name is : "+this.name)
    },
    newfunction:()=>{
        console.log("Name is : "+this)//'this' keyword refers to the global object in arrow function
    }
}
person.myfunction()
person.newfunction()

//In arrow function 'this' keyword refers to the surrounding lexical context
const person1={
    name:'John',
    myfunction:function(){
        const innerFunction=()=>{
            console.log("Name is : "+this.name)
        }
        innerFunction()
    }
}
person1.myfunction()

//`End of Functions/arrow.js
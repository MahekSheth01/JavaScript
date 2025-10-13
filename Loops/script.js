//loops
//for loop-->If you know the number of iterations
//while loop-->If you don't know the number of iterations
//do while loop-->Executes at least once
//for in loop-->iterates over the properties of an object
//for of loop-->iterates over the values of an iterable object like array, string, map, set

//for loop
for(let i=0;i<10;i++){
    console.log(i)
}
//while loop
let j=0
while(j<5){
    console.log(j)
    j++
}
//do while loop
let k=0 
do{
    console.log(k)
    k++
}while(k<5)
//for in loop
const person={
    name:'John',
    age:30,
    city:'New York'
}   
for(let key in person){
    console.log(key,person[key])
}
//for of loop
const colors=['red','green','blue']
for(let color of colors){
    console.log(color)
}

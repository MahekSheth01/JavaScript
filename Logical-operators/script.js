//Logical Operators
//AND operator (&&)--> both conditions should be true
//OR operator (||)--> at least one condition should be true
//NOT operator (!)---> reverses the result, true to false and false to true
const age=20
const gender='male'

if(age>=18 || gender=='female'){
    console.log("You are eligible")
}
else{
    console.log("You are not eligible")
}
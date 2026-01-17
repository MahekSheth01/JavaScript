const users=[
    {name:'Alice',age:25},
    {name:'Bob',age:30},
    {name:'Charlie',age:35},
    {name:'David',age:40}
]
//Map-->creates a new array by performing a function on each array element
const userNames=users.map((user)=>user.name)
console.log(userNames)//['Alice','Bob','Charlie','David']
//Filter-->creates a new array by filtering out elements that do not meet a certain condition
const adults=users.map((user)=>user.age>=30)
console.log(adults)//[{name:'Bob',age:30},{name:'Charlie',age:35},{name:'David',age:40}]
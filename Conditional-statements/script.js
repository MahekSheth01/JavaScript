const age=10
//if else || else if ladder

if (age==18){
    console.log("Yess you can vote")
}
else if(age>60){
    console.log("As you are senior citizen so you can vote")
}
else{
    console.log("You are not eligible to vote")
}

//Ternary operator

let result=age>=18 ? 'yes':'No'
console.log(result)


//Switch case
const opt=0;
switch(opt){
    case 1:
        console.log('One')
        break;
    case 2:
        console.log('Two')
        break;
    case 3:
        console.log('Three')
        break;
    default:
        console.log('Invalid')
}
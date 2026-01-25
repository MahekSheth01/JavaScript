//Write a program to check palindrome number.

const num=121

let temp=num
let sum=0;

while(temp>0){
    let num=temp%10;
    sum=sum*10+num
    temp=Math.floor(temp/10)
}
if(sum===num){
    console.log(num+" is a Palindrome number");
}

//Palindrome string

const n="madam1"

let rev=""

for(let i=n.length-1;i>=0;i--){
    rev+=n[i]
}
if(rev===n){
    console.log(n+" is a Palindrome string");
}
else{
    console.log(n+" is not a Palindrome string");
}


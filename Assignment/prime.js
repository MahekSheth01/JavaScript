const num=12;

let isPrime=true;

for(let i=2;i<=num/2+1;i++){
    if(num%i==0){
        isPrime=false;
        break;
    }
}
if(isPrime){
    console.log(num+" is a prime number");
}
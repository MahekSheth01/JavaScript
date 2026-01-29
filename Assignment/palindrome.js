    let num=101;
    let temp=num;
    let sum=0;

    while(temp>0){
        let digit=temp%10
        sum=sum*10+digit;
        temp=Math.floor(temp/10)
    }

    if(sum===num){
        console.log("Palindrome Number");
    }
    else{
        console.log("Not a Palindrome Number");
    }
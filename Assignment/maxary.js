let ary=[1,2,3,4,5,61,7,8,9,10];

let max=ary[0]

for(let i=1;i<ary.length;i++){
    if(ary[i]>max){
        max=ary[i]
    }
}
console.log("Maximum element is "+max)
//Second largest element
let secondMax=ary[0]

for(let i=0;i<ary.length;i++){
    if(ary[i]>secondMax && ary[i]<max){
        secondMax=ary[i]
    }
}
console.log("Second Maximum element is "+secondMax)
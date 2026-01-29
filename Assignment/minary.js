let arr=[0,2,23456,23,4,5,6];
let min=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log("Minimum element is "+min)

//second min
let secondMin=Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]<secondMin && arr[i]>min){
        secondMin=arr[i]
    }
    
}
console.log("Second Minimum element is "+secondMin)
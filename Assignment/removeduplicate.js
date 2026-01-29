let arr=[2,3,4,2,3,5,6,4,7,8,5];
let uniqueArr=[];

for(let i=0;i<arr.length;i++){  
    if(!uniqueArr.includes(arr[i])){
        uniqueArr.push(arr[i]);
    }
}
console.log("Array after removing duplicates: "+uniqueArr);

[...new Set(arr)];
console.log("Array after removing duplicates using Set: "+[...new Set(arr)]);
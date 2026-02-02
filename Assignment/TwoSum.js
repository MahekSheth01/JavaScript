//Two sum
// let nums = [2, 7, 11, 15];
// let target = 9;
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log([i, j]);
//         }
//     }       
// }
let nuum=[1,2,3,4,5,6]
let target=10;
for(let i=0;i<nuum.length;i++){
    for(let j=i+1;j<nuum.length;j++){
        if(nuum[i]+nuum[j]===target){
            console.log([i,j]);
        }           
}
}
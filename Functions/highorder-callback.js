//Highorder function is a function that takes another function as an argument or returns a function as a result.
//Callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
function add(a,b,cb){
    let res=a+b
    cb(res)
    return ()=>console.log("This is a returned function : "+res)
}
add(2,3,(res)=>{
    console.log("The sum is : "+res)
})
const returnedFunction=add(5,10,()=>{})
returnedFunction()


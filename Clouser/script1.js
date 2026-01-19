function main(){
    let counter=0;
    function increment(){
        counter++;
        console.log("Counter: "+counter);
    }
    return increment;
}
const Count=main();
Count();Count();Count();Count();
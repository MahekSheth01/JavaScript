//Query selector example
//Selectors
//-tag name
//-id #
//-class name .

//tag name selector
const body=document.querySelector("body");
body.style.backgroundColor="lightblue";
// body.innerHTML="<h1>Hello World</h1>";

//id selector
const name=document.querySelector("#username");
name.innerText="John Doe";

//class name selector
const items=document.querySelectorAll(".block");
console.log(items.parentElement);
items.forEach(element => {
    console.log(element.innerHTML);
});
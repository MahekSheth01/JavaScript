console.log("Variables")

//Var --> Global
//Let -->Local 
//Const -->Local + immutable

//DataType varName=value; -->Strongly typed language
//JS  --> Loosely typed language

//Naming Conv.
//fname
//f_name
//FName
//fName (Preff) Camel Casing
//1st char-->a-z A-Z $ _
//Rest char-->a-z A-Z 0-9 $ _
//No space
//No keywords-->var, let , const , if , for , while , do , switch , case , break , function , return etc
//No numbers at the beginning
//Case Sensitive
//Meaningful names
//var
var name="John";
console.log(name);
name="Doe";
console.log(name);
//let
let city="New York";
console.log(city);
city="LA";
console.log(city);
//const
const country="USA";
console.log(country);
// country="UK"; //error
// console.log(country);
//Block Scope



if(true){
    let age=22;
    var fname="Mahekk";
    const pi=3.14;
    console.log(age);
    pi=3;
    console.log(pi);
}
// console.log(age);
console.log(fname);

//Data Types
//Primitive-->string, number, boolean, null, undefined, symbol, bigint
//Non-Primitive-->object, array, function
let str="Hello World"; //string
let num=100; //number
let isActive=true;
let data=null;
let info; //undefined
let sym=Symbol("id");
let bigIntNum=9007199254741991n; //bigint
console.log(typeof str);
console.log(typeof num);
console.log(typeof isActive);
console.log(typeof data);   

//
console.log(typeof info);
console.log(typeof sym);
console.log(typeof bigIntNum);


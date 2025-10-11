//Arrays
//In javascript, an array is a special variable, which can hold more than one value at a time.
//Heterogeneous data types can be stored in an array
//(-1)-->Value does not exist
//Push()-->Add value to the end of the array
//Pop()-->Remove value from the end of the array
//Length-->Number of elements in the array
//IndexOf()-->Returns the index of a value in the array
//Arrays are zero indexed
//Arrays are mutable
//Arrays are dynamic in size
//Arrays can hold duplicate values
//Arrays can hold mixed data types
//Arrays can be nested
//Arrays can be created using the Array() constructor or using the array literal syntax
const students = ["John", "Sara", "Jack","Peter"];
console.log(students);
console.log(students[2]);
console.log(students.length);
students[1] = "Mary";
console.log(students);
students.push("Mahek");
console.log(students.indexOf("Jack"));
students.pop();
console.log(students);

//Higher Order Array Methods
//forEach()-->Executes a provided function once for each array element
//map()-->Creates a new array populated with the results of calling a provided function on every element in the calling array   
students.forEach((val)=>console.log(val));
//ForEach does not return a new array

students.map((val)=>console.log(val));
//Returns new Array

const num=[112,22,13,14,25];
num.forEach((val)=>console.log(val*2));

const newNum=num.map((val)=>val*2);
console.log(newNum);

//Find()-->Returns the value of the first element in the array that satisfies the provided testing function

const f1=num.find((val)=>val===2*2)
console.log(f1);

//FindIndex()-->Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const f2=num.findIndex((val)=>val===2*2)    
console.log(f2);

//Filter()-->Creates a new array with all elements that pass the test implemented by the provided function
const f3=num.filter((val)=>val%2==0)
console.log(f3);

//Includes()-->Determines whether an array includes a certain value among its entries, returning true or false as appropriate
const f4=num.includes(2);
console.log(f4);

//Slice()-->Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const f5=num.slice(1,4);
console.log(f5);

//Splice()-->Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
num.splice(1,4);
console.log(num);

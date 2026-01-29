let str="A"
vcount=0
count=0
str=str.toLowerCase()

if(str=="a" || str=="e" || str=="i" || str=="o" || str=="u"){
    console.log(str+" is a vowel")
    vcount++
}
else{
    console.log(str+" is a consonant")
}
console.log("Vowel count is "+vcount)
console.log("Consonant count is "+count)
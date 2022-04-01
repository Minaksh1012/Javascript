const input=require("readline-sync")
let a=input.question("enter the 1st side")
let b=input.question("enter the 2nd side")
let c=input.question("enter the 3rd side")
if ((a==b)&& (b==c)){
    console.log("Equilateral triangle")
}else if((a==b)||(b==c)||(a==c)){
    console.log("isoscale triangle")
}else{
    console.log("scalene triangle")
}
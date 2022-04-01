const input=require("readline-sync")
let a=input.questionInt("enter the 1st angle")
let b=input.questionInt("enter the 2nd angle")
let c=input.questionInt("enter the third angle")
if ((a+b+c)==180){
    console.log(" TRIANGLE")
}else{
    console.log("NOT TRIANGLE")
}
const input=require("readline-sync")
let num=input.question("enter the number")
if ((num%5==0)&&(num%11==0)){
    console.log(num,"is divisible by 11 and 5")
}
else{
    console.log(num,"is not divisible by 11 and 5")
}
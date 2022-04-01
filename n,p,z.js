const input=require("readline-sync")
let num1=input.question("Enter the number")
// let num2=input.question("Enter the 2nd number")
if (num1>0){
    console.log("number is positive")
}
else if(num1<0){
    console.log("number is negative")

}
else{
    console.log("zero")
}
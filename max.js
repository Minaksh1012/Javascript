// let d=require("readline-sync")
// var number =d.question("enter the number")
const input = require("readline-sync");
let a = input.question("enter the first number: ");
let b = input.question("enter the second number")
if (a>b){
    console.log(a,"is greater than ",b);
}
else{
console.log(b,"is greater than",a);
}
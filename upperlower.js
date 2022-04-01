const input=require("readline-sync")
let a=input.question("enter the name")
// if (a.toUpperCase()==true){
//     console.log(a,"is upper case")
// }
// // else if (a.toLowerCase()==true)
// {
//     console.log(a,"is lower case")
// }
if (a==a.toUpperCase()){
    console.log("upper")
}
else if(a==a.toLowerCase()){
console.log("lower")
}
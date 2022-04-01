const input=require("readline-sync")
// var even=20
var even=input.questionInt("enter the number")
switch (true){
    case (even%2==0):
        console.log("even number")
        break;
    // case (even%2!=0):
    default:
        console.log("odd number")
        break;    
}



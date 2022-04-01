const input=require("readline-sync")
let a=input.questionInt("enter first number")
let b=input.questionInt("enter the second number")
let c=input.questionInt("enter the third number")

if ((a>b)&&(a>c)){
    console.log(a,"is greater than",b,"and",c);
}
else if ((b>a)&&(b>c)){
    console.log(b,"is greater",a,"and",c)
}
else{
    console.log(c,"is greater than",a,"and",b)
}
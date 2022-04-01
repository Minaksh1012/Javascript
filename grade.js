/*Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F*/


const input=require("readline-sync")
let english=input.questionInt("enter the english marks")
let math=input.questionInt("enter the math marks")
let physice=input.questionInt("enter the physics marks")
let Biology=input.questionInt("enter the biology marks")
let hindi=input.questionInt("enter the hindi marks")
var Percentage=(english+math+physice+Biology+hindi)/500*100

if (Percentage>=90){
    console.log(Percentage,"Grade A")
}else if(Percentage>=80){
    console.log(Percentage,"Grade B")
}else if(Percentage>=70){
    console.log(Percentage,"Grade C")
}else if(Percentage>=60){
    console.log(Percentage,"Grade D")
}else if(Percentage>=40){
    console.log(Percentage,"Grade E")
}else{
    console.log(Percentage,"Grade F")
}
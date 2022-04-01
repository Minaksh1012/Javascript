/*Write a python program to input electricity unit charges and calculate total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill*/

const input=require("readline-sync")
let units=input.question("enter the units")
if (units==50){
    console.log("rs",rs=units*0.50,"additional",rs*20/100)
}else if((units>=100)&&(units<=250)){
    console.log("rs",rs=units*0.75,"additional value",rs*20/100)
}else if(units>250){
    console.log("rs",rs=units*1.50,"additional value",rs*20/100)
}


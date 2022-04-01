/*A shop will give a discount of 10% 
if the cost of the purchased 
quantity is more than 1000. 
Ask the user for quantity, 
Suppose, one unit will cost 100. Judge and print total cost for user.*/

const input=require("readline-sync")
let unit=input.question("enter the quantity")
y=unit*100
if(y>=1000){
    console.log("cost price",y)
}
// else{
    // console.log(unit)
// }
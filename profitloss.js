const input=require("readline-sync")
let selling_price=input.question("enter the selling price")
let cost_price=input.question("enter cost price")
profit=cost_price-selling_price
loss=selling_price-cost_price
if (cost_price>selling_price){
    console.log(profit,"profit")
}
else{
    console.log(loss,"loss")
}

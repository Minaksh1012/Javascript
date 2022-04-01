/*Take the age of 3 people by user and determine 
oldest and youngest among them.*/


const input=require("readline-sync")
let user=input.question("Enter the age1:--")
let user2=input.question("enter the age2:--")
let user3=input.question("enter the age3:--")

if ((user>user2)&&(user>user3)){
    console.log("oldest",user,"yougest",user3)
}else if((user2>user)&&(user2>user3)){
    console.log("oldest",user2,"yougest",user)
}else{
    console.log("youlder",user3,"yougest",user3)
}
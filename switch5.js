const input=require("readline-sync")
const day=input.question("enter the day_")
var  time=input.question("enter the time_")
// var day=input.question("enter the day_")
switch (day){
    // switch(true){
case ("monday"):
    switch(time){
        case ("morning"):
            console.log("breakfast time_","poha")
            break;
        case ("evening"):
            console.log("snak time_","soop")
            break;
        case ("night"):
            console.log("lunch time_","veg biryani")
            break;
        // case (day=="tuesday"):
    }
    break;
case ("tuesday"):
    switch(time){
        case("morning"):
            console.log("breakfast time","chilaa")
            break;
        case("evening"):
            console.log("snak time","biscuit")
            break;
        case("night"):
            console.log("lunch time","dal-chavl")
            break;
    }
    break;
case("wednesday"):
    switch(time){
        case("morning"):
            console.log("breakfast time","idali-sambar")
            break;
        case("evening"):
            console.log("snak time","banana")
            break;
        case(night):
            console.log("dinner time","khichadi")        
            break;
    }
    break
case("thrsday"):
    switch(time){
        case("morning"):
            console.log("breakfast time","shabudanaa")
            break;
        case("evening"):
            console.log("snak time","fied rice")
            break;
        case("night"):
            console.log("dinner time ","pulav")        
            break;
    }
    break
case("friday"):
    switch(time){
        case("morning"):
            console.log("breakfast time","vada pav")
            break
        case("evening"):
            console.log("snak time","anaar")   
            break
        case("night"):
            console.log("dinner time","veg biryani")  
            break   
    }
    break
case("saturday"):
    switch(time){
        case("morning"):
            console.log("breakfast time","pav bhaji")
            break;
        case("evening"):
            console.log("snake time","sprout")
            break;
        case("night"):
            console.log("dinner time","puri bhaji") 
            break;       
    
    }
    break;
default:
    console.log("TODAY IS HOLIDAY ,YOU CAN GO OUTSIDE")
}
    
const input=require("readline-sync")
let day=input.question("enter the day__")
let time=input.question("enter the time__")
if (day=="monday"){
    if (time=="breakfast")
        console.log("poha")
    else if (time=="snak")
        console.log("soop")
    else if(time=="lunch")
        console.log("bhindi,chaval,roti")        
}else if(day=="tuesday"){
    if (time=="breakfast")
        console.log("pasta")
    else if (time=="snak")
        console.log("bhel")
    else if(time=="lunch")
        console.log("rice,roti")        
}else if(day=="wednesday"){
    if (time=="breakfast")
        console.log("shabudana")
    else if (time=="snak")
        console.log("biscuit")
    else if(time=="lunch")
        console.log("gobi,roti")        
}else if(day=="thrsday"){
    if (time=="breakfast")
        console.log("poha")
    else if (time=="snak")
        console.log("banana")
    else if(time=="lunch")
        console.log("khichadi")        
}else if(day=="friday"){
    if (time=="breakfast")
        console.log("idali")
    else if (time=="snak")
        console.log("anaar")
    else if(time=="lunch")
        console.log("tura,roti")        
}else if(day=="saturday"){
    if (time=="breakfast")
        console.log("chile")
    else if (time=="snak")
        console.log("vadapav")
    else if(time=="lunch")
        console.log("dal,chaval,roti")        
}else{
    console.log("today is holiday you can go outside")
}


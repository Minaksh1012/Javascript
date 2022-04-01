console.log("***WELCOME TO SBI ATM****")
const input=require("readline-sync")
var pin=input.question("enter the pin")
var saving=100000
if (pin=="1234"){
    console.log("your pin is correct")
    var balance_inquiry=input.question("do you want to check your balance ")
    if(balance_inquiry=="yes"){
        console.log("balance is",saving)
    
        var withdrawal=input.questionInt("enter the withdrawal ammount")
        if(withdrawal>500 && withdrawal<=10000){
            console.log("successfully withdrawal","remaining balance is",saving-withdrawal)
            var saving=saving-withdrawal
            var deposite=input.questionInt("enter the deposite ammont")
            if (deposite){
                console.log("successfully deposite",saving+deposite)
                var receipt=input.question("do you want receipt")
                if (receipt=="yes"){
                    console.log("take a receipt")
                }else{
                    console.log("thanks!!!!")
                }
            }else{
                console.log("no deposite")
            }
        }else{
            console.log("no withdrawal because more than 10,000")

        }

    }else{
        console.log(" thanks for visiting")
    }

}else{
    console.log("pin is invalid")
}
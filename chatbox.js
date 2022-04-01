const input=require("readline-sync")
var chat=input.question("say hello---")
if (chat=="hello"){
    console.log("Hii")
    var chat=input.question("whats your name--")
    if (chat=="minakshi"){
        console.log("nice name")
        var chat=input.question("what is your graduation---")
        if (chat=="i completed my degree in BE"){
            console.log("ohh its great")
            var chat=input.question("what is your hobbie--")
            if (chat=="listening songs"){
                console.log("nice")
                var chat=input.question("what is your aim in life---")
                if (chat=="to be successful software engineer"){
                    console.log("ohh its great")
                    var chat=input.question("who is your ideal person-----")
                    if (chat=="DR.BABASAHEB AMBEDAKAR"){
                        console.log("mine also")
                        var chat=input.question("thanks for giving informatio about you--")
                        if (chat=="you most welcome"){
                            console.log("BYE,nice to meet you")
                        }

                    }
                }
            
                
            }
        }
    }
}
const input=require("readline-sync")
let str=input.question("enter the character")
if ((str>="a" && str<="z")||(str>"A"&&str<="Z")){
    console.log(str,"alphabets")
}
else if((str>0)||(str<0)){
    console.log(str,"digit")

}
else{
    console.log(str,"special character")
}
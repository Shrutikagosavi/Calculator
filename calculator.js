const express = require("express");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}))
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})
app.post("/", (req,res)=>{
   const {num1 , num2 , operation} = req.body;
   console.log(num1,num2,operation)
   switch (operation) {
       case "+":
           let ans= Number(num1)+ Number(num2);
           res.send("The result is : "+ (ans));
           break;
       case "/":
           res.send("The result is : "+(num1/num2));
           break;
       case "-":
           res.send("The result is : "+(num1-num2));
           break;
       case "*":
           res.send("The result is : "+(num1*num2));
           break;
   
       default:
           break;
   }

})
app.listen(3000, ()=>{
    console.log("server started successfully on port 3000!!");
    
}) 
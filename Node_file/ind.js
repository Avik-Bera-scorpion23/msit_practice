const express = require('express')
const app = express();  




 /* app.get('/',(req,res)=>{
    res.end(inp);
   // res.send('<h1>Hello from EX-press JS ....</h1>');
}); */

app.put('/',(req,res)=>{
      
      res.send("Hola..putt");      
                             }); 


app.listen(3000,()=>{console.log("Server running...")})
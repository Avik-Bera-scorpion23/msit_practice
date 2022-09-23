const bp= require("body-parser");

const express=require("express");
const res = require("express/lib/response");
const { dirname } = require("path");

const path= require("path");
const app=express();
//var port= process.env.port || 3000;
//var port=3000;
app.get('/form',(req,res)=>{
    // another way to send file on server ...
    res.sendFile("t1.html", {root:__dirname});
    
    //res.sendFile(__dirname+"/t1.html" );
    let {tf,nf, mf}=req.query;
    console.log(tf+" "+nf+" "+mf);
    //console.log(name+" "+num+" "+mail_id);
    /*console.log(req.query.nf); 
    console.log(req.query.mf); */

});

app.listen(3000 ,()=>{  
      console.log("Server is listening.....");});



const express=require('express');
const app=express();
app.get('/',(res,req)=>{
  res.send("hello");
});
app.listen(6000,()=>{
  console.log("server runing at 6000");
});

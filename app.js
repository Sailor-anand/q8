const express=require('express');
const app=express();
app.get('/',(res,req)=>{
  res.send("hello");
});
app.listen(56,()=>{
  console.log("server runing at 56");
});

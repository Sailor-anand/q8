const express=require('express');
const app=express();
app.get('/',(res,req)=>{
  res.send("hello");
});
app.listen(500,()=>{
  console.log("server runing at 500");
});

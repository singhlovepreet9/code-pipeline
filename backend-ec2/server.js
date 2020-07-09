const express = require("express");
const app = new express();
const cors= require("cors");


app.use(cors());
app.listen(3003,()=>
{
  console.log("Listening on port 3003");
 
}
)

app.get("/dev/hello",(req,res)=>{
  return res.send("Hello From EC2");
})
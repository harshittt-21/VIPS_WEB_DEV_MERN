const express =  require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("get route")
})

app.post("/",(req,res)=>{
    res.send("post route")
})
module.exports = app
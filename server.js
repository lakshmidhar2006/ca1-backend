const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({message:"hi"})
})
app.post('/',(req,res)=>{
    const {Username , Email , Password , DateOfBirth} = req.body
    if(!Username)
        res.status(400).send("Username cannot be empty")
    if(!Email)
        res.status(400).send("Email cannot be empty")
    const password = Password.length
    if(password <8 || password >16){
        res.status(400).send("Password length should be greater than or equal to 16")
    }
   res.status(200).send("success")
   
})
port = 3015
app.listen(port,()=>{
    console.log("server connected successfully")
})
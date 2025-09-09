import express from "express"
import cors from "cors"
import mysql2 from "mysql2"

let app=express()
app.use(express.json())
app.use(cors())

//database 

let db =mysql2.createConnection({
    user:"root",
    database:"Appointments",
    password:"Abdi2002",
    host:"localhost"

})


db.ping((err)=>{
    if(err){
    return    console.log("database not working")
    }

    console.log("database work")
})

app.get("/home",(req,res)=>{
    return res.json({massage:"backend is working"})
})


app.listen(3000,()=>{
    console.log("server is working")
})
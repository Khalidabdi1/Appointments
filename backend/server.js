import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import dotenv from "dotenv"
import jwt from"jsonwebtoken"
import bcrypt from "bcrypt"

let app=express()
app.use(express.json())
app.use(cors())
dotenv.config()

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

app.post("/Signup",(req,res)=>{
    let {UserName,UserEmail,UserPassword,UserGender,UserType}=req.body;
    if(UserType==="Patients"){
    db.query("insert into patients(full_name,email,password_hash,gender)values(?,?,?,?)",[UserName,UserEmail,UserPassword,UserGender],(err,resoult)=>{
        if(err){
            console.log(err)
            return res.json({massage:err})
        }

        return res.json({massage:resoult})


    })

    }else if(UserType==="Doctors"){
          db.query("insert into doctors(full_name,email,password_hash,gender)values(?,?,?,?)",[UserName,UserEmail,UserPassword,UserGender],(err,resoult)=>{
        if(err){
            console.log(err)
            return res.json({massage:err})
        }

        return res.json({massage:resoult})


    })
        

    }

})


app.listen(3000,()=>{
    console.log("server is working")
})
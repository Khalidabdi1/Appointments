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

let Key="test1234"

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


app.get("/login/Patients",(req,res)=>{
    let {Email,Password}=req.query
    console.log(Password)
    console.log("-------\n")
    console.log(Email)
    //login/Doctors
    //login/Patients
    db.query("select * from patients where email = ? AND password_hash = ?",[Email,Password],(err,resoult)=>{
        if(err){
         return res.json({massage:err})
        }
        console.log(resoult)

        if(resoult.length ===0){
            return res.json({massage:"user not found"})
        }

        return res.json({massage:"user found",UserType:"patients",resoult})

    })




})

      


app.get("/login/Doctors",(req,res)=>{
    let {Email,Password}=req.query
    console.log(Password)
    console.log("-------\n")
    console.log(Email)
  
    db.query("select * from Doctors where email = ? AND password_hash = ?",[Email,Password],(err,resoult)=>{
        if(err){
         return res.json({massage:err})
        }
        console.log(resoult)

        if(resoult.length ===0){
            return res.json({massage:"user not found"})

        }

        //  let ver=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImRvQGdtYWkuY29tIiwiUGFzc3dvcmQiOiJkYXdkYSIsImlhdCI6MTc1Nzk2MTY2NCwiZXhwIjoxNzU3OTY4ODY0fQ.wXqXBneVTKfJND6H_SYEt2n6BiqtdtHg3cah8eJsumA",Key,(err,resoult)=>{
        //     if(err){
        //         console.log(err)
        //     }
        //     console.log(resoult)
        // })

        let Token =jwt.sign({Email,Password},Key,{expiresIn:"2h"})

        return res.json({massage:"user found",Token,UserType:"Doctors",resoult})

    })




})


app.listen(3000,()=>{
    console.log("server is working")
})
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Login() {
    let[PatientsInfo,setPatientsInfo]=useState({
        Email:"",
        Password:""
    })

     let[DoctorsInfo,setDoctorsInfo]=useState({
        Email:"",
        Password:""
    })

    

    function Patientsinfo(){
        axios.get(`http://localhost:3000/login/Patients?Email=${PatientsInfo.Email}&Password=${PatientsInfo.Password}`).then((database)=>{
            console.log(database.data)
        })
    }

    function Doctorsinfo(){
         axios.get(`http://localhost:3000/login/Doctors?Email=${DoctorsInfo.Email}&Password=${DoctorsInfo.Password}`).then((database)=>{
            console.log(database.data)
        })
    }

    
    return (
        // if the user is already exit 
        <div className="flex items-center justify-center h-full ">

            <Tabs defaultValue="account" className="w-[90%] md:w-[30%]">
  <TabsList>
    <TabsTrigger value="account">Patients</TabsTrigger>
    <TabsTrigger value="password">Doctors</TabsTrigger>
  </TabsList>

  <TabsContent value="account">
    <Card className="md:w-full">
                <CardHeader>
                    <CardTitle>Login to your Patients account</CardTitle>
                    <CardDescription>Enter your eamil below to login to your account</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent className="space-y-4">
                    <Label>Email </Label>
                    <Input onChange={((e)=>{
                      setPatientsInfo(prev=>({...prev,Email:e.target.value}))
                    })}></Input>

                    <Label>Password</Label>
                    <Input onChange={((e)=>{
                      setPatientsInfo(prev=>({...prev,Password:e.target.value}))
                    })}></Input>
                </CardContent>
                <CardFooter className="flex flex-col">

                    <Button className="w-full" onClick={Patientsinfo}>Login</Button>


                    <p className="mt-3">don't have account?
                        <Link to={"/signup"} className="hover:underline ml-2 cursor-pointer">
                   sign up

                        </Link>

                    </p>

                </CardFooter>
            </Card>
  </TabsContent>

  <TabsContent value="password" className="w-full ">
    <Card className="md:w-full   ">
                <CardHeader>
                    <CardTitle>Login to your Doctors account</CardTitle>
                    <CardDescription>Enter your eamil below to login to your account</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent className="space-y-4">
                    <Label>Email </Label>
                    <Input onChange={((e)=>{
                      setDoctorsInfo(prev=>({...prev,Email:e.target.value}))
                    })}></Input>

                    <Label>Password</Label>
                    <Input onChange={((e)=>{
                      setDoctorsInfo(prev=>({...prev,Password:e.target.value}))
                    })}></Input>
                </CardContent>
                <CardFooter className="flex flex-col">

                    <Button className="w-full" onClick={Doctorsinfo}>Login</Button>


                    <p className="mt-3">don't have account?
                        <Link to={"/signup"} className="hover:underline ml-2 cursor-pointer">
                   sign up

                        </Link>

                    </p>

                </CardFooter>
            </Card>
  </TabsContent>



</Tabs>
            
        </div>
    )
}
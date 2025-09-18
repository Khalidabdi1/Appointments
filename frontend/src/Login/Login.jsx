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
import ShowAlert from "./ShowAlert";
import { useNavigate } from "react-router-dom"

export default function Login() {
    let[PatientsInfo,setPatientsInfo]=useState({
        Email:"",
        Password:""
    })

    let PatientsInfoREGEX=/\w+@\w+[.]\w+/

    let navigate=useNavigate()
    
  

     let[DoctorsInfo,setDoctorsInfo]=useState({
        Email:"",
        Password:""
    })

    let DoctorsInfoREGEX=/\w+@\w+[.]\w+/

    let [alers,setAlert]=useState(false)

    function TrigerAlerts(){

        setAlert(true)

        setTimeout(()=>{
            setAlert(false)
        },3000)

    }



    

    function Patientsinfo(){
        axios.get(`http://localhost:3000/login/Patients?Email=${PatientsInfo.Email}&Password=${PatientsInfo.Password}`).then((database)=>{
            console.log(database.data)

            if(database.data.massage==="user not found"){
                TrigerAlerts()
            }
        }).catch((error)=>{
            console.log(error)
        })
    }

    function Doctorsinfo(){
         axios.get(`http://localhost:3000/login/Doctors?Email=${DoctorsInfo.Email}&Password=${DoctorsInfo.Password}`).then((database)=>{
            console.log(database.data)

           
            if(database.data.massage==="user not found"){
                TrigerAlerts()
            }

            if(database.data.UserType==="Doctors"){
                localStorage.setItem("Token",database.data.Token)
                navigate("/Dashboard/Doctors/Home")

            }

        }).catch((error)=>{
            console.log(error)
        })
    }

    
    return (
        // if the user is already exit 
        <div className="flex items-center justify-center h-full ">

            <Tabs defaultValue="Patients" className="w-[90%] md:w-[30%]">
  <TabsList>
    <TabsTrigger value="Patients" onClick={(()=>{setDoctorsInfo(prev=>({...prev,Email:"",Password:""}))})}>Patients</TabsTrigger>
    <TabsTrigger value="Doctors" onClick={(()=>{setPatientsInfo(prev=>({...prev,Email:"",Password:""}))})}>Doctors</TabsTrigger>
  </TabsList>

  <TabsContent value="Patients">
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

                    <Button className="w-full" onClick={Patientsinfo} disabled={!(PatientsInfoREGEX.test(PatientsInfo.Email)===true && PatientsInfo.Password!=="")}>Login</Button>


                    <p className="mt-3">don't have account?
                        <Link to={"/signup"} className="hover:underline ml-2 cursor-pointer">
                   sign up

                        </Link>

                    </p>

                </CardFooter>
            </Card>
  </TabsContent>

  <TabsContent value="Doctors" className="w-full ">
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

                    <Button className="w-full" onClick={Doctorsinfo} disabled={!(DoctorsInfoREGEX.test(DoctorsInfo.Email) && DoctorsInfo.Password!=="")} >Login</Button>


                    <p className="mt-3">don't have account?
                        <Link to={"/signup"} className="hover:underline ml-2 cursor-pointer">
                   sign up

                        </Link>

                    </p>

                </CardFooter>
            </Card>
  </TabsContent>



</Tabs>

{alers===true && <ShowAlert title={"Error !"}  text={"Incorrect password or email"} />}
            
        </div>
    )
}
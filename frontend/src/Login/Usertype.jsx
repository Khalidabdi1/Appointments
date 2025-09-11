import { Link } from "react-router-dom"
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
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios"
export default function Usertype() {

    let navigate=useNavigate()
    let [userType,setUserType]=useState({
        Type:"",
        checkedPatients:false,
        checkedDoctors:false
    })

    function handleType(){

        sessionStorage.setItem("Type",userType.Type)
        Todatabase()
navigate("/LastLogin")

    }

    let inputCheck =true
    if(userType.Type!=="" && (userType.checkedDoctors===true || userType.checkedPatients===true)){
        inputCheck=false
    }


    function Todatabase(){
    let Email=sessionStorage.getItem("Email")
    let Password =sessionStorage.getItem("Password")
    let Name =sessionStorage.getItem("Name")
    let Gender =sessionStorage.getItem("Gender")
    let Type=sessionStorage.getItem("Type")
    
    axios.post("http://localhost:3000/Signup",{
        UserName:Name,
        UserEmail:Email,
        UserPassword:Password,
        UserGender:Gender,
        UserType:Type
    }).then((database)=>{
        console.log(database.data)
    })
    
    
    }
    return (

        <div className="flex items-center justify-center h-full ">
            <Card className="md:w-[30%]">
                <CardHeader>
                    <CardTitle>Sign up </CardTitle>
                    <CardDescription>Why do you want to use this site?</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent className="space-y-4">
                    
                    {/** patients */}
                    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                        <Checkbox
                            id="toggle-2"
                            checked={userType.checkedPatients}
                            onCheckedChange={((e)=>{
                                if(e===true){
                                    setUserType(prev=>({...prev,Type:"Patients"}))
                                    setUserType(prev=>({...prev,checkedDoctors:false,checkedPatients:true}))
                                }else{
                                    setUserType(prev=>({...prev,checkedPatients:false}))
                                }
                            })}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                Patients
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Want to track your reservations and book appointments
                            </p>
                        </div>
                    </Label>
                    {/** ====end patients==== */}

                       {/** doctors */}
                    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                        <Checkbox
                            id="toggle-2"
                            checked={userType.checkedDoctors}
                            onCheckedChange={((e)=>{
                                 if(e===true){
                                    setUserType(prev=>({...prev,Type:"Doctors"}))
                                    setUserType(prev=>({...prev,checkedDoctors:true,checkedPatients:false}))
                                }else{
                                    setUserType(prev=>({...prev,checkedDoctors:false}))
                                }

                            })}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                Doctors
                            </p>
                            <p className="text-muted-foreground text-sm">
                              Want to know patient appointments
                            </p>
                        </div>
                    </Label>
                    {/** ====end doctors==== */}



                </CardContent>
                <CardFooter className="flex flex-col">

                    <Button className="w-full" type={"submit"} onClick={handleType} disabled={inputCheck}>Next </Button>

                    <p className="mt-3">have account?
                        <Link className="hover:underline ml-2 cursor-pointer" to={"/"}>
                            Login
                        </Link>
                    </p>

                </CardFooter>
            </Card>
        </div>
    )
}
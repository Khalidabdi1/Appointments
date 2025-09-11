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

export default function Signup(){
    let Navigate=useNavigate()

    let [userInfo,setUserInfo]=useState({
        Email:"",
        password:""
    })

    function handleinput(){

        //validtion 
        // let valid=/\w+@\w+/
        // let Email="khalid@gmail.com"
        
        // console.log(valid.test(Email))




      sessionStorage.setItem("Email",userInfo.Email)
      sessionStorage.setItem("Password",userInfo.password)


    //router

    Navigate("/Detalis")
    }
let regex=/\w+@\w+[.]\w+/
    let EmailValidtion =regex.test(userInfo.Email)

    let check=true
    if(userInfo.Email !=="" && userInfo.password !=="" &&EmailValidtion===true){

        check=false
    }

    return(
               <div className="flex items-center justify-center h-full ">
                    <Card className="md:w-[30%]"> 
                        <CardHeader>
                            <CardTitle>Sign up </CardTitle>
                            <CardDescription>Enter your eamil below to create your account</CardDescription>
                            {/* <CardAction>Card Action</CardAction> */}
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Label>Email </Label>
                            <Input  required onChange={((e)=>{
                                setUserInfo(prev=>({...prev,Email:e.target.value}))
                            })}></Input>
        
                            <Label>Password</Label>
                            <Input  required onChange={((e)=>{
                                setUserInfo(prev=>({...prev,password:e.target.value}))
                            })}></Input>
                        </CardContent>
                        <CardFooter className="flex flex-col">
        
                            <Button className="w-full" onClick={handleinput} disabled={check} type={"submit"}>Next </Button>
                           
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
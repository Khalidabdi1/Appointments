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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Detalis() {
    let navigate=useNavigate()

    let[userinfo,setUserinfo]=useState({
        name:"",
        Gender:""
    })

    let check=true
    if(userinfo.name !=="" && userinfo.Gender !==""){
        check=false
    }

    function handleinfo(){
        sessionStorage.setItem("Name",userinfo.name)
        sessionStorage.setItem("Gender",userinfo.Gender)

        navigate('/Usertype')
    }

    return (
        <div className="flex items-center justify-center h-full ">
            <Card className="md:w-[30%]">
                <CardHeader>
                    <CardTitle>Sign up </CardTitle>
                    <CardDescription>Tell us more about yourself</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent className="space-y-4">
                    <Label>Name </Label>
                    <Input required  onChange={((e)=>{
                        setUserinfo(prev=>({...prev,name:e.target.value}))
                    })}></Input>

                    <Label>Gender</Label>

                    <Select onValueChange={((e)=>{
                        console.log(typeof e)
                       setUserinfo(prev=>({...prev,Gender:e}))
                    })}>

                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="female">female</SelectItem>
                        </SelectContent>

                    </Select>
                </CardContent>
                <CardFooter className="flex flex-col">

                    <Button className="w-full" type={"submit"} disabled={check} onClick={handleinfo}>Next </Button>

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
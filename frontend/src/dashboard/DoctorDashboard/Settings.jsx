import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Calendar25 } from "./DateTime"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Settings() {

    let [info, setInfo] = useState({
        id:"",
        full_name: "",
        bio:"",
        email:"",
        gender:"",
        password_hash:"",
        phone:"",
        specialization:"",
        work_hours_end:"",
        work_hours_start:"",
        doctor_id:""
        
    })

    function HnadleTime(time) {
        console.log(time)
        setInfo(prev=>({...prev,work_hours_start:time.form}))
        setInfo(prev=>({...prev,work_hours_start:time.to}))

    }

    function getDatabase() {
        let Token = localStorage.getItem("Token")
        axios.get(`http://localhost:3000/Dashboard/Doctors/Settings?Token=${Token}`).then((database) => {
            console.log(database.data.massage[0])
            {/**  */ }

            // let CheckNull=[database.data.massage[0]]
            // CheckNull.filter((e,i)=>{
            //     return !(e)
            // })

            for(let key in database.data.massage[0] ){
                if(database.data.massage[0][key]===null){
                    // console.log(database.data.massage[0][key])

                }else{
                //    console.log(key)
                   setInfo(prev=>({...prev,[key]:database.data.massage[0][key]}))
                //    console.log(database.data.massage[0][key])

                }
            }



        })
    }

    function handleSave(){
        axios.post("http://localhost:3000/Dashboard/Doctors/Settings/Save",info,{
            headers:{
            "Content-Type":"application/json"

            }
        }).then((database)=>{
            console.log(database.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getDatabase()
    }, [])


    return (
        <div className="space-y-4 m-2 w-screen h-screen">
            <div className=" flex justify-start">
                <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                    Settings
                </h1>
            </div>


            <ScrollArea className="space-y-3  w-[80%] md:w-[30%] h-[90vh] p-2">

                <div className="space-y-3 p-2 w-[100%] md:w-[100%]   rounded  h-screen  ">
                    {/** specialization phone  bio work_hours password_hash gender */}

                    <Label htmlFor={"name"} >Name</Label>

                    <Input type="text" placeholder={info.full_name} id="name" />

                    <Label htmlFor={"email"}>Email</Label>

                    <Input type="email" placeholder={info.email}  id="email" />

                    <Label htmlFor={"Password"}>Password</Label>

                    <Input type="text" placeholder={info.password_hash} id="Password" />


                    <Label htmlFor={"Phone"}>Phone</Label>

                    <Input type="text" placeholder={info.phone} id="Phone" />

                    <Label htmlFor={"Bio"}>Bio</Label>

                    <Textarea placeholder={info.bio} id="Bio" className="resize-none w-full" onChange={((e)=>{
                       setInfo(prev=>({...prev,bio:e.target.value}))
                    })} />

                    {/** gender */}


                    <Label htmlFor={"gender"}>Gender</Label>
                    {/** todo:defaultValue attributed when data come form database */}
                    <Select id="gender" defaultValue={info.gender} >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="female">female</SelectItem>
                        </SelectContent>
                    </Select>


                    <Calendar25 Hnadle={HnadleTime} start={info.work_hours_start} end={info.work_hours_end}/>
                    {/** Edit  */}
                    <div className="space-x-3">
                        <Button variant="destructive">Edit</Button>
                        <Button onClick={handleSave}>save</Button>

                    </div>


                    {/** ===== Edit=====  */}

                </div>
            </ScrollArea>


        </div>
    )

}
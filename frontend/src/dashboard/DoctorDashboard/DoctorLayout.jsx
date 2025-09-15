import { Link, Routes, Route, Outlet } from "react-router-dom"
import { House } from 'lucide-react';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartBarBig } from 'lucide-react';
import { Cog } from 'lucide-react';
import { Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { Navigate } from "react-router-dom";

import Analysis from "./Analysis";
import Home from "./Home";
import Massage from "./Massage";
import Settings from "./Settings";
import { useState } from "react";

export default function DoctorLayout() {
    // let navigate = useNavigate()

    let [ page, setPage ] = useState("Home")
    return (
        <div className="h-full flex overflow-hidden ">

            {/** sidebar */}
            <div className="">
                <Card className={"h-full w-13 flex items-center justify-start rounded-none  p-2"}>
                    {/* <CardHeader>
                        {/* <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction> */}
                    {/* </CardHeader> */}
                    <CardContent className={" flex flex-col justify-between h-full"}>

                        <div className={"space-y-4 flex flex-col"}>
                            <Link to="Home">
                                <Button size="icon" variant={page==="Home"?"default":"ghost"} onClick={(()=>{setPage("Home")})}  >
                                    <House />

                                </Button>
                            </Link>

                            <Link to="Analysis">
                                <Button variant={page==="Analysis"?"default":"ghost"}  size="icon" onClick={(()=>{setPage("Analysis")})}>
                                    <ChartBarBig />

                                </Button>
                            </Link>


                            <Link to="Massage">
                                <Button  variant={page==="Massage"?"default":"ghost"}  size="icon" onClick={(()=>{setPage("Massage")})}>
                                    <Send />
                                </Button>
                            </Link>

                        </div>



                        <div className={"space-y-4 flex justify-center items-center flex-col"}>
                            <Link to={"Settings"}>
                                <Button variant={page==="Settings"?"default":"ghost"}  size="icon" onClick={(()=>{setPage("Settings")})}>
                                    <Cog />
                                </Button>
                            </Link>


                            <Avatar>
                                <AvatarImage src="" alt={"kk"} />
                                <AvatarFallback>kk</AvatarFallback>
                            </Avatar>

                        </div>








                    </CardContent>
                    {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
                </Card>
            </div>
            {/** ======sidebar======= */}

            {/** items change here */}
            <div>
                <Outlet />

            </div>
            {/** items change here */}

        </div>
    )
}
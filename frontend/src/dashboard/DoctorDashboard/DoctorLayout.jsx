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
import { Menu } from 'lucide-react';


import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


import { Navigate } from "react-router-dom";

import Analysis from "./Analysis";
import Home from "./Home";
import Massage from "./Massage";
import Settings from "./Settings";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DoctorLayout() {
    let navigate = useNavigate()

    function verify() {
        let Token = localStorage.getItem("Token")
        // /Dashboard/Doctors

        // maybe need some fix here
        axios.get(`http://localhost:3000/Dashboard/Doctors?Token=${Token}`).then((database) => {
            console.log(database.data)
            if (database.data.massage === "No Token" || database.data.massage === "Token Expired" || database.data.massage === "invalid Token") {
                navigate("/")
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        verify()
    }, [])

    let [page, setPage] = useState("Home")
    return (
        <div className="h-full flex overflow-hidden ">

            {/** if is small screen */}
            <div className="md:hidden block m-2">
                <Drawer>
                    <DrawerTrigger>
                          <Menu />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle> */}
                            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                        </DrawerHeader>
                        <DrawerFooter>
                            {/* <Button>Submit</Button> */}
                            <DrawerClose className="flex flex-col">
                                {/* <Button variant="outline">Cancel</Button> */}

                                <Link to="Home">
                                    <Button variant="link" >
                                     Home

                                    </Button>
                                </Link>


                                <Link to="Analysis">
                                    <Button variant="link" >
                                     Analysis

                                    </Button>
                                </Link>



                                <Link to="Massage">
                                    <Button variant="link" >
                                     Massage

                                    </Button>
                                </Link>



                                <Link to="Settings">
                                    <Button variant="link" >
                                     Settings

                                    </Button>
                                </Link>


                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>

            {/** sidebar if it's big screen */}

            <div className="hidden md:block">
                <Card className={"h-full w-13 flex items-center justify-start rounded-none  p-2"}>
                    {/* <CardHeader>
                        {/* <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction> */}
                    {/* </CardHeader> */}
                    <CardContent className={" flex flex-col justify-between h-full"}>

                        <div className={"space-y-4 flex flex-col"}>
                            <Link to="Home">
                                <Button size="icon" variant={page === "Home" ? "default" : "ghost"} onClick={(() => { setPage("Home") })}  >
                                    <House />

                                </Button>
                            </Link>

                            <Link to="Analysis">
                                <Button variant={page === "Analysis" ? "default" : "ghost"} size="icon" onClick={(() => { setPage("Analysis") })}>
                                    <ChartBarBig />

                                </Button>
                            </Link>


                            <Link to="Massage">
                                <Button variant={page === "Massage" ? "default" : "ghost"} size="icon" onClick={(() => { setPage("Massage") })}>
                                    <Send />
                                </Button>
                            </Link>

                        </div>



                        <div className={"space-y-4 flex justify-center items-center flex-col"}>
                            <Link to={"Settings"}>
                                <Button variant={page === "Settings" ? "default" : "ghost"} size="icon" onClick={(() => { setPage("Settings") })}>
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
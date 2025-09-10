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

export default function Signup(){


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
                            <Input></Input>
        
                            <Label>Password</Label>
                            <Input></Input>
                        </CardContent>
                        <CardFooter className="flex flex-col">
        
                            <Button className="w-full">Sign up </Button>
                           
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
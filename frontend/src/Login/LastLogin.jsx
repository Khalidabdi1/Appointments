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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export default function LastLogin(){




    return(
          <div className="flex items-center justify-center h-full ">
                    <Card className="md:w-[30%]"> 
                        <CardHeader>
                            <CardTitle>Sign up </CardTitle>
                            <CardDescription> Congratulations, your account has been created.</CardDescription>
                            {/* <CardAction>Card Action</CardAction> */}
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p>You can now go to the registration page to log in.</p>
                        </CardContent>
                        <CardFooter className="flex flex-col">
        
        <Link to={"/"} className="w-full">
                                    <Button className="w-full"  type={"submit"}>Next </Button>

        </Link>
{/*                            
                            <p className="mt-3">have account?
                                <Link className="hover:underline ml-2 cursor-pointer" to={"/"}>
                                Login
                                </Link>
                              </p> */}
        
                        </CardFooter>
                    </Card>
               </div>
    )
}
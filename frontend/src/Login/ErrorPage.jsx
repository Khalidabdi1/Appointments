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
import { Link } from "react-router-dom"



export default function ErrorPage(){


    return(
        
        
        
            <div className="flex items-center justify-center h-full ">
            <Card className="md:w-[30%] w-[90%]">
                <CardHeader>
                    <CardTitle>Something went wrong</CardTitle>
                    <CardDescription>Back to page Login</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent className="space-y-4">
                  
                </CardContent>
                <CardFooter className="flex flex-col">

                    <Link to={"/"} className="w-full">
                                        <Button className="w-full">Login</Button>

                    </Link>


                    {/* <p className="mt-3">don't have account?
                        <Link to={"/signup"} className="hover:underline ml-2 cursor-pointer">
                   sign up

                        </Link>

                    </p> */}

                </CardFooter>
            </Card>
        </div>
        
        
    )
}
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



export default function Login() {
    return (
        // if the user is already exit 
        <div className="flex items-center justify-center h-full ">
            <Card className="md:w-[30%]">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your eamil below to login to your account</CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent className="space-y-4">
                    <Label>Email </Label>
                    <Input></Input>

                    <Label>Password</Label>
                    <Input></Input>
                </CardContent>
                <CardFooter className="flex flex-col">

                    <Button className="w-full">Login</Button>


                    <p className="mt-3">don't have account?
                        <Link to={"/signup"} className="hover:underline ml-2 cursor-pointer">
                   sign up

                        </Link>

                    </p>

                </CardFooter>
            </Card>
        </div>
    )
}
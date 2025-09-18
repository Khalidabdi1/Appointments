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

export default function Settings() {

    function HnadleTime(time){
     console.log(time)
    }


    return (
        <div className="space-y-4 m-2 w-screen h-screen">
            <div className=" flex justify-start">
                <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                    Settings
                </h1>
            </div>


            <div className="space-y-3 p-2 w-[80%] md:w-[30%]    ">
                {/** specialization phone  bio work_hours password_hash gender */}
                {/* <ScrollArea className="space-y-3 p-2 w-[80%] md:w-full "> */}

                <Label htmlFor={"name"}>Name</Label>

                <Input type="text" placeholder="Name" id="name" />

                <Label htmlFor={"email"}>Email</Label>

                <Input type="email" placeholder="Email" id="email" />

                <Label htmlFor={"Password"}>Password</Label>

                <Input type="Password" placeholder="Password" id="Password" />


                <Label htmlFor={"Phone"}>Phone</Label>

                <Input type="text" placeholder="Phone" id="Phone" />

                <Label htmlFor={"Bio"}>Bio</Label>

                <Textarea placeholder="Type your bio." id="Bio" className="resize-none w-full" />

                {/** gender */}


                <Label htmlFor={"gender"}>Gender</Label>
                {/** todo:defaultValue attributed when data come form database */}
                <Select id="gender">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="female">female</SelectItem>
                    </SelectContent>
                </Select>


                <Calendar25 Hnadle={HnadleTime}/>
{/** Edit  */}
                  <Button>Button</Button>

                  {/** ===== Edit=====  */}

                  {/* </ScrollArea> */}
            </div>

        </div>
    )

}
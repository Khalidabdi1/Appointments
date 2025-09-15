import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CircleX } from 'lucide-react';


export default function ShowAlert({title,text}) {
    return (
        <div>
            <Alert variant="destructive" className={"absolute md:w-100 bottom-0 left-0 w-[70%] m-2"}>
                <CircleX />
                <AlertTitle> {title}</AlertTitle>
                <AlertDescription>
                     {text}
                     
                </AlertDescription>
            </Alert>
        </div>
    )
}
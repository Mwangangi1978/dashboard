"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar = ()=>{
    return(
        <div className="flex">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col">
                <div className="mb-1 text-lg font-semibold">Mima Smith</div>
                <div className="text-gray-600 font-light">Designer</div>
            </div>
        </div>
    )
}

export default Avatar;
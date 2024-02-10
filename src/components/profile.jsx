"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Profile = ()=>{
    return(
        <div className="flex flex-row">
            <div className="w-12 h-12 rounded-lg">
                <img src="https://github.com/shadcn.png" className="rounded-lg"/>     
            </div>
            <div className="flex flex-col ml-2">
                <div className="text-base font-semibold mb-0 text-white">Mima Smith</div>
                <div className="text-gray-400 font-normal text-xs">Designer</div>
            </div>
        </div>
    )
}

export default Profile;
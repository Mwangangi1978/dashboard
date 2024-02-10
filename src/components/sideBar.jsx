"use client"
import { IoChatbubblesOutline} from "react-icons/io5";
import { SlMusicToneAlt } from "react-icons/sl";
import { CiVideoOn } from "react-icons/ci";
import Profile from "./profile";
import Upgrade from "./upgrade";

const SideBar = ()=>{
    return(
        <div class="flex flex-col rounded-b-md" style={{ backgroundImage: "url('/Birble Dash Images/sidebar.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="mx-auto">
                <div className="mb-4 pl-10">
                    <img src="/Birble Dash Images/logo.png" alt="Sidebar Image" style={{width: "120px"}} />
                </div>
                <div className="mb-4 text-base font-semibold text-white pl-5">Dashboard</div>
                <div className="mb-4 pl-5">
                    <div className=" mb-2 text-base font-semibold text-white ">
                        AI Generator
                    </div>
                    {/* Dropdown items */}
                    <div className="pl-2 ">
                        <div className="text-gray-400 mb-2 font-normal text-sm flex items-center"><div className="mr-2"><IoChatbubblesOutline /></div>Conversation <span className="bg-teal-200 text-black text-xs px-2  rounded-lg ml-2">GPT-4</span></div>
                        <div className="text-gray-400 mb-2 font-normal text-sm">Image creation</div>
                        <div className="text-gray-400 mb-2 font-normal text-sm flex items-center"><span className="mr-2"><SlMusicToneAlt/></span>Music creation</div>
                        <div className="text-gray-400 mb-2 font-normal text-sm flex items-center"><span className="mr-2"><CiVideoOn /></span>Video Generation</div>
                        <div className="text-gray-400 mb-2 font-normal text-sm">Code Generation</div>
                        <div className="text-gray-400 mb-2 font-normal text-sm">Text to voice</div>
                    </div>
                </div>
                <div className="mb-4 text-base font-semibold text-white pl-5">Collections</div>
                <div className="mb-16 text-base font-semibold text-white pl-5">Token Sale</div>
                <div className="mb-8 pl-2">
                    <Upgrade/>
                </div>
                <div className="mb-4 text-base font-semibold text-white pl-5">Profile & Settings</div>
                <div className="mb-4 text-base font-semibold text-white pl-5">FAQ & Help</div>
                <div className="mb-8 text-base font-semibold text-white pl-5">Logout</div>
                <div className="mb-8 pl-5">
                    <Profile/>
                </div>
            </div>

        </div>
    )

}

export default SideBar;
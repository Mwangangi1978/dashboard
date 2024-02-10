"use client"

const SideBar = ()=>{
    return(
        <div class="flex flex-col mx-1">
            <div className="mb-4">
                <img src="/your-image.jpg" alt="Sidebar Image" className="w-full rounded-full" />
            </div>
            <div className="mb-4 text-lg font-semibold">Dashboard</div>
            <div className="mb-4">
                <div className=" mb-2 text-lg font-semibold">
                    AI Generator
                </div>
                {/* Dropdown items */}
                <div className="pl-4">
                    <div className="text-gray-600 mb-2">Conversation <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-md ml-2">GPT-4</span></div>
                    <div className="text-gray-600 mb-2">Image creation</div>
                    <div className="text-gray-600 mb-2">Music creation</div>
                    <div className="text-gray-600 mb-2">Video Generation</div>
                    <div className="text-gray-600 mb-2">Code Generation</div>
                    <div className="text-gray-600 mb-2">Text to voice</div>
                </div>
            </div>
            <div className="mb-4 text-lg font-semibold">Collections</div>
            <div className="mb-8 text-lg font-semibold">Token Sale</div>
            <div className="mb-8">
                <img src="/your-image.jpg" alt="Sidebar Image" className="w-full rounded-full" />
            </div>
            <div className="mb-4 text-lg font-semibold">Profile & Settings</div>
            <div className="mb-4 text-lg font-semibold">FAQ & Help</div>
            <div className="mb-8 text-lg font-semibold">Logout</div>
            <div className="mb-8">
                
            </div>

        </div>
    )

}

export default SideBar;
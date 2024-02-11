"use client"
import Data from "./data";
import { MdArrowOutward } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";
import { CgSortAz } from "react-icons/cg";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { LuBellDot } from "react-icons/lu";
import { PiMoonStarsFill } from "react-icons/pi";
import { BsGlobe } from "react-icons/bs";
import { useState } from "react";

const Collection = ()=>{
    const [activeItem, setActiveItem] = useState('All Media');

    const handleClick = (item) => {
      setActiveItem(item);
    };

    const filteredData = activeItem === 'All Media' ? Data : Data.filter(item => item.type === activeItem);
    return(
        <div style={{width: "100%"}} className="relative">
            <div className="flex top-0 mx-auto absolute -top-20 right-0 items-center">
                <div className="bg-gray-800 text-gray-200 rounded-md font-bold text-xs p-1"><BsGlobe /></div>
                <div className="bg-gray-800 rounded-md text-gray-200 text-xs font-bold ml-5 p-1"><PiMoonStarsFill /></div>
                <div className=" text-gray-700 text-md font-bold ml-5"><LuBellDot /></div>
            </div>
            <div style={{width: "100%", marginTop: "100px", backdropFilter: "blur(90px)"}} className="rounded-xl bg-gray-800 bg-opacity-50  relative" >
                <img src="/Birble Dash Images/ring.png " className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2" style={{ width: '200px', height: 'auto' }}/>
                <div style={{paddingTop:"50px", paddingLeft: "55px " , paddingBottom: "20px"}}>
                    <div className="text-4xl text-white font-semibold">Media Collections</div>
                    <div className="text-base text-gray-400 font-light">View and edit your stored NFT and media collection here</div>
                </div>
                <div className="mx-auto rounded-2xl " style={{overflow: "hidden", width: "90%", marginBottom: "20px"}}>
                    <div className="relative m-0 p-0">
                        <div className="overlays absolute"></div>
                        <img src="/Birble Dash Images/collection.jpg" style={{width: "100%", height: "220px"}} className="rounded-lg"/>
                        <div className="bg-black bg-opacity-70 text-gray-300 text-sm rounded-lg flex absolute top-2 left-2 px-4 py-2 rounded-lg ml-3 font-light"  style={{ borderRadius: "18px"}}><span className="font-normal text-white">Last created</span> - Tuesday, 2 Jan 2024</div>
                        <div className="absolute -mt-24 pl-4">
                            <div className="text-2xl text-white font-semibold mb-4">All Collections</div>
                            <div className="text-sm text-gray-400 font-light">View and manage all your created media assets</div>
                        </div>
                        <div style={{ position: "absolute", marginLeft: "732px", top: "-42px"}}  >
                            <div style={{fontSize: "170px",height: "150px" }}><MdArrowOutward className="text-white text-opacity-60 " style={{fontWeight: "2000"}}/></div>
                        </div>
                    </div>
                </div>
            
                <div style={{width:"90%", marginBottom: "20px"}} className="mx-auto">
                    <div className="flex items-center">
                        <div className=" bg-black bg-opacity-50  items-center px-4 py-2 border-gray-500 text-gray-400 text-sm font-light" style={{borderWidth: "1px", borderRadius: "18px"}}>Media Created {">"} <span className=" font-normal text-white">{activeItem === 'All Media' ? 'All' : activeItem}</span></div>
                        <div style={{height: "1px", flexGrow: 1}} className="flex">
                            <div className="bg-gray-400 mx-3" style={{width: "100%"}}></div>
                        </div>
                        <div className="flex">
                            <div className="mr-5 bg-black bg-opacity-40 rounded-lg flex text-white text-sm items-center px-4 py-2" style={{borderRadius: "18px"}}><span className=" mr-2 text-white"><FaFilter/></span>Filter</div>
                            <div className="bg-black bg-opacity-40 rounded-lg flex text-white text-sm items-center px-4 py-2" style={{ borderRadius: "18px"}}><span className="text-lg mr-2 bg-white rounded-md text-black"><CgSortAz /></span> Sort</div>
                        </div>
                    </div>
                </div>

                <div className="flex mx-auto" style={{width:"90%", marginBottom: "20px"}}>
                    <div className={`text-item cursor-pointer mx-10 text-base relative ${activeItem === 'All Media' ? 'text-teal-200' : 'text-gray-400'}`} onClick={() => handleClick('All Media')}>
                        All Media 
                        {activeItem === 'All Media' && <span className="underline-teal-200"></span>}
                    </div>
                    <div className={`text-item cursor-pointer mr-10 text-base relative ${activeItem === 'Video' ? 'text-teal-200' : 'text-gray-400'}`} onClick={() => handleClick('Video')}>
                        Video
                        {activeItem === 'Video' && <span className="underline-teal-200 r"></span>}
                    </div>
                    <div className={`text-item cursor-pointer mr-10 text-base relative ${activeItem === 'Music' ? 'text-teal-200' : 'text-gray-400'}`} onClick={() => handleClick('Music')}>
                        Music
                        {activeItem === 'Music' && <span className="underline-teal-200"></span>}
                    </div>
                    <div className={`text-item cursor-pointer mr-10 text-base relative ${activeItem === 'Images' ? 'text-teal-200' : 'text-gray-400'}`} onClick={() => handleClick('Images')}>
                        Images
                        {activeItem === 'Images' && <span className="underline-teal-200"></span>}
                    </div>
                </div>

                <div  className="flex flex-wrap mx-auto place-content-around" style={{width:"90%", marginBottom: "20px"}}>
                    <div className="square-card rounded-lg mb-10">
                        <div className="card-content ">
                            <div className="flex flex-col">
                                <HiOutlineRectangleStack style={{ color: "#39374F", fontSize: "100px" }} />
                                <div className="flex flex-col text-center">
                                    <div className="font-semibold text-gray-400">Create New</div>
                                    <div className="font-semibold text-gray-400">Collection</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {filteredData.map((item) => (
                        <div className="square-cards rounded-lg mb-10 bg-transparent" key={item.id} style={{maxHeight: "250px", overflow: "hidden"}}>
                            <div className="card-content bg-transparent ">
                                <div className="flex relative place-content-center">
                                    
                                    <div  className="absolute -top-24 rounded-t-lg overflow-hidden z-30 " style={{width:"229px", height: "280px"}}><img src={item.images[2]} alt="Image 1"  style={{width:"229px", height: "280px", position: "relative", zIndex: "1"}} className="rounded-lg"/><div className="gradient-overlay"></div></div>
                                    <div className=" absolute -top-28 rounded-lg  overflow-hidden z-20 " style={{width:"210px", height: "240px"}}><img src={item.images[1]} alt="Image 2" className="rounded-lg"/></div>
                                    <div className=" absolute -top-32  rounded-lg overflow-hidden z-10" style={{width:"190px", height: "240px"}}><img src={item.images[0]} alt="Image 3"  className="rounded-lg"/></div>
                                </div>
                            <div className="flex absolute overlay">
                                <div className="text-white z-40 font-semibold">{item.name}</div>
                                <div className="overlay-text z-40 px-2 bg-white text-black ml-1" style={{ borderRadius: "18px"}}>{item.number}</div>
                            </div>
                            <div className="collection-name z-40 text-xs font-light text-gray-400">{item.collectionName}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Collection;

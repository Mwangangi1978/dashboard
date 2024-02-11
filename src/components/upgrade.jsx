"use client"
import { FaBolt } from "react-icons/fa6";

const Upgrade = () => {
  return (
    <div className="relative">
      {/* Bottom Image */}
      <img src="/Birble Dash Images/explosion.jpg" alt="Bottom Image"  style={{width: '170px', zIndex: '1', height: '110px' }} className="rounded-lg" />
      <div>
        
        {/* Top-left Protruding Image */}
        <img src="/Birble Dash Images/austronaut.png" alt="Top Left Image" className="absolute top-0 left-0 -mt-10 -ml-5" style={{ width: '100px', zIndex: '3', transform: 'rotate(-15deg)' }} />
        <div className="absolute inset-0 flex mt-12 ml-1 rounded-lg bg-black bg-opacity-70 backdrop-blur-lg place-content-evenly" style={{ zIndex: '2',  width: '160px' ,  height: '55px'}}>
            {/* Lightning Icon */}
            <img  src="/Birble Dash Images/arrow.png"className="h-10 w-10 text-white mt-1" />

            {/* Text "Upgrade" */}
            <div className="flex flex-col my-auto">
                <div className=" font-semibold text-white text-xs mt-2">Upgrade</div>

                {/* Image and Text "300" */}
                <div className="flex ">
                    <img src="/Birble Dash Images/database.png" alt="Image" className="h-8 w-8 rounded-full " />
                    <span className=" text-lg font-semibold text-white">300</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;

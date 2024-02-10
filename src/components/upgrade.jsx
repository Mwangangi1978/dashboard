"use client"
import { FaBolt } from "react-icons/fa6";

const Upgrade = () => {
  return (
    <div className="relative">
      {/* Bottom Image */}
      <img src="/bottom-image.jpg" alt="Bottom Image" className="w-full" style={{ zIndex: '1' }} />
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-between p-4 bg-opacity-50 backdrop-blur-lg" style={{ zIndex: '2' }}>
        {/* Lightning Icon */}
        <FaBolt className="h-6 w-6 text-yellow-500" />

        {/* Text "Upgrade" */}
        <div className="text-white text-lg font-semibold">Upgrade</div>

        {/* Image and Text "300" */}
        <div className="flex items-center">
            <img src="/image.jpg" alt="Image" className="h-8 w-8 rounded-full mr-2" />
            <span className="text-white">300</span>
        </div>
        </div>
        {/* Top-left Protruding Image */}
        <img src="/top-left-image.jpg" alt="Top Left Image" className="absolute top-0 left-0 -mt-8 ml-8 rounded-full border-4 border-white" style={{ width: '100px', zIndex: '2' }} />
      </div>
    </div>
  );
};

export default Upgrade;

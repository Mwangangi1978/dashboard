import Collection from "@/components/collections";
import SideBar from "@/components/sideBar";
import 'tailwindcss/tailwind.css'


export default function Home() {
  return (
    <div  style={{ backgroundColor: "#07011D" }}>
      <div className="flex flex-row relative "  style={{ backgroundImage: "url('/Birble Dash Images/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" , height: '100vh' }}>
        <div style={{width: "18%"}}>
          <SideBar/>
        </div>
        <div className="px-10 "style={{width: "82%"}} >
          <Collection/>
        </div>
      </div>
    </div>
  );
}

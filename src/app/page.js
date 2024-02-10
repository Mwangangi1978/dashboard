import SideBar from "@/components/sideBar";
import 'tailwindcss/tailwind.css'


export default function Home() {
  return (
    <div className="flex flex-row relative"  style={{ backgroundImage: "url('/Birble Dash Images/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div style={{width: "18%"}}>
        <SideBar/>
      </div>
      <div className="mx-4">
      </div>
    </div>
  );
}

import { useState } from "react"
import Card from "./components/Card"


function App() {
  const  [color, setColor]= useState("azure")
  const  [textcolor, setTextcolor]= useState("black")

  return (
    <>
    <div className=" w-full h-screen duration-200 text-center py-2" 
    style={{backgroundColor: color,width: "100vw",
     height: "100vh"}}
    >
      <Card/>
      <div className="flex flex-wrap gap-3 py-4 px-1">
      <img class="w-1/3 h-auto rounded-b-xl" src="	https://www.fortinet.com/content/dam/fortinet/images/general/threat-report-2h-2023-banner.png" alt="Card Image"/>
      <img class="w-1/3 h-auto rounded-b-xl" src="https://images.pexels.com/photos/3621094/pexels-photo-3621094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card Image"/>
      <img class="w-1/4 h-auto rounded-b-xl" src="	https://www.fortinet.com/content/dam/fortinet/images/general/threat-report-2h-2023-banner.png" alt="Card Image"/>
      </div>
    </div>
    <div className="fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2" > 
    <div className="flex flex-wrap justify-center gap-3 bg-white
    shadow-lg px-3 py-2 rounded-xl">
      <button onClick={()=>setColor("red")} className="outline-none rounded-xl px-4 py-1 bg-red-500">Red</button>
      <button onClick={()=>setColor("Azure")} className="outline-none rounded-xl px-4 py-1 bg-white">Azure</button>
      <button onClick={()=>setColor("yellow")} className="outline-none rounded-xl px-4 py-1 bg-yellow-400">Yellow</button>
      <button onClick={()=>setColor("pink")} className="outline-none rounded-xl px-4 py-1 bg-pink-400">Pink</button>
      <button onClick={()=>setColor("green")} className="outline-none rounded-xl px-4 py-1 bg-green-400">Green</button>
      <button onClick={()=>setColor("blue")} className="outline-none rounded-xl px-4 py-1 bg-blue-400">Blue</button>
      <button onClick={()=>setColor("violet")} className="outline-none rounded-xl px-4 py-1 bg-violet-400">Voilet</button>
      <button onClick={()=>setColor("gray")} className="outline-none rounded-xl px-4 py-1 bg-gray-400">Gray</button>
      <button onClick={()=>setColor("orange")} className="outline-none rounded-xl px-4 py-1 bg-orange-500">Orange</button>
      <button onClick={()=>setColor("indigo")} className="outline-none rounded-xl px-4 py-1 bg-indigo-400">Indigo</button>
      </div></div>
    </>
  )
}

export default App

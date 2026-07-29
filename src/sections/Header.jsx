import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import MenuBar from '@/components/menuBar'
import { useNavigate } from 'react-router-dom'
function Header() {
  const [visisble,SetVisible]=useState(false);
  const navigate=useNavigate();
  return (
    <div className='sticky top-0 z-50 '>
        
        <div className=' p-4 bg-slate-950  flex justify-between items-center border-b border-cyan-400/50 shadow-lg shadow-cyan-400/20'>
           <h1 className='text-xl md:text-3xl text-cyan-400 font-bold font-mono hover:text-cyan-300 cursor-pointer ' onClick={()=>navigate("/")}>
            Satyam Pandey
           </h1>

            <Menu size={24} className='text-cyan-400' onClick={()=>SetVisible((prev)=>!prev)}/>
         
            <button onClick={()=>navigate("/talkToMe")}
                    className='hidden md:flex items-center mr-4 space-x-2 bg-slate-800 hover:bg-slate-700 border border-purple-500/50 hover:border-cyan-400 text-white md:px-4 p-1 md:py-2 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
              <span className='text-xl'>🤖</span>
              <span className='font-semibold tracking-wide '>Talk with me</span>
            </button>           
        </div>

         <div className={visisble?"block":"hidden"}>
          <MenuBar setVisible={SetVisible}/>
         </div>

         <button
                type='button'
                aria-label='Open chat'
                className='fixed bottom-5 right-5 z-50 sm:hidden inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 text-2xl shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.4)] active:scale-95'
                onClick={() => navigate("/talkToMe")}
              >
                🤖
              </button>

    </div>
  )
}

export default Header
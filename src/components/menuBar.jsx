import React from 'react'
import {useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

function menuBar({setVisible}) {
    const Navigate=useNavigate()

  return (
    <nav className='fixed top-0 left-0 w-screen z-999 h-screen bg-black/90 flex items-center justify-center'>
        <div className='w-136 h-136 fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 border rounded-full border-cyan-600 shadow-[0_0_8px_8px_rgba(6,182,212,0.2)]'></div>
        <div className='w-150 h-150 fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 border-[.5px] rounded-full border-cyan-900 shadow-[0_0_8px_8px_rgba(6,182,212,0.2)]'></div>
        <div className='w-120 h-120 fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 border-2 rounded-full border-cyan-400 shadow-[0_0_8px_8px_rgba(6,182,212,0.4)]'></div>
        
        <div className='flex flex-col z-999 mt-30 h-screen items-center'>
            <div className='w-150 h-50 flex  items-center justify-center'>
                <button onClick={()=>{Navigate("/");
                                     setVisible(false)
                                      setTimeout(()=>{
                                        const contact=document.getElementById('contact');
                                        if(contact){
                                            contact.scrollIntoView({behavior:"smooth"})
                                        }

                                      },500)}}
                        className='flex items-center space-x-2 cursor-pointer bg-slate-800 hover:bg-slate-700 border-2 border-green-500/50 hover:border-green-400 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
                     Contact
                </button>
            </div>
            <div className='w-150 h-50  flex  justify-center items-center gap-5 md:gap-36'>
                <button onClick={()=>{Navigate("/about"); setVisible(false)}}
                         className='flex items-center space-x-2 cursor-pointer bg-slate-800 hover:bg-slate-700 border-2 border-green-500/50 hover:border-green-400 text-white px-6  py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
                    About
                </button>
                <button onClick={()=>{Navigate("/"); setVisible(false)}}
                         className='flex items-center space-x-2 cursor-pointer bg-slate-800 hover:bg-slate-700 border-2 border-green-500/50 hover:border-green-400 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
                    Home
                </button>
                <button onClick={()=>{Navigate("/projects"); setVisible(false)}}
                        className='flex items-center space-x-2 cursor-pointer bg-slate-800 hover:bg-slate-700 border-2 border-green-500/50 hover:border-green-400 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
                    Projects
                </button>

            </div>
            <div className='w-150 h-50 flex items-center justify-center'>
                <button onClick={() => {
                            Navigate("/");
                            setVisible(false);
                            setTimeout(() => {
                                const element = document.getElementById('experience');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, 500);
                        }}
                        className='flex items-center space-x-2 cursor-pointer bg-slate-800 hover:bg-slate-700 border-2 border-green-500/50 hover:border-green-400 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
                    Experience
                </button>

            </div>
        </div>
        <div className='text-cyan-400 fixed cursor-pointer top-5 right-6'>
            <X onClick={()=>setVisible(false)}/>
        </div>

    </nav>
  )
}

export default menuBar
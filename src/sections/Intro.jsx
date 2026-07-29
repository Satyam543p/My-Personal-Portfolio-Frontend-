import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Orb from '../components/Reactbits/Orb';


function Intro() {
  const Navigate=useNavigate();
    
  return (
    
      <div className=' mx-auto px-2 sm:px-6 py-12 md:flex gap-5 md:gap-8 justify-center md:justify-start items-center border-b-2 rounded-2xl border-cyan-500/50 shadow-lg shadow-cyan-400/20 overflow-visible'>

      
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center shrink-0 mx-auto md:mx-0">
          {/* Orb - fills entire container */}
          
          {/* Profile Image - centered and smaller */}
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-10  border-slate-800/90 shadow-lg shadow-slate-800/50">
            <img src="profile.webp" alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <h1 className=' text-3xl md:text-[70px] italic font-bold text-white mt-2 md:mt-0'>
            Satyam Pandey
          </h1>
          <h2 className='text-2xl font-bold text-white mt-2'>
            Web Developer
          </h2>
          <p className='line-clamp-3 text-white mt-1 max-w-xl'>
            CSE Student 🎓 | Python 🐍 & Web Developer 🌐 | Building with React & Django/Flask | AI & Data Science Enthusiast 🤖
          </p>
          
        </div>
      </div>
  )
}

export default Intro
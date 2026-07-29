import React from 'react'
import resumePdf from './resume_designed (1).pdf'

function Hero() {
  return (
    <section className='relative w-full max-w-7xl mx-auto px-6 py-20 md:py-32'>
        
        
        <div className='flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16'>
          
          
          <div className='w-full flex flex-col md:flex-row items-center  text-center md:text-left gap-8 md:gap-16'>
            
            
            <div className='relative group shrink-0'>
              <div className='absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000'></div>
              <div className='relative w-48 h-48 md:w-[320px] lg:w-[400px] md:h-[320px] lg:h-[400px] rounded-full p-1 bg-slate-950'>
                <img 
                  src="profile1.webp" 
                  alt="Satyam Pandey" 
                  className='w-full h-full object-cover rounded-full border-4 border-slate-950' 
                />
              </div>
            </div>

            
            <div className='flex flex-col justify-center flex-1 min-w-0'> 
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight break-words'>
                Hi, I am <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400'>Satyam Pandey</span>
              </h1>
              
              <h2 className='text-xl md:text-3xl text-cyan-400 mt-4 font-mono font-medium'>
                Web Developer
              </h2>
              
              <p className='mt-6 max-w-xl text-slate-400 leading-relaxed text-base md:text-lg'>
                I’m a CSE student and <span className='text-slate-200'>MERN-stack developer</span> building user-focused web apps. Currently expanding my backend expertise and exploring AI to create smarter, scalable platforms.
              </p>

              {/* Buttons */}
              <div className='flex flex-wrap justify-center md:justify-start items-center gap-4 mt-10'>
                <a
                  href="#contact"
                  className='flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 border-2 border-green-500/50 hover:border-green-400 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'
                >
                  <span className='font-semibold tracking-wide'>Hire me</span>
                </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer"
                  className='flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 border-2 border-cyan-500/50 hover:border-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'>
                 
                 <span className='font-semibold tracking-wide'>resume</span>
              </a>
                
                
                
              </div>
            </div>
          </div>
          

        </div>
      </section>
  )
}

export default Hero
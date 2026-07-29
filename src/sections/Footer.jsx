import React from 'react';
import GlowBorder from '../components/GlowBorder';
import { FaGithub, FaLinkedin, FaInstagram,FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const copyDiscord = (e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText("satyampandey543_83044");
    alert("Discord username copied to clipboard: satyampandey543_83044");
  };

  const Navigate=useNavigate();

  return (

    <footer className="relative  bg-slate-950 text-slate-300 py-10 ">
      <GlowBorder>
        <div className='max-w-6xl mx-auto md:ml-25 px-2 sm:px-4 py-3 grid grid-cols-1 md:grid-cols-[4.5fr_1.5fr_1fr] gap-8'>

        <div className='flex flex-col items-start'>
          <h1 className='text-4xl font-extrabold my-5 font-mono'>Satyam Pandey</h1>
          <p>
            Web Developer | CSE Student | AI Enthusiast
          </p>

        </div>
          

        <div className=''>
          <h2 className='text-2xl font-bold mb-5 text-gray-600'>QUICK LINKS </h2>
          <ul className='ml-5'>
            <li className='text-base font-bold hover:text-slate-600 cursor-pointer' onClick={()=>Navigate("/")}>
              Home
            </li>
            <li className='text-base font-bold hover:text-green-600 cursor-pointer' onClick={()=>Navigate("/projects")}>
              Projects
            </li>
            <li className='text-base font-bold hover:text-pink-600 cursor-pointer'onClick={()=>{Navigate("/"); 
                                                                                                    setTimeout(()=>{
                                                                                                      const contact=document.getElementById('experience');
                                                                                                      if(contact){
                                                                                                          contact.scrollIntoView({behavior:"smooth"})
                                                                                                      }

                                                                                                    },500) }}>
              Experience
            </li>
            <li className='text-base font-bold hover:text-amber-600 cursor-pointer'onClick={()=>{Navigate("/"); 
                                                                                                    setTimeout(()=>{
                                                                                                      const contact=document.getElementById('contact');
                                                                                                      if(contact){
                                                                                                          contact.scrollIntoView({behavior:"smooth"})
                                                                                                      }

                                                                                                    },500) }}>
              Contact
            </li>
            <li className='text-base font-bold hover:text-cyan-600 cursor-pointer'onClick={()=>Navigate("/about")}>
              About
            </li>
          </ul>

        </div>

        <div className=''>
          <h2 className='text-2xl font-bold mb-5 text-gray-600 md:ml-30' >
            Contact
          </h2>

          <div className="flex space-x-4 text-2xl text-slate-300 md:ml-30">
            <a href="https://github.com/Satyam543p" target="blank" className="text-white text-4xl inline-block transition-all duration-300 ease-out drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] cursor-pointer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/satyam-pandey-037b00341/" target="blank" className="text-blue-500 text-4xl inline-block transition-all duration-300 ease-out drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)] cursor-pointer">
              <FaLinkedin />
            </a>

            <a href="#" onClick={copyDiscord} className="text-indigo-500 text-4xl inline-block transition-all duration-300 ease-out drop-shadow-[0_0_5px_rgba(99,102,241,0.5)] hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(99,102,241,1)] cursor-pointer">
              <FaDiscord />
            </a>

            <a href="mailto:satyampandey8686@gmail.com" target="blank" className="text-yellow-400 text-4xl inline-block transition-all duration-300 ease-out drop-shadow-[0_0_5px_rgba(250,204,21,0.5)] hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(250,204,21,1)] cursor-pointer">
              <MdEmail />
            </a>

            <a href="https://www.instagram.com/satyam_pandey5432/" target="blank" className="text-pink-500 text-4xl inline-block transition-all duration-300 ease-out drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)] cursor-pointer">
              <FaInstagram />
            </a>
          </div>

        </div>

        <div>
         <p className="text-md text-slate-500 ">
            © 2026 Satyam Pandey. Built with MERN.
          </p>
        </div>

        </div>
      </GlowBorder>
      
      
    </footer>
  );
};

export default Footer;
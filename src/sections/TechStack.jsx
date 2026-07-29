import  Container from '../components/Container';
import React from 'react'
// FontAwesome for standard tech logos
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiAppwrite, SiJavascript, SiRedux, SiNetlify } from 'react-icons/si';

const techStack = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      customClasses: "text-yellow-400 hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
    },
    {
      name: "React",
      icon: <FaReact />,
      customClasses: "text-cyan-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      customClasses: "text-purple-500 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      customClasses: "text-teal-400 hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.8)]"
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      customClasses: "text-green-500 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      customClasses: "text-slate-300 hover:drop-shadow-[0_0_15px_rgba(203,213,225,0.8)]"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      customClasses: "text-emerald-500 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]"
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite />,
      customClasses: "text-pink-500 hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]"
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      customClasses: "text-orange-500 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      customClasses: "text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      customClasses: "text-teal-300 hover:drop-shadow-[0_0_15px_rgba(94,234,212,0.8)]"
    }
  ];

function TechStack() {
  return (
    
    <div className="w-full max-w-5xl mx-auto py-15 px-4 flex flex-col items-center">
      {/* <Container> */}
        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-12 tracking-wider text-">
            / / ENGINEERING STACK
        </h3>

  
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {techStack.map((tech, index) => (
            <div 
                key={index}
                title={tech.name}
                className={`text-5xl md:text-6xl transition-all duration-300 ease-out hover:scale-110 cursor-pointer ${tech.customClasses}`}
            >
                {tech.icon}
            </div>
            ))}
        </div>
         
            {/* </Container> */}
    </div>
    
  )
}

export default TechStack
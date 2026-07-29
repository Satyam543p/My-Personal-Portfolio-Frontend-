import React, { useState } from 'react';
import TechStack from '@/sections/TechStack';
import CodePreview from '@/components/CodePreview';
import Hero from '@/sections/Hero';
import Project from '@/sections/Project';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';
import { useNavigate } from 'react-router-dom';

function Home() { 
  const [code, setCode] = useState(`function greet() {
  return \`Hello, All of you\`
}

console.log(greet())`);

    const Navigate=useNavigate();

  return (
    <div className='bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30'>
     
      <Hero/>
     
              <div className='p-10 md:p-0 md:absolute md:top-145 md:right-10'>
                <CodePreview 
                  language="javascript" 
                  code={code} 
                />
              </div>

            

      <TechStack/>     
      <Project/>
      <Experience/>
      <Contact/>
         
    
    </div>
  );
}

export default Home;

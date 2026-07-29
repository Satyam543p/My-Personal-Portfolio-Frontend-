import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-slate-950 py-10 px-5 md:p-10 flex justify-center font-mono">
      <div className="w-full max-w-300 border border-gray-800 shadow-[0px_0px_16px_3px_rgba(6,182,212,0.2)] rounded-2xl bg-[#0b1220] overflow-hidden flex flex-col">
        
        
        <div className="h-10 w-full bg-gray-950 flex justify-between items-center p-2 border-b border-gray-800">
          <div className="flex gap-2 w-20 mx-2">
            <div className="bg-red-500 rounded-full w-3.5 h-3.5 shadow-sm" />
            <div className="bg-yellow-500 rounded-full w-3.5 h-3.5 shadow-sm" />
            <div className="bg-green-500 rounded-full w-3.5 h-3.5 shadow-sm" />
          </div>
          <div className="text-gray-500 text-xs tracking-widest font-semibold mr-4">
            bash ~ 
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 text-sm md:text-base text-gray-300 flex-1 space-y-6 overflow-auto">
          
          {/* Command 1 */}
          <div>
            <div className="flex gap-2 text-cyan-400">
              <span>C:\Satyam_Pandey\About {'>'}</span>
              <span className="text-white">whoami</span>
            </div>
            <div className="mt-2 text-gray-400 leading-relaxed">
              Satyam Kumar Pandey. <br />
              Computer Science Engineering undergraduate & System Architecture enthusiast. <br />
              Product creator over tutorial follower. I build original, practical projects to sharpen logic.
            </div>
          </div>

          {/* Command 2 */}
          <div>
            <div className="flex gap-2 text-cyan-400">
              <span>C:\Satyam_Pandey\About {'>'}</span>
              <span className="text-white">cat current_stack.json</span>
            </div>
            <div className="mt-2 text-yellow-300">
              {'{'}
              <div className="pl-4">
                <span className="text-blue-300">"core_web"</span>: <span className="text-green-400">"MERN Stack (React, Redux Toolkit, Node.js, MongoDB, ExpressJS), Tailwind CSS"</span>,<br />
                <span className="text-blue-300">"backend_services"</span>: <span className="text-green-400">"Appwrite, AWS, FireBase"</span>,<br />
                <span className="text-blue-300">"systems_&_automation"</span>: <span className="text-green-400">"Python, Javascipt"</span>,<br />
                <span className="text-blue-300">"current_trajectory"</span>: <span className="text-green-400">"Data Science, AI/ML Integrations"</span>
              </div>
              {'}'}
            </div>
          </div>

          {/* Command 3 */}
          <div>
            <div className="flex gap-2 text-cyan-400">
              <span>C:\Satyam_Pandey\About {'>'}</span>
              <span className="text-white">./execute_mission.sh</span>
            </div>
            <div className="mt-2 text-gray-400 space-y-1">
              <p>[OK] Preparing for high-level open-source contributions (Target: GSoC).</p>
              <p>[OK] Developing ambitious cross-platform desktop applications.</p>
              <p className="text-green-400 font-semibold mt-2">{'>'} Status: Ready for production-level challenges.</p>
            </div>
          </div>

          {/* Active Prompt with Blinking Cursor */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-cyan-400">C:\Satyam_Pandey\About {'>'}</span>
            <span className="w-2 h-5 bg-gray-400 animate-[pulse_1s_ease-in-out_infinite]"></span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
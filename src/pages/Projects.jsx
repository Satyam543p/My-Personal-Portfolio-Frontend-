import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectData';
import { Filter, ChevronDown } from 'lucide-react';

export default function Projects() {
  const projectData = projectsData;
  const categoryOptions = ["All Projects", "Full-Stack", "Frontend UI", "AI & Systems"];
  
  const currentProjects = projectData.filter((p) => p.status !== 'completed');
  const [category, setCategory] = useState("All Projects");
  const categoryProjects = category === "All Projects" 
    ? projectData 
    : projectData.filter((p) => p.category === category);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 p-6 md:p-12 lg:px-24">
      
      
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white border-l-4 border-cyan-500 pl-4">
          Active Missions
        </h1>
        
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {currentProjects.length > 0 ? (
            currentProjects.map((item, index) => (
              
              <div key={index} className="shrink-0 w-80 md:w-100 snap-start">
                <ProjectCard
                  ProjectImage={item.ProjectImage}
                  ProjectTitle={item.ProjectTitle}
                  Description={item.Description}
                  GithubLink={item.GithubLink}
                  LiveLink={item.LiveLink}
                />
              </div>
            ))
          ) : (
            <div className="w-full h-40 border-2 border-dashed border-gray-800 rounded-xl flex items-center justify-center text-gray-500">
              No active deployments at the moment.
            </div>
          )}
        </div>
      </div>

      
      <div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-gray-800 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            {category}
          </h1>

          
          <div className="relative z-20" ref={dropdownRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-[#0b1220] border border-gray-700 hover:border-cyan-500/50 rounded-lg text-sm text-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            >
              <Filter className="w-4 h-4 text-cyan-400" />
              <span>Filter Category</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0b1220] border border-gray-700 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {categoryOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCategory(option);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors border-l-2
                      ${category === option 
                        ? 'bg-cyan-950/30 text-cyan-400 border-cyan-400' 
                        : 'text-gray-400 border-transparent hover:bg-gray-800 hover:text-gray-200'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categoryProjects.length > 0 ? (
            categoryProjects.map((item, i) => (
              <div key={i} className="flex h-full">
                <ProjectCard
                  ProjectImage={item.ProjectImage}
                  ProjectTitle={item.ProjectTitle}
                  Description={item.Description}
                  GithubLink={item.GithubLink}
                  LiveLink={item.LiveLink}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No projects found in this sector.
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
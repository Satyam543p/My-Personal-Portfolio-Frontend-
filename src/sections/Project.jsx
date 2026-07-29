import React, { useState } from 'react'
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectData';

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 3)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <div className="mb-10 text-left">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
          Top Projects
        </p>
        <h1 className='inline-block text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-fuchsia-300 to-purple-500'>
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
          A curated set of highlighted projects. Browse the top picks first, then expand the section if you want to see the full list.
        </p>
      </div>

      <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:flex-wrap md:overflow-visible md:pb-0">
        {visibleProjects.map((item,index)=>(
        <div
          key={index}
          className="w-[85vw] max-w-105 shrink-0 snap-start sm:w-[70vw] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <ProjectCard ProjectImage={item.ProjectImage} 
                 ProjectTitle={item.ProjectTitle}
                 Description={item.Description}
                 GithubLink={item.GithubLink}
                 LiveLink={item.LiveLink}/>
        </div>))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAllProjects((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-cyan-500/40 bg-slate-800 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200"
        >
          {showAllProjects ? 'Show Top Projects' : 'Show More Projects'}
        </button>
      </div>

    </section>
  )
}

export default Projects
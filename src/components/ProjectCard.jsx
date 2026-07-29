import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({
    ProjectImage,
    ProjectTitle,
    Description,
    GithubLink,
    LiveLink,

}) {
    const navigate = useNavigate()

    const handleAskAboutThis = () => {
        navigate('/talkToMe', {
            state: {
                projectTitle: ProjectTitle,
                projectDescription: Description,
            },
        })
    }

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-4 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] md:p-5">
        <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950">
            <img
                src={ProjectImage}
                alt={ProjectTitle}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
            />
        </div>
        <div className="mt-5">
        <h1 className="text-xl font-semibold tracking-wide text-white md:text-2xl">
            {ProjectTitle}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-400 md:text-base">
            {Description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
            <button
                type="button"
                onClick={handleAskAboutThis}
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100"
            >
                    Ask about this
            </button>

            <a
                href={GithubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cyan-500/40 bg-slate-800 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200"
            >
                    GitHub
            </a>
            
            <a
                href={LiveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-slate-800 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-300 hover:bg-purple-500/10 hover:text-purple-200"
            >
                    Live Demo
            </a>
        </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent opacity-70" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

export default ProjectCard
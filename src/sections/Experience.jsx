import React, { useRef, useEffect, useState, useCallback } from "react";

const EXPERIENCES = [
  {
    year: "2024",
    title: "C & Algorithmic Roots",
    org: "Foundation",
    desc: "Began the coding journey with C, focusing heavily on core programming logic and solving numerous algorithmic problems.",
  },
  {
    year: "2024",
    title: "Data Analysis & Python",
    org: "Analytical Pivot",
    desc: "Transitioned to Python for data analysis. Mastered core Python, data libraries, Excel, and BI tools to build a strong analytical mindset.",
  },
  {
    year: "2025",
    title: "Web Dev & Python Certification",
    org: "Frontend Expansion",
    desc: "Earned official Python certification and pivoted to the web. Learned HTML, CSS, JS, and React, shipping and pushing multiple original projects to GitHub.",
  },
  {
    year: "2026",
    title: "MERN Stack & IIT Ropar",
    org: "Official Internship",
    desc: "Secured a MERN development internship under IIT Ropar via NPTEL. Gained hands-on full-stack experience and earned official certification.",
  },
  {
    year: "2026",
    title: "AI Integration & Next-Gen Projects",
    org: "Current Focus",
    desc: "Continuously building advanced full-stack projects while actively learning and integrating Artificial Intelligence directly into web applications.",
  },
];

// FIXED: Added safe array indexing checks to prevent undefined object property crashes
function buildPath(points) {
  if (!points || points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midY = (p0.y + p1.y) / 2;
    d += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
  }
  return d;
}

function Experience() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const pulseRef = useRef(null);

  const [pathD, setPathD] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  const recomputePath = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerBox = container.getBoundingClientRect();

    const points = cardRefs.current
      .filter(Boolean)
      .map((el, i) => {
        const box = el.getBoundingClientRect();
        const isLeft = i % 2 === 0;
        return {
          x: isLeft
            ? box.right - containerBox.left + 12
            : box.left - containerBox.left - 12,
          y: box.top - containerBox.top + box.height / 2,
        };
      });

    const d = buildPath(points);
    setPathD(d);
  }, []);

  useEffect(() => {
    recomputePath();
    window.addEventListener("resize", recomputePath);
    return () => window.removeEventListener("resize", recomputePath);
  }, [recomputePath]);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  useEffect(() => {
    function onScroll() {
      const container = containerRef.current;
      if (!container) return;
      const box = container.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = box.height + vh;
      const traveled = vh - box.top;
      let p = traveled / total;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathRef.current && pathLength > 0 && dotRef.current && pulseRef.current) {
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      
      dotRef.current.setAttribute("cx", point.x);
      dotRef.current.setAttribute("cy", point.y);
      
      pulseRef.current.setAttribute("cx", point.x);
      pulseRef.current.setAttribute("cy", point.y);
    }
  }, [progress, pathLength]);

  const dashOffset = pathLength * (1 - progress);

  return (
    <section id="experience" className="relative w-full bg-[#030712] text-neutral-100 py-32 px-6 overflow-hidden">
     
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      
      <div className="relative mb-24 text-center max-w-xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase font-mono tracking-[0.25em] text-cyan-400 mb-3 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full backdrop-blur">
          Chronology
        </span>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
          The Journey <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-500 drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
            So Far
          </span>
        </h2>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ overflow: "visible" }}
        >
          {/* Neon Glow Filters */}
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dotted background trail guide line */}
          <path
            d={pathD}
            fill="none"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />

          {/* Active drawing colored laser path line */}
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: dashOffset,
              transition: "stroke-dashoffset 0.05s linear",
            }}
          />

          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          {/* Expanding Radar Outer Pulse Ring */}
          <circle
            ref={pulseRef}
            r="14"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="animate-ping opacity-70 origin-center"
          />

          {/* Tracking core dot center marker */}
          <circle ref={dotRef} r="5" fill="#ffffff" stroke="#22d3ee" strokeWidth="3" />
        </svg>

        <div className="relative flex flex-col gap-20">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const indexStr = String(i + 1).padStart(2, "0");
            
            return (
              <div
                key={exp.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`relative w-[45%] group transition-all duration-500 ease-out text-left ${
                  isLeft ? "self-start" : "self-end"
                }`}
              >
                {/* Visual Anchor: Corner crosshairs (+) styling */}
                <div className="absolute -top-1.5 -left-1.5 text-xs text-slate-700 font-mono select-none pointer-events-none group-hover:text-cyan-500 transition-colors duration-300">+</div>
                <div className="absolute -bottom-1.5 -right-1.5 text-xs text-slate-700 font-mono select-none pointer-events-none group-hover:text-fuchsia-500 transition-colors duration-300">+</div>

                {/* Cyberpunk Interactive Glass Card */}
                <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl px-7 py-6 shadow-[0_0_30px_-15px_rgba(0,0,0,0.7)] group-hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)] group-hover:border-slate-700/80 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  
                  {/* Internal Glow Spots on Hover */}
                  <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-500 pointer-events-none" />
                  <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-fuchsia-500/5 blur-[50px] rounded-full group-hover:bg-fuchsia-500/10 transition-all duration-500 pointer-events-none" />

                  {/* Header Meta Info Info inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-800/30 px-2.5 py-0.5 rounded-md shadow-inner tracking-wider">
                      {exp.year}
                    </span>
                    <span className="text-[10px] font-mono font-medium text-slate-500 tracking-widest group-hover:text-slate-400 transition-colors">
                      [{indexStr}]
                    </span>
                  </div>

                  {/* Typography & Copy Layout */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-medium text-fuchsia-400/90 tracking-wide mt-0.5 mb-3">
                    <span className="text-slate-400">{exp.org}</span>
                  </p>
                  
                  <p className="text-xs font-mono font-medium text-slate-300/80 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
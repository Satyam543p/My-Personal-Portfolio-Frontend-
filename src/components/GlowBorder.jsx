import React from 'react'

function GlowBorder({ children }) {
  return (
    <div className="rounded-2xl m-2 p-[2px] bg-gradient-to-tl from-cyan-800 via-pink-600 to-cyan-500 shadow-cyan-800 shadow-lg  ">
      <div className="bg-slate-900 rounded-2xl py-6 px-4">
        {children}
      </div>
    </div>
  )
}

export default GlowBorder
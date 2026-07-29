import React from 'react'

function Container({ children, className = '' }) {
  return (
    <div className={`p-10 border-b-2 rounded-2xl border-cyan-500/50 shadow-lg shadow-cyan-400/20 overflow-visible ${className}`}>
        {children}
    </div>
  )
}

export default Container
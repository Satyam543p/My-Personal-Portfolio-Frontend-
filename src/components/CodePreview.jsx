import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodePreview({ code = '', language = 'javascript', showLineNumbers = true }) {
  return (
    <div className="max-w-full bg-[#0b1220] rounded-lg border border-white/6 shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#07101a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="ml-auto text-xs text-white/60">{language}</div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers={showLineNumbers}
        customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodePreview

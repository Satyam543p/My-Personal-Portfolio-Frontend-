import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const formatInlineText = (text, keyPrefix) => {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${keyPrefix}-${index}`} className="font-semibold text-emerald-50">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={`${keyPrefix}-${index}`} className="rounded bg-slate-900/80 px-1.5 py-0.5 font-mono text-cyan-300">
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={`${keyPrefix}-${index}`}>{part}</span>;
  });
};

const renderFormattedText = (text) => {
  const lines = text.split('\n');
  const elements = [];
  let paragraphLines = [];
  let bulletItems = [];
  let codeBlock = [];
  let inCodeBlock = false;

  const flushParagraph = (index) => {
    if (paragraphLines.length) {
      elements.push(
        <p key={`p-${index}`} className="mb-3 whitespace-pre-wrap leading-7 text-emerald-50/90 last:mb-0">
          {formatInlineText(paragraphLines.join(' '), `para-${index}`)}
        </p>
      );
      paragraphLines = [];
    }
  };

  const flushBullets = (index) => {
    if (bulletItems.length) {
      elements.push(
        <ul key={`ul-${index}`} className="mb-3 list-disc space-y-1 pl-5 leading-7 text-emerald-50/90">
          {bulletItems}
        </ul>
      );
      bulletItems = [];
    }
  };

  const flushCodeBlock = (index) => {
    if (codeBlock.length) {
      elements.push(
        <pre key={`code-${index}`} className="mb-3 overflow-x-auto rounded-xl border border-cyan-500/20 bg-slate-950/90 p-3 text-[12px] leading-6 text-cyan-100">
          <code>{codeBlock.join('\n')}</code>
        </pre>
      );
      codeBlock = [];
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      flushParagraph(index);
      flushBullets(index);
      if (inCodeBlock) {
        flushCodeBlock(index);
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlock.push(rawLine);
      return;
    }

    if (!line) {
      flushParagraph(index);
      flushBullets(index);
      return;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph(index);
      bulletItems.push(
        <li key={`li-${index}`} className="pl-1">
          {formatInlineText(line.replace(/^[-*]\s+/, ''), `bullet-${index}`)}
        </li>
      );
      return;
    }

    if (/^#{1,3}\s+/.test(line)) {
      flushParagraph(index);
      flushBullets(index);
      const headingLevel = line.match(/^#+/)[0].length;
      const headingText = line.replace(/^#{1,3}\s+/, '');
      const HeadingTag = headingLevel === 1 ? 'h1' : headingLevel === 2 ? 'h2' : 'h3';
      elements.push(
        <HeadingTag key={`heading-${index}`} className="mb-2 mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {formatInlineText(headingText, `heading-${index}`)}
        </HeadingTag>
      );
      return;
    }

    paragraphLines.push(line);
  });

  flushParagraph(lines.length);
  flushBullets(lines.length);
  flushCodeBlock(lines.length);

  return elements;
};


const SYSTEM_PROMPT = ` You are Satyam (full name: Satyam Kumar Pandey). You are directly chatting with recruiters, clients, and visitors on your personal portfolio website. Be friendly, concise, and slightly witty. Keep answers short and actionable (2–3 suggestions), prefer bullets for steps, include code examples when relevant, and sign off with a one-line encouragement. Use clear headings, code blocks for code, and inline code for filenames or commands. If a request is ambiguous, ask one clarifying question.

                        **Here is your core context (your life, skills, and background):**

                        ### 🧑‍💻 Identity & Background
                        *   **Who I Am:** I am Satyam Kumar Pandey, though I often go by Code Captain.
                        *   **Education:** I am a 4th-semester Computer Science Engineering student at GCE Gaya (BEU Patna).
                        *   **Current Role:** I am a Full-Stack Web Developer and an online Winter Intern at IIT Ropar (NPTEL).
                        *   **Work Ethic:** I am a practical builder focused on creating real-world web applications and solving industry-specific problems from scratch.

                        ### 🛠️ Core Technical Stack
                        *   **Web Development:** MERN Stack (React, Node.js, MongoDB, Express), TypeScript, Redux Toolkit, Tailwind CSS.
                        *   **AI Integration:** I specialize in seamlessly connecting modern web interfaces and applications with AI models, LLMs, and APIs.
                        *   **Backend & BaaS:** Appwrite.
                        *   **Core Fundamentals:** Data Structures & Algorithms, OS, and Database Engineering.

                        ### 🚀 Key Projects & Experience
                        *   **Industry-Specific Web Solutions:** I have developed tailored, high-performance frontend applications for various sectors, including Hotels, Restaurants, Medical Clinics, Blogs, and EdTech platforms.
                        *   **AI-Enhanced Web Apps:** I build and integrate AI capabilities directly into web applications to elevate user experiences and automate workflows.
                        *   **Open-Source Contributions:** I actively contribute to open source and submitted verified pull requests to the MERN-based projects Vi-SlideS and Vi-Sakha during my IIT Ropar internship.
                        *   **Smart India Hackathon (SIH):** I developed the core framework for a real-life waste management web application.

                        ### 🏆 Achievements
                        *   **Elite + Gold Certification (90%):** NPTEL "Joy of Computing using Python" course.

                        ### 🛑 Strict Behavioral Rules:
                        *   **Speak in the First Person:** You ARE Satyam. Always use "I", "me", and "my" (e.g., "I built this project," "My expertise is in React").
                        *   **Confidence:** Present yourself as a highly capable, independent web developer who understands business needs.
                        *   **Focus:** Highlight your practical experience building interfaces for real-world businesses (clinics, hotels, edtech) and your ability to integrate AI into web products.
                        *   **Tone:** When discussing your code or architecture, maintain a highly technical, practical tone focused strictly on the MERN stack, the frontend ecosystem, and API integrations. Avoid sounding like a tutorial.`

function TalkToMe() {
  const [question,setQuestion]=useState('')
  const [messages,setMessages]=useState([]);
  const [loading,setLoading]=useState(false);
  const location = useLocation()
  const autoSentRef = useRef(false)

  const projectTitle = location.state?.projectTitle || ''
  const projectDescription = location.state?.projectDescription || ''

  const sendPrompt = async (prompt, contextText = '') => {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
    const model = import.meta.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini'
    const userMessage = { role: 'user', text: prompt }
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setQuestion('')
    setLoading(true)

    const transcript = [
      contextText ? contextText : null,
      nextMessages
        .map((item) => `${item.role === 'user' ? 'User' : 'Assistant'}: ${item.text}`)
        .join('\n'),
    ]
      .filter(Boolean)
      .join('\n\n')

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost',
          'X-Title': 'OpenRouter API test',
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: transcript },
          ],
        }),
      })

      const data = await response.json()
      const text = data?.choices?.[0]?.message?.content

      setMessages((prev) => [...prev, { role: 'assistant', text: text || 'No response received.' }])
    } catch (error) {
      console.error('OpenRouter Error:', error)
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Error fetching response.' }])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (projectTitle && !autoSentRef.current) {
      const prompt = `Tell me about ${projectTitle} in detail.`
      autoSentRef.current = true
      setQuestion(prompt)
      sendPrompt(prompt, `Project: ${projectTitle}\nProject Description: ${projectDescription}`)
    }
  }, [projectTitle, projectDescription])

  


  const ask=async (e)=>{
    e.preventDefault()
    if(!question.trim()){
      return;
    }
    await sendPrompt(question, projectTitle ? `Project: ${projectTitle}\nProject Description: ${projectDescription}` : '')
  }

  return (
    <div className="min-h-screen bg-slate-950 px-3 py-4 text-slate-200 flex items-center justify-center font-mono selection:bg-cyan-500/30 sm:px-5 sm:py-10">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-[#08101d] shadow-[0px_0px_20px_4px_rgba(6,182,212,0.14)] sm:rounded-3xl sm:shadow-[0px_0px_28px_6px_rgba(6,182,212,0.16)]">
        <div className="flex h-11 items-center justify-between border-b border-slate-800 bg-slate-950 px-3 sm:h-12 sm:px-4">
          <div className="flex gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-red-500 shadow-sm" />
            <div className="h-3.5 w-3.5 rounded-full bg-yellow-500 shadow-sm" />
            <div className="h-3.5 w-3.5 rounded-full bg-green-500 shadow-sm" />
          </div>
          <div className="text-[10px] font-semibold tracking-[0.28em] text-slate-500 sm:text-xs sm:tracking-[0.35em]">
            bash ~ chat
          </div>
          <div className="w-12" />
        </div>

        <div className="p-3 sm:p-6 md:p-8">
          <div className="flex h-[78vh] max-h-180 min-h-130 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:h-[70vh] sm:min-h-105 sm:p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-cyan-400/80 sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
              <span>quick prompt chat</span>
              <span className="text-slate-500">ready</span>
            </div>

            <div className="flex-1 min-h-0 flex flex-col space-y-3 overflow-y-auto overflow-x-hidden pr-1 text-[13px] leading-relaxed sm:space-y-4 sm:text-sm md:text-[15px]">
              {messages.length === 0 ? (
                <div className="max-w-[96%] rounded-2xl rounded-tl-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-3 text-cyan-100 sm:max-w-[92%] sm:px-4">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.28em] text-cyan-300/70 sm:text-[11px] sm:tracking-[0.3em]">Assistant</p>
                  <p className="leading-6 sm:leading-7">Ask about projects, experience, or tech stack. Keep it short and I&apos;ll answer fast.</p>
                </div>
              ) : (
                messages.map((item, index) => {
                  const isUser = item.role === 'user';

                  return (
                    <div
                      key={`${item.role}-${index}`}
                      className={`max-w-[96%] rounded-2xl px-3 py-3 mb-2 sm:max-w-[92%] sm:px-4 sm:mb-3 ${
                          isUser
                            ? 'ml-auto rounded-tr-md border border-slate-700 bg-slate-800/80 text-slate-200'
                            : 'rounded-tl-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-100'
                        }`}>
                      <p className={`mb-2 text-[10px] uppercase tracking-[0.28em] sm:text-[11px] sm:tracking-[0.3em] ${isUser ? 'text-slate-400' : 'text-emerald-300/70'}`}>
                        {isUser ? 'You' : 'Assistant'}
                      </p>
                      {isUser ? (
                        <div className="whitespace-pre-wrap leading-6 text-slate-100 sm:leading-7">{item.text}</div>
                      ) : (
                        <div className="space-y-1">{renderFormattedText(item.text)}</div>
                      )}
                    </div>
                  );
                })
              )}
            </div>


                <form onSubmit={ask} className="mt-3 flex flex-col gap-3 border-t border-slate-800 pt-3 md:flex-row md:items-center">
                  <div className="hidden items-center gap-2 text-cyan-400 sm:flex">
                    <span className="text-slate-500">C:\Satyam_Pandey\Chat {'>'}</span>
                  </div>

                    <div className="flex flex-1 items-center gap-2 sm:gap-3 md:mx-2">
                    <input
                      type="text"
                      placeholder="Type your question..."
                      value={question}
                      onChange={(e)=>setQuestion(e.target.value)}
                      className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-[15px] text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-500/60"
                    />
                    <button
                      className="h-12 shrink-0 rounded-xl border border-cyan-500/40 bg-cyan-500/15 px-4 sm:px-5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-500/25"
                      type='submit'
                    >
                      {loading ? '...' : 'Ask'}
                    </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
  )
}

export default TalkToMe
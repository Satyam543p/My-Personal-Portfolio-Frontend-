import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('Message sent successfully. I will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setStatus(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('Unable to send message right now. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-28" id='contact'>
      <div className="mb-10 max-w-2xl">
        <h2 className="text-4xl md:text-6xl inline-block font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-500 drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
          //Contact <br />
        </h2>
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl mt-10">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
          Share a quick note about your project and I&apos;ll get back to you.
        </p>
      </div>

      <form
        className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-md md:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
        />

        <textarea
          name="message"
          placeholder="Tell me about your project"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-4 w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
        />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-linear-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {status ? <p className="text-sm text-slate-300">{status}</p> : null}
        </div>
      </form>
    </section>
  )
}

export default Contact
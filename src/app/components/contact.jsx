"use client"

import { useState } from "react"
import { Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ email, message })
    // Reset form
    setEmail("")
    setMessage("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">Contact Us</h1>
              <p className="max-w-[700px] text-lg md:text-xl mt-4">
                Have questions? The quickest way to get in touch with us is using the contact information below.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-3 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Send an Email</h2>
              <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <input
                    className="w-full px-4 py-3 rounded-full bg-white text-black placeholder:text-gray-500"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    className="w-full px-4 py-3 rounded-3xl bg-white text-black placeholder:text-gray-500 min-h-[100px]"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium"
                    type="submit"
                  >
                    Submit <span className="ml-2">→</span>
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center space-x-6 mt-2">
                <a href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">WhatsApp</span>
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M10 9H6.56c-1.8 0-3.4 1.4-3.4 3.2 0 1.8 1.6 3.2 3.28 3.2H10" />
                    <path d="M14 9h3.4c1.8 0 3.4 1.4 3.4 3.2 0 1.8-1.6 3.2-3.28 3.2H14" />
                    <line x1="10" y1="12.2" x2="14" y2="12.2" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-center">
            <p className="text-sm">Copyright @ 2025 EduTech</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


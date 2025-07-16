"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full pt-24 pb-0 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-black mb-8 text-center leading-tight">Contact Us</h1>
          {/* Breadcrumb */}
          <div className="w-full flex items-center gap-2 text-sm text-black mb-8">
            <Link href="/" className="font-semibold">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-gray-400">Contact</span>
          </div>
          <div className="w-full border-b border-gray-300 mb-12" />
          {/* CTA Buttons */}
          <div className="flex gap-6 mb-12">
            <a href="#" className="px-8 py-3 rounded-full bg-gray-200 text-black font-bold text-lg">START A PROJECT</a>
            <a href="#" className="px-8 py-3 rounded-full bg-gray-200 text-black font-bold text-lg">WRITE US NOW</a>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="w-full bg-black flex items-center justify-center py-0">
        <div className="relative w-full aspect-video flex items-center justify-center group">
          {/* Premium editorial video with overlay play button */}
          <video
            className="w-full h-full object-cover bg-black rounded-2xl shadow-2xl"
            src="https://videos.pexels.com/video-files/3184417/3184417-hd_1920_1080_25fps.mp4"
            poster="https://images.pexels.com/photos/3184417/pexels-photo-3184417.jpeg?auto=compress&w=1200"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            style={{ filter: 'brightness(0.9) contrast(1.15)' }}
          />
          {/* Play button overlay (editorial look, not functional) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/80 rounded-full p-6 shadow-lg flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.7"/>
                <polygon points="20,16 36,24 20,32" fill="#111" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Small space between video and footer */}
      <div className="w-full h-8 md:h-12" />
      {/* Footer Section */}
      <footer className="w-full bg-black text-white pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {/* CTA */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-400 leading-tight mb-8 text-left">
              Your project could be our next success story.{' '}
              <span className="text-white underline decoration-4 decoration-white">Let’s talk.</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-16">
            {/* Stay Connected */}
            <div>
              <span className="text-lg font-semibold mb-4 block">STAY CONNECTED</span>
              <form className="flex items-center gap-0 mt-4">
                <input type="email" placeholder="Email address" className="bg-gray-700 text-white px-6 py-4 text-lg outline-none w-64" />
                <button type="submit" className="bg-white text-black px-6 py-4 text-lg font-bold">&gt;</button>
              </form>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col gap-2 items-start md:items-end">
              <span className="text-lg">hello@dreamspace.com</span>
              <span className="text-lg">(+233) 50-224-3708</span>
            </div>
          </div>
          {/* Social & Copyright */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mt-16 gap-8">
            <span className="text-xs text-gray-400">© 2024 Dream Space. All Rights Reserved.</span>
            <div className="flex gap-8">
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400 text-2xl"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg></a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400 text-2xl"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.346 3.678 1.327c-.98.98-1.196 2.092-1.255 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.275 2.393 1.255 3.373.981.981 2.093 1.196 3.374 1.255C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.274 3.374-1.255.98-.98 1.196-2.092 1.255-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.275-2.393-1.255-3.373-.981-.981-2.093-1.196-3.374-1.255C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-400 text-2xl"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

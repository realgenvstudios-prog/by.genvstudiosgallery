import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col h-full min-h-[440px] justify-between">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-400 leading-tight mb-12 text-left" style={{letterSpacing: '-0.02em'}}>
            Your project could be our next success story. <Link href="/contact" className="text-white font-extrabold underline decoration-4 decoration-white hover:text-gray-300 transition-colors">Let&apos;s talk.</Link>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full gap-12">
          <div className="flex-1 mb-12 md:mb-0">
            <span className="block text-lg font-semibold mb-6">STAY CONNECTED</span>
            <form className="flex max-w-md">
              <input type="email" placeholder="Email address" className="px-8 py-5 rounded-l-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none w-full text-lg" />
              <button type="submit" className="px-8 py-5 rounded-r-md bg-white text-black font-bold hover:bg-gray-200 transition-all text-lg">
                &rarr;
              </button>
            </form>
          </div>
          <div className="flex-1 flex flex-col md:items-end gap-4 mb-8 md:mb-0 text-right">
            <div className="text-lg">hello@dreamspace.com</div>
            <div className="text-lg">(+233) 50-224-3708</div>
            <div className="flex gap-8 justify-end mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 10.268h-3v-4.604c0-1.099-.021-2.513-1.533-2.513-1.533 0-1.767 1.197-1.767 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v4.729z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center mt-20 text-gray-400 text-lg">
          <div>&copy; 2024 Dream Space. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

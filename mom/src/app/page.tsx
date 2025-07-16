"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function OurWorkCarousel() {
  const images = [
    '/images/our-work-1.jpg',
    '/images/our-work-2.jpg',
    '/images/our-work-3.jpg',
  ];
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-w-[340px] max-w-[520px] w-full">
      <div className="w-full aspect-[5/4] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={images[current]}
          alt={`Our work image ${current + 1}`}
          width={600}
          height={480}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="flex justify-between items-center w-full mt-8 px-8">
        <button
          type="button"
          aria-label="Previous image"
          className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black/80 transition"
          onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 16l-5-6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          type="button"
          aria-label="Next image"
          className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black/80 transition"
          onClick={() => setCurrent((current + 1) % images.length)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 4l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Desktop: Minimal editorial Instruments.com style */}
      <div className="hidden md:block w-full bg-white" style={{paddingTop: 0, marginTop: 0}}>
        {/* Brand: Huge, bold, uppercase, tight to navbar */}
        <div className="flex flex-col items-center w-full" style={{marginTop: 0, paddingTop: 0}}>
          <Link href="/" className="select-none cursor-pointer w-full text-center" style={{marginTop: 0, paddingTop: 0}}>
            <span className="text-black font-extrabold uppercase text-[10vw] leading-none tracking-tight font-sans" style={{letterSpacing:'-0.04em',marginTop: 0, marginBottom: 0, display:'block', paddingTop: 0}}>
              GENVSTUDIOS
            </span>
          </Link>
        </div>
        {/* Video: Large, flush under brand, no border radius */}
        {/* Hero Video with Play/Pause Button (React state) */}
        {(() => {
          const HeroVideo = () => {
            const videoRef = useRef<HTMLVideoElement>(null);
            const [paused, setPaused] = useState(false);

            useEffect(() => {
              const video = videoRef.current;
              if (!video) return;
              const handlePlay = () => setPaused(false);
              const handlePause = () => setPaused(true);
              video.addEventListener('play', handlePlay);
              video.addEventListener('pause', handlePause);
              setPaused(video.paused);
              return () => {
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
              };
            }, []);

            const handleToggle = () => {
              const video = videoRef.current;
              if (!video) return;
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            };

            return (
              <div className="w-full relative group">
                {/* TODO: Replace 'hero.mp4' with your own video in /public/videos/ */}
                <video
                  ref={videoRef}
                  className="w-full h-[98vh] object-cover bg-black rounded-[2.5rem]"
                  src="/videos/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ aspectRatio: '16/9', borderRadius: '2.5rem' }}
                />
                {/* Play/Pause Button Overlay */}
                <button
                  type="button"
                  aria-label={paused ? "Play video" : "Pause video"}
                  className="absolute bottom-8 right-8 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-4 shadow-lg transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
                  onClick={handleToggle}
                >
                  {/* SVG Play/Pause Icon (dynamic) */}
                  {paused ? (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="8,6 22,14 8,22" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 6V22M20 6V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              </div>
            );
          };
          return <HeroVideo />;
        })()}
        {/* Editorial words beneath hero video, Instruments.com style */}
        <section className="w-full bg-white flex flex-col items-center justify-center py-24">
          <h1 className="text-center font-serif text-[2.8rem] md:text-[3.5rem] font-normal text-black leading-tight mb-8 max-w-4xl" style={{lineHeight: '1.08'}}>
            We are a design and technology agency helping brands unlock their full potential.
          </h1>
          <Link href="/contact" className="rounded-full bg-black text-white px-8 py-4 text-lg font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
            Build With Us <span className="ml-2">&rarr;</span>
          </Link>
        </section>
      </div>
      {/* Mobile: keep original editorial and video section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden md:hidden">
        {/* Editorial Section: Brand Experiences & CTA */}
        <section className="w-full bg-gray-50 py-24 px-4 flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full mx-auto">
            <p className="text-3xl font-normal text-black mb-12 text-left leading-tight">To create brand experiences of the highest caliber, we take a multi-disciplinary approach to our work by seamlessly integrating strategy, creative, and technology, and staying in close partnership with our clients.</p>
            <div className="flex items-start">
              <button className="rounded-full bg-black text-white px-8 py-4 text-lg font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
                See our services <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        </section>
        {/* Video background (replace src with your own video) */}
        <video
          className="absolute inset-0 w-full h-full object-cover bg-black md:rounded-[2rem] mt-6"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 pt-12 pb-0 border-t border-gray-300">
        <div className="mb-6">
          <h3 className="text-base font-medium text-black text-left mt-2 mb-0">How We Help</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Card 1 */}
          <div className="flex flex-col px-2 pt-0 pb-8">
            <Image src="/images/webdesign.jpg" alt="Custom Web Design & Development" width={600} height={400} className="rounded-2xl object-cover w-full h-[320px]" />
            <h4 className="font-bold text-base mt-6 mb-2 text-black">Custom Web Design & Development</h4>
            <p className="text-sm text-black/80">Responsive, performant websites built by experts, with precision and tailored to your brand and goals.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col px-2 pt-0 pb-8">
            <Image src="/images/branding.jpg" alt="Branding & Visual Identity" width={600} height={400} className="rounded-2xl object-cover w-full h-[320px]" />
            <h4 className="font-bold text-base mt-6 mb-2 text-black">Branding & Visual Identity</h4>
            <p className="text-sm text-black/80">Memorable logos, color systems, and style assets that convey your unique story.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col px-2 pt-0 pb-8">
            <Image src="/images/marketing.jpg" alt="Digital Marketing & SEO" width={600} height={400} className="rounded-2xl object-cover w-full h-[320px]" />
            <h4 className="font-bold text-base mt-6 mb-2 text-black">Digital Marketing & SEO</h4>
            <p className="text-sm text-black/80">Data-driven strategies SEO, Google Ads, social campaigns, to boost visibility and conversions.</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col px-2 pt-0 pb-8">
            <Image src="/images/ai-content.jpg" alt="AI-Enhanced Content & Photography" width={600} height={400} className="rounded-2xl object-cover w-full h-[320px]" />
            <h4 className="font-bold text-base mt-6 mb-2 text-black">AI-Enhanced Content & Photography</h4>
            <p className="text-sm text-black/80">Real-camera realism: AI-a edits ensure every label, and texture is pixel perfect.</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="border-t border-gray-300 pt-12">
          <h3 className="text-base font-medium text-black text-left mb-6">Our Work</h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Editorial Text */}
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 text-left font-serif">Building and refining business dreams</h2>
              <p className="text-xl md:text-2xl text-black/90 mb-0 text-left max-w-xl">At Genvstudios, we translate business visions into effective digital experiences. From custom websites and brand identities to data-driven marketing campaigns and AI-enhanced imagery, each project reflects our commitment to quality, performance, and local-market insight.</p>
            </div>
            {/* Right: Image Carousel as a React component */}
            <OurWorkCarousel />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-24 px-4 flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full mx-auto relative">
          {/* Top border and left-aligned heading/paragraph */}
          <div className="border-t border-gray-300 pt-8 pb-0 mb-0">
            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-6 text-left">Our Purpose</span>
            <p className="text-2xl md:text-3xl font-normal text-black mb-10 text-left max-w-2xl">At Genvstudios, we empower businesses to reach their full online potential with a digital presence that reflects their vision, engages audiences, and drives growth.</p>
          </div>
          {/* Large overlapping editorial words */}
          <div className="relative w-full h-[420px] md:h-[600px] mb-0">
            <span className="absolute right-0 top-0 text-[8rem] md:text-[13rem] font-extrabold font-gabriela leading-none select-none pointer-events-none" style={{color:'rgba(0,0,0,0.4)',lineHeight:'0.8',zIndex:1}}>Shape</span>
            <span className="absolute left-0 top-[7.5rem] md:top-[12rem] text-[8rem] md:text-[13rem] font-extrabold font-gabriela leading-none select-none pointer-events-none" style={{color:'rgba(0,0,0,0.4)',lineHeight:'0.8',zIndex:2}}>A better</span>
            <span className="absolute right-0 top-[15rem] md:top-[24rem] text-[8rem] md:text-[13rem] font-extrabold font-gabriela leading-none select-none pointer-events-none" style={{color:'rgba(0,0,0,0.4)',lineHeight:'0.8',zIndex:3}}>Future.</span>
          </div>
          {/* Editorial values and CTA, left-aligned below the words */}
          <div className="relative z-10 w-full md:w-1/2 mt-0">
            <p className="text-lg md:text-xl font-normal text-black mb-8 text-left max-w-xl">United by values that guide every part of our work: we put people first, pursue excellence, embrace a growth mindset, and turn truth into action.</p>
            <div className="flex w-full justify-start">
              <Link href="/about" className="rounded-full bg-black text-white px-8 py-4 text-lg font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
                Learn more about us <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Insights & Guides Section */}
      <section className="w-full bg-white py-24 px-4 flex flex-col items-center justify-center border-t border-gray-200">
        <div className="max-w-7xl w-full mx-auto">
          <div className="mb-12">
            <span className="block text-xs text-black/70 mb-8">Insights &amp; Guides</span>
            <h2 className="text-center text-4xl md:text-5xl font-extrabold text-black mb-8">See our latest &amp; greatest</h2>
            <div className="flex justify-center mb-16">
              <button className="rounded-full bg-black text-white px-8 py-4 text-lg font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
                See what is new <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col">
              <Image src="/images/insight-1.jpg" alt="Boardroom" width={600} height={400} className="rounded-2xl mb-4 object-cover w-full h-64" />
              <h4 className="font-bold text-base mb-2 text-black">Building and refining business dreams</h4>
              <p className="text-sm text-black/80">United by values that guide every part of our work: we put people first, pursue excellence, embrace a growth mindset, and turn truth into action.</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col">
              <Image src="/images/insight-2.jpg" alt="Workspace" width={600} height={400} className="rounded-2xl mb-4 object-cover w-full h-64" />
              <h4 className="font-bold text-base mb-2 text-black">Building and refining business dreams</h4>
              <p className="text-sm text-black/80">United by values that guide every part of our work: we put people first, pursue excellence, embrace a growth mindset, and turn truth into action.</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col">
              <Image src="/images/insight-3.jpg" alt="Mobile site" width={600} height={400} className="rounded-2xl mb-4 object-cover w-full h-64" />
              <h4 className="font-bold text-base mb-2 text-black">Building and refining business dreams</h4>
              <p className="text-sm text-black/80">United by values that guide every part of our work: we put people first, pursue excellence, embrace a growth mindset, and turn truth into action.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Editorial Section: Brand Experiences & CTA (matches screenshot) */}
      <section className="w-full bg-gray-50 py-24 px-4 flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full mx-auto">
          <p className="text-3xl md:text-5xl font-normal text-black mb-12 text-left leading-tight">
            To create brand experiences of the highest caliber, we take a multi-disciplinary approach to our work by seamlessly integrating strategy, creative, and technology, and staying in close partnership with our clients.
          </p>
          <div className="flex items-start">
            <Link href="/services" className="rounded-full bg-black text-white px-8 py-4 text-lg font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
              See our services <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      {/* ...existing code... */}
      <Footer />
    </main>
  );
}


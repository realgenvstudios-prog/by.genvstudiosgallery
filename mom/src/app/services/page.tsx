"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";


// Add keyframes for horizontal movement
const styles = `
@keyframes marqueeLeft {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.marquee-row {
  display: flex;
  gap: 3rem;
  animation: marqueeLeft 32s linear infinite;
}
`;

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Editorial Hero Section */}
      <section className="w-full flex flex-col items-center pt-20 pb-12 bg-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black text-center mb-12 leading-tight">
          We help Businesses&nbsp; <span className="inline-block">navigate change and create lasting growth.</span>
        </h1>
        {/* Hero images: alternate left/right/left visually, change src/alt below to update images */}
        {/* Inject custom animation styles */}
        <style>{styles}</style>
        <div className="overflow-x-hidden w-full px-2 md:px-0" style={{height: '480px'}}>
          <div className="marquee-row" style={{alignItems: 'center'}}>
            <div className="flex flex-col items-center" style={{marginTop: '40px'}}>
              <Image 
                src="/images/service-1.jpg" 
                alt="Raw Homes" 
                width={900} height={900} 
                className="w-[500px] md:w-[600px] rounded-3xl object-cover shadow-2xl" 
              />
            </div>
            <div className="flex flex-col items-center" style={{marginTop: '0px'}}>
              <Image 
                src="/images/service-2.jpg" 
                alt="Event Iconic" 
                width={900} height={900} 
                className="w-[500px] md:w-[600px] rounded-3xl object-cover shadow-2xl" 
              />
            </div>
            <div className="flex flex-col items-center" style={{marginTop: '60px'}}>
              <Image 
                src="/images/service-3.jpg" 
                alt="Suncity" 
                width={900} height={900} 
                className="w-[500px] md:w-[600px] rounded-3xl object-cover shadow-2xl" 
              />
            </div>
            <div className="flex flex-col items-center" style={{marginTop: '20px'}}>
              <Image 
                src="/images/service-4.jpg" 
                alt="Fresh Nut" 
                width={900} height={900} 
                className="w-[500px] md:w-[600px] rounded-3xl object-cover shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      {/* ...existing code... */}
      {/* Editorial Section: Partnership & CTA */}
      <section className="w-full py-20 px-4 flex flex-col items-center justify-center bg-white">
        <div className="max-w-4xl w-full mx-auto">
          <p className="text-2xl md:text-4xl font-normal text-black mb-12 text-left leading-tight">
            We partner with businesses at key inflection points, bringing together web development, branding, digital marketing, and AI-enhanced content in a seamless workflow. By helping clients clarify priorities, iterate quickly, and seize opportunities, we deliver online experiences that elevate their brand and drive growth.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="rounded-full bg-black text-white px-8 py-4 text-lg font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
            View Our Work <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </section>
      {/* What we offer section */}
      <section className="w-full py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs text-black/60">What we offer</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          {/* Brand Block */}
          <div className="flex flex-col md:flex-row gap-8 py-12 border-b border-gray-200">
            <div className="md:w-1/3 flex-shrink-0">
              <h2 className="text-5xl font-extrabold text-black mb-6">Brand</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-black mb-6">At Genvstudios, we help businesses define and express their unique identity. From discovering core values to crafting cohesive visual systems, we ensure your brand resonates with your audience and stands out in the market. Every element is built to reflect your vision and support growth online.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-black/80 text-base">
                <ul className="space-y-2">
                  <li>Brand Creation, Refreshes & Repositioning</li>
                  <li>Brand Identity & Visual Systems</li>
                  <li>Brand Storytelling & Editorial Platforms</li>
                  <li>Brand Rollout & Guidelines</li>
                  <li>Content Strategy & Messaging Frameworks</li>
                </ul>
                <ul className="space-y-2">
                  <li>Consumer & Market Research</li>
                  <li>Design Systems & Tooling</li>
                  <li>Naming & Brand Narrative</li>
                  <li>Website Design & Development</li>
                  <li>AI-Enhanced Content Creation</li>
                </ul>
              </div>
              <button className="rounded-full bg-black text-white px-6 py-3 text-base font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
                See work <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
          {/* Marketing Block */}
          <div className="flex flex-col md:flex-row gap-8 py-12">
            <div className="md:w-1/3 flex-shrink-0">
              <h2 className="text-5xl font-extrabold text-black mb-6">Marketing</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-black mb-6">As a partner, we specialize in audience insights, market data, content production, and channel strategy, creating integrated marketing plans and channel-right creative that are culturally relevant and highly impactful.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-black/80 text-base">
                <ul className="space-y-2">
                  <li>Audience Research & Segmentation</li>
                  <li>Integrated Marketing Strategy</li>
                  <li>Channel Ecosystem Definition</li>
                  <li>Product & Growth Marketing</li>
                  <li>Brand Campaigns, Activations, & Social</li>
                </ul>
                <ul className="space-y-2">
                  <li>Content Ideation & Art Direction</li>
                  <li>Scalable Content Systems</li>
                  <li>Creator Management</li>
                  <li>Community Management</li>
                </ul>
              </div>
              <button className="rounded-full bg-black text-white px-6 py-3 text-base font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
                See work <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
          {/* Product Block */}
          <div className="flex flex-col md:flex-row gap-8 py-12 border-t border-gray-200">
            <div className="md:w-1/3 flex-shrink-0">
              <h2 className="text-5xl font-extrabold text-black mb-6">Product</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-black mb-6">Shaping a company’s digital future means staying ahead of a rapidly changing world. We are experts in both emerging technologies and evolving consumer behaviors, creating apps, websites, and experiences that redefine industries and transform businesses.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-black/80 text-base">
                <ul className="space-y-2">
                  <li>Product Strategy & Concepting</li>
                  <li>Product-Market Fit, Concept & Usability Testing</li>
                  <li>Product Positioning & GTM Planning</li>
                  <li>UX & UI Design Systems</li>
                  <li>Mobile App Design & Development</li>
                </ul>
                <ul className="space-y-2">
                  <li>E-commerce Experiences</li>
                  <li>UX Writing</li>
                  <li>Iterative Prototyping</li>
                  <li>Full-Stack Development</li>
                  <li>Long-Term Roadmapping</li>
                </ul>
              </div>
              <button className="rounded-full bg-black text-white px-6 py-3 text-base font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
                See work <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ...existing code... */}
      {/* How we work section (moved below) */}
      <section className="w-full py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs text-black/60">How we work</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Discover & Align</h3>
              <p className="text-base text-black/80">We start with a quick chat or questionnaire to understand your goals, audience, and challenges. This ensures we’re building the right solution from day one.</p>
            </div>
            {/* Card 2 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Plan & Strategize</h3>
              <p className="text-base text-black/80">Based on insights, we map out the site structure, user journeys, and key features. We set clear objectives (e.g., lead generation, sales, brand visibility) and define success metrics.</p>
            </div>
            {/* Card 3 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Design & Prototype</h3>
              <p className="text-base text-black/80">We create wireframes to nail the layout and flow, then develop polished mockups reflecting your brand. You review and give feedback so the design truly fits your vision.</p>
            </div>
            {/* Card 4 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Build & Integrate</h3>
              <p className="text-base text-black/80">With approved designs, we code the site (or set up your CMS) focusing on performance, responsiveness, and SEO basics. We integrate any tools—forms, analytics, e-commerce or third-party services—as needed.</p>
            </div>
            {/* Card 5 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Review & Test</h3>
              <p className="text-base text-black/80">Before launch, we run cross-device/browser checks, test forms and interactions, and optimize images/scripts for speed. You get to preview and request tweaks so everything works smoothly.</p>
            </div>
            {/* Card 6 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Launch & Handoff</h3>
              <p className="text-base text-black/80">We deploy your site: configure hosting, domain, SSL, and do a final smoke-test live. Then we provide any CMS training or documentation so you can update content yourself.</p>
            </div>
            {/* Card 7 */}
            <div>
              <h3 className="font-bold text-lg mb-2">Monitor & Grow</h3>
              <p className="text-base text-black/80">After launch, we track real-user metrics, fix any issues, and suggest improvements (A/B tests, new content, SEO tweaks). We offer ongoing maintenance and growth consulting to keep your site performing and evolving.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA Section (moved to end) */}
      <section className="w-full py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[3rem] md:text-[6rem] font-extrabold text-gray-500 leading-tight mb-12 text-left" style={{lineHeight:'1.05'}}>
            We’d love<br />to work<br />with you!
          </h2>
          <div className="flex items-center justify-start mt-4">
            <button className="rounded-full bg-black text-white px-6 py-3 text-base font-medium flex items-center gap-2 shadow-lg hover:bg-black/90 transition-all">
              Get in touch <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section for Admin Updates */}
      <section className="w-full py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8">Blog</h2>
          <div className="space-y-8">
            {/* Example blog post, replace with dynamic content or CMS later */}
            <article className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-bold text-black mb-2">How to Build a Modern Brand Online</h3>
              <p className="text-base text-gray-700 mb-2">Tips and strategies for launching and growing your business presence in the digital age.</p>
              <span className="text-xs text-gray-400">July 2025</span>
            </article>
            <article className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Design Systems for Fast-Growing Teams</h3>
              <p className="text-base text-gray-700 mb-2">Why scalable design systems matter and how to implement them for your team.</p>
              <span className="text-xs text-gray-400">June 2025</span>
            </article>
            {/* Add more blog posts here as needed */}
          </div>
        </div>
      </section>
      {/* Insight & Guides Section with black headings */}
      <section className="w-full py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8">Insight & Guides</h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Building and refining business dreams:</h3>
              <p className="text-base text-gray-700">Practical advice and inspiration for entrepreneurs and business owners.</p>
            </article>
            <article>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Digital Marketing Trends for 2025</h3>
              <p className="text-base text-gray-700">Stay ahead with the latest strategies and tools for online growth.</p>
            </article>
            {/* Add more insights/guides here as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-20 pb-10 px-4 mt-0">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* Large headline & CTA */}
          <div>
            <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold text-gray-400 leading-tight mb-8 text-left" style={{lineHeight:'1.05'}}>
              Your project could be our next<br className="hidden md:block" />success story. <span className="text-white underline decoration-4 decoration-white">Let’s talk.</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-end w-full">
            {/* Newsletter */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="text-lg font-semibold tracking-wide mb-2">STAY CONNECTED</span>
              <form className="flex w-full max-w-xs">
                <input type="email" placeholder="Email address" className="bg-gray-800 text-white placeholder-gray-400 px-4 py-3 flex-1 rounded-l-md focus:outline-none" />
                <button type="submit" className="bg-gray-600 px-6 py-3 rounded-r-md flex items-center justify-center hover:bg-white hover:text-black transition">
                  <span className="text-xl">&rarr;</span>
                </button>
              </form>
            </div>
            {/* Contact info */}
            <div className="flex flex-col gap-2 md:w-1/3 text-lg text-white">
              <a href="mailto:hello@genvstudios.com" className="hover:underline">hello@genvstudios.com</a>
              <span>(+233) 50-224-3708</span>
            </div>
            {/* Social icons */}
            <div className="flex gap-6 md:w-1/3 justify-end items-center mt-8 md:mt-0">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-16">&copy; 2024 GENVSTUDIOS. All Rights Reserved.</div>
        </div>
      </footer>
    </main>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Comprehensive Documentation',
    desc: 'Access clear, detailed documentation that simplifies integration and accelerates your payout setup.',
  },
  {
    title: 'Quick Start SDKs',
    desc: 'Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.',
  },
  {
    title: 'Sandbox Environment',
    desc: 'Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.',
  },
  {
    title: 'Live Monitoring',
    desc: 'Monitor transactions and payout logs in real-time to ensure accuracy and transparency.',
  },
  {
    title: 'Multi-Currency Support',
    desc: 'Supports multiple currencies to help scale across global markets effortlessly.',
  },
];

export default function PayoutScrollSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.feature-item');

      items.forEach((el) => {
        const heading = (el as HTMLElement).querySelector('.feature-title');

        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          toggleClass: {
            targets: heading,
            className: 'text-white',
          },
          scroller: scrollRef.current, // Important: scope to the scrollable container
        });
      });

      ScrollTrigger.create({
        trigger: scrollRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const dot = document.querySelector('.progress-dot') as HTMLElement;
          if (dot) {
            dot.style.top = `${self.progress * 100}%`;
          }
        },
        scroller: scrollRef.current,
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full h-screen bg-black text-gray-500 flex px-6 py-20">
      {/* Left scrollable panel */}
      <div className="relative w-full md:w-1/2 h-full pr-8">
        {/* Glow Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-transparent rounded-full shadow-lg"></div>
        <div className="absolute left-[-6px] w-3 h-3 bg-purple-400 rounded-full progress-dot transition-all duration-200 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

        {/* Scrollable content */}
        <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            Streamlined for Payout Ease and Efficiency
          </h2>
          <div
          ref={scrollRef}
          className="h-1/2 overflow-y-scroll scroll-smooth pr-4 pl-6 space-y-12 border-l border-purple-700 scrollbar-thin scrollbar-thumb-purple-600"
        >
          

          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <h3 className="feature-title text-lg font-semibold text-gray-400 transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-gray-500 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
        </div>
        
      </div>

      {/* Right side placeholder */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <div className="text-purple-400 text-lg">[Right visual content here]</div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lines = [
    'We focus on your finances,',
    'you focus on what matters',
    ' most. Your finance our',
    'pride, Always Safe & Reliable.'
  ];

export default function ScrollPinText() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const chars = section.querySelectorAll('.char');

    // Set initial state: dark text, no shadow
    gsap.set(chars, {
        color: '#18191a',
        textShadow: '0px 0px 0px rgba(0,0,0,0)',
        willChange: 'text-shadow, color',
    });

    // Animate with ScrollTrigger
    gsap.to(chars, {
        color: '#ffffff',
        textShadow: '0px 0px 12px rgba(147, 51, 234, 0.8), 0px 0px 24px rgba(147, 51, 234, 0.5)',
        stagger: 0.05,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 0.75,
          markers: false,
        },
      });
      

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-screen">
      <div className="w-[90%] md:w-[85%] h-full mx-auto flex items-center">
        <div className="text-[11.4vw] md:text-[5.8vw] leading-snug flex flex-wrap font-sans font-bold">
        {lines.map((line, lineIndex) => (
  <div key={lineIndex} className="w-full flex flex-wrap">
    {line.split('').map((char, charIndex) => (
      <span
        key={`${lineIndex}-${charIndex}`}
        className="char"
        style={{
          display: 'inline-block',
          whiteSpace: char === ' ' ? 'pre' : 'normal',
        }}
      >
        {char}
      </span>
    ))}
  </div>
))}

        </div>
      </div>
    </section>
  );
}

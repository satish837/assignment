'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !overlayRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1500',
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power1.out' },
        '+=0.1' 
      );

      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 2, 
          transformOrigin: '50% 50%',
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
        },
        '<' 
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* 🎞️ Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/spotlight-desktop.mp4" type="video/mp4" />
      </video>

      {/* 🪄 Full black overlay with SVG mask (starts hidden) */}
      <div
  ref={overlayRef}
  className="absolute inset-0 flex items-center justify-center z-10"
  style={{ opacity: 0 }}
>
  <svg
    className="w-full h-full"
    viewBox="0 0 1000 1000"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <mask id="text-mask" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <text
          ref={textRef}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="120"
          fontWeight="bold"
          fill="black"
        >
          BizSettle
        </text>
      </mask>
    </defs>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="black"
      mask="url(#text-mask)"
    />
  </svg>
</div>

    </section>
  );
}

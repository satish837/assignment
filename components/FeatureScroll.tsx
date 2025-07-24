'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
];

export default function FeatureScroll() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarHandleRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.3 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top center+=50',
              end: 'bottom center',
              scrub: true,
              scroller: scrollContainer,
            },
          }
        );
      });
    }, scrollContainer);

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = scrollTop / scrollHeight;

      const trackHeight = scrollContainer.clientHeight;
      const handleHeight = 50;
      const maxTop = trackHeight - handleHeight;

      if (scrollbarHandleRef.current) {
        scrollbarHandleRef.current.style.top = `${progress * maxTop}px`;
      }

      if (progressFillRef.current) {
        progressFillRef.current.style.height = `${progress * 90}%`;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full text-white py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="w-[60%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/streamline-for-payout-bg.png"
          alt="background"
          width={24}
          height={50}
          className="w-full h-auto"
        />
      </div>

      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative space-y-6 md:pr-[5rem] order-2 md:order-1 "
        >
          <div className="inline-block animate-borderGlow rounded-full p-[2px] bg-[length:200%_200%] bg-gradient-to-r from-[#234151] via-[#1a2a33] to-[#121516] ">
            <div className="rounded-full bg-[#050b14] px-4 py-2 text-[#B5B0B7] text-sm lg:text-[1rem] font-sans">
              Payout Service Centric 
            </div>
          </div>

          <h2 className="w-full text-2xl md:text-4xl sm:text-5xl font-medium font-sans md:leading-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent md:pt-4 pb-8">
            <span className="mb-4 inline md:block md:no-wrap">Streamlined for Payout Ease</span> 
            <span>and Efficiency</span>
          </h2>

          {/* Scrollable Container */}
          <div className="relative">
            {/* Scrollbar Track */}
            <div className="absolute -left-10 top-0 bottom-0 w-[24px] overflow-hidden">
              <div className="w-[2px] h-full bg-[#1f2023] absolute left-1/2 transform -translate-x-1/2" />
              <div
                ref={progressFillRef}
                className="absolute left-1/2 transform -translate-x-1/2 w-[4px] transition-all duration-100 ease-out bg-gradient-to-b from-[#c58084] via-[#c06b9a] to-[#ab55bb]"
                style={{ height: '10%', top: 0 }}
              />
              <div
                ref={scrollbarHandleRef}
                className="absolute left-0 top-[9%] w-[24px] h-[50px] z-20 transition-all duration-200 ease-out"
              >
                <Image
                  src="/scroll-handle.png"
                  alt="scroll handle"
                  width={24}
                  height={50}
                  className="w-6 h-auto"
                />
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              ref={scrollContainerRef}
              className="features-scroll-container relative overflow-y-auto max-h-[350px] pb-[40px] md:pb-[100px] scroll-smooth"
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className="relative mb-10 last:mb-0"
                >
                  <h3 className="text-white text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-start">
            <Link href="/signup">
              <button className="relative inline-block p-px leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-posans group rounded-xl hover:shadow-[#2a5268]">
                <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute inset-0 rounded-xl bg-[radial-gradient(75%_100%_at_50%_0%,rgba(41,57,117,1)_10%,rgba(32,26,76,1)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative z-10 flex items-center px-6 py-3 rounded-xl bg-gray-950/50 ring-1 ring-[white]/10 font-sans">
                  <span className="text-base">Get Started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center md:pl-[5rem] order-1 md:order-2"
        >
          <Image
            src="/feature-scroll-hex-thumb.png"
            alt="hexagon"
            quality={100}
            width={1127}
            height={649}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

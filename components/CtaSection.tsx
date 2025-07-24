'use client';

import { ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CtaSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* 🔊 Hidden audio element */}
      <audio ref={audioRef} src="/click-sound.wav" preload="auto" />

      {/* Background Grid with looping fade */}
      <div className="absolute w-[85%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex justify-between px-10 z-0 pointer-events-none">
        <motion.div
          className="grid w-[25%] self-center"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/cta-section-bg.png"
            alt="scroll handle"
            width={348}
            height={261}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="grid w-[25%] self-center"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <Image
            src="/cta-section-bg.png"
            alt="scroll handle"
            width={348}
            height={261}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Foreground Content with scroll animations */}
      <div className="relative z-10 container mx-auto w-[85%] flex flex-col lg:flex-row items-center justify-between">
        {/* Text: animate from left */}
        <motion.h2
          className="text-2xl lg:text-5xl font-semibold text-neutral-200 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="block md:mb-6">Let’s build the</span>
          <span className="block">future of finance together</span>
        </motion.h2>

        {/* CTA Button: animate from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="javascript:void(0)">
            <button
              onClick={handleClick}
              className="relative inline-block p-px leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl hover:shadow-[#2a5268] mt-20 md:mt-0 md:mr-[8rem]"
            >
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[radial-gradient(75%_100%_at_50%_0%,rgba(41,57,117,1)_10%,rgba(32,26,76,1)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative z-10 flex items-center px-6 py-3 rounded-xl bg-gray-950/50 ring-1 ring-[white]/10 font-sans">
                <span className="text-base">Get Started</span>
                <ArrowRight className="w-6 h-6 ml-2" />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

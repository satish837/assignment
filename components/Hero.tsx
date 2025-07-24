'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  return (
    <section className="relative z-0 w-full min-h-screen text-white overflow-hidden mb-20 md:mb-0">
            <audio ref={audioRef} src="/click-sound.wav" preload="auto" />

      <div className="mx-auto w-[90%] md:w-[85%] pt-10 md:pt-20 flex flex-col-reverse lg:flex-row justify-end items-center relative">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="flex-1 w-full space-y-6"
        >
          <div className="w-full lg:w-[65%] lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-[70%] px-2">
            <div className="inline-block animate-borderGlow rounded-full p-[2px] bg-[length:200%_200%] bg-gradient-to-r from-[#234151] via-[#1a2a33] to-[#121516] mb-8">
              <div className="rounded-full bg-[#050b14] px-4 py-2 text-[#B5B0B7] text-sm lg:text-[1rem] font-sans">
                Pay Smart. Pay Fast
              </div>
            </div>

            <h1 className="text-xl md:text-5xl xl:text-[3.6rem] font-sans font-medium mb-6">
              <span className="bg-gradient-to-r from-[#fdfdfe] to-[#635786] bg-clip-text text-transparent md:block pb-4">
                End-to-End Payout & Payroll
              </span>
              <span className="bg-gradient-to-r from-[#fdfdfe] to-[#635786] bg-clip-text text-transparent block md:pb-4">
                Solutions for Digital Era.
              </span>
            </h1>

            <p className="text-[#B5B0B7] text-base md:text-xl max-w-lg mb-10 font-sans font-normal">
              Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.
            </p>

            <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-0 sm:space-x-4">
            <Link href="#">
                <button
                  onClick={handleClick}
                  className="relative inline-block p-px leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-posans group rounded-full hover:shadow-[#2a5268]"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(41,57,117,1)_10%,rgba(32,26,76,1)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative z-10 flex items-center px-4 md:px-6 py-3 rounded-full bg-gray-950/50 ring-1 ring-[white]/10 font-sans">
                    <span className="text-base">Reach Out</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </Link>

              <Link href="#" className="sm:ml-4">
                <button
                  onClick={handleClick}
                  className="relative inline-block p-px leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-posans group rounded-full hover:shadow-[#2a5268]"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(41,57,117,1)_10%,rgba(32,26,76,1)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative z-10 flex items-center px-4 md:px-6 py-3 rounded-full bg-gray-950/50 ring-1 ring-[white]/10 font-sans">
                    <span className="text-base">Get Started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="relative w-full lg:w-[65%] flex justify-center lg:justify-end mt-10 lg:mt-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full pointer-events-none"
          >
            <Image
              src="/spotlight-robot-thumb.png"
              alt="AI Robot"
              priority
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Floating Tags */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className=" absolute -top-[3rem] md:top-[20%] right-[35%] md:-right-[5%] bg-white/10 border border-white/20 text-base md:text-lg px-3 py-1 rounded-lg text-white backdrop-blur-md shadow-sm"
          >
            Sales Product Screening
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className=" absolute top-16 right-[60%] md:top-[35%] md:right-14 bg-white/10 border border-white/20 text-base md:text-lg px-3 py-1 rounded-lg text-white backdrop-blur-md shadow-sm"
          >
            Transactions
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className=" absolute top-[70%] left-5 md:top-[40%] md:left-[30%] px-3 py-1 rounded-lg text-base md:text-lg text-white bg-white/10 border border-white/20 backdrop-blur-md shadow-sm"
          >
            Payout process
          </motion.div>
        </div>
      </div>
    </section>
  );
}

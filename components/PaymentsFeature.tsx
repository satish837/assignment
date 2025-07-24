'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PaymentsFeature() {
  return (
    <section className="w-full text-white flex items-center justify-center relative">
      <div className="w-[90%] md:w-[85%] grid grid-cols-1 md:grid-cols-2 items-start relative mx-auto">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-4"
        >
          {/* Lightning with flicker */}
          <motion.div
            className="w-2/3 absolute right-[15%] -top-[15%] scale-[150%] pointer-events-none z-0"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 1, 0.4, 1, 0.7, 1], // keyframes for flicker
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
                repeatDelay: 50,
            }}
            viewport={{ once: false }}
          >
            <Image
              src="/lightning-circle.png"
              alt="Lightning Flicker"
              quality={100}
              width={1127}
              height={649}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text Content */}
          <div className="relative z-9">
            <div className="inline-block animate-borderGlow rounded-full p-[2px] bg-[length:200%_200%] bg-gradient-to-r from-[#234151] via-[#1a2a33] to-[#121516] mb-8">
              <div className="rounded-full bg-[#050b14] px-4 py-2 text-[#B5B0B7] text-sm lg:text-[1rem] font-sans">
                Reliable, and Efficient
              </div>
            </div>

            <h2 className="text-2xl sm:text-5xl font-medium font-sans leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2 md:mb-4">
              <span className="block pb-2 md:pb-3">Simplify the</span>
              <span className="block pb-0 md:pb-3">payments process</span>
            </h2>

            <p className="text-white text-lg md:text-xl max-w-full mb-5 md:mb-0">
              Tools crafted to simplify and enhance your payout processes.
            </p>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          <Image
            src="/sandbox-thumb.png"
            alt="Sandbox Thumb"
            quality={100}
            width={1127}
            height={649}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

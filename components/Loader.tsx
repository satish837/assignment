'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/loader-sound.mp3');
    audioRef.current = audio;

    let timeout: NodeJS.Timeout;

    const handleFinish = () => {
      setVisible(false);
      onFinish();
    };

    audio.play().then(() => {
      audio.onended = handleFinish;
      // Fallback in case onended doesn't fire
      timeout = setTimeout(handleFinish, audio.duration * 1000 + 500);
    }).catch(() => {
      // If audio play fails, fallback to timer
      timeout = setTimeout(handleFinish, 3000);
    });

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center flex-col text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            UzOPay
          </motion.div>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

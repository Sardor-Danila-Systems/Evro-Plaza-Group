'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Initial page load: wait for full window load (images, fonts), min 900ms
  useEffect(() => {
    const minDelay = new Promise<void>((resolve) => setTimeout(resolve, 900));
    const pageReady =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener('load', () => resolve(), { once: true }));

    Promise.all([minDelay, pageReady]).then(() => setLoading(false));

    const fallback = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(fallback);
  }, []);

  // Route changes: briefly show the loader so heavy pages/images never flash unstyled
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Lock scroll while the loader is visible
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] bg-[#121214] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-14 h-14 sm:w-[72px] sm:h-[72px]"
            >
              <Image src="/brand/logo-icon.png" alt="Evro Plaza" fill className="object-contain" priority />
            </motion.div>

            <div className="font-sans text-2xl sm:text-3xl font-bold tracking-widest text-white flex items-center">
              EVRO
              <span className="text-[#C4A47C] font-light ml-1.5 border-l border-white/20 pl-2">PLAZA</span>
            </div>

            <div className="relative w-40 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 bg-[#C4A47C] rounded-full"
                animate={{ left: ['-35%', '100%'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

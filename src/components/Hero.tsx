import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1554941068-a252680d25d9?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    })
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30, mass: 1 },
              opacity: { duration: 0.8 },
              scale: { duration: 1.2, ease: "easeOut" }
            }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentImageIndex]}
              className="w-full h-full object-cover brightness-[0.55]"
              alt="Artistic Photography Moment"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 text-white max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-[6.5vw] lg:text-[4.5vw] font-serif leading-[0.85] tracking-tighter text-center"
        >
          Capturing the Invisible Thread
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <a href="#portfolio" className="group flex items-center gap-3 font-display uppercase text-[11px] tracking-widest bg-white text-studio-ink px-8 py-4 rounded-full transition-all hover:bg-studio-accent hover:text-white">
            Explore Portfolio
          </a>
          <a href="#exhibitions" className="group flex items-center gap-3 font-display uppercase text-[11px] tracking-widest bg-white text-studio-ink px-8 py-4 rounded-full transition-all hover:bg-studio-accent hover:text-white">
            Exhibitions
          </a>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-6 bottom-12 lg:left-24 lg:bottom-12 z-20 flex gap-4">
        <button
          onClick={prevImage}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-studio-ink transition-all backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-studio-ink transition-all backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute right-12 bottom-12 hidden lg:flex flex-col items-center gap-8 text-white mix-blend-difference"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.5em] rotate-90 translate-y-8">Scroll</span>
        <div className="w-px h-24 bg-white/30" />
      </motion.div>
    </section>
  );
}

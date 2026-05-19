import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const EXHIBITIONS = [
  {
    city: 'Paris',
    country: 'FR',
    year: '2024',
    gallery: "Galerie d'Art Moderne",
    image: 'https://images.unsplash.com/photo-1554941068-a252680d25d9?auto=format&fit=crop&q=80&w=2000',
    description: 'A study of urban light and shadow in the heart of the French capital.'
  },
  {
    city: 'Tokyo',
    country: 'JP',
    year: '2024',
    gallery: 'Shibuya Visual Arts',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000',
    description: 'Exploring the boundary between traditional soul and neon futures.'
  },
  {
    city: 'New York',
    country: 'US',
    year: '2023',
    gallery: 'The Chelsea Collective',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=2000',
    description: 'Raw energy and intimate portraiture from the streets of Manhattan.'
  },
  {
    city: 'Addis Ababa',
    country: 'ET',
    year: '2023',
    gallery: 'National Museum of Ethiopia',
    image: 'https://plus.unsplash.com/premium_photo-1712000451123-16ab37e9ff5c?q=80&w=2000',
    description: 'Celebrating the timeless beauty and vibrant culture of the Horn of Africa.'
  },
];

export default function Exhibitions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EXHIBITIONS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EXHIBITIONS.length) % EXHIBITIONS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="exhibitions" className="relative py-24 lg:py-48 px-6 lg:px-24 bg-white border-t border-studio-ink/5 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-studio-bone/30 -z-0 translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-studio-accent mb-6 block">03 — Presence</span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-studio-ink">
          <h2 className="text-6xl lg:text-8xl tracking-tighter italic">Exhibitions</h2>
          <div className="flex items-center gap-12">
            <p className="max-w-xs text-sm opacity-50 leading-relaxed font-bold text-black hidden md:block">
              Sharing narratives through physical spaces. Our global presence bridges cultures and perspectives.
            </p>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-studio-ink/10 flex items-center justify-center hover:bg-studio-ink hover:text-white transition-all shadow-sm"
                aria-label="Previous exhibition"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-studio-ink/10 flex items-center justify-center hover:bg-studio-ink hover:text-white transition-all shadow-sm"
                aria-label="Next exhibition"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full bg-studio-bone rounded-[2.5rem] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="relative h-full overflow-hidden group">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, ease: "linear" }}
                  src={EXHIBITIONS[currentIndex].image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={`${EXHIBITIONS[currentIndex].city} exhibition`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
              </div>

              <div className="p-8 lg:p-20 flex flex-col justify-center bg-studio-ink text-white relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-display text-[11px] uppercase tracking-widest text-studio-accent font-bold">{EXHIBITIONS[currentIndex].year}</span>
                    <div className="w-10 h-px bg-studio-accent/30" />
                    <span className="font-display text-[11px] uppercase tracking-widest text-white/50">{EXHIBITIONS[currentIndex].country}</span>
                  </div>

                  <h3 className="text-5xl lg:text-7xl font-serif mb-6 leading-none">{EXHIBITIONS[currentIndex].city}</h3>
                  <p className="text-studio-accent font-display text-[14px] uppercase tracking-[0.2em] mb-10 font-medium">{EXHIBITIONS[currentIndex].gallery}</p>

                  <p className="text-white/60 font-light leading-relaxed max-w-sm mb-16 italic text-lg">
                    "{EXHIBITIONS[currentIndex].description}"
                  </p>

                  <div className="flex items-center gap-6 text-[12px] uppercase tracking-[0.4em] font-bold text-white/80">
                    <span className="text-studio-accent">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <div className="relative w-40 h-px bg-white/10">
                      <motion.div
                        layoutId="slider-progress"
                        className="absolute top-0 left-0 h-full bg-studio-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        style={{ width: `${((currentIndex + 1) / EXHIBITIONS.length) * 100}%` }}
                      />
                    </div>
                    <span className="opacity-30">{String(EXHIBITIONS.length).padStart(2, '0')}</span>
                  </div>
                </motion.div>

                {/* Abstract corner element */}
                <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none select-none">
                  <span className="text-[120px] font-serif leading-none">M</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

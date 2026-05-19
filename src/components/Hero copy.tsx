import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-end px-6 pb-12 lg:px-24 lg:pb-24 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover brightness-[0.55]"
          alt="Artistic Wedding Moment"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-white max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-[10px] uppercase tracking-[0.4em] mb-4 opacity-80"
        >
          International Photography Studio — Addis Ababa Ethiopia
        </motion.p>

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
          className="mt-12 flex items-center gap-6"
        >
          <a href="#portfolio" className="group flex items-center gap-3 font-display uppercase text-[11px] tracking-widest bg-white text-studio-ink px-8 py-4 rounded-full transition-all hover:bg-studio-accent hover:text-white">
            Explore Portfolio
          </a>
          <div className="hidden lg:block w-32 h-px bg-white/30" />
          <p className="hidden lg:block max-w-xs text-xs opacity-60 leading-relaxed font-light">
            Miki Studio focuses on the intersection of light, shadow, and the raw human experience. We create visual narratives that transcend borders.
          </p>
        </motion.div>
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

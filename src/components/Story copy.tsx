import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="py-24 lg:py-48 px-6 lg:px-24 bg-studio-ink text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="aspect-square bg-studio-accent/20 rounded-full flex items-center justify-center relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800"
              className="w-4/5 h-4/5 object-cover rounded-full"
              alt="The Photographer"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Abstract elements */}
          <div className="absolute top-0 -left-12 text-stroke text-white/5 text-[200px] leading-none select-none pointer-events-none">MIKI</div>
        </div>

        <div>
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-studio-accent mb-6 block">02 — The Vision</span>
          <h2 className="text-5xl lg:text-7xl mb-8 leading-tight tracking-tighter">Photography is the <span className="italic">language</span> of the soul.</h2>
          <div className="space-y-6 text-white/70 font-light leading-relaxed max-w-lg">
            <p>Miki Studio was founded on the belief that a photograph isn't just a capture of a moment, but an extraction of the essence beneath the surface.</p>
            <p>Born in Kyoto and refined in the galleries of Chelsea, NYC, Miki's work blends Eastern minimalism with Western expressive realism. Each collection is a quiet dialogue between the subject and the observer.</p>
            <p>Selected exhibitions in Paris, London, and Tokyo have solidified Miki Studio as a premiere destination for high-end visual storytelling.</p>
          </div>
          
          <div className="mt-12 flex gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="text-3xl font-serif">12</p>
              <p className="font-display text-[9px] uppercase tracking-widest text-white/50">Global Awards</p>
            </div>
            <div>
              <p className="text-3xl font-serif">40+</p>
              <p className="font-display text-[9px] uppercase tracking-widest text-white/50">Exhibitions</p>
            </div>
            <div>
              <p className="text-3xl font-serif">Paris</p>
              <p className="font-display text-[9px] uppercase tracking-widest text-white/50">Current Base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

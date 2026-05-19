import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { CATEGORIES, GALLERY_ITEMS } from '../constants';

interface PortfolioProps {
  onSelectImage: (item: typeof GALLERY_ITEMS[0]) => void;
}

export default function Portfolio({ onSelectImage }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-48 px-4 lg:px-24 bg-white">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div>
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-studio-accent mb-4 block">01 — Selection</span>
          <h2 className="text-6xl lg:text-8xl tracking-tight">Showroom</h2>
        </div>
        
        <div className="flex flex-wrap gap-4 text-[10px] lg:text-[12px] uppercase tracking-widest font-display">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat 
                ? 'bg-studio-ink text-white border-studio-ink' 
                : 'bg-transparent text-studio-ink border-studio-ink/10 hover:border-studio-ink/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="group cursor-pointer"
              onClick={() => onSelectImage(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-studio-bone">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg md:text-2xl mb-1 leading-tight">{item.title}</h3>
                  <p className="font-display text-[8px] md:text-[10px] uppercase tracking-widest text-studio-accent">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Menu, X } from 'lucide-react';

const LINKS = ['Home', 'Portfolio', 'Story', 'Exhibitions', 'Contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent'}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white"
        >
          <Camera className="w-6 h-6 stroke-[1.5px]" />
          <span className="font-display font-medium text-lg tracking-tighter uppercase">Miki Studio</span>
        </motion.div>

        <div className="hidden md:flex gap-12 font-display text-[11px] uppercase tracking-[0.2em] font-medium text-white">
          {LINKS.map((link) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ opacity: 0.6 }}
              className="relative group transition-colors"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 bg-studio-ink z-40 flex flex-col items-center justify-center gap-8 text-white"
          >
            {LINKS.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-5xl hover:italic transition-all"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

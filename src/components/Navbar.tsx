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
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 ${(isScrolled && !isMobileMenuOpen) ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent'}`}>
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
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-4 md:gap-8 text-center w-full px-6 z-10">
              {LINKS.map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group inline-block py-2"
                  >
                    <span className="font-serif text-[4rem] md:text-[8rem] tracking-tighter leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,1)] group-hover:text-white group-hover:italic transition-all duration-500 inline-block">
                      {link}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute top-1/4 -left-1/4 w-[70vw] h-[70vw] bg-studio-accent/10 rounded-full blur-[100px]" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="absolute -bottom-1/4 -right-1/4 w-[80vw] h-[80vw] bg-studio-navy/20 rounded-full blur-[120px]" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

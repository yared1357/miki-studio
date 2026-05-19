import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

interface ImageModalProps {
  selectedImage: typeof GALLERY_ITEMS[0] | null;
  onClose: () => void;
}

export default function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-studio-ink/95 flex items-center justify-center p-6 md:p-12 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Fixed Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="fixed top-8 right-8 md:top-12 md:right-12 p-4 text-white/50 hover:text-white transition-all hover:scale-110 active:scale-95 group z-[110]"
            aria-label="Close modal"
          >
            <X className="w-10 h-10 stroke-[1.5px] pointer-events-none" />
            <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
          </button>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
              <motion.img 
                layoutId={`image-${selectedImage.id}`}
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain shadow-[0_40px_100px_rgba(0,0,0,0.8)] px-4"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-white space-y-3"
            >
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-studio-accent font-bold">{selectedImage.category}</p>
              <h2 className="text-4xl md:text-7xl font-serif tracking-tighter leading-none">{selectedImage.title}</h2>
              <p className="text-white/40 max-w-lg mx-auto italic font-light text-lg leading-relaxed">{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

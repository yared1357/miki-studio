import { motion } from 'motion/react';
import { Camera, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-studio-navy px-6 lg:px-24 py-32 text-white overflow-hidden">
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16 mb-32">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Camera className="w-6 h-6 text-studio-navy" />
            </div>
            <span className="font-display font-semibold text-2xl tracking-tighter uppercase text-white">Miki Studio</span>
          </div>
          <p className="text-3xl lg:text-4xl font-serif max-w-md mb-12 leading-tight italic text-white/80">
            Capturing timeless visual narratives from the heart of East Africa for a global audience.
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.a whileHover={{ y: -2, color: "#D4AF37" }} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-accent transition-all" title="Instagram"><Instagram size={18} /></motion.a>
            <motion.a whileHover={{ y: -2, color: "#D4AF37" }} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-accent transition-all" title="Twitter"><Twitter size={18} /></motion.a>
            <motion.a whileHover={{ y: -2, color: "#D4AF37" }} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-accent transition-all" title="Facebook"><Facebook size={18} /></motion.a>
            <motion.a whileHover={{ y: -2, color: "#D4AF37" }} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-accent transition-all" title="Email"><Mail size={18} /></motion.a>
          </div>
        </div>
        
        <div className="space-y-10">
          <p className="font-display text-[11px] uppercase tracking-[0.3em] font-bold text-studio-accent">Main Studio</p>
          <ul className="space-y-6 text-[15px] font-medium text-white/50 leading-relaxed">
            <li className="hover:text-white transition-colors cursor-default">
              <span className="block text-white font-semibold mb-1">Addis Ababa</span>
              Bole Road, Miki Tower<br />4th Floor, Suite 402<br />Ethiopia
            </li>
            <li className="hover:text-white transition-colors cursor-default">
              <span className="block text-white font-semibold mb-1">Contact</span>
              +251 11 123 4567<br />office@mikistudio.com
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          <p className="font-display text-[11px] uppercase tracking-[0.3em] font-bold text-studio-accent">Global Hubs</p>
          <ul className="space-y-6 text-[15px] font-medium text-white/50">
            <li className="group">
              <a href="#" className="flex items-center justify-between group-hover:text-white transition-all">
                Paris, FR
              </a>
            </li>
            <li className="group">
              <a href="#" className="flex items-center justify-between group-hover:text-white transition-all">
                Tokyo, JP
              </a>
            </li>
            <li className="group">
              <a href="#" className="flex items-center justify-between group-hover:text-white transition-all">
                New York, US
              </a>
            </li>
            <li className="pt-4 border-t border-white/10">
              <a href="#portfolio" className="text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-studio-accent transition-colors">View All Locations</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/40">
            &copy; {new Date().getFullYear()} Miki Studio. Developed by Y-Global System Solution
          </span>
          <div className="h-px w-8 bg-white/10 hidden md:block" />
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/40">Based in Addis Ababa</span>
        </div>
        <div className="flex gap-10 font-display text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <a href="#" className="hover:text-studio-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-studio-accent transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-studio-accent transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

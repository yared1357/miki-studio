import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-48 px-6 lg:px-24 bg-studio-navy text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-studio-accent/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-studio-accent mb-6 block">04 — Inquiry</span>
          <h2 className="text-6xl lg:text-8xl tracking-tighter mb-8 italic">Let's Connect</h2>
          <p className="text-lg opacity-80 mb-12 max-w-sm leading-relaxed text-white/70">
            Whether you are looking to book a global campaign or a private collection shoot, our doors are always open for visionary projects.
          </p>

          <div className="space-y-8">
            <div className="group">
              <p className="font-display text-[9px] uppercase tracking-widest text-studio-accent mb-2">Email</p>
              <a href="mailto:hello@mikistudio.com" className="text-xl md:text-2xl hover:text-studio-accent transition-colors font-medium">hello@mikistudio.com</a>
            </div>
            <div className="group">
              <p className="font-display text-[9px] uppercase tracking-widest text-studio-accent mb-2">Phone</p>
              <a href="mailto:hello@mikistudio.com" className="text-xl md:text-2xl hover:text-studio-accent transition-colors font-medium">+251 91 234 5678</a>
            </div>
            <div className="group">
              <p className="font-display text-[9px] uppercase tracking-widest text-studio-accent mb-2">Office</p>
              <p className="text-xl md:text-2xl font-medium">Bole, Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-16 rounded-[2rem] shadow-2xl"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-display text-[10px] uppercase tracking-[0.2em] text-white/50 ml-1">Your Name</label>
              <input
                type="text"
                placeholder="Abebe Bikila"
                className="w-full bg-transparent border-b border-white/10 py-4 px-1 outline-none focus:border-studio-accent transition-colors placeholder:text-white/20 text-white font-light text-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-display text-[10px] uppercase tracking-[0.2em] text-white/50 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-transparent border-b border-white/10 py-4 px-1 outline-none focus:border-studio-accent transition-colors placeholder:text-white/20 text-white font-light text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="font-display text-[10px] uppercase tracking-[0.2em] text-white/50 ml-1">Inquiry Type</label>
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b border-white/10 py-4 px-1 outline-none focus:border-studio-accent transition-colors appearance-none cursor-pointer text-white font-light text-lg"
                  >
                    <option className="bg-studio-navy">Editorial Photography</option>
                    <option className="bg-studio-navy">Commercial Campaign</option>
                    <option className="bg-studio-navy">Private Portraiture</option>
                    <option className="bg-studio-navy">Exhibition Inquiry</option>
                  </select>
                  <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 pointer-events-none opacity-40" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-display text-[10px] uppercase tracking-[0.2em] text-white/50 ml-1">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project vision..."
                className="w-full bg-transparent border-b border-white/10 py-4 px-1 outline-none focus:border-studio-accent transition-colors placeholder:text-white/20 resize-none text-white font-light text-lg"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.01, backgroundColor: "#E5BB41" }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-studio-accent text-studio-navy font-display uppercase text-xs tracking-[0.4em] font-bold py-6 rounded-full transition-all shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] mt-4"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

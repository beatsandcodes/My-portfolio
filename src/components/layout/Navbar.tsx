import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 transition-all duration-500",
          scrolled ? "bg-[#080808]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-3 cursor-pointer group z-[60]">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] group-hover:shadow-[0_0_12px_rgba(255,255,255,1)] transition-shadow"></div>
          <span className="text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase text-white/90">Zaid Ahmad</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-[11px] uppercase tracking-widest text-white/50">
            <a href="#about" className="hover:text-white transition-colors">Approach</a>
            <a href="#projects" className="hover:text-white transition-colors">Works</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Connect</a>
          </div>
          <div className="flex items-center gap-4 pl-8 border-l border-white/10">
            <a 
              href="https://github.com/beatsandcodes" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/40 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/zaid-ahmad808/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-[60] p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#080808] z-50 flex flex-col items-center justify-center gap-8 md:gap-12"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 p-2 text-white/50 hover:text-white transition-colors"
              aria-label="Close Menu"
            >
              <X size={28} strokeWidth={1.5} />
            </motion.button>
            {[
              { label: "Approach", href: "#about", num: "01" },
              { label: "Works", href: "#projects", num: "02" },
              { label: "Philosophy", href: "#philosophy", num: "03" },
              { label: "Skills", href: "#skills", num: "04" },
              { label: "Connect", href: "#contact", num: "05" }
            ].map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="group flex flex-col items-center gap-1 md:gap-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-white/30">{link.num}</span>
                <span className="text-2xl md:text-3xl font-light tracking-[0.1em] uppercase text-white/60 group-hover:text-white group-hover:text-glow transition-all duration-300">
                  {link.label}
                </span>
              </motion.a>
            ))}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-12"
            >
              <a 
                href="https://github.com/beatsandcodes" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/30 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/zaid-ahmad808/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/30 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

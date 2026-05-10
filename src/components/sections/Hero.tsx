import { motion } from "motion/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-[1.1] md:scale-[1.15] translate-x-[5%] md:translate-x-[8%]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <StaggerContainer className="relative z-10 max-w-6xl">
        <StaggerItem>
          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/40 mb-8 md:mb-12">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span>Builder & Product Thinker</span>
          </div>
        </StaggerItem>
        <StaggerItem>
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] font-medium tracking-tighter text-balance text-white/90">
            Hello<br />
           
            <span className="italic font-serif text-white opacity-90 inline-block mt-2">there</span>
          </h1>
        </StaggerItem>
        
        <StaggerItem className="mt-8 md:mt-12 max-w-xl">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal text-pretty">
            I’m Zaid. <br/> I build and ship AI-powered products and autonomous agents independently, end-to-end. Blending software engineering, product design, and interaction thinking to create systems that feel intuitive, capable, and trustworthy.
          </p>
        </StaggerItem>

        <StaggerItem className="mt-12">
          <div className="flex flex-wrap gap-4">
            <div className="glass-card px-4 py-2 rounded-full text-[10px] md:text-xs text-white/80 uppercase tracking-widest border-white/10">Design</div>
            <div className="glass-card px-4 py-2 rounded-full text-[10px] md:text-xs text-white/80 uppercase tracking-widest border-white/10">Build</div>
            <div className="glass-card px-4 py-2 rounded-full text-[10px] md:text-xs text-white/80 uppercase tracking-widest border-white/10">Ship</div>
          </div>
        </StaggerItem>
      </StaggerContainer>

      <motion.a 
        href="#about"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden min-[700px]:flex absolute bottom-12 right-6 md:right-12 flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 mb-2">
          Scroll
        </span>
        <div className="w-[1px] h-12 relative overflow-hidden bg-white/10">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/40 group-hover:bg-white/70"
          />
        </div>
      </motion.a>
    </section>
  );
}

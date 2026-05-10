import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-transparent min-h-[50vh] flex flex-col justify-end">
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-4 text-[13px] font-bold tracking-widest uppercase text-white mb-8 mt-2">
            <span>05- CONNECT</span>
          </div>

          <div className="max-w-2xl mb-24">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium tracking-tighter text-white/90 mb-8 leading-tight">
              Let's build something <br className="hidden sm:block" />
              <span className="italic font-serif text-white opacity-90 inline-block mt-2">exceptionally well.</span>
            </h2>
            <p className="text-white/50 text-xl font-light">
              Always interested in thoughtful products, ambitious teams, and difficult design problems.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-8 border-t border-white/5">
            <div className="text-white/30 text-[10px] tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Zaid Ahmad
            </div>
            
            <div className="flex flex-wrap items-center gap-6 md:gap-12 text-[10px] uppercase tracking-widest text-white/50">
              <a 
                href="mailto:personal.zaidahmad@gmail.com" 
                className="group flex items-center hover:text-white transition-colors"
              >
                Email
                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/zaid-ahmad808/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center hover:text-white transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </a>
              <a 
                href="https://github.com/beatsandcodes" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center hover:text-white transition-colors"
              >
                GitHub
                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

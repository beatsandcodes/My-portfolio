import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative z-10">
        
        {/* Left Col - Section Title */}
        <div className="md:col-span-4 lg:col-span-3">
          <FadeIn>
            <div className="flex items-center gap-4 text-[13px] font-bold tracking-widest uppercase text-white mb-8 mt-2 md:sticky md:top-32">
              <span>01- APPROACH</span>
            </div>
          </FadeIn>
        </div>

        {/* Right Col - Content */}
        <div className="md:col-span-8 lg:col-span-9 max-w-3xl">
          <StaggerContainer>
            <StaggerItem>
              <p className="text-2xl md:text-4xl font-light text-white/80 leading-relaxed tracking-tight mb-8">
               I spent 7 years in the creative ecosystem, where I learned distribution, design philosophy, attention to detail, and how to grow a business from 0 to Profit without any ads spent.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-16">
                <div className="glass-card p-6 md:p-8 rounded-2xl border-white/5">
                  <h3 className="text-white/90 text-sm font-medium tracking-wide uppercase mb-4">The Convergence</h3>
                  <p className="text-white/50 leading-relaxed font-light text-sm">
                    Today, I bring 7 years of experience in the creative ecosystem into software—where I’ve generated 29M+ hits, built a five-figure business without paid ads, and worked across fast-moving creative and technical workflows. I approach software with a balance of engineering, product thinking, and design sensitivity, building systems and experiences that are intuitive, scalable, detail-oriented, and grounded in real user behavior
                  </p>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-2xl border-white/5">
                  <h3 className="text-white/90 text-sm font-medium tracking-wide uppercase mb-4">AI-Native Execution</h3>
                  <p className="text-white/50 leading-relaxed font-light text-sm">
                    My stack centers around speed and quality. Using tools like Claude, Cursor, and the 
                    Gemini API, alongside React and Tailwind, I dramatically accelerate product development. 
                    I don't just prototype—I ship deeply polished, end-to-end applications independently.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

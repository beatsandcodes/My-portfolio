import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-0 mb-12">
        <FadeIn>
          <div className="flex items-center gap-4 text-[13px] font-bold tracking-widest uppercase text-white mb-8 mt-2">
            <span>03- PHILOSOPHY</span>
          </div>
        </FadeIn>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <StaggerContainer>
          <StaggerItem>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white/90 text-balance mb-16 leading-tight">
              Software is no longer just interfaces and workflows. <br className="hidden md:block"/>
              <span className="italic font-serif opacity-90 text-white">It is systems that can think, decide, and act alongside humans.</span>
            </h2>
          </StaggerItem>
          
          <div className="space-y-12 md:space-y-16 text-xl md:text-2xl font-light text-white/50 leading-relaxed text-pretty">
            <StaggerItem>
              <p>
                I care deeply about how software feels in motion, how systems respond, and how small details shape user trust. From performance and interaction design to information hierarchy and visual clarity, I see product quality as the sum of hundreds of thoughtful decisions.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p>
                My background in the creative ecosystem taught me that attention is earned, not demanded. That same instinct now shapes how I build software. Products should feel intuitive, fast, calm, and emotionally clear without overwhelming the user.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p>
                As digital experiences evolve, I’m interested in building technology that reduces friction instead of adding noise. Systems that understand intent, respect attention, and make complex workflows feel effortless. To me, great products are not defined by feature count alone, but by how naturally they fit into people’s lives.
              </p>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

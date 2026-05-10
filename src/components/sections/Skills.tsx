import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const skillCategories = [
  {
    title: "AI Development",
    skills: [
      "Claude Code",
      "Cursor",
      "Lovable",
      "Google AI Studio",
      "Antigravity",
      "Codex",
      "OpenAI"
    ]
  },
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "AI Engineering",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "AI Agent Design",
      "Gemini API",
      "Claude API",
      "OpenAI API"
    ]
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Supabase",
      "Firebase",
      "SQLite",
      "REST APIs",
      "JWT Authentication",
      "Zod",
      "FFmpeg",
      "WebSockets"
    ]
  },
  {
    title: "Product & Design",
    skills: [
      "Figma",
      "Framer",
      "Canva",
      "Adobe Creative Suite"
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "Vite",
      "Vercel",
      "Postman"
    ]
  },
  {
    title: "Platform Integrations",
    skills: [
      "Telegram API",
      "Instagram Graph API",
      "Meta Business Suite"
    ]
  }
];
export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        
        <div className="md:w-1/4 md:sticky md:top-32">
          <FadeIn>
            <div className="flex items-center gap-4 text-[13px] font-bold tracking-widest uppercase text-white mb-8 mt-2">
              <span>04- SKILLS</span>
            </div>
            <p className="mt-4 text-white/80 font-normal leading-relaxed max-w-sm text-balance text-lg md:text-xl">
              Shipping AI-powered products fast, independently, and end-to-end.
            </p>
          </FadeIn>
        </div>

        <div className="md:w-3/4 w-full">
          <StaggerContainer className="flex flex-col gap-16 md:gap-20">
            {skillCategories.map((category, idx) => (
              <StaggerItem key={idx} className="flex flex-col">
                <h3 className="text-xs font-mono tracking-widest text-white/60 uppercase mb-6 md:mb-8">{category.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="text-2xl md:text-3xl lg:text-4xl font-normal text-white/70 hover:text-white/100 hover:text-glow transition-all duration-300 cursor-default tracking-tighter"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}

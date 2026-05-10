import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, Crown, Settings, User, LogOut, Sparkles, ScanFace, ShoppingBag } from "lucide-react";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  url?: string;
  github?: string;
  role: string;
  focus: string[];
  imageUrl?: string;
  year: string;
}

const getPreviewImage = (url?: string) => {
  if (!url) return "";
  if (url.includes('github.com')) {
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      return `https://opengraph.githubassets.com/1/${match[1]}/${match[2]}`;
    }
  }
  return `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
};

const featuredProjects: ProjectProps[] = [
  {
    title: "Pocket Derma",
    description: "An AI-powered skincare recommendation platform focused on trust, clarity, and personalized care. Making medical-adjacent interfaces feel emotionally safe and understandable.",
    url: "https://pocketderma.vercel.app/",
    role: "Product, Engineering, AI Integration",
    year: "2024",
    focus: ["Healthcare UX Trust", "AI Recommendation Engine", "Conversational UX", "Calm Visual Hierarchy"],
  },
  {
    title: "The Soft Loops",
    description: "A visually immersive showcase experience for a local crochet business. Built to tell a story through the interface with high-craft digital aesthetics and premium presentation.",
    url: "https://thesoftloops.vercel.app",
    role: "Design & Frontend",
    year: "2024",
    focus: ["Emotional Commerce", "Immersive Motion Systems", "Cinematic Scrolling", "Frontend Craftsmanship"],
  },
  {
    title: "AI Gemini Live Support Agent",
    description: "A real-time conversational AI system built for the Gemini Live Agent Challenge. Focusing on sub-second voice interactions and multimodal workflows.",
    github: "https://github.com/beatsandcodes/ai-gemini-live-support-agent",
    role: "AI & Full-stack",
    year: "2024",
    focus: ["Sub-second Voice", "Multimodal AI", "Autonomous Function Calling", "Ambient UX"],
  },
  {
    title: "Music Marketing Bot",
    description: "An automated Telegram bot that transforms long audio tracks into viral, short-form marketing clips with perfectly timed subtitles, and auto posts to Instagram and YouTube.",
    github: "https://github.com/beatsandcodes/Music-marketing-bot",
    role: "AI Automation",
    year: "2024",
    focus: ["AI Automation", "Audio Analysis", "Video Generation", "Social Integrations"],
  }
].map(project => ({
  ...project,
  imageUrl: getPreviewImage(project.url || project.github)
}));

function ProjectCard({ project, index }: { project: ProjectProps, index: number, key?: string | number }) {
  return (
    <FadeIn delay={0.1 * index} viewMargin="-20%" className="h-full">
      <div className="group relative flex flex-col h-full text-left">
         <a 
          href={project.url || project.github} 
          target="_blank" 
          rel="noreferrer"
          className="relative w-full aspect-[4/3] glass-card rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-colors duration-500 flex items-center justify-center border-white/10 hover:border-white/30"
        >
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={`${project.title} Preview`}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" 
              loading="lazy"
            />
          ) : null}

          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-10" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: `24px 24px`
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent pointer-events-none opacity-80 z-20" />
          
          <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors tracking-widest uppercase text-[10px] font-medium z-30 absolute bottom-6 bg-[#080808]/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
             View Project 
             <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 12 12" fill="none">
               <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5"/>
             </svg>
          </div>
        </a>

        <div className="mt-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base md:text-lg font-medium tracking-tighter text-white/90 group-hover:text-glow transition-all duration-500 line-clamp-1">
              {project.title}
            </h3>
            <span className="text-white/40 font-mono text-[9px] tracking-widest uppercase flex-shrink-0 ml-4">
              {project.year}
            </span>
          </div>
          
          <p className="text-xs font-light text-white/50 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Meta details */}
          <div className="mt-auto pt-5 border-t border-white/5 flex flex-col gap-3 text-[8px] uppercase tracking-widest">
            <div className="grid grid-cols-1 gap-1">
              <h4 className="text-white/30">Role</h4>
              <p className="text-white/50 truncate w-full">{project.role}</p>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <h4 className="text-white/30">Focus</h4>
              <p className="text-white/50 truncate w-full">{project.focus.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 text-[13px] font-bold tracking-widest uppercase text-white mb-8 mt-2">
            <span>02- WORKS</span>
          </div>
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] font-medium tracking-tighter text-white/90">
              Selected Works
            </h2>
            <p className="max-w-xs text-xs text-white/40 hidden md:block text-right font-light leading-relaxed">
              Products designed and built end-to-end, balancing emotional UX with technical execution.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-16 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

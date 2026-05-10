import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { ProjectShowcase } from "./components/sections/ProjectShowcase";
import { Philosophy } from "./components/sections/Philosophy";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="gradient-bg min-h-screen text-[#E5E5E5] selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectShowcase />
        <Philosophy />
        <Skills />
      </main>
      <Contact />
      
      {/* Side fixed label like the Immersive UI */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-8 opacity-20 pointer-events-none z-40">
        <span className="writing-vertical text-[9px] tracking-[0.4em] uppercase">EST. 2017</span>
        <div className="h-24 w-[1px] bg-white mx-auto"></div>
        <span className="writing-vertical text-[9px] tracking-[0.4em] uppercase">Craftsmanship</span>
      </div>
    </div>
  );
}


import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import { BackgroundPathsLayer } from '@/components/ui/background-paths-layer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-24 sm:pb-0">
      <BackgroundPathsLayer className="fixed opacity-70" />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black tracking-tight">
              Hi, I'm <span className="inline-block">Suhiyini Kasim</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light">
              Aspiring Software Engineer
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating elegant solutions to complex problems.
            Building modern web applications with advanced technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-black border-2 border-black rounded-md font-medium hover:bg-gray-50 transition-all duration-200 w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mt-12 animate-bounce"
          >
            <span className="text-sm font-medium">Learn more</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

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
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:whitespace-nowrap sm:text-6xl lg:text-7xl">
              Hi, I'm Suhiyini Kasim
            </h1>
            <p className="text-xl font-light text-gray-700 sm:text-2xl lg:text-3xl">
              Aspiring Software Engineer
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Passionate about creating elegant solutions to complex problems.
            Building modern web applications with advanced technologies.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full rounded-md bg-black px-8 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-gray-800 hover:shadow-md sm:w-auto"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full rounded-md border-2 border-black bg-white px-8 py-3 font-medium text-black transition-all duration-200 hover:bg-gray-50 sm:w-auto"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="mt-12 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-black"
          >
            <span className="text-sm font-medium">Learn more</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

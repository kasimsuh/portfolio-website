"use client";

import { Download, Mail } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mb-12"></div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I’m a computer science student focused on software engineering and
              systems-level problem solving. I like building software that
              actually runs in the real world, not just assignments that pass
              tests. <br /> <br /> Lately I’ve been exploring agentic AI
              systems, especially how LLM-driven tools can plan, reason across
              steps, and interact with external APIs. I’m teaching myself this
              space outside class by building small prototypes and understanding
              how orchestration, memory, and tool usage work under the hood
              rather than treating models as black boxes. <br /> <br /> I’m also
              developing an interest in cloud infrastructure and DevOps
              practices. I’ve been learning how applications move from local
              development to production: containerization, deployment workflows,
              and why reliability, monitoring, and reproducibility matter as
              much as writing code. <br /> <br />
              I’ve participated in Hack the Valley 2025 and HackHive 2026, where
              I worked in small teams to design and ship working prototypes
              under time pressure. Those experiences taught me how to quickly
              scope features, divide work, integrate messy codebases, and
              present a technical idea clearly to judges and users. I learned
              that communication and iteration speed matter just as much as
              technical skill when building real software. <br /> <br />
              I’m currently looking for software engineering internships where I
              can contribute to backend systems, developer tooling, or
              infrastructure-oriented projects while continuing to grow in cloud
              and AI-driven applications.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "SQL",
                "Git",
                "HTML/CSS",
                "Tailwind CSS",
                "REST APIs",
                "UI/UX Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-white border-2 border-black rounded-md text-center font-medium text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black border-2 border-black rounded-md font-medium hover:bg-gray-50 transition-all duration-200"
            >
              <Mail size={20} />
              View Contact Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

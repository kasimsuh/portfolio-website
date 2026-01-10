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
              I'm an aspiring software engineer with a passion for building
              innovative and user-friendly applications. My journey in
              technology began with curiosity and has evolved into a dedication
              to continuous learning and growth.
            </p>

            <p className="text-lg">
              I specialize in full-stack development, with expertise in modern
              frameworks and technologies. I enjoy tackling challenging problems
              and collaborating with teams to bring ideas to life.
            </p>

            <p className="text-lg">
              When I'm not coding, you can find me exploring new
              technologies,listening to music ,or cooking.
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

"use client";

import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "EZ Form",
      description:
        " Ez Form uses conversational AI and voice technology to remove barriers created by keyboards, paperwork, and complex forms, especially for older adults and anyone who struggles with traditional digital interfaces. Our mission is to make essential tasks more accessible, human, and stress-free through AI.",
      technologies: [
        "React",
        "MongoDB",
        "Typescipt",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "Gemini API",
        "Git",
      ],
      github: "https://github.com/tonypark4/HackHive2026",
      demo: "",
      image: "/EZ_Form.png",
    },
    {
      title: "JobFolio",
      description:
        "JobFolio is a full stack web app for application tracking, coupled with a resume versioning system that allows users to store different resume versions as well as compare them side to side. It features a sleek Kanban board that allows users to categorize applications and stay organized during the busy application seasn.",
      technologies: [
        "React",
        "Next.js",
        "MongoDB",
        "Typescipt",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Git",
      ],
      github: "https://github.com/kasimsuh/jobfolio",
      demo: "https://jobfolio-rho.vercel.app/login",
      image: "/JobFolio.avif",
    },
    {
      title: "SMART-AIR",
      description:
        "SMART AIR is a kid-friendly Android app that helps children understand asthma, practice good inhaler technique, log symptoms/medicine use, and share parent-approved information with a healthcare provider via a concise, exportable report.",
      technologies: ["Java", "Android", "XML", "JUnit", "Mockito", "Firebase"],
      github: "https://github.com/Amal-Mantrala/SMART-AIR",
      demo: "",
      image: "/SMART-AIR.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-black mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-black rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium bg-white border border-black rounded-md text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all duration-200 text-sm"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-black text-black rounded-md font-medium hover:bg-black hover:text-white transition-all duration-200 text-sm"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

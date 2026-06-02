"use client";

import { ExternalLink, FileText, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  summary: string;
  technologies: string[];
  highlights: [string, string, string];
  github: string;
  demo?: string;
  caseStudy?: string;
  image: string;
  imageFit: "cover" | "contain";
  imageClassName?: string;
  imageContainerClassName?: string;
};

const projects: Project[] = [
  {
    title: "EZ Form",
    summary:
      "A voice-first AI assistant that makes forms and paperwork easier to complete.",
    technologies: [
      "React",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Gemini API",
      "Git",
    ],
    highlights: [
      "Designed for older adults and anyone who struggles with keyboard-heavy digital workflows.",
      "Uses conversational AI and voice input to turn rigid forms into a guided experience.",
      "Built as a full-stack hackathon product spanning frontend, backend, and AI orchestration.",
    ],
    github: "https://github.com/tonypark4/HackHive2026",
    image: "/ezform.jpeg",
    imageFit: "contain",
    imageContainerClassName: "bg-gray-100",
  },
  {
    title: "ReminAI",
    summary:
      "A storytelling platform that recreates family presence through voice-cloned memories.",
    technologies: [
      "React",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "ElevenLabs",
      "FastAPI",
      "PostgreSQL",
      "Django",
      "Python",
      "Gemini API",
      "Git",
    ],
    highlights: [
      "Built family dashboard with React and TypeScript",
      "Displayed AI-generated stories from uploaded photos",
      "Designed senior-friendly navigation and layouts",
    ],
    github: "https://github.com/abdulselamadillmohammed/hack_the_valley",
    image: "/reminai.png",
    imageFit: "contain",
    imageContainerClassName: "bg-gray-100",
  },
  {
    title: "JobFolio",
    summary:
      "An application tracker with resume versioning and side-by-side comparison tools.",
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Git",
    ],
    highlights: [
      "Built job tracking dashboard with 500+ application test data",
      "Added JWT auth, bcrypt hashing, and protected API routes",
      "Containerized backend with optimized Docker builds",
    ],
    github: "https://github.com/kasimsuh/jobfolio",
    demo: "https://jobfolio-rho.vercel.app/login",
    image: "/jobfolio.png",
    imageFit: "contain",
    imageContainerClassName: "bg-gray-100",
  },
  {
    title: "SMART-AIR",
    summary:
      "A kid-friendly Android app for asthma education, symptom tracking, and reporting.",
    technologies: ["Java", "Android", "XML", "JUnit", "Mockito", "Firebase"],
    highlights: [
      "Added Firebase Auth with role-based routing",
      "Sent medication reminders using Firebase Cloud Messaging",
      "Reached 100% unit test coverage with JUnit/Mockito",
    ],
    github: "https://github.com/Amal-Mantrala/SMART-AIR",
    image: "/smartair.png",
    imageFit: "contain",
    imageContainerClassName: "bg-gray-100",
  },
  {
    title: "SeniCare",
    summary:
      "A multimodal clinic platform for monitoring seniors who live independently.",
    technologies: [
      "TypeScript",
      "React",
      "Python",
      "FastAPI",
      "MongoDB",
      "OpenCV",
      "MediaPipe",
      "JWT Auth",
    ],
    highlights: [
      "Built daily AI check-ins for senior health monitoring",
      "Integrated Gemini Live API for conversational response capture",
      "Used MediaPipe/OpenCV to extract video-based health signals",
    ],
    github: "https://github.com/kasimsuh/senicare",
    image: "/senicare.jpeg",
    imageFit: "contain",
    imageClassName: "p-4",
    imageContainerClassName: "bg-white",
  },
  {
    title: "Beacon",
    summary:
      "An AI-powered platform that helps people quickly find nearby essential services.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Brave Search API",
      "Google Gemini API",
      "Google Places API",
      "Zustand",
    ],
    highlights: [
      "Built for people facing housing instability or urgent basic-needs challenges.",
      "Uses search and location data to surface relevant services with less friction.",
      "Frames recommendations as a more personalized path toward short-term stability.",
    ],
    github: "https://github.com/kasimsuh/beacon",
    image: "/beacon.png",
    imageFit: "contain",
    imageClassName: "p-3",
    imageContainerClassName: "bg-[#1f1f1f]",
  },
  {
    title: "EcoHome Studio",
    summary:
      "An AI-assisted interior design experience with sustainability guidance and 3D preview.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Brave Search API",
      "Google Gemini API",
      "Google Places API",
      "Zustand",
    ],
    highlights: [
      "Built LangChain RAG pipeline for sustainability recommendations",
      "Indexed 200+ document chunks with Supabase pgvector",
      "Rendered interactive 3D homes using Three.js",
    ],
    github: "https://github.com/kasimsuh/ecohome-studio",
    image: "/ecohome.png",
    imageFit: "contain",
    imageClassName: "p-3",
    imageContainerClassName: "bg-[#1f1f1f]",
  },
];

const actionBaseClassName =
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 flex min-h-screen items-center py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl">
            Projects
          </h2>
          <div className="mb-12 h-1 w-20 bg-black"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white text-black shadow-[0_22px_60px_-24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-28px_rgba(0,0,0,0.35)]"
              >
                <div
                  className={`relative h-52 overflow-hidden border-b border-black/5 ${project.imageContainerClassName ?? "bg-gray-100"}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`h-full w-full transition-transform duration-300 ${
                      project.imageFit === "contain"
                        ? "object-contain group-hover:scale-[1.02]"
                        : "object-cover group-hover:scale-105"
                    } ${project.imageClassName ?? ""}`}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    <p className="text-base leading-relaxed text-gray-700">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 bg-gray-50 px-3 py-1 text-sm text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3 pt-2 text-sm leading-relaxed text-gray-700">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${actionBaseClassName} border-black bg-black text-white hover:bg-gray-800`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${actionBaseClassName} border-black/15 text-black hover:border-black hover:bg-black hover:text-white`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>

                    {project.caseStudy ? (
                      <a
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${actionBaseClassName} border-black/15 text-black hover:border-black hover:bg-black hover:text-white`}
                      >
                        <FileText size={16} />
                        Case Study
                      </a>
                    ) : (
                      <span
                        className={`${actionBaseClassName} cursor-not-allowed border-black/10 text-gray-400`}
                      >
                        <FileText size={16} />
                        Case Study Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

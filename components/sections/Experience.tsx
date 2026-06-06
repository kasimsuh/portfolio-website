"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Briefcase, Calendar, GraduationCap, Sparkles } from "lucide-react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
};

type HackathonPhoto = {
  event: string;
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineering Specialist",
    organization: "University of Toronto Scarborough",
    period: "Sept 2024 - Present",
    description:
      "Pursuing an Honours Bachelor of Science in Computer Science with a focus on software engineering, systems thinking, and practical product development.",
    achievements: [
      "Dean's List Scholar '25",
      "Relevant coursework: Data Structures & Algorithms, Web Development, Software Design, Software Tools and Systems Programming, Discrete Mathematics, Linear Algebra II",
      "Active member of the Association of Math and Computer Science Students (AMACSS)",
    ],
  },
];

const workExperiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    organization: "AgroInnova Ltd",
    period: "Jun 2023 - Aug 2023",
    description:
      "During my internship at AgroInnova, I helped improve the user experience of an e-commerce platform built for farmers and vendors. I worked closely with developers and clients to understand what users struggled with, then turned those needs into cleaner page layouts, mobile-friendly screens, and easier navigation. A big part of my work was making the platform feel less intimidating for farmers who were not very comfortable with technology.",
    achievements: [
      "Designed landing pages and dashboard mockups in Figma for an e-commerce platform, supporting developer handoff and faster UI implementation ",
      "Built responsive web pages with HTML and CSS, improving consistency across desktop and mobile devices",
      "Worked with developers to identify and fix frontend bugs affecting usability and page behavior",
      "Optimized interfaces for mobile access, improving usability for farmers and vendors using the platform remotely",
    ],
  },
];

const hackathonPhotos: HackathonPhoto[] = [
  {
    event: "GenAI Genesis 2026",
    src: "/hackathon1.jpeg",
    alt: "Portrait of Suhiyini Kasim used as a temporary stand-in until hackathon candid photos are added",
    caption: "",
    objectPosition: "center 20%",
  },
  {
    event: "CTRL+HACK+DEL 2.0",
    src: "/hackathon2.jpeg",
    alt: "EZ Form project screenshot used as a temporary stand-in for a HackHive 2026 team photo",
    caption: "",
  },
  {
    event: "CTRL+HACK+DEL 2.0",
    src: "/hackathon3.jpeg",
    alt: "ReminAI project screenshot used as a temporary stand-in for a Hack the Valley team photo",
    caption: "",
  },
  {
    event: "HackHive 2026",
    src: "/hackathon4.jpeg",
    alt: "ReminAI project screenshot used as a temporary stand-in for a Hack the Valley team photo",
    caption: "",
  },
];

const hackathonParagraphs = [
  "Hackathons are where I get to practice the most concentrated version of software building: aligning quickly with teammates, making good product decisions under time pressure, and turning a rough idea into something real enough to demo. I enjoy the pace because it forces clarity. We have to decide what matters, what can wait, and what will make the experience feel meaningful for the user.",
  "They have also made me a stronger collaborator. I have learned how to split work cleanly, adapt when an integration goes sideways, and keep momentum by communicating early instead of waiting for perfect conditions. I come away from each event with sharper instincts for scope, usability, and how to ship something thoughtful even when the timeline is compressed.",
];

export default function Experience() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateActiveSlide = () => {
      setActiveSlide(carouselApi.selectedScrollSnap());
    };

    updateActiveSlide();
    carouselApi.on("select", updateActiveSlide);
    carouselApi.on("reInit", updateActiveSlide);

    return () => {
      carouselApi.off("select", updateActiveSlide);
      carouselApi.off("reInit", updateActiveSlide);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || isCarouselPaused) {
      return;
    }

    const autoplay = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4500);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [carouselApi, isCarouselPaused]);

  return (
    <section id="experience" className="relative z-10 min-h-screen py-20">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl">
            Experience
          </h2>
          <div className="mb-12 h-1 w-20 bg-black"></div>

          <div className="space-y-14">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-black">
                <GraduationCap size={20} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              {experiences.map((experience) => (
                <article
                  key={`${experience.organization}-${experience.title}`}
                  className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_22px_60px_-24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-28px_rgba(0,0,0,0.35)] sm:p-8"
                >
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h4 className="mb-2 text-2xl font-bold text-black">
                        {experience.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Briefcase size={18} />
                        <span className="font-medium">
                          {experience.organization}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Calendar size={18} />
                      <span className="whitespace-nowrap">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <p className="mb-5 max-w-3xl leading-relaxed text-gray-700">
                    {experience.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-black">Highlights</h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
              <div className="flex items-center gap-3 text-black">
                <Briefcase size={20} />
                <h3 className="text-2xl font-bold">Work</h3>
              </div>

              {workExperiences.map((experience) => (
                <article
                  key={`${experience.organization}-${experience.title}`}
                  className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_22px_60px_-24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-28px_rgba(0,0,0,0.35)] sm:p-8"
                >
                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h4 className="mb-2 text-2xl font-bold text-black">
                        {experience.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Briefcase size={18} />
                        <span className="font-medium">
                          {experience.organization}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <Calendar size={18} />
                      <span className="whitespace-nowrap">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <p className="mb-5 max-w-3xl leading-relaxed text-gray-700">
                    {experience.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-black">Highlights</h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-black">
                  <Sparkles size={20} />
                  <h3 className="text-2xl font-bold">Hackathons</h3>
                </div>
                <p className="max-w-2xl text-gray-700">
                  A closer look at what I enjoy most about hackathons: working
                  in a team, fast product iteration, and building under a tight
                  clock.
                </p>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_26px_70px_-28px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_-32px_rgba(0,0,0,0.38)] sm:p-6">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                      Photo Highlights
                    </p>
                    <h4 className="text-2xl font-bold text-black sm:text-3xl">
                      Hackathon moments
                    </h4>
                  </div>
                </div>

                <div className="space-y-5">
                  <Carousel
                    setApi={setCarouselApi}
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                    onMouseEnter={() => setIsCarouselPaused(true)}
                    onMouseLeave={() => setIsCarouselPaused(false)}
                    onFocusCapture={() => setIsCarouselPaused(true)}
                    onBlurCapture={() => setIsCarouselPaused(false)}
                  >
                    <CarouselContent>
                      {hackathonPhotos.map((photo) => (
                        <CarouselItem key={`${photo.event}-${photo.src}`}>
                          <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-gray-100">
                            <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                style={{
                                  objectPosition:
                                    photo.objectPosition ?? "center",
                                }}
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 text-white sm:p-6">
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                                  {photo.event}
                                </p>
                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base">
                                  {photo.caption}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4 top-auto bottom-4 translate-y-0 border-black/10 bg-white/90 text-black hover:bg-white sm:left-5 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2" />
                    <CarouselNext className="right-4 top-auto bottom-4 translate-y-0 border-black/10 bg-white/90 text-black hover:bg-white sm:right-5 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2" />
                  </Carousel>

                  <div className="flex items-center justify-center gap-2">
                    {hackathonPhotos.map((photo, index) => (
                      <button
                        key={photo.event}
                        type="button"
                        aria-label={`Go to ${photo.event} slide`}
                        onClick={() => carouselApi?.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-200 ${
                          activeSlide === index
                            ? "w-10 bg-black"
                            : "w-2.5 bg-black/20 hover:bg-black/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                <article className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_22px_60px_-24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-28px_rgba(0,0,0,0.35)] sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    What Those Experiences Taught Me
                  </p>

                  <div className="mt-6 space-y-5 text-gray-700">
                    {hackathonParagraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>

                <aside className="rounded-[1.75rem] border border-black/10 bg-gray-50 p-6 shadow-[0_22px_60px_-24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-28px_rgba(0,0,0,0.24)] sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    What I Practice There
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Rapid Prototyping",
                      "Cross-Functional Teamwork",
                      "Product Scope",
                      "Pitch Readiness",
                      "AI Integrations",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-gray-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

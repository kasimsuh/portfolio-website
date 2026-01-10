"use client";

import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Specialist",
      company: "University of Toronto Scarborough",
      period: "Sept 2024 - Present",
      description:
        "Pursuing Honors Bachelor of Science in Computer Science with focus on software engineering.",
      achievements: [
        "GPA: 3.32/4.0",
        "Relevant coursework: Data Structures & Algorithms, Web Development, Software Development",
        "Active member of Association of Math and Computer Science Students (AMACSS)",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-black mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-2 border-black rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-200 bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Briefcase size={18} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-black">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

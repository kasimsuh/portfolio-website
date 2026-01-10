"use client";

import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suhikasim1@gmail.com",
      link: "mailto:suhikasim1@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/suhiyini-kasim-ba4b99333/",
      link: "https://www.linkedin.com/in/suhiyini-kasim-ba4b99333/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kasimsuh",
      link: "https://github.com/kasimsuh",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toronto, Ontario",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-black mb-12"></div>

          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <div className="flex items-start gap-4 p-6 border-2 border-black rounded-lg hover:shadow-lg transition-all duration-200 bg-white h-full">
                  <div className="p-3 bg-black rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-600 mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-black font-medium break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              );

              return contact.link ? (
                <a
                  key={index}
                  href={contact.link}
                  target={
                    contact.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="border-2 border-black rounded-lg p-8 bg-white">
            <h3 className="text-2xl font-bold text-black mb-6">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Suhiyini Kasim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

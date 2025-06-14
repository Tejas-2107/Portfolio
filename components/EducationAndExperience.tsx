"use client";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Qualys",
    period: "Jan 2024 – July 2024",
    description:
      "Worked on QFlow Dashboard using Next.js and ExpressJS. Added cron jobs for workflow, sortable version displays with React Table, and fixed UI bugs. Maintained API documentation using Swagger and optimized Elasticsearch queries.",
    skills: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Elasticsearch",
      "Swagger API",
      "Express.js",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    college: "Pune University",
    period: "2020 – 2024",
    description:
      "Studied core subjects like OOP, DBMS, OS, Networking, and DSA. Final year project: Depression Detection System using Deep Learning and Machine Learning.",
  },
];

export default function EducationAndExperience() {
  return (
    <section
      className="bg-[#0D0D0D] text-white py-16 px-6 md:px-12"
      id="experience"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education & <span className="text-[#00ADB5]">Experience</span>
      </motion.h2>

      <div className="space-y-16">
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-[#00ADB5] mb-6">
            Experience
          </h3>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-semibold">
                  {exp.title},{" "}
                  <span className="text-[#AAAAAA]">{exp.company}</span>
                </h4>
                <span className="text-sm text-[#888]">{exp.period}</span>
              </div>
              <p className="text-[#CCCCCC] text-sm mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#2A2A2A] text-[#00ADB5] px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-[#00ADB5] mb-6">
            Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <span className="text-sm text-[#888]">{edu.period}</span>
              </div>
              <p className="text-[#CCCCCC] text-sm">{edu.description}</p>
              <p className="text-sm text-[#AAAAAA] mt-2">
                University: {edu.college}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

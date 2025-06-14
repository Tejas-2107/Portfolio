"use client";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["HTML", "CSS3","Tailwind CSSS", "ReactJS", "NextJS"],
  Backend: ["NodeJS", "ExpressJS", "MongoDB", "SQL", "Elasticsearch"],
  Cloud: ["IAM", "AWS Lambda", "S3"],
  Language: ["C++", "JavaScript", "TypeScript"],
};

export default function Skills() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6 md:px-12" id="skills">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-[#00ADB5]">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            className="bg-[#1A1A1A] p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">{category}</h3>
            <ul className="space-y-2 text-lg text-[#CCCCCC]">
              {items.map(skill => (
                <li key={skill} className="before:content-['▹'] before:text-[#00ADB5] before:mr-2">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

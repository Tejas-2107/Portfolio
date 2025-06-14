"use client";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import Image from "next/image";
export default function ProjectsSection() {
  return (
    <section
      className="bg-[#0D0D0D] text-white py-16 px-6 md:px-12"
      id="projects"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-[#00ADB5]">Projects</span>
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            {/* className="w-full h-48 object-cover" */}
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-[#00ADB5]">
                {project.title}
              </h3>
              <p className="text-sm text-[#CCCCCC] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#2A2A2A] text-[#00ADB5] px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { projects } from "@/constants";
import Image from "next/image";
import { FolderGit2, ExternalLink, Github, ArrowUpRight } from "lucide-react";

const cardColors = [
  { glow: "hover:shadow-cyan-500/10", border: "hover:border-cyan-500/25", accent: "bg-cyan-400" },
  { glow: "hover:shadow-violet-500/10", border: "hover:border-violet-500/25", accent: "bg-violet-400" },
  { glow: "hover:shadow-emerald-500/10", border: "hover:border-emerald-500/25", accent: "bg-emerald-400" },
  { glow: "hover:shadow-sky-500/10", border: "hover:border-sky-500/25", accent: "bg-sky-400" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsSection() {
  return (
    <section
      className="relative bg-[#0A0A0F] text-white py-24 px-6 md:px-16 overflow-hidden"
      id="projects"
    >
      {/* Dot-grid — matches site-wide style */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #00ADB5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#00ADB5]/4 blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#00ADB5]/70 mb-3 font-medium">
            What I've Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00CED1]">
                Projects
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#00ADB5]/0 via-[#00ADB5]/60 to-[#00ADB5]/0" />
            </span>
          </h2>
          <p className="text-sm text-white/35 max-w-md leading-relaxed">
            A curated showcase of real-world deployments, enterprise architectures, and open-source tools.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, i) => {
            const color = cardColors[i % cardColors.length];
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className={`
                  group relative flex flex-col overflow-hidden rounded-2xl
                  bg-[#111118] border border-white/[0.07]
                  shadow-xl ${color.glow} ${color.border}
                  transition-all duration-300
                `}
              >
                {/* Image area */}
                <div className="relative w-full h-48 overflow-hidden shrink-0 bg-zinc-900/60">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-600 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FolderGit2 className="w-12 h-12 text-white/8 group-hover:text-[#00ADB5]/20 transition-colors duration-300" />
                    </div>
                  )}
                  {/* Bottom image fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/20 to-transparent pointer-events-none" />

                  {/* Index badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/50 border border-white/10 backdrop-blur-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${color.accent}`} />
                    <span className="text-[10px] font-mono text-white/40 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 pt-5">

                  {/* Title row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Link icons */}
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/8 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5]/60 hover:text-[#00ADB5] hover:bg-[#00ADB5]/15 transition-all duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mb-4 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

                  {/* Description */}
                  <p className="text-sm text-white/45 leading-relaxed flex-grow mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/4 text-white/40 border border-white/8 hover:text-white/60 hover:border-white/15 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom hover bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ADB5]/0 group-hover:via-[#00ADB5]/50 to-transparent transition-all duration-500`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
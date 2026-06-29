"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CalendarDays, Building2, MapPin } from "lucide-react";

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Qualys",
    period: "Jan 2024 – July 2024",
    duration: "7 months",
    description:
      "Worked on QFlow Dashboard using Next.js and ExpressJS. Added cron jobs for workflow, sortable version displays with React Table, and fixed UI bugs. Maintained API documentation using Swagger and optimized Elasticsearch queries.",
    skills: ["Next.js", "TypeScript", "Node.js", "Elasticsearch", "Swagger API", "Express.js"],
  },
];

const education = [
  {
    degree: "B.Tech in Information Technology",
    college: "Pune University",
    period: "2020 – 2024",
    description:
      "Studied core subjects including OOP, DBMS, OS, Networking, and DSA. Final year project: Depression Detection System using Deep Learning and Machine Learning.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function EducationAndExperience() {
  return (
    <section
      className="relative bg-[#0A0A0F] text-white py-24 px-6 md:px-16 overflow-hidden"
      id="experience"
    >
      {/* Dot-grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #00ADB5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00ADB5]/4 blur-[130px]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#00ADB5]/70 mb-3 font-medium">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Education &{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00CED1]">
                Experience
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#00ADB5]/0 via-[#00ADB5]/60 to-[#00ADB5]/0" />
            </span>
          </h2>
        </motion.div>

        <div className="space-y-14">

          {/* ── Experience ── */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ADB5]/10 border border-[#00ADB5]/25">
                <Briefcase className="w-4 h-4 text-[#00ADB5]" />
              </div>
              <h3 className="text-base font-semibold text-white/70 tracking-wide uppercase text-xs">
                Work Experience
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4"
            >
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-cyan-500/15 hover:border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/8"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#00ADB5]/50 to-transparent rounded-full" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white/90 leading-tight mb-1">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-white/45">
                        <Building2 className="w-3.5 h-3.5 text-[#00ADB5]/60" />
                        <span className="text-[#00ADB5]/80 font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/4 border border-white/8 text-[11px] font-medium text-white/45">
                        <CalendarDays className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <span className="text-[10px] text-white/25 tracking-wide">{exp.duration}</span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-white/8 via-white/5 to-transparent mb-4" />

                  <p className="text-sm text-white/45 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-[#00ADB5]/8 text-[#00ADB5]/80 border border-[#00ADB5]/15 hover:border-[#00ADB5]/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Education ── */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/25">
                <GraduationCap className="w-4 h-4 text-violet-400" />
              </div>
              <h3 className="text-xs font-semibold text-white/70 tracking-wide uppercase">
                Education
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl border border-violet-500/15 hover:border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-transparent p-6 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/8"
                >
                  <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-violet-400/50 to-transparent rounded-full" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white/90 leading-tight mb-1">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-violet-400/60" />
                        <span className="text-violet-400/80 font-medium">{edu.college}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/4 border border-white/8 text-[11px] font-medium text-white/45 shrink-0 h-fit">
                      <CalendarDays className="w-3 h-3" />
                      {edu.period}
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-white/8 via-white/5 to-transparent mb-4" />

                  <p className="text-sm text-white/45 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
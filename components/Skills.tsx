"use client";
import { motion } from "framer-motion";

const skills = {
  Frontend: {
    icon: "⬡",
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    dot: "bg-cyan-400",
    items: ["HTML5", "CSS3", "Tailwind CSS", "ReactJS", "NextJS"],
  },
  Backend: {
    icon: "⬡",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/20",
    dot: "bg-violet-400",
    items: ["NodeJS", "ExpressJS", "MongoDB", "SQL", "Elasticsearch"],
  },
  Cloud: {
    icon: "⬡",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    glow: "shadow-sky-500/20",
    dot: "bg-sky-400",
    items: ["IAM", "AWS Lambda", "S3"],
  },
  Language: {
    icon: "⬡",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
    dot: "bg-emerald-400",
    items: ["C++", "JavaScript", "TypeScript"],
  },
};

const categoryIcons: Record<string, JSX.Element> = {
  Frontend: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  Backend: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3m-16.5 0V9a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v5.25m-4.5 0V17.25m0 0a3 3 0 0 1-3 3h-1.5a3 3 0 0 1-3-3m7.5 0V14.25" />
    </svg>
  ),
  Cloud: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
  ),
  Language: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const pillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section
      className="relative bg-[#0A0A0F] text-white py-24 px-6 md:px-16 overflow-hidden"
      id="skills"
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #00ADB5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow center */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#00ADB5]/5 blur-[120px]" />

      {/* Section header */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#00ADB5]/70 mb-3 font-medium">
          What I Work With
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Technical{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00CED1]">
              Skills
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#00ADB5]/0 via-[#00ADB5]/60 to-[#00ADB5]/0" />
          </span>
        </h2>
        <p className="mt-4 text-sm text-white/40 max-w-md mx-auto">
          A curated stack of technologies I use to build fast, scalable, and elegant products.
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {Object.entries(skills).map(([category, data]) => (
          <motion.div
            key={category}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`
              group relative rounded-2xl border ${data.border}
              bg-gradient-to-br ${data.color}
              backdrop-blur-sm p-6
              shadow-xl ${data.glow}
              overflow-hidden cursor-default
            `}
          >
            {/* Card glow on hover */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${data.color} blur-sm -z-10`} />

            {/* Top row: icon + category */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border ${data.border} text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-colors duration-300`}>
                {categoryIcons[category]}
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-white/30 font-medium leading-none mb-0.5">
                  Category
                </p>
                <h3 className="text-base font-semibold text-white/90 leading-none">
                  {category}
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div className={`mb-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent`} />

            {/* Skill pills */}
            <ul className="flex flex-col gap-2">
              {data.items.map((skill, i) => (
                <motion.li
                  key={skill}
                  custom={i}
                  variants={pillVariants}
                  className="flex items-center gap-2.5 group/pill"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${data.dot} shrink-0 opacity-70 group-hover/pill:opacity-100 transition-opacity`} />
                  <span className="text-sm text-white/60 group-hover/pill:text-white/90 transition-colors duration-200 font-medium">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom count badge */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-medium">
                Technologies
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/5 border ${data.border} text-white/50`}>
                {data.items.length}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
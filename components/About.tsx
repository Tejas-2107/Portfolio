"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, ArrowUpRight, Sparkles } from "lucide-react";

const badges = [
  { label: "Full Stack", color: "from-cyan-500/20 to-teal-500/10", border: "border-cyan-500/30", dot: "bg-cyan-400" },
  { label: "React & Next.js", color: "from-violet-500/20 to-purple-500/10", border: "border-violet-500/30", dot: "bg-violet-400" },
  { label: "Node.js", color: "from-emerald-500/20 to-green-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
];

export default function About() {
  return (
   // Change this line in your About component:
<section
  id="about"
  className="relative bg-transparent text-white flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
  style={{ minHeight: "calc(100vh - 57px)" }}
>
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #00ADB5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[450px] h-[450px] rounded-full bg-[#00ADB5]/6 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[350px] h-[350px] rounded-full bg-violet-500/6 blur-[110px]" />

      {/* Adjusted spacing and item alignment to prevent empty trailing space */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20 max-w-5xl w-full mx-auto py-16 md:py-0">

        {/* ── LEFT: Profile image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-16px] rounded-full border border-dashed border-[#00ADB5]/20"
            />
            <div className="absolute inset-[-6px] rounded-full border border-[#00ADB5]/12" />

            <div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-black/70">
              <Image
                src="/profile_picture.png"
                alt="Tejas Chougale"
                fill
                priority
                sizes="(max-width: 768px) 208px, 256px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00ADB5]/8 via-transparent to-violet-500/8" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 backdrop-blur-sm whitespace-nowrap shadow-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-medium text-white/70 tracking-wide">Available for work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: Content ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
            className="flex items-center gap-2 mb-3"
          >
            <Sparkles className="w-3 h-3 text-[#00ADB5]" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-[#00ADB5]/75 font-medium">
              Portfolio · Freelance Engineer
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
            <span className="text-white/95">Tejas</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] via-[#00CED1] to-[#00ADB5]">
              Chougale
            </span>
          </h1>

          <div className="my-2 w-14 h-px bg-gradient-to-r from-[#00ADB5]/60 to-transparent" />

          <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6 max-w-md">
            I build{" "}
            <span className="text-white/80 font-medium">clean, performant interfaces</span>{" "}
            and{" "}
            <span className="text-white/80 font-medium">scalable backends</span>{" "}
            — turning complex requirements into production-ready software solutions.
          </p>

          <motion.div
            className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } } }}
          >
            {badges.map(({ label, color, border, dot }) => (
              <motion.span
                key={label}
                variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/70 bg-gradient-to-br ${color} border ${border} backdrop-blur-sm`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a
              href="https://drive.google.com/file/d/1eFDqDNj8y6_Fcsyvk583sizxwiFPy9oq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm text-zinc-950 bg-[#00ADB5] hover:bg-[#00CED1] shadow-lg shadow-[#00ADB5]/25 hover:shadow-[#00ADB5]/40 transition-all duration-200 overflow-hidden"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <FileText className="w-4 h-4 relative z-10" />
              <span className="relative z-10">View Resume</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            <a
              href="#skills"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              Explore Skills
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}
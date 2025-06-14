"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-14 gap-12">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl"
      >
        <Image
          src="/profile_picture.png"
          alt="Tejas Chougsle"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Tejas Chougale
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          Full Stack Developer | React & Node.js Enthusiast
        </p>
        <motion.p
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-cyan-400 text-xl font-medium mb-8"
        >
          Crafting clean UIs and scalable backends.
        </motion.p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1eFDqDNj8y6_Fcsyvk583sizxwiFPy9oq/view?usp=sharing" // <-- Replace with actual path to your resume
          download
          className="inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-400 transition"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}

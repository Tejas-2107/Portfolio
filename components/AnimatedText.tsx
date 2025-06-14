"use client";
import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <div className="flex items-center justify-center bg-black">
      <motion.h1
        className="text-2xl font-bold text-cyan-600"
        style={{ transformOrigin: "center center" }} // ensures scaling is centered
      >
        TejasChougale
      </motion.h1>
    </div>
  );
}

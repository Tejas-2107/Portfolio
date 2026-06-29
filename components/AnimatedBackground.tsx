"use client";
import { useEffect, useState } from "react";

export default function CodeParticleBackground() {
  const [streams, setStreams] = useState<{ id: number; left: number; delay: number; duration: number; chars: string[] }[]>([]);

  useEffect(() => {
    const chars = "01<>[]{}/\\+=&|!-*_$".split("");
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -20, // Negative delay so they start pre-animated
      duration: Math.random() * 15 + 15,
      chars: Array.from({ length: Math.floor(Math.random() * 8) + 4 }).map(() => chars[Math.floor(Math.random() * chars.length)]),
    }));
    setStreams(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0A0A0F] pointer-events-none select-none font-mono">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute text-[10px] flex flex-col text-[#00ADB5]/[0.03] animate-fall"
          style={{
            left: `${stream.left}%`,
            animationDuration: `${stream.duration}s`,
            animationDelay: `${stream.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          {stream.chars.map((char, index) => (
            <span 
              key={index} 
              style={{ opacity: index === stream.chars.length - 1 ? 0.15 : 0.6 }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
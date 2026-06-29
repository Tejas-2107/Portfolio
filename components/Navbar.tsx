"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Thin teal top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00ADB5]/60 to-transparent" />

      <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            {/* Teal dot accent */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ADB5] group-hover:shadow-[0_0_8px_#00ADB5] transition-shadow duration-300" />
            <AnimatedText />
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-xs font-medium tracking-wide text-white/50 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-[#00ADB5]/70 group-hover:w-4 transition-all duration-300 rounded-full" />
              </Link>
            ))}

            {/* Connect CTA pill */}
            <a
              href="#connect"
              className="ml-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-950 bg-[#00ADB5] hover:bg-[#00CED1] transition-colors duration-200 shadow-sm shadow-[#00ADB5]/30"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-900 opacity-50" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-900/70" />
              </span>
              Connect me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
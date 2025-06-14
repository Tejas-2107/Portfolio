"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import AnimatedText from "./AnimatedText";
const Navbar = () => { 
  return (
    <div className="navbar flex justify-center py-6 sticky top-0 max-[1140px]:hidden border-b-sky-200">
      <div className="navbar_contain w-4/5 flex justify-between items-center">
        <div className="navbar_left mx-20">
          <h2 className="text-lg font-bold max-[1140px]:hidden">
            <AnimatedText />
          </h2>
        </div>
        <div
          className="navbar_right w-2/5 flex justify-around items-center"
          id="navbar-default"
        >
          {/* work on links using map */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                "border-b-2 border-transparent text-lg hover:border-b-2 hover:border-cyan-600"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

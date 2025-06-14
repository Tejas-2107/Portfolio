"use client";
import { Mail, Phone,Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section
      className="bg-[#0D0D0D] text-white py-16 px-6 md:px-12"
      id="contact"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Connect <span className="text-[#00ADB5]">with Me</span>
      </motion.h2>

      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="flex flex-row items-center gap-6">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Mail className="text-[#00ADB5]" />
            <a
              href="mailto:tejaschougale2107@gmail.com"
              className="hover:underline text-sm"
            >
              tejaschougale2107@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Phone className="text-[#00ADB5]" />
            <a href="tel:+91842191295" className="hover:underline text-sm">
              +91 8421912954
            </a>
          </motion.div>
        </div>

        {/* Optional: Socials */}
        <motion.div
          className="flex gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/TejasChougale"
            target="_blank"
            rel="noopener noreferrer"
          >
           <Github className="text-[#00ADB5]"/>
          </a>
          <a
            href="https://linkedin.com/in/tejaschougale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-[#00ADB5]"/>
          </a>
          {/* Add more socials as needed */}
        </motion.div>
      </div>
    </section>
  );
}

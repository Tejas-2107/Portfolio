"use client";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tejaschougale2107@gmail.com",
    href: "mailto:tejaschougale2107@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8421912954",
    href: "tel:+918421912954",
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/TejasChougale",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tejaschougale",
  },
];

export default function Footer() {
  return (
    <section
      id="connect"
      className="bg-[#0A0A0F] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Connect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00CED1]">
              with me
            </span>
          </h2>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                style={{
                  background: "rgba(0,173,181,0.10)",
                  border: "1px solid rgba(0,173,181,0.20)",
                }}
              >
                <Icon className="w-4 h-4 text-[#00ADB5]" />
              </div>
              <div className="min-w-0">
                <p
                  className="text-[10px] uppercase tracking-wider mb-0.5"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  {value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Social buttons */}
        <motion.div
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.55)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.20)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.80)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.10)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
              }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Divider + copyright */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.20)" }}>
            © {new Date().getFullYear()} Tejas Chougale
          </p>
        </div>

      </div>
    </section>
  );
}
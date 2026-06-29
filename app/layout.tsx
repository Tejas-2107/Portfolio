import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono'; 
import "./globals.css";
import CodeParticleBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Tejas Chougale | Portfolio",
  description: "Full Stack Engineer & Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-[#0A0A0F] text-white antialiased min-h-screen relative`}
      >
        {/* Fixed Background Component */}
        <CodeParticleBackground />
        
        {/* Main Application Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
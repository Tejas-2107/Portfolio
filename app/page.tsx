import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import EducationAndExperience from "@/components/EducationAndExperience";
import Footer from "@/components/Footer";
import CodeParticleBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="main">
      
        <Navbar />
        <About />
        <Skills />
        <Project />
        <EducationAndExperience />
        <Footer />
    </main>
  );
}

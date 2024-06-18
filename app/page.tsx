import About from "@/components/About";
import Expereince from "@/components/Expereince";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
        <Navbar />
        <About />
        <Skills />
    </main>
  );
}


import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" }
  ];

  useEffect(() => {
    document.title = "Sahil Kumar | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-navy text-portfolio-light-slate">
      <Navbar navLinks={navLinks} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

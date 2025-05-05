
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-6"
    >
      <div className="container mx-auto max-w-4xl animate-fade-up">
        <p className="text-portfolio-teal mb-5 font-mono">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-portfolio-lightest-slate mb-4">
          Sahil Kumar.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-portfolio-slate mb-6">
          I build things for the web.
        </h2>
        <p className="text-portfolio-slate max-w-xl text-lg mb-10">
          I'm a Computer Science student and front-end developer passionate about creating
          interactive applications and experiences. Currently focused on expanding my
          knowledge in JavaScript and React.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            className="bg-transparent hover:bg-portfolio-light-teal text-portfolio-teal border border-portfolio-teal rounded px-6 py-4 text-sm font-mono transition-colors duration-300"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Check out my work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "4098 Game",
      description: "A web-based version of the popular 2048 game with additional features and improved gameplay mechanics.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/wadhwanisahil",
      delay: 100
    },
    {
      title: "Flippy Card Game",
      description: "An interactive memory card game that challenges players to match pairs of cards with engaging animations.",
      technologies: ["JavaScript", "HTML", "CSS", "Web Animations API"],
      github: "https://github.com/wadhwanisahil",
      delay: 200
    },
    {
      title: "Employment Management System",
      description: "A comprehensive system for tracking employee data, managing schedules, and streamlining HR processes.",
      technologies: ["JavaScript", "React", "CSS", "Database"],
      github: "https://github.com/wadhwanisahil",
      delay: 300
    },
    {
      title: "Human Detection System",
      description: "A real-time human detection system using computer vision techniques to identify and track people in video feeds.",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      github: "https://github.com/wadhwanisahil",
      delay: 400
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">02.</span> Projects
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  liveLink,
  delay = 0
}: ProjectCardProps) => {
  return (
    <Card 
      className={cn(
        "bg-portfolio-light-navy p-6 rounded hover:translate-y-[-5px] transition-all duration-300 flex flex-col h-full animate-fade-up",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-portfolio-teal">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <div className="flex space-x-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-portfolio-lightest-slate mb-2">
        {title}
      </h3>
      
      <p className="text-portfolio-slate mb-6 flex-grow">
        {description}
      </p>
      
      <div>
        <ul className="flex flex-wrap gap-x-3 gap-y-2">
          {technologies.map((tech, index) => (
            <li key={index} className="text-portfolio-slate text-sm font-mono">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ProjectCard;

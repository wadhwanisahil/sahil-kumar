
import { cn } from "@/lib/utils";

const About = () => {
  const skills = [
    "JavaScript", "HTML", "CSS", "React",
    "Python", "OpenCV", "Front-end Development",
    "Real-time Systems"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="mb-4">
            Hello! I'm Sahil Kumar, a Computer Science student at Sukkur IBA University, expected to 
            graduate in 2026. I enjoy creating things that live on the internet and solving 
            real-world problems through technology.
          </p>
          
          <p className="mb-4">
            My experience spans front-end development, real-time systems, and teaching programming 
            concepts to students from grades 5 to 9. I'm constantly learning and improving my skills, 
            with a current focus on JavaScript and React.
          </p>
          
          <p className="mb-4">
            Beyond coding, I'm passionate about community service and have been involved in various 
            initiatives like the Green Mind Initiative and Ramadan ration drives, helping to make a 
            positive impact in my community.
          </p>
          
          <p className="mb-6">
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="text-portfolio-teal mr-2">&#9654;</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

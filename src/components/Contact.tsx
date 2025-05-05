
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-up">
          <span className="text-portfolio-teal font-mono block mb-4">03. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-lightest-slate mb-5">
            Get In Touch
          </h2>
          
          <p className="text-portfolio-slate max-w-lg mx-auto mb-10">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex flex-col items-center">
              <span className="text-portfolio-teal mb-2">Email</span>
              <a 
                href="mailto:sahilkumarwadhwani@gmail.com" 
                className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
              >
                sahilkumarwadhwani@gmail.com
              </a>
            </div>
            
            <div className="w-px h-10 bg-portfolio-lightest-navy hidden sm:block"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-portfolio-teal mb-2">Phone</span>
              <a 
                href="tel:+923000000000" 
                className="text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
              >
                +92 300 000 0000
              </a>
            </div>
            
            <div className="w-px h-10 bg-portfolio-lightest-navy hidden sm:block"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-portfolio-teal mb-2">GitHub</span>
              <a 
                href="https://github.com/wadhwanisahil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-portfolio-light-slate hover:text-portfolio-teal transition-colors"
              >
                <Github size={18} className="mr-2" /> wadhwanisahil
              </a>
            </div>
          </div>
          
          <Button 
            className="bg-transparent hover:bg-portfolio-light-teal text-portfolio-teal border border-portfolio-teal rounded px-7 py-5 text-base font-mono transition-colors duration-300"
            onClick={() => window.location.href = "mailto:sahilkumarwadhwani@gmail.com"}
          >
            Say Hello
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

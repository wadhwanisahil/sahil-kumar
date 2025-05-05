
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  navLinks: { name: string; url: string }[];
}

const Navbar = ({ navLinks }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.url.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-4 bg-portfolio-navy/90 backdrop-blur-md shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-portfolio-teal text-2xl font-bold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          S<span className="text-portfolio-lightest-slate">K</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className={cn(
                    "nav-link",
                    activeSection === link.url.substring(1) && "active"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.url.substring(1));
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-portfolio-light-slate focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav 
        className={cn(
          "md:hidden absolute w-full bg-portfolio-light-navy transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <ul className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className={cn(
                  "nav-link block py-2",
                  activeSection === link.url.substring(1) && "active"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.url.substring(1));
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

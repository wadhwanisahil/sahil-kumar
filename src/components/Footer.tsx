
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-portfolio-slate text-sm font-mono">
      <div className="container mx-auto">
        <p>Designed & Built by Sahil Kumar</p>
        <p>© {currentYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

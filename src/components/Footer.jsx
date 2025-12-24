import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Jensen Omega</h3>
            <p className="text-gray-500 text-sm">
              © 2024 . All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#expertise"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Expertise
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

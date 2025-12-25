import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo / Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">M. Usama</h2>
          <p className="text-gray-400 text-sm">Software Engineer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://github.com/M-Usama2"
            className="hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/m-usama-1304b8233/"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            target="_blank"
            href="mailto:usama.muhammad.official@gmail.com"
            className="hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            target="_blank"
            href="https://m-usama2.github.io/"
            className="hover:text-white transition-colors"
          >
            <Globe size={24} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} M. Usama. All rights reserved.
      </div>
    </footer>
  );
}

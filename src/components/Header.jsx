import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1420]/80 backdrop-blur border-b border-white/5">
      <div className="container mx-auto px-6 md:px-20 h-30 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          Portfolio<span className="text-[#dd5953]">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-[#dd5953] rounded text-white text-sm font-medium hover:opacity-90 transition"
          >
            Email Me
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f1420] border-t border-white/10 shadow-2xl">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 text-center px-6 py-3 bg-[#dd5953] text-white font-medium rounded hover:opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              Email Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

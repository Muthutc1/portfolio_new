import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900/30 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110 inline-block"
            >
              <span>✌🏻</span>
              <span >😬</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:translate-y-[-2px] relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://drive.google.com/uc?export=download&id=1ImG1Ibp6MM7JpHKC4lP_jdBGkFPzoQjn" 
              target='_blank' 
              className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 animate-pulse"
            >
              <FileDown size={18}/>
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white transition-transform duration-300 transform hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="animate-spin-once" />
              ) : (
                <Menu size={24} className="animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 relative group animate-slideRight"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="https://drive.google.com/uc?export=download&id=1ImG1Ibp6MM7JpHKC4lP_jdBGkFPzoQjn" 
              target='_blank'
                className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/20 transition-all duration-300 w-fit transform hover:scale-105 hover:translate-x-2 animate-fadeIn"
                style={{ animationDelay: "500ms" }}
              >
                <FileDown size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
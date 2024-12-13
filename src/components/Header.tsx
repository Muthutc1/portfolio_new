import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900/30 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-blue-400 text-2xl font-bold animate-glow">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="text-white hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/20 transition-all transform hover:scale-105"
            >
              <FileDown size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-white hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/20 transition-all w-fit"
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
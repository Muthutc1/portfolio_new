import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 dark:bg-blue-900/30 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-blue-300 animate-float">
            <span className="animate-slideRight" style={{ animationDelay: '200ms' }}>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="animate-slideLeft" style={{ animationDelay: '400ms' }}>by Muthukumar</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-blue-400 animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <Code2 className="w-4 h-4 animate-pulse" />
            <span>Crafted with React, TypeScript, and Tailwind CSS</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-blue-400 animate-fadeIn" style={{ animationDelay: '800ms' }}>
            © {currentYear} All rights reserved.
          </p>
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 via-transparent to-transparent mix-blend-overlay pointer-events-none animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white/70 dark:bg-blue-900/30 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-blue-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Muthukumar</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-blue-400">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
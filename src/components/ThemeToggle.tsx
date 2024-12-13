import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-blue-500 dark:bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12 animate-glow"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="animate-slideRight" />
      ) : (
        <Sun size={20} className="animate-slideLeft" />
      )}
    </button>
  );
};

export default ThemeToggle;
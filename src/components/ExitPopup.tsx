import React from 'react';
import { FileDown, X } from 'lucide-react';

interface ExitPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-navy/90 backdrop-blur-md rounded-xl p-8 max-w-md w-full animate-scaleIn">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors transform hover:rotate-90 duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-center space-y-4">
          <p className="text-white text-lg">
            If the portfolio is not clear to you, you can download my resume instead. Hope you find some useful details in it. 😊
          </p>
          <a 
            href="/resume.pdf" 
            download 
            className="inline-flex items-center space-x-2 bg-sky-blue/20 hover:bg-sky-blue/30 text-sky-blue px-6 py-3 rounded-full backdrop-blur-sm border border-sky-blue/20 transition-all transform hover:scale-105"
          >
            <FileDown size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
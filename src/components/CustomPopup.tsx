import React from 'react';
import { X, Mail, Smile } from 'lucide-react';

interface CustomPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomPopup: React.FC<CustomPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800 rounded-2xl p-8 max-w-md w-full transform animate-popup">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-ping">
              <Mail className="w-8 h-8 text-blue-300" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white">Message Functionality Disabled</h3>
          
          <p className="text-blue-200 leading-relaxed">
            Please send your message directly to:
            <a 
              href="mailto:muthukumarct978@gmail.com"
              className="block mt-2 text-blue-300 hover:text-blue-100 font-semibold transition-colors"
            >
              muthukumarct978@gmail.com
            </a>
          </p>

          <div className="flex justify-center items-center space-x-2 text-blue-200">
            <span>Looking forward to hearing from you</span>
            <Smile className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
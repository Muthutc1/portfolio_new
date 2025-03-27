import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import useSound from 'use-sound';

interface ExperiencePopupProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    title: string;
    company: string;
    details: string[];
  };
}

const ExperiencePopup: React.FC<ExperiencePopupProps> = ({ isOpen, onClose, experience }) => {
  const [playOpen] = useSound('/sounds/pop-up.mp3', { volume: 0.5 });
  const [playClose] = useSound('/sounds/pop-down.mp3', { volume: 0.5 });

  useEffect(() => {
    if (isOpen) {
      playOpen();
    }
  }, [isOpen, playOpen]);

  const handleClose = () => {
    playClose();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-navy/90 backdrop-blur-md rounded-xl p-8 max-w-2xl w-full animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
            <p className="text-sky-blue">{experience.company}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors transform hover:rotate-90 duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {experience.details.map((detail, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-2 animate-slideRight"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-sky-blue mt-1.5">•</span>
              <p className="text-gray-300">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePopup;
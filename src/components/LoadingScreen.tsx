import React from 'react';

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-blue-900 flex items-center justify-center">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&q=80"
          alt="Ninja Hand Sign"
          className="w-64 h-64 object-cover rounded-full animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-blue-900/80 rounded-full animate-glow"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-8">
          <p className="text-blue-400 text-xl font-display animate-pulse text-center mt-4">
            Believe it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
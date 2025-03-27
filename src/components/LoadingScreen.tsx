import React from 'react';

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#4750ff] flex items-center justify-center">
      <div className="ball"></div>
      <div className="shape"></div>
    </div>
  );
};

export default LoadingScreen;
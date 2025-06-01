
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 300);
          }, 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30" />

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo with gentle pulse */}
        <div className="mb-8 flex justify-center">
          <div className="animate-pulse">
            <Logo size="lg" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-sora">
            <span className="text-orange-600">Pin</span>
            <span className="text-gray-700">Wrench</span>
          </h1>
          <p className="text-gray-500 font-light">
            Connecting you with trusted professionals
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 mx-auto">
          <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-xs text-gray-400 font-medium">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

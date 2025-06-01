
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
            setTimeout(onLoadingComplete, 500);
          }, 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Pulse Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Logo size="lg" className="animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sora">
            Local Services
          </h1>
          <p className="text-xl text-white/80 font-light">
            Connecting you with trusted professionals
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="flex justify-between text-white/60 text-sm mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="text-white/70">
          <span className="inline-flex">
            Preparing your experience
            <span className="ml-1 animate-pulse">
              {progress < 30 && '.'}
              {progress >= 30 && progress < 60 && '..'}
              {progress >= 60 && '...'}
            </span>
          </span>
        </div>

        {/* Floating Icons */}
        <div className="absolute -top-20 -left-20 text-white/10 animate-float">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="absolute -top-10 -right-32 text-white/10 animate-float" style={{ animationDelay: '1s' }}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
          </svg>
        </div>
        <div className="absolute -bottom-16 -left-32 text-white/10 animate-float" style={{ animationDelay: '2s' }}>
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.58 10.76C10.22 10.54 9.8 10.38 9.35 10.35L14.5 5.26L5.73 1.46L4.82 2.84L10.19 5.95C9.93 6.16 9.74 6.42 9.62 6.73L4 12H6L10.5 7.5L11.81 8.81L7 14H4V16H7V19H9V16.85L14.07 11.78C15.52 13.13 17.63 14 20 14V12C18.2 12 16.61 11.35 15.35 10.35L21 9Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

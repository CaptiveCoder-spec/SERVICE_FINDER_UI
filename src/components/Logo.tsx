
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-10',
    md: 'w-10 h-12',
    lg: 'w-16 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Location Pin Shape */}
        <path
          d="M20 4C11.716 4 5 10.716 5 19C5 28.5 20 44 20 44S35 28.5 35 19C35 10.716 28.284 4 20 4Z"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          className="drop-shadow-lg"
        />
        
        {/* Inner Circle */}
        <circle
          cx="20"
          cy="19"
          r="8"
          fill="white"
          opacity="0.9"
        />
        
        {/* Wrench/Tool Icon */}
        <path
          d="M16 15.5L18.5 18L24 12.5L22.5 11L17 16.5L16 15.5Z"
          fill="url(#logoGradient)"
          strokeWidth="1"
          stroke="url(#logoGradient)"
        />
        <path
          d="M15 19.5L17.5 22L19 20.5L16.5 18L15 19.5Z"
          fill="url(#logoGradient)"
          strokeWidth="1"
          stroke="url(#logoGradient)"
        />
        <circle
          cx="18"
          cy="19"
          r="1.5"
          fill="url(#logoGradient)"
        />
      </svg>
    </div>
  );
};

export default Logo;

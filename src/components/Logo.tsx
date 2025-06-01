
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
        
        {/* White Inner Circle Background */}
        <circle
          cx="20"
          cy="19"
          r="9"
          fill="white"
          opacity="0.95"
        />
        
        {/* House Shape */}
        {/* Roof */}
        <path
          d="M20 12L26 17.5H14L20 12Z"
          fill="url(#logoGradient)"
        />
        
        {/* House Body */}
        <rect
          x="15"
          y="17.5"
          width="10"
          height="7"
          fill="url(#logoGradient)"
        />
        
        {/* Door */}
        <rect
          x="18.5"
          y="20"
          width="3"
          height="4.5"
          fill="white"
        />
        
        {/* Windows */}
        <rect
          x="16"
          y="19"
          width="1.5"
          height="1.5"
          fill="white"
        />
        <rect
          x="22.5"
          y="19"
          width="1.5"
          height="1.5"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Logo;

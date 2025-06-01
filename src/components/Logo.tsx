
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
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#E63946" />
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
        
        {/* Crossed Tools */}
        {/* Hammer */}
        <g transform="translate(20, 19)">
          {/* Hammer handle */}
          <rect
            x="-1"
            y="2"
            width="2"
            height="6"
            fill="url(#logoGradient)"
            transform="rotate(45)"
          />
          {/* Hammer head */}
          <rect
            x="-2.5"
            y="-1"
            width="5"
            height="2"
            fill="url(#logoGradient)"
            transform="rotate(45)"
          />
        </g>
        
        {/* Wrench */}
        <g transform="translate(20, 19)">
          {/* Wrench handle */}
          <rect
            x="-1"
            y="-8"
            width="2"
            height="6"
            fill="url(#logoGradient)"
            transform="rotate(-45)"
          />
          {/* Wrench head */}
          <rect
            x="-1.5"
            y="-3"
            width="3"
            height="2"
            fill="url(#logoGradient)"
            transform="rotate(-45)"
          />
          <rect
            x="-2"
            y="-2"
            width="1"
            height="1"
            fill="url(#logoGradient)"
            transform="rotate(-45)"
          />
          <rect
            x="1"
            y="-2"
            width="1"
            height="1"
            fill="url(#logoGradient)"
            transform="rotate(-45)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;

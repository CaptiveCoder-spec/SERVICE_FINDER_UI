
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles effect
    if (particlesContainerRef.current) {
      const container = particlesContainerRef.current;
      const particlesCount = 20;
      
      // Clear any existing particles
      container.innerHTML = '';
      
      for (let i = 0; i < particlesCount; i++) {
        const size = Math.random() * 60 + 20; // between 20px and 80px
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.6 + 0.2}`; // between 0.2 and 0.8
        particle.style.animationDuration = `${Math.random() * 60 + 30}s`; // between 30s and 90s
        
        // Animation properties
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4">
      {/* Background particles */}
      <div ref={particlesContainerRef} className="particles-container" />
      
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2370&auto=format&fit=crop')",
          filter: "blur(8px)"
        }}
      />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fadeIn">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">Find Trusted Local Services</span>
              <span className="block mt-2">Instantly</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg opacity-0 animate-fadeIn delay-200">
              Verified professionals near you – with reviews, maps & ratings. Connect with local experts for all your home service needs.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fadeIn delay-300">
              <Link to="/discover">
                <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Search Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-2 border-orange-300 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-6 transition-all duration-300"
              >
                List Your Service
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 opacity-0 animate-fadeIn delay-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-200"
                    style={{
                      backgroundImage: `url(https://randomuser.me/api/portraits/men/${i + 10}.jpg)`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <span>Join 10,000+ happy customers</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative opacity-0 animate-fadeIn delay-500">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2369&auto=format&fit=crop"
                alt="Service professional"
                className="w-full h-auto rounded-xl"
              />
              
              {/* Floating rating card */}
              <div className="absolute top-4 right-4 glass-card py-2 px-4 flex items-center space-x-2 animate-pulse">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium text-sm">4.9 (2.5k reviews)</span>
              </div>
              
              {/* Floating verification badge */}
              <div className="absolute bottom-4 left-4 glass-card py-2 px-4 flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-sm">Verified Professional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

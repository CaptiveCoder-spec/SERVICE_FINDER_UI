
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    content: 'Local Services Finder connected me with an incredible electrician who fixed our home wiring issues in just a few hours. The booking process was seamless and I could see all their credentials before hiring.',
    rating: 5,
    service: 'Electrician',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Small Business Owner',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'As a coffee shop owner, I needed urgent plumbing repairs. Through Local Services, I found a pro who came the same day. Their transparent pricing meant no surprise costs.',
    rating: 5,
    service: 'Plumber',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    content: 'Managing multiple properties means I need reliable contractors. This platform has become my go-to resource for finding vetted professionals quickly. The map feature is especially useful.',
    rating: 4,
    service: 'General Contractor',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'New Homeowner',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    content: 'When our AC broke during a heatwave, we were desperate. Found an HVAC specialist through the app who came within hours. The reviews were accurate - they did exceptional work.',
    rating: 5,
    service: 'HVAC Technician',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial, isActive: boolean }> = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`glass-card p-6 md:p-8 transition-all duration-700 ${
        isActive 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-20 scale-95 absolute'
      }`}
    >
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white"
        />
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-warm-500' : 'text-gray-300 dark:text-gray-600'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="ml-auto">
          <span className="bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-xs py-1 px-2 rounded-full">
            {testimonial.service}
          </span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
    </div>
  );
};

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hear from customers who found reliable local services through our platform.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden relative min-h-[220px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToPrev}
              disabled={isAnimating}
              className="rounded-full hover:bg-brand-50 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 700);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-6 bg-brand-500' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToNext}
              disabled={isAnimating}
              className="rounded-full hover:bg-brand-50 dark:hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

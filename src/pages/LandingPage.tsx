
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  MapPin, 
  Calendar, 
  CheckCircle 
} from 'lucide-react';

const HowItWorksSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Search Service',
      description: 'Browse through different service categories or search for specific skills.',
      delay: 1
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Find Nearby',
      description: 'Discover verified professionals in your area with our interactive map.',
      delay: 2
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Book Appointment',
      description: 'Schedule a time that works for you with our easy booking system.',
      delay: 3
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Get Service',
      description: 'Receive quality service and leave a review to help others find great pros.',
      delay: 4
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Finding reliable local services has never been easier. Follow these simple steps:
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${step.delay * 100}ms` }}
            >
              <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularServicesSection = () => {
  const services = [
    { name: 'Plumbing', icon: '🔧', color: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Electrical', icon: '⚡', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'Cleaning', icon: '✨', color: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Landscaping', icon: '🌱', color: 'bg-emerald-100 dark:bg-emerald-900/30' },
    { name: 'HVAC', icon: '❄️', color: 'bg-cyan-100 dark:bg-cyan-900/30' },
    { name: 'Painting', icon: '🖌️', color: 'bg-fuchsia-100 dark:bg-fuchsia-900/30' },
    { name: 'Carpentry', icon: '🪚', color: 'bg-amber-100 dark:bg-amber-900/30' },
    { name: 'Roofing', icon: '🏠', color: 'bg-red-100 dark:bg-red-900/30' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our most requested service categories
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } hover-scale`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link 
                to="/discover" 
                className={`block ${service.color} rounded-2xl p-6 hover:shadow-md transition-all`}
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="font-medium text-sm">{service.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className={`py-24 px-4 bg-brand-500 transition-all duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to find trusted local professionals?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who found quality service providers in their area.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/discover">
            <Button 
              size="lg" 
              className="rounded-full bg-white text-brand-600 hover:bg-gray-100 px-8 hover:scale-105 transition-transform"
            >
              Search Services Now
            </Button>
          </Link>
          <Link to="/auth">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white text-white hover:bg-white/10 px-8"
            >
              Provider Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PopularServicesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialCarousel />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;


import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Clock, 
  Wallet, 
  MessageSquare 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-scale ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay * 100}ms`,
        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
      }}
    >
      <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 text-orange-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Verified Pros",
      description: "All professionals undergo thorough background checks and skill verification before joining our platform.",
      delay: 1
    },
    {
      icon: <Star size={24} />,
      title: "Real User Ratings",
      description: "Genuine reviews and ratings from local customers help you choose the best service provider.",
      delay: 2
    },
    {
      icon: <MapPin size={24} />,
      title: "Live Map Discovery",
      description: "Find nearby professionals with our interactive map and see their availability in real-time.",
      delay: 3
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Response",
      description: "Get same-day service for urgent needs with our rapid-response network of providers.",
      delay: 4
    },
    {
      icon: <Wallet size={24} />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprises when the bill comes.",
      delay: 5
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Secure Messaging",
      description: "Communicate directly with service providers through our encrypted messaging system.",
      delay: 6
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">PinWrench</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We connect you with the best local professionals, saving you time and ensuring quality service every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

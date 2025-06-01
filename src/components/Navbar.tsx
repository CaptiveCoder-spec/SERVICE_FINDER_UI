import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { 
  Search, 
  Menu, 
  X, 
  User
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="mr-2" />
            <span className="font-sora text-xl font-bold">
              <span className="text-brand-600">Local</span>
              <span className="text-gray-700 dark:text-gray-300">Services</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/discover" className="text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400 transition-colors">
              Find Services
            </Link>
            <Link to="#" className="text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400 transition-colors">
              For Providers
            </Link>
            <Link to="#" className="text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400 transition-colors">
              How It Works
            </Link>
          </div>

          {/* Auth & Search Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="outline" className="rounded-full">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="rounded-full bg-brand-500 hover:bg-brand-600">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileNavOpen && (
          <div className="md:hidden mt-4 py-4 px-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg animate-slideUp">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/discover" 
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setMobileNavOpen(false)}
              >
                Find Services
              </Link>
              <Link 
                to="#" 
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setMobileNavOpen(false)}
              >
                For Providers
              </Link>
              <Link 
                to="#" 
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setMobileNavOpen(false)}
              >
                How It Works
              </Link>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  to="/auth" 
                  className="block px-4 py-2 text-center text-brand-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/auth" 
                  className="block px-4 py-2 mt-2 text-center text-white bg-brand-500 hover:bg-brand-600 rounded-lg"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

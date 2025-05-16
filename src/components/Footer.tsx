
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Blog</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Help Center</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Safety Center</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Community Guidelines</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">Install App</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5046 12.4652C17.5046 10.2193 18.9523 8.28225 20.9828 7.45728C20.3458 6.29543 19.2516 5.43147 17.9397 5.12275C16.5062 4.80584 14.788 5.62861 14.0686 5.98307C13.2888 6.35634 12.2776 7.00292 12.2776 7.00292C12.2776 7.00292 11.3143 6.39455 10.5661 6.06482C9.69328 5.674 8.22506 5.29529 6.903 5.65304C5.09779 6.12871 3.66931 7.55914 3.00391 9.37505C2.43757 10.9365 2.44639 12.8207 2.77496 14.5324C3.04961 15.9576 3.59583 17.3646 4.39079 18.5224C5.13038 19.5779 6.04541 20.5503 7.172 20.9652C8.18336 21.2901 9.3835 21.1756 10.2993 20.7224C11.1649 20.2456 11.9803 19.4821 12.2644 19.4783C12.5484 19.4745 13.5066 20.3873 14.3411 20.8111C15.1974 21.2877 16.2175 21.448 17.1379 21.2463C18.1518 21.0344 19.0177 20.4563 19.6693 19.6237C20.2751 18.8452 20.7561 17.8726 21.1045 16.8237C21.3488 16.0711 21.4538 15.6448 21.5867 15.0402C19.2255 14.1293 17.5046 12.4652 17.5046 12.4652ZM16.1093 3C16.2093 4.37489 16.797 5.66582 17.7632 6.60618C18.7294 7.54655 20.0223 8.13547 21.398 8.23577C21.4008 6.85931 20.8074 5.54095 19.8063 4.59532C18.8051 3.6497 17.4769 3.07251 16.1006 3.00064L16.1093 3Z" />
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.26325 3.65096C5.73923 3.21475 6.01215 2.60492 6.01215 1.99508C6.01215 1.87301 6.00437 1.77504 5.98881 1.67707C5.42228 1.6926 4.70002 1.99508 4.17228 2.47238C3.73408 2.85271 3.38458 3.46255 3.38458 4.08794C3.38458 4.2255 3.4001 4.32347 4.17228 4.30793C4.77652 4.30793 4.81542 4.07747 5.26325 3.65096Z" />
                  <path d="M11.3095 20.8761H6.21152L5.28889 23.4999H3L7.72624 10.5H9.84648L14.5038 23.4999H12.1725L11.3095 20.8761ZM6.70138 19.1747H10.8196L8.77661 12.6909H8.73771L6.70138 19.1747Z" />
                  <path d="M21.0017 16.7158C21.0017 20.3326 18.9403 22 16.7034 22C15.4349 22 14.3902 21.4057 13.8432 20.4929H13.8043V23.5H11.9364V11.4441H13.7654V12.9083H13.8043C14.3318 11.9955 15.4155 11.3701 16.7034 11.3701C18.9403 11.3701 21.0017 13.0375 21.0017 16.7158ZM19.0737 16.7158C19.0737 14.4614 17.981 13.1841 16.4195 13.1841C14.8969 13.1841 13.7848 14.5 13.7848 16.7158C13.7848 18.9316 14.8969 20.2475 16.4195 20.2475C17.981 20.2475 19.0737 18.9702 19.0737 16.7158Z" />
                </svg>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500 text-white mr-2">
                <span className="font-sora text-sm font-bold">L</span>
              </div>
              <span className="font-sora text-base font-bold">
                <span className="text-brand-600">Local</span>
                <span className="text-gray-700 dark:text-gray-300">Services</span>
              </span>
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Local Services Finder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

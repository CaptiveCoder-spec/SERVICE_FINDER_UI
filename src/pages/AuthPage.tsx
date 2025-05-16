
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff } from 'lucide-react';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isProvider, setIsProvider] = useState(false);
  
  // Animation wave effect
  useEffect(() => {
    const createWaves = () => {
      const waves = document.querySelectorAll('.wave');
      waves.forEach(wave => {
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;
        (wave as HTMLElement).style.animationDelay = `${randomDelay}s`;
        (wave as HTMLElement).style.animationDuration = `${randomDuration}s`;
      });
    };
    
    createWaves();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 relative overflow-hidden flex items-center justify-center px-4">
        {/* Animated background waves */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="wave bg-brand-50/50 dark:bg-brand-900/10 h-[800px] w-[800px] rounded-full absolute -top-[400px] -left-[400px] animate-pulse"></div>
          <div className="wave bg-warm-50/50 dark:bg-warm-900/10 h-[600px] w-[600px] rounded-full absolute -bottom-[300px] -right-[300px] animate-pulse"></div>
          <div className="wave bg-brand-100/30 dark:bg-brand-700/10 h-[500px] w-[500px] rounded-full absolute top-[20%] -right-[250px] animate-pulse"></div>
        </div>
        
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-100 dark:border-gray-700">
            <Tabs 
              defaultValue="login" 
              value={activeTab} 
              onValueChange={(value) => setActiveTab(value as 'login' | 'register')}
              className="w-full"
            >
              <div className="flex">
                <TabsList className="w-full grid grid-cols-2 rounded-none bg-gray-50 dark:bg-gray-700/50 p-0">
                  <TabsTrigger 
                    value="login" 
                    className="py-4 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-none"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register" 
                    className="py-4 rounded-none data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-none"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="px-6 py-8">
                {/* Login Tab */}
                <TabsContent value="login" className="space-y-6">
                  <div className="space-y-2 text-center mb-6">
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Enter your credentials to access your account
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        placeholder="name@example.com" 
                        type="email"
                        className="rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="#" className="text-xs text-brand-500 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"}
                          className="rounded-lg pr-10" 
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                  </div>
                  
                  <Button className="w-full py-6 bg-brand-500 hover:bg-brand-600 rounded-lg">
                    Sign In
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="rounded-lg py-6">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="rounded-lg py-6">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Don't have an account?{' '}
                    <button 
                      className="text-brand-500 hover:underline font-medium" 
                      onClick={() => setActiveTab('register')}
                    >
                      Sign up
                    </button>
                  </p>
                </TabsContent>
                
                {/* Register Tab */}
                <TabsContent value="register" className="space-y-6">
                  <div className="space-y-2 text-center mb-6">
                    <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Enter your information to get started
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" className="rounded-lg" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input 
                        id="registerEmail" 
                        placeholder="name@example.com" 
                        type="email"
                        className="rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <div className="relative">
                        <Input 
                          id="registerPassword" 
                          type={showPassword ? "text" : "password"}
                          className="rounded-lg pr-10" 
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="isProvider" checked={isProvider} onCheckedChange={(checked) => setIsProvider(checked === true)} />
                      <Label htmlFor="isProvider" className="text-sm">Sign up as a Service Provider</Label>
                    </div>
                    
                    {isProvider && (
                      <div className="space-y-2 p-3 bg-brand-50 dark:bg-brand-900/20 rounded-lg animate-fadeIn">
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          As a service provider, you'll be able to list your services, get bookings, and grow your business.
                        </p>
                        <div className="space-y-2">
                          <Label htmlFor="profession">Profession/Service</Label>
                          <Input 
                            id="profession" 
                            placeholder="e.g., Plumber, Electrician" 
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{' '}
                        <Link to="#" className="text-brand-500 hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="#" className="text-brand-500 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>
                  
                  <Button className="w-full py-6 bg-brand-500 hover:bg-brand-600 rounded-lg">
                    Create Account
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        Or sign up with
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="rounded-lg py-6">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="rounded-lg py-6">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <button
                      className="text-brand-500 hover:underline font-medium"
                      onClick={() => setActiveTab('login')}
                    >
                      Sign in
                    </button>
                  </p>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthPage;

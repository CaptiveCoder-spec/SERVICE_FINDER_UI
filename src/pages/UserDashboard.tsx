
import React, { useState } from 'react';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Search,
  Calendar,
  Clock,
  ChevronRight,
  Star,
  FileText,
  MessageSquare,
  ArrowUpRight,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface BookingProps {
  id: string;
  provider: {
    name: string;
    profession: string;
    avatar: string;
  };
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const bookings: BookingProps[] = [
  {
    id: '1',
    provider: {
      name: 'Robert Martinez',
      profession: 'Plumber',
      avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
    },
    date: 'May 18, 2025',
    time: '10:00 AM',
    status: 'upcoming',
  },
  {
    id: '2',
    provider: {
      name: 'Jennifer Lee',
      profession: 'Electrician',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    date: 'May 20, 2025',
    time: '2:30 PM',
    status: 'upcoming',
  },
  {
    id: '3',
    provider: {
      name: 'David Wilson',
      profession: 'HVAC Specialist',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    date: 'May 12, 2025',
    time: '11:00 AM',
    status: 'completed',
  },
];

const BookingCard: React.FC<{ booking: BookingProps }> = ({ booking }) => {
  const statusColors = {
    upcoming: 'bg-blue-500',
    completed: 'bg-green-500',
    cancelled: 'bg-red-500',
  };
  
  const statusText = {
    upcoming: 'Upcoming',
    completed: 'Completed',
    cancelled: 'Cancelled',
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <img 
          src={booking.provider.avatar} 
          alt={booking.provider.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700 mr-4"
        />
        <div>
          <h3 className="font-semibold">{booking.provider.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{booking.provider.profession}</p>
        </div>
        <div className={`ml-auto px-3 py-1 rounded-full text-xs text-white ${statusColors[booking.status]}`}>
          {statusText[booking.status]}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{booking.date}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Clock className="w-4 h-4 mr-2" />
          <span>{booking.time}</span>
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-gray-700 mt-4 pt-4 flex justify-between items-center">
        {booking.status === 'upcoming' ? (
          <>
            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 border-red-200 hover:border-red-300">
              Cancel
            </Button>
            <Button variant="outline" size="sm" className="text-brand-500 hover:text-brand-600 border-brand-200 hover:border-brand-300">
              Reschedule
            </Button>
          </>
        ) : booking.status === 'completed' ? (
          <>
            <Button variant="outline" size="sm" className="text-brand-500 hover:text-brand-600 border-brand-200 hover:border-brand-300">
              Book Again
            </Button>
            <Button size="sm" className="bg-warm-500 hover:bg-warm-600 flex items-center">
              <Star className="w-4 h-4 mr-1 fill-white" />
              Leave Review
            </Button>
          </>
        ) : (
          <Button variant="outline" size="sm" className="w-full text-brand-500 hover:text-brand-600 border-brand-200 hover:border-brand-300">
            Book Again
          </Button>
        )}
      </div>
    </div>
  );
};

interface SavedProviderProps {
  id: string;
  name: string;
  profession: string;
  avatar: string;
  rating: number;
}

const savedProviders: SavedProviderProps[] = [
  {
    id: '1',
    name: 'Robert Martinez',
    profession: 'Plumber',
    avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Jennifer Lee',
    profession: 'Electrician',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'David Wilson',
    profession: 'HVAC Specialist',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    profession: 'Painter',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 4.9,
  },
];

const SavedProviderCard: React.FC<{ provider: SavedProviderProps }> = ({ provider }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-200 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center">
        <img 
          src={provider.avatar} 
          alt={provider.name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold">{provider.name}</h3>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 dark:text-gray-400 mr-2">{provider.profession}</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-warm-500 fill-warm-500" />
              <span className="ml-1 text-gray-700 dark:text-gray-300">{provider.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex mt-3 gap-2">
        <Button size="sm" variant="outline" className="flex-1 text-brand-500">
          Profile
        </Button>
        <Button size="sm" className="flex-1 bg-brand-500 hover:bg-brand-600">
          Book
        </Button>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <DashboardSidebar userType="user" />
      
      <div className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Welcome back, Emily!</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="neu-card bg-brand-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Upcoming Bookings</p>
                <h3 className="text-2xl font-bold mt-1">2</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-500">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <Button variant="link" size="sm" className="p-0 h-auto text-brand-500 flex items-center">
                <span>View Schedule</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="neu-card bg-warm-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pending Reviews</p>
                <h3 className="text-2xl font-bold mt-1">1</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-warm-100 dark:bg-warm-900/30 flex items-center justify-center text-warm-500">
                <Star className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <Button variant="link" size="sm" className="p-0 h-auto text-warm-500 flex items-center">
                <span>Write Reviews</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="neu-card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Unread Messages</p>
                <h3 className="text-2xl font-bold mt-1">3</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <Button variant="link" size="sm" className="p-0 h-auto text-blue-500 flex items-center">
                <span>View Messages</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bookings section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Your Bookings</h2>
            <Button variant="outline" className="text-gray-600 dark:text-gray-300 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              <span>View All</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse mr-4"></div>
                      <div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-24 mb-2"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-20"></div>
                      </div>
                      <div className="ml-auto h-6 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full w-16"></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-24"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-20"></div>
                    </div>
                    
                    <div className="border-t border-gray-100 dark:border-gray-700 mt-4 pt-4 flex justify-between">
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-24"></div>
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-24"></div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {bookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </>
            )}
          </div>
        </div>
        
        {/* Saved providers section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Saved Providers</h2>
            <Button variant="outline" className="text-gray-600 dark:text-gray-300 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              <span>Browse More</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse mr-4"></div>
                      <div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-24 mb-2"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-32"></div>
                      </div>
                    </div>
                    
                    <div className="flex mt-3 gap-2">
                      <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
                      <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md"></div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {savedProviders.map((provider) => (
                  <SavedProviderCard key={provider.id} provider={provider} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;


import React, { useState } from 'react';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Bell,
  Search,
  Calendar,
  Clock,
  ChevronRight,
  Star,
  Users,
  DollarSign,
  PieChart,
  CheckCircle,
  XCircle,
  MessageSquare,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RPieChart, Pie, Cell } from 'recharts';

// Sample data for charts
const bookingData = [
  { name: 'Jan', bookings: 12 },
  { name: 'Feb', bookings: 19 },
  { name: 'Mar', bookings: 15 },
  { name: 'Apr', bookings: 25 },
  { name: 'May', bookings: 22 },
];

const ratingData = [
  { name: '5 Stars', value: 45 },
  { name: '4 Stars', value: 28 },
  { name: '3 Stars', value: 15 },
  { name: '2 Stars', value: 8 },
  { name: '1 Star', value: 4 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

interface RequestProps {
  id: string;
  client: {
    name: string;
    avatar: string;
  };
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'accepted' | 'completed' | 'declined';
}

const requests: RequestProps[] = [
  {
    id: '1',
    client: {
      name: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
    },
    service: 'Electrical Wiring',
    date: 'May 22, 2025',
    time: '9:00 AM',
    status: 'pending',
  },
  {
    id: '2',
    client: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    service: 'Lighting Installation',
    date: 'May 24, 2025',
    time: '2:00 PM',
    status: 'pending',
  },
  {
    id: '3',
    client: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    service: 'Circuit Breaker Repair',
    date: 'May 18, 2025',
    time: '11:00 AM',
    status: 'accepted',
  },
];

const RequestCard: React.FC<{ request: RequestProps }> = ({ request }) => {
  const statusColors = {
    pending: 'bg-yellow-500',
    accepted: 'bg-green-500',
    completed: 'bg-blue-500',
    declined: 'bg-red-500',
  };
  
  const statusText = {
    pending: 'Pending',
    accepted: 'Accepted',
    completed: 'Completed',
    declined: 'Declined',
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <img 
          src={request.client.avatar} 
          alt={request.client.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700 mr-4"
        />
        <div>
          <h3 className="font-semibold">{request.client.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{request.service}</p>
        </div>
        <div className={`ml-auto px-3 py-1 rounded-full text-xs text-white ${statusColors[request.status]}`}>
          {statusText[request.status]}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{request.date}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Clock className="w-4 h-4 mr-2" />
          <span>{request.time}</span>
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-gray-700 mt-4 pt-4 flex justify-between items-center">
        {request.status === 'pending' && (
          <>
            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 border-red-200 hover:border-red-300">
              <XCircle className="w-4 h-4 mr-1" />
              Decline
            </Button>
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
              <CheckCircle className="w-4 h-4 mr-1" />
              Accept
            </Button>
          </>
        )}
        
        {request.status === 'accepted' && (
          <>
            <Button variant="outline" size="sm" className="text-brand-500 hover:text-brand-600 border-brand-200 hover:border-brand-300">
              <MessageSquare className="w-4 h-4 mr-1" />
              Message
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
              <CheckCircle className="w-4 h-4 mr-1" />
              Mark Completed
            </Button>
          </>
        )}
        
        {request.status === 'completed' && (
          <Button variant="outline" size="sm" className="w-full text-brand-500 hover:text-brand-600 border-brand-200 hover:border-brand-300">
            View Details
          </Button>
        )}
        
        {request.status === 'declined' && (
          <Button variant="outline" size="sm" className="w-full text-gray-500 hover:text-gray-600 border-gray-200 hover:border-gray-300">
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

const ProviderDashboard = () => {
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
      <DashboardSidebar userType="provider" />
      
      <div className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Provider Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Welcome back, Jennifer!</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                2
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
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="neu-card bg-brand-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">New Requests</p>
                <h3 className="text-2xl font-bold mt-1">2</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-500">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <Progress value={40} className="h-1 mt-4" />
          </div>
          
          <div className="neu-card bg-warm-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average Rating</p>
                <h3 className="text-2xl font-bold mt-1">4.8</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-warm-100 dark:bg-warm-900/30 flex items-center justify-center text-warm-500">
                <Star className="w-5 h-5 fill-warm-500" />
              </div>
            </div>
            <Progress value={96} className="h-1 mt-4" />
          </div>
          
          <div className="neu-card bg-blue-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Clients</p>
                <h3 className="text-2xl font-bold mt-1">127</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <Progress value={72} className="h-1 mt-4" />
          </div>
          
          <div className="neu-card bg-green-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Earnings</p>
                <h3 className="text-2xl font-bold mt-1">$3,860</h3>
              </div>
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <Progress value={85} className="h-1 mt-4" />
          </div>
        </div>
        
        {/* Service Requests */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Service Requests</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </Tabs>
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
                {requests.map((request) => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </>
            )}
          </div>
        </div>
        
        {/* Analytics section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Analytics Overview</h2>
            <Button variant="outline" className="text-gray-600 dark:text-gray-300 flex items-center">
              <PieChart className="w-4 h-4 mr-2" />
              <span>Full Analytics</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {isLoading ? (
              <>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium mb-4">Monthly Bookings</h3>
                  <div className="h-64 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium mb-4">Rating Distribution</h3>
                  <div className="h-64 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-lg"></div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium mb-4">Monthly Bookings</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={bookingData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="bookings" 
                          stroke="#0C96E6" 
                          activeDot={{ r: 8 }}
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium mb-4">Rating Distribution</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RPieChart>
                        <Pie
                          data={ratingData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {ratingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;

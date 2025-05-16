
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Search, 
  MapPin, 
  Star, 
  ChevronDown, 
  Grid2X2, 
  List, 
  X,
  Menu
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface Provider {
  id: string;
  name: string;
  profession: string;
  rating: number;
  distance: number;
  photo: string;
  responseTime: string;
}

const providers: Provider[] = [
  {
    id: '1',
    name: 'Robert Martinez',
    profession: 'Plumber',
    rating: 4.9,
    distance: 1.2,
    photo: 'https://randomuser.me/api/portraits/men/25.jpg',
    responseTime: '15 min',
  },
  {
    id: '2',
    name: 'Jennifer Lee',
    profession: 'Electrician',
    rating: 4.8,
    distance: 0.8,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    responseTime: '30 min',
  },
  {
    id: '3',
    name: 'David Wilson',
    profession: 'HVAC Specialist',
    rating: 4.7,
    distance: 2.5,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    responseTime: '1 hour',
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    profession: 'Painter',
    rating: 4.9,
    distance: 1.5,
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
    responseTime: '45 min',
  },
  {
    id: '5',
    name: 'Michael Brown',
    profession: 'Carpenter',
    rating: 4.6,
    distance: 3.2,
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    responseTime: '2 hours',
  },
  {
    id: '6',
    name: 'Emily Davis',
    profession: 'House Cleaner',
    rating: 4.8,
    distance: 0.7,
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    responseTime: '20 min',
  },
];

const ProviderCard: React.FC<{
  provider: Provider;
  view: 'grid' | 'list';
  onHover: (id: string) => void;
}> = ({ provider, view, onHover }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-fadeIn ${
        view === 'list' ? 'flex' : ''
      }`}
      onMouseEnter={() => onHover(provider.id)}
    >
      <div className={view === 'list' ? 'w-1/4' : ''}>
        <img 
          src={provider.photo} 
          alt={provider.name} 
          className={`w-full object-cover ${view === 'grid' ? 'h-48' : 'h-full'}`}
        />
      </div>
      
      <div className={`p-4 ${view === 'list' ? 'w-3/4' : ''}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{provider.name}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{provider.distance} mi</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-xs py-0.5 px-2 rounded-full">
            {provider.profession}
          </span>
          <div className="mx-2">•</div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-warm-500 mr-1 fill-warm-500" />
            <span>{provider.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium text-green-600 dark:text-green-400">✓ </span>
            Responds in {provider.responseTime}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-brand-500 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

const DiscoveryPage = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [distance, setDistance] = useState<number[]>([10]);
  const [rating, setRating] = useState<number[]>([4]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hoveredProvider, setHoveredProvider] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Search Header */}
        <div className="bg-brand-500 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-2xl font-bold">Find Local Services</h1>
              
              <div className="relative flex-grow max-w-md ml-auto">
                <Input 
                  placeholder="Search for a service..." 
                  className="pl-10 pr-4 py-2 rounded-full text-gray-800 border-none"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Mobile Toggle */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-between"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <span>Filters</span>
                {filtersOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            
            {/* Filters Sidebar */}
            <div className={`lg:w-1/4 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Filters</h2>
                
                <div className="space-y-6">
                  {/* Category filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="carpentry">Carpentry</SelectItem>
                        <SelectItem value="cleaning">Cleaning</SelectItem>
                        <SelectItem value="painting">Painting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Distance filter */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium">Distance</label>
                      <span className="text-sm text-gray-500">Within {distance[0]} miles</span>
                    </div>
                    <Slider
                      defaultValue={[10]}
                      max={50}
                      step={1}
                      value={distance}
                      onValueChange={setDistance}
                      className="py-4"
                    />
                  </div>
                  
                  {/* Rating filter */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium">Minimum Rating</label>
                      <span className="text-sm text-gray-500">{rating[0]}+ stars</span>
                    </div>
                    <Slider
                      defaultValue={[4]}
                      min={1}
                      max={5}
                      step={0.5}
                      value={rating}
                      onValueChange={setRating}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500 px-1">
                      <span>1</span>
                      <span>5</span>
                    </div>
                  </div>
                  
                  {/* More filters */}
                  <div>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-between"
                    >
                      <span>More Filters</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Apply button */}
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            {/* Results & Map */}
            <div className="flex-grow">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">6 results found</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Showing service providers near you</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 hidden sm:inline">View:</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setView('grid')}
                    className={view === 'grid' ? 'bg-gray-100 dark:bg-gray-700' : ''}
                  >
                    <Grid2X2 className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setView('list')}
                    className={view === 'list' ? 'bg-gray-100 dark:bg-gray-700' : ''}
                  >
                    <List className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Results Grid/List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {providers.map((provider) => (
                  <ProviderCard 
                    key={provider.id} 
                    provider={provider} 
                    view={view}
                    onHover={(id) => setHoveredProvider(id)}
                  />
                ))}
              </div>
              
              {/* Map View */}
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Interactive map would be displayed here, showing the locations of service providers
                  </p>
                  {providers.map((provider) => (
                    <div 
                      key={provider.id}
                      className={`absolute transition-all duration-300 ${
                        provider.id === hoveredProvider ? 'scale-125 z-10' : ''
                      }`}
                      style={{
                        top: `${Math.random() * 70 + 10}%`,
                        left: `${Math.random() * 70 + 10}%`,
                      }}
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-lg">
                          <img 
                            src={provider.photo} 
                            alt={provider.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        
                        {provider.id === hoveredProvider && (
                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 whitespace-nowrap animate-fadeIn text-xs">
                            {provider.name} • {provider.profession}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiscoveryPage;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Star,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  Award,
  Phone,
  Mail,
  MessageSquare,
  Share2,
  Heart,
  ChevronDown,
} from 'lucide-react';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
    date: 'March 15, 2025',
    text: 'Robert was extremely professional and fixed our sink issue in less than an hour. He explained what was wrong and how he fixed it. Would definitely hire again!'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    date: 'February 28, 2025',
    text: 'Arrived on time and did excellent work fixing our pipes. Very knowledgeable and friendly. The price was reasonable and matched the estimate.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 4,
    date: 'February 10, 2025',
    text: 'Good service overall. He fixed my leaking faucet and gave some maintenance tips. Slightly more expensive than I expected but the work quality was good.'
  }
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <img 
          src={review.avatar} 
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium">{review.name}</h4>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'text-warm-500 fill-warm-500' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{review.text}</p>
    </div>
  );
};

const PortfolioItem: React.FC<{ image: string; title: string }> = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title}
        className={`w-full h-48 object-cover transition-transform duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white p-4 font-medium">{title}</span>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // For a real application, we would fetch provider data based on the ID
  // Here we'll just use static data
  const provider = {
    id: '1',
    name: 'Robert Martinez',
    profession: 'Master Plumber',
    rating: 4.9,
    reviewCount: 127,
    yearsExperience: 12,
    jobsCompleted: 543,
    photo: 'https://randomuser.me/api/portraits/men/25.jpg',
    about: 'Licensed master plumber with over 12 years of experience in residential and commercial plumbing. Specializing in repairs, installations, and maintenance. My goal is to provide efficient, reliable service with a focus on quality workmanship and customer satisfaction.',
    location: 'San Francisco, CA',
    responseTime: '30 minutes',
    services: ['Pipe Repairs', 'Fixture Installation', 'Water Heater Service', 'Drain Cleaning', 'Leak Detection'],
    certifications: ['Licensed Master Plumber', 'Certified Backflow Tester', 'Green Plumbing Certification'],
  };

  const portfolioItems = [
    { image: 'https://images.unsplash.com/photo-1585704122911-d5c1888089d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGx1bWJlcnxlbnwwfHwwfHx8MA%3D%3D', title: 'Bathroom Remodel' },
    { image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D', title: 'Kitchen Sink Installation' },
    { image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D', title: 'Water Heater Replacement' },
    { image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsdW1iaW5nfGVufDB8fDB8fHww', title: 'Pipe Repair' },
    { image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsdW1iaW5nfGVufDB8fDB8fHww', title: 'Drain Cleaning' },
    { image: 'https://images.unsplash.com/photo-1510018572596-e40e2619b412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsdW1iaW5nfGVufDB8fDB8fHww', title: 'Fixture Installation' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden mb-4 md:mb-0 md:mr-6">
                <img 
                  src={provider.photo} 
                  alt={provider.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">{provider.name}</h1>
                    <div className="flex items-center mb-2">
                      <span className="bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 text-sm py-0.5 px-3 rounded-full">
                        {provider.profession}
                      </span>
                      <div className="flex items-center ml-3">
                        <Star className="w-4 h-4 text-warm-500 fill-warm-500 mr-1" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">({provider.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{provider.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>Save</span>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="rounded-full bg-brand-500 hover:bg-brand-600">Book Now</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Book an Appointment</DialogTitle>
                          <DialogDescription>
                            Select a date and time that works for you to book with {provider.name}.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-6 py-4">
                          <div className="grid gap-2">
                            <div className="flex items-center font-medium">
                              <CalendarIcon className="w-4 h-4 mr-2 text-brand-500" />
                              <span>Select a Date</span>
                            </div>
                            <div className="p-2 border rounded-lg">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md"
                                disabled={(date) => date < new Date()}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center font-medium mb-3">
                              <Clock className="w-4 h-4 mr-2 text-brand-500" />
                              <span>Available Time Slots</span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'].map((time) => (
                                <button
                                  key={time}
                                  className="py-2 px-3 border rounded-md hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                          <Button className="w-full mt-2 bg-brand-500 hover:bg-brand-600">
                            Confirm Booking
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-brand-500 mr-2" />
                    <span><span className="font-semibold">{provider.yearsExperience}</span> years experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-500 mr-2" />
                    <span><span className="font-semibold">{provider.jobsCompleted}</span> jobs completed</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-brand-500 mr-2" />
                    <span>Responds in <span className="font-semibold">{provider.responseTime}</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Tabs */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="about" className="space-y-8">
            <TabsList className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg inline-flex">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              {/* About Tab */}
              <TabsContent value="about" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {provider.about}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {provider.services.map((service, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {provider.certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <Award className="w-5 h-5 text-brand-500 mr-2 flex-shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Provider</span>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      <span>Send Email</span>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      <span>Send Message</span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Portfolio Tab */}
              <TabsContent value="portfolio">
                <h3 className="text-xl font-semibold mb-6">Work Portfolio</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item, index) => (
                    <PortfolioItem 
                      key={index}
                      image={item.image}
                      title={item.title}
                    />
                  ))}
                </div>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-lg font-semibold mr-2">{provider.rating}</span>
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(provider.rating) ? 'text-warm-500 fill-warm-500' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500">({provider.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-1 mt-4"
                  >
                    <span>Load More Reviews</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
              
              {/* Location Tab */}
              <TabsContent value="location">
                <h3 className="text-xl font-semibold mb-4">Service Area</h3>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      Map showing service coverage area would be displayed here
                    </p>
                    <p className="font-medium">
                      Serving: {provider.location} and surrounding areas
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Service Availability</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Robert serves clients within a 25-mile radius of San Francisco city center. Travel fees may apply for service calls beyond 15 miles.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;

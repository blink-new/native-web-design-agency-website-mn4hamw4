import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import {
  Search,
  MapPin,
  Wifi,
  Calendar,
  Star,
  ChevronDown,
  Bell,
  Menu,
  Coffee,
  Monitor,
  Briefcase,
  Heart,
  PanelLeft,
  Sliders,
  ArrowUpDown,
  X,
  Check
} from 'lucide-react';

const propertyListings = [
  {
    id: 1,
    title: 'Modern Studio with Dedicated Workspace',
    location: 'Lisbon, Portugal',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
    rating: 4.92,
    reviews: 128,
    price: 1250,
    features: ['High-speed WiFi: 300 Mbps', 'Dedicated desk & chair', 'Monitor available', '24/7 coworking access'],
    verified: true,
    superhost: true,
  },
  {
    id: 2,
    title: 'Beachfront Apartment with Office Nook',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600',
    rating: 4.85,
    reviews: 96,
    price: 1100,
    features: ['Fiber WiFi: 500 Mbps', 'Ergonomic setup', 'Ocean view', 'Shared coworking space nearby'],
    verified: true,
    superhost: false,
  },
  {
    id: 3,
    title: 'Urban Loft with Dedicated Office Room',
    location: 'Mexico City, Mexico',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
    rating: 4.97,
    reviews: 214,
    price: 1500,
    features: ['Gigabit internet', 'Private office room', 'Standing desk', 'Printer & office supplies'],
    verified: true,
    superhost: true,
  },
  {
    id: 4,
    title: 'Cozy Mountain Cabin with Fast Internet',
    location: 'Medellín, Colombia',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600',
    rating: 4.89,
    reviews: 76,
    price: 950,
    features: ['Stable WiFi: 200 Mbps', 'Mountain view desk', 'Quiet neighborhood', 'Weekly cleaning'],
    verified: true,
    superhost: false,
  },
  {
    id: 5,
    title: 'Creative Co-living Space for Digital Nomads',
    location: 'Chiang Mai, Thailand',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600',
    rating: 4.94,
    reviews: 183,
    price: 800,
    features: ['Community WiFi: 400 Mbps', 'Shared workspaces', 'Networking events', 'Meeting rooms'],
    verified: true,
    superhost: false,
  }
];

const NomadNestBookingPlatform = () => {
  const [activeView, setActiveView] = useState('list');
  const [searchLocation, setSearchLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter(item => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  return (
    <MockupLayout title="NomadNest Booking Platform" projectId={2}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-14 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <div className="mr-6 flex items-center text-primary-600 font-bold text-xl">
                <Briefcase className="mr-2 h-5 w-5" />
                NomadNest
              </div>
              
              <div className="relative hidden md:block flex-grow max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-secondary-500" />
                <Input 
                  type="text" 
                  placeholder="Search destinations..." 
                  className="pl-9 pr-4 py-2"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Become a Host
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center border rounded-full p-2 shadow-sm">
                <Menu className="h-5 w-5" />
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          {/* Search bar for mobile */}
          <div className="mt-4 md:hidden relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-secondary-500" />
            <Input 
              type="text" 
              placeholder="Search destinations..." 
              className="pl-9 pr-4 py-2"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          
          {/* Filter bar */}
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 flex-grow">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center whitespace-nowrap"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Sliders className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <Wifi className="mr-2 h-4 w-4" />
                WiFi Speed
                <ChevronDown className="ml-2 h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <Monitor className="mr-2 h-4 w-4" />
                Workspace
                <ChevronDown className="ml-2 h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <Calendar className="mr-2 h-4 w-4" />
                Dates
              </Button>
              <Button variant="outline" size="sm" className="flex items-center whitespace-nowrap">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Price
                <ChevronDown className="ml-2 h-3 w-3" />
              </Button>
            </div>
            
            <div className="ml-4 flex items-center">
              <Tabs defaultValue="list" className="w-[120px]">
                <TabsList>
                  <TabsTrigger 
                    value="list" 
                    onClick={() => setActiveView('list')}
                    className="flex items-center justify-center"
                  >
                    <PanelLeft className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger 
                    value="map" 
                    onClick={() => setActiveView('map')}
                    className="flex items-center justify-center"
                  >
                    <MapPin className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </header>
      
      {/* Filters panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                <X className="h-4 w-4 mr-1" />
                Close
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Internet</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="wifi-100" className="mr-2" />
                    <label htmlFor="wifi-100">100+ Mbps</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="wifi-300" className="mr-2" />
                    <label htmlFor="wifi-300">300+ Mbps</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="wifi-500" className="mr-2" />
                    <label htmlFor="wifi-500">500+ Mbps</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="wifi-1000" className="mr-2" />
                    <label htmlFor="wifi-1000">1 Gbps+</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Workspace</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="dedicated-desk" className="mr-2" />
                    <label htmlFor="dedicated-desk">Dedicated desk</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="ergonomic-chair" className="mr-2" />
                    <label htmlFor="ergonomic-chair">Ergonomic chair</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="monitor" className="mr-2" />
                    <label htmlFor="monitor">External monitor</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="office-room" className="mr-2" />
                    <label htmlFor="office-room">Private office room</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Nearby Amenities</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="coworking" className="mr-2" />
                    <label htmlFor="coworking">Coworking space</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cafe" className="mr-2" />
                    <label htmlFor="cafe">Coffee shops</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="gym" className="mr-2" />
                    <label htmlFor="gym">Fitness center</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="grocery" className="mr-2" />
                    <label htmlFor="grocery">Grocery store</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Input type="number" placeholder="Min" className="w-full" min={0} />
                    <span>-</span>
                    <Input type="number" placeholder="Max" className="w-full" min={0} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average: $1,250/month</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 pt-4 border-t">
              <Button variant="outline" className="mr-2">Reset</Button>
              <Button onClick={() => setShowFilters(false)}>Apply Filters</Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Remote-friendly stays in popular destinations</h1>
          <p className="text-secondary-500">Find and book accommodation perfect for remote work</p>
        </div>
        
        {activeView === 'list' ? (
          /* Properties grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyListings.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                    onClick={() => toggleLike(property.id)}
                  >
                    <Heart 
                      className={`h-5 w-5 ${liked.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                    />
                  </Button>
                  {property.verified && (
                    <Badge className="absolute bottom-2 left-2 bg-primary-500 hover:bg-primary-600">
                      Verified Workspace
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{property.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {property.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span className="font-medium">{property.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({property.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="py-2">
                  <div className="space-y-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        {feature.includes('WiFi') || feature.includes('internet') ? (
                          <Wifi className="h-3 w-3 mr-2 text-primary-500" />
                        ) : feature.includes('desk') || feature.includes('Ergonomic') ? (
                          <Briefcase className="h-3 w-3 mr-2 text-primary-500" />
                        ) : feature.includes('Monitor') || feature.includes('monitor') ? (
                          <Monitor className="h-3 w-3 mr-2 text-primary-500" />
                        ) : feature.includes('coffee') || feature.includes('cafe') || feature.includes('coworking') ? (
                          <Coffee className="h-3 w-3 mr-2 text-primary-500" />
                        ) : (
                          <Check className="h-3 w-3 mr-2 text-primary-500" />
                        )}
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center pt-2 border-t">
                  <div>
                    <span className="font-bold text-lg">${property.price}</span>
                    <span className="text-gray-500"> / month</span>
                  </div>
                  <Button size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          /* Map view */
          <div className="h-screen overflow-y-auto">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="h-screen overflow-y-auto">
                  {/* Map content */}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="bg-primary-50">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <span>...</span>
            <Button variant="outline" size="sm">12</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </main>
    </MockupLayout>
  );
};

export default NomadNestBookingPlatform;
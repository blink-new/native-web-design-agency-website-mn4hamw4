import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  Globe,
  Star,
  MapPin,
  Leaf,
  Info,
  Eye,
  Filter,
  ChevronDown
} from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Handwoven Wool Blanket',
    artisan: 'Maria Hernandez',
    location: 'Oaxaca, Mexico',
    price: 289,
    image: 'https://images.unsplash.com/photo-1544070078-a212eda27b49?w=600',
    rating: 4.9,
    reviews: 124,
    story: 'Inspired by traditional Zapotec designs',
    materials: ['100% Natural Wool', 'Natural Dyes', 'Handloom Woven'],
    sustainabilityScore: 98,
    featured: true
  },
  {
    id: 2,
    title: 'Hand-carved Walnut Bowl',
    artisan: 'Thomas Miller',
    location: 'Vermont, USA',
    price: 179,
    image: 'https://images.unsplash.com/photo-1635869330066-9f71326cd41c?w=600',
    rating: 4.8,
    reviews: 86,
    story: 'Crafted from fallen walnut trees',
    materials: ['Sustainably Harvested Walnut', 'Natural Oils', 'Hand Tools'],
    sustainabilityScore: 95,
    featured: false
  },
  {
    id: 3,
    title: 'Ceramic Coffee Pour-Over Set',
    artisan: 'Aki Tanaka',
    location: 'Kyoto, Japan',
    price: 138,
    image: 'https://images.unsplash.com/photo-1579656450812-5b1da79e2474?w=600',
    rating: 4.9,
    reviews: 153,
    story: 'Inspired by traditional Japanese tea ceremonies',
    materials: ['Local Clay', 'Lead-free Glaze', 'Wood-fired Kiln'],
    sustainabilityScore: 92,
    featured: true
  },
  {
    id: 4,
    title: 'Handwoven Bamboo Basket',
    artisan: 'Lin Wei',
    location: 'Chengdu, China',
    price: 125,
    image: 'https://images.unsplash.com/photo-1516372048654-2aa1a87c0fd3?w=600',
    rating: 4.7,
    reviews: 94,
    story: 'Five generations of basket weaving tradition',
    materials: ['Sustainable Bamboo', 'Natural Dyes', 'Organic Cotton Lining'],
    sustainabilityScore: 99,
    featured: false
  },
  {
    id: 5,
    title: 'Hand-forged Copper Earrings',
    artisan: 'Sofia Pereira',
    location: 'Lisbon, Portugal',
    price: 82,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
    rating: 4.8,
    reviews: 117,
    story: 'Inspired by Portuguese maritime heritage',
    materials: ['Recycled Copper', 'Sterling Silver Backs', 'Natural Patina'],
    sustainabilityScore: 94,
    featured: false
  },
  {
    id: 6,
    title: 'Indigo Dyed Cotton Scarf',
    artisan: 'Amara Diop',
    location: 'Dakar, Senegal',
    price: 95,
    image: 'https://images.unsplash.com/photo-1601250903121-fef26f25e3ef?w=600',
    rating: 4.9,
    reviews: 108,
    story: 'Traditional indigo dyeing techniques passed down 7 generations',
    materials: ['Organic Cotton', 'Natural Indigo Dye', 'Hand-knotted Fringe'],
    sustainabilityScore: 97,
    featured: true
  }
];

const artisans = [
  {
    id: 1,
    name: 'Maria Hernandez',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    location: 'Oaxaca, Mexico',
    craft: 'Textile Weaver',
    bio: 'Third-generation weaver specializing in traditional Zapotec designs and natural dyeing techniques.',
    rating: 4.9,
    products: 28,
    featured: true
  },
  {
    id: 2,
    name: 'Thomas Miller',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200',
    location: 'Vermont, USA',
    craft: 'Woodworker',
    bio: 'Specializing in sustainable woodcraft using salvaged and ethically harvested timber.',
    rating: 4.8,
    products: 34,
    featured: true
  },
  {
    id: 3,
    name: 'Aki Tanaka',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200',
    location: 'Kyoto, Japan',
    craft: 'Ceramic Artist',
    bio: 'Combines traditional Japanese pottery techniques with contemporary design elements.',
    rating: 4.9,
    products: 41,
    featured: false
  },
  {
    id: 4,
    name: 'Sofia Pereira',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    location: 'Lisbon, Portugal',
    craft: 'Metalsmith',
    bio: 'Creates sustainable jewelry inspired by Portuguese history and maritime traditions.',
    rating: 4.8,
    products: 53,
    featured: true
  }
];

const ArtisanEcommercePlatform = () => {
  const [activeTab, setActiveTab] = useState('shop');
  const [liked, setLiked] = useState<number[]>([1, 3, 6]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter(itemId => itemId !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  return (
    <MockupLayout title="Artisan E-Commerce Platform" projectId={4}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-14 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <div className="mr-6 flex items-center text-primary-600 font-bold text-xl">
                <Globe className="mr-2 h-5 w-5" />
                Artisans United
              </div>
              
              <div className="relative hidden md:block flex-grow max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="text" 
                  placeholder="Search for unique handcrafted items..." 
                  className="pl-9 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Globe className="h-4 w-4 mr-2" />
                Explore Crafts
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
              <div className="flex items-center border rounded-full p-2 shadow-sm">
                <Menu className="h-5 w-5" />
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          {/* Search bar for mobile */}
          <div className="mt-4 md:hidden relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input 
              type="text" 
              placeholder="Search for unique handcrafted items..." 
              className="pl-9 pr-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Navigation tabs */}
          <div className="mt-6">
            <Tabs defaultValue="shop" className="w-full">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger 
                  value="shop" 
                  onClick={() => setActiveTab('shop')}
                >
                  Shop
                </TabsTrigger>
                <TabsTrigger 
                  value="artisans" 
                  onClick={() => setActiveTab('artisans')}
                >
                  Artisans
                </TabsTrigger>
                <TabsTrigger 
                  value="stories" 
                  onClick={() => setActiveTab('stories')}
                >
                  Stories
                </TabsTrigger>
                <TabsTrigger 
                  value="learn" 
                  onClick={() => setActiveTab('learn')}
                >
                  Learn
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'shop' && (
          <>
            {/* Hero Banner */}
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1573879500655-98f2e6bc9a18?w=1400" 
                alt="Artisan products" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  Discover Authentic Handcrafted Treasures
                </h1>
                <p className="text-white/90 md:text-lg max-w-lg mb-4">
                  Direct from skilled artisans around the world. Every purchase supports traditional craftsmanship.
                </p>
                <div>
                  <Button size="lg" className="mr-2">Shop Collection</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Meet the Artisans
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                Category
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                Region
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                Materials
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                Price Range
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                Sustainability
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            {/* Featured Products */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Featured Artisan Creations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.featured).map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-64 object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                        onClick={() => toggleLike(product.id)}
                      >
                        <Heart 
                          className={`h-5 w-5 ${liked.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                        />
                      </Button>
                      
                      <div className="absolute bottom-2 left-2 flex space-x-2">
                        <Badge className="bg-white/90 text-primary-600 hover:bg-white">
                          <Leaf className="h-3 w-3 mr-1" />
                          {product.sustainabilityScore}% Sustainable
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Badge variant="outline" className="text-xs bg-primary-50 text-primary-700">
                          {product.materials[0]}
                        </Badge>
                      </div>
                      
                      <h3 className="font-medium text-lg mb-1">{product.title}</h3>
                      
                      <div className="flex items-center mb-2 text-sm text-gray-500">
                        <span className="mr-2">by {product.artisan}</span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {product.location}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="font-medium">{product.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                        </div>
                        <p className="text-sm text-gray-500">{product.story.substring(0, 30)}...</p>
                      </div>
                      
                      <div className="border-t pt-3 flex items-center justify-between">
                        <div className="font-bold text-lg">${product.price}</div>
                        <Button size="sm" onClick={() => addToCart(product.id)}>
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Artisan Story Highlight */}
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <Badge className="mb-2 bg-primary-100 text-primary-700 hover:bg-primary-200">
                    Artisan Spotlight
                  </Badge>
                  <h2 className="text-2xl font-semibold mb-3">Meet Maria Hernandez</h2>
                  <p className="text-gray-600 mb-4">
                    Third-generation weaver from Oaxaca, Maria combines traditional Zapotec designs with contemporary colors. 
                    Each piece represents her family's heritage and sustainable practices using natural dyes.
                  </p>
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" />
                      <AvatarFallback>MH</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Maria Hernandez</div>
                      <div className="text-sm text-gray-500">Textile Weaver • Oaxaca, Mexico</div>
                    </div>
                  </div>
                  <Button>Visit Workshop</Button>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1590075865003-e48b57be2a9a?w=600" 
                    alt="Maria in her workshop" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Button variant="outline" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4 mr-2" />
                      Workshop Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* All Products */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">All Handcrafted Products</h2>
                <Button variant="outline" size="sm">
                  Sort by: Featured
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                        onClick={() => toggleLike(product.id)}
                      >
                        <Heart 
                          className={`h-5 w-5 ${liked.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                        />
                      </Button>
                    </div>
                    
                    <CardContent className="p-3">
                      <h3 className="font-medium text-sm mb-1">{product.title}</h3>
                      <div className="text-xs text-gray-500 mb-1">by {product.artisan}</div>
                      
                      <div className="flex items-center text-xs mb-2">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{product.rating}</span>
                        <span className="mx-1">•</span>
                        <Leaf className="h-3 w-3 text-green-600 mr-1" />
                        <span>{product.sustainabilityScore}%</span>
                      </div>
                      
                      <div className="font-bold">${product.price}</div>
                    </CardContent>
                    
                    <CardFooter className="pt-0 px-3 pb-3">
                      <Button size="sm" variant="outline" className="w-full" onClick={() => addToCart(product.id)}>
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button variant="outline" className="bg-primary-50">1</Button>
                <Button variant="outline" className="ml-2">Next</Button>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'artisans' && (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Meet Our Artisans</h1>
              <p className="text-gray-600">
                Discover the skilled craftspeople behind our products. Learn about their techniques, heritage, and stories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {artisans.filter(a => a.featured).map((artisan) => (
                <Card key={artisan.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                    <div className="md:col-span-2">
                      <img 
                        src={artisan.image} 
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-4 flex flex-col">
                      <div>
                        <Badge className="mb-2 bg-primary-100 text-primary-700">
                          {artisan.craft}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-1">{artisan.name}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="h-3 w-3 mr-1" />
                          {artisan.location}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {artisan.bio}
                        </p>
                        <div className="flex items-center text-sm mb-3">
                          <div className="flex items-center mr-4">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="font-medium">{artisan.rating}</span>
                          </div>
                          <div className="text-gray-500">
                            {artisan.products} products
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto flex">
                        <Button variant="outline" className="mr-2">View Profile</Button>
                        <Button>Shop Creations</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {artisans.map((artisan) => (
                <Card key={artisan.id} className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <h3 className="text-white font-medium">{artisan.name}</h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <span>{artisan.craft}</span>
                        <span className="mx-1">•</span>
                        <span>{artisan.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      {artisan.bio}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{artisan.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{artisan.products} products</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Artisan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
        
        {activeTab === 'stories' && (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="text-center max-w-md">
              <Info className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Artisan Stories Coming Soon</h2>
              <p className="text-gray-600 mb-4">
                We're working on bringing you fascinating stories about our artisans, their crafts, and cultural heritage.
              </p>
              <Button>Back to Shop</Button>
            </div>
          </div>
        )}
        
        {activeTab === 'learn' && (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="text-center max-w-md">
              <Info className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Educational Content Coming Soon</h2>
              <p className="text-gray-600 mb-4">
                Learn about traditional crafting techniques, material sourcing, and sustainable practices.
              </p>
              <Button>Back to Shop</Button>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Artisans United
              </h3>
              <p className="text-gray-600 mb-4">
                Connecting skilled artisans with conscious consumers. Every purchase directly supports traditional craftsmanship.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">All Products</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Featured Items</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">New Arrivals</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Best Sellers</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Gift Cards</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Our Mission</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Sustainability</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Artisan Program</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Become an Artisan</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Contact Us</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Shipping & Returns</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">FAQ</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Track Order</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Privacy Policy</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-primary-600">Terms of Service</Button></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            &copy; 2023 Artisans United. All rights reserved. A marketplace connecting artisans and conscious consumers.
          </div>
        </div>
      </footer>
    </MockupLayout>
  );
};

export default ArtisanEcommercePlatform;
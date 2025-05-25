import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  Home, 
  Search, 
  BookOpen, 
  Utensils, 
  ShoppingBag, 
  Heart, 
  User, 
  Clock, 
  ChevronRight, 
  Bookmark, 
  Users, 
  Star, 
  Filter, 
  Plus,
  ArrowLeft,
  Microphone,
  Camera
} from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: 'Avocado & Egg Breakfast Toast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500',
    time: '15 min',
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 256,
    saved: true,
    ingredients: 5,
    category: 'Breakfast'
  },
  {
    id: 2,
    title: 'Grilled Salmon with Lemon Dill Sauce',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500',
    time: '30 min',
    difficulty: 'Medium',
    rating: 4.7,
    reviews: 189,
    saved: false,
    ingredients: 8,
    category: 'Dinner'
  },
  {
    id: 3,
    title: 'Vegetarian Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    time: '25 min',
    difficulty: 'Easy',
    rating: 4.9,
    reviews: 324,
    saved: true,
    ingredients: 10,
    category: 'Lunch'
  },
  {
    id: 4,
    title: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500',
    time: '45 min',
    difficulty: 'Medium',
    rating: 4.6,
    reviews: 215,
    saved: false,
    ingredients: 7,
    category: 'Dinner'
  },
  {
    id: 5,
    title: 'Chocolate Chip Banana Bread',
    image: 'https://images.unsplash.com/photo-1606101903839-21d1b83b8982?w=500',
    time: '60 min',
    difficulty: 'Medium',
    rating: 4.8,
    reviews: 276,
    saved: true,
    ingredients: 9,
    category: 'Dessert'
  }
];

const ingredients = [
  { id: 1, name: 'Eggs', quantity: 6, unit: '', category: 'Dairy & Eggs', expiry: '5 days' },
  { id: 2, name: 'Milk', quantity: 1, unit: 'quart', category: 'Dairy & Eggs', expiry: '7 days' },
  { id: 3, name: 'Chicken Breast', quantity: 2, unit: 'lbs', category: 'Meat', expiry: '3 days' },
  { id: 4, name: 'Spinach', quantity: 1, unit: 'bag', category: 'Produce', expiry: '4 days' },
  { id: 5, name: 'Avocados', quantity: 3, unit: '', category: 'Produce', expiry: '2 days' },
  { id: 6, name: 'Bread', quantity: 1, unit: 'loaf', category: 'Bakery', expiry: '6 days' },
  { id: 7, name: 'Onions', quantity: 4, unit: '', category: 'Produce', expiry: '14 days' },
  { id: 8, name: 'Garlic', quantity: 1, unit: 'head', category: 'Produce', expiry: '21 days' },
];

const mealPlan = [
  { day: 'Monday', meals: ['Avocado & Egg Breakfast Toast', 'Chicken Caesar Salad', 'Vegetable Stir Fry'] },
  { day: 'Tuesday', meals: ['Oatmeal with Berries', 'Tuna Sandwich', 'Grilled Salmon with Lemon Dill Sauce'] },
  { day: 'Wednesday', meals: ['Greek Yogurt with Granola', 'Vegetarian Buddha Bowl', 'Spaghetti Bolognese'] },
  { day: 'Thursday', meals: ['Smoothie Bowl', 'Quinoa Salad', 'Roast Chicken with Vegetables'] },
  { day: 'Friday', meals: ['Avocado & Egg Breakfast Toast', 'Leftover Roast Chicken Wrap', 'Classic Margherita Pizza'] },
];

const CulinaryCompanionApp = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedRecipes, setSavedRecipes] = useState<number[]>([1, 3, 5]);

  const toggleSave = (id: number) => {
    if (savedRecipes.includes(id)) {
      setSavedRecipes(savedRecipes.filter(recipeId => recipeId !== id));
    } else {
      setSavedRecipes([...savedRecipes, id]);
    }
  };

  return (
    <MockupLayout title="Culinary Companion App" projectId={3}>
      <div className="bg-gray-50 min-h-screen pb-20">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm sticky top-14 z-40">
          <div className="container mx-auto max-w-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-primary-600">Culinary Companion</h1>
                <p className="text-sm text-gray-500">What are you cooking today?</p>
              </div>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search recipes, ingredients..." 
                className="pl-9 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1">
                <Microphone className="h-4 w-4 text-primary-500" />
              </Button>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="container mx-auto max-w-lg px-4 pt-6">
          {activeTab === 'discover' && (
            <>
              {/* Featured recipe */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Recommended for You</h2>
                <Card className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600" 
                      alt="Featured recipe"
                      className="w-full h-48 object-cover"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                      onClick={() => {}}
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </Button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">Homemade Pasta with Fresh Herbs</h3>
                      <div className="flex items-center mt-1">
                        <Badge variant="secondary" className="bg-white/20 text-white mr-2">
                          <Clock className="h-3 w-3 mr-1" />
                          45 min
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          <Users className="h-3 w-3 mr-1" />
                          4 servings
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 font-medium">4.9</span>
                        <span className="text-gray-500 text-sm ml-1">(412 reviews)</span>
                      </div>
                      <Button size="sm">View Recipe</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Categories */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold">Categories</h2>
                  <Button variant="ghost" size="sm" className="text-primary-500">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {['Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className="flex flex-col items-center py-3 h-auto"
                    >
                      {category === 'Breakfast' ? (
                        <Utensils className="h-5 w-5 mb-1 text-primary-500" />
                      ) : category === 'Lunch' ? (
                        <Utensils className="h-5 w-5 mb-1 text-primary-500" />
                      ) : category === 'Dinner' ? (
                        <Utensils className="h-5 w-5 mb-1 text-primary-500" />
                      ) : (
                        <Utensils className="h-5 w-5 mb-1 text-primary-500" />
                      )}
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Popular recipes */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold">Popular Recipes</h2>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                </div>
                <div className="space-y-4">
                  {recipes.map((recipe) => (
                    <Card key={recipe.id} className="overflow-hidden">
                      <div className="flex">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="flex-1 p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge variant="outline" className="mb-1 text-xs">
                                {recipe.category}
                              </Badge>
                              <h3 className="font-medium text-sm mb-1">{recipe.title}</h3>
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                {recipe.time}
                                <span className="mx-2">•</span>
                                <span>{recipe.difficulty}</span>
                                <span className="mx-2">•</span>
                                <span>{recipe.ingredients} ingredients</span>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => toggleSave(recipe.id)}
                            >
                              <Bookmark 
                                className={`h-4 w-4 ${savedRecipes.includes(recipe.id) ? 'fill-primary-500 text-primary-500' : 'text-gray-400'}`} 
                              />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <span className="ml-1 text-xs font-medium">{recipe.rating}</span>
                              <span className="text-gray-500 text-xs ml-1">({recipe.reviews})</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-7 text-primary-500">
                              View
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'pantry' && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">My Pantry</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Item
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="p-4 border-b">
                  <h3 className="font-medium">What's in your kitchen?</h3>
                  <p className="text-sm text-gray-500">
                    Track ingredients to get personalized recipe recommendations
                  </p>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <Button variant="outline" size="sm" className="mr-2">All</Button>
                    <Button variant="outline" size="sm" className="mr-2 bg-primary-50 text-primary-600">Expiring Soon</Button>
                    <Button variant="outline" size="sm">Low Stock</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {ingredients.map((ingredient) => (
                      <div key={ingredient.id} className="flex items-center justify-between border-b pb-3">
                        <div>
                          <h4 className="font-medium">{ingredient.name}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>
                              {ingredient.quantity} {ingredient.unit}
                            </span>
                            <span className="mx-2">•</span>
                            <span>{ingredient.category}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-medium ${
                            ingredient.expiry.includes('2 days') || ingredient.expiry.includes('3 days') 
                              ? 'text-red-500' 
                              : 'text-gray-500'
                          }`}>
                            Expires in {ingredient.expiry}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="font-medium">Recipe Suggestions</h3>
                  <Button variant="ghost" size="sm" className="text-primary-500">
                    See All
                  </Button>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Based on your pantry ingredients
                  </p>
                  
                  <div className="space-y-3">
                    {recipes.slice(0, 3).map((recipe) => (
                      <div key={recipe.id} className="flex items-center border-b pb-3">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-16 h-16 object-cover rounded-md mr-3"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{recipe.title}</h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {recipe.time}
                            <span className="mx-2">•</span>
                            <span className="text-green-500 font-medium">
                              You have 5/{recipe.ingredients} ingredients
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'planner' && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Meal Planner</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Meal
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="flex p-4 border-b overflow-x-auto space-x-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <Button 
                      key={day} 
                      variant={index === 0 ? 'default' : 'outline'} 
                      className="flex-shrink-0 w-12"
                    >
                      {day}
                    </Button>
                  ))}
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-4">Monday, June 24</h3>
                  
                  <div className="space-y-4">
                    {mealPlan[0].meals.map((meal, index) => (
                      <div key={index} className="flex items-center border-b pb-3">
                        <div className="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                          {index === 0 ? 'B' : index === 1 ? 'L' : 'D'}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{meal}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            {index === 0 ? 'Breakfast' : index === 1 ? 'Lunch' : 'Dinner'} • {index === 0 ? '8:00 AM' : index === 1 ? '12:30 PM' : '7:00 PM'}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="font-medium">Shopping List</h3>
                  <Button variant="outline" size="sm">
                    Generate List
                  </Button>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Based on your meal plan for the week
                  </p>
                  
                  <div className="space-y-3">
                    {ingredients.slice(0, 5).map((ingredient) => (
                      <div key={ingredient.id} className="flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <div>
                          <h4 className="font-medium">{ingredient.name}</h4>
                          <p className="text-sm text-gray-500">
                            {ingredient.quantity} {ingredient.unit}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 text-primary-500">
                    View Complete List
                  </Button>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'scan' && (
            <div className="flex flex-col items-center justify-center h-[70vh]">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center w-full max-w-md">
                <div className="bg-primary-50 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-10 w-10 text-primary-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Scan Ingredients</h2>
                <p className="text-gray-500 mb-6">
                  Point your camera at ingredients to automatically identify them and add to your pantry
                </p>
                <Button className="w-full">Start Scanning</Button>
                <Button variant="outline" className="w-full mt-3">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>
          )}
        </main>
        
        {/* Bottom navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-2">
          <div className="container mx-auto max-w-lg">
            <div className="flex justify-around">
              <Button 
                variant={activeTab === 'discover' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'discover' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('discover')}
              >
                <Home className="h-5 w-5 mb-1" />
                <span className="text-xs">Discover</span>
              </Button>
              
              <Button 
                variant={activeTab === 'pantry' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'pantry' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('pantry')}
              >
                <ShoppingBag className="h-5 w-5 mb-1" />
                <span className="text-xs">Pantry</span>
              </Button>
              
              <Button 
                variant={activeTab === 'planner' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'planner' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('planner')}
              >
                <BookOpen className="h-5 w-5 mb-1" />
                <span className="text-xs">Planner</span>
              </Button>
              
              <Button 
                variant={activeTab === 'scan' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'scan' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('scan')}
              >
                <Camera className="h-5 w-5 mb-1" />
                <span className="text-xs">Scan</span>
              </Button>
              
              <Button 
                variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                className={`flex flex-col items-center h-auto py-2 ${activeTab === 'profile' ? '' : 'text-gray-500'}`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="h-5 w-5 mb-1" />
                <span className="text-xs">Profile</span>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </MockupLayout>
  );
};

export default CulinaryCompanionApp;
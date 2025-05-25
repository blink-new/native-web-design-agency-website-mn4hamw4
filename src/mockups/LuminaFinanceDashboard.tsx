import { useState } from 'react';
import MockupLayout from './MockupLayout';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { BarChart, LineChart, DoughnutChart } from '../components/ui/chart';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Wallet, 
  CreditCard, 
  Bell,
  Settings,
  Search,
  ChevronDown,
  BarChart4,
  PieChart as PieChartIcon,
  Users,
  Home,
  Clock,
  HelpCircle
} from 'lucide-react';

const mockStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 187.68, change: 1.25, changePercent: 0.67 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 428.74, change: 3.54, changePercent: 0.83 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 156.37, change: -0.89, changePercent: -0.57 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 175.35, change: 2.15, changePercent: 1.24 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 191.59, change: -4.32, changePercent: -2.21 },
];

const portfolioAllocation = [
  { name: 'Stocks', value: 55, color: 'hsl(210, 100%, 60%)' },
  { name: 'Bonds', value: 15, color: 'hsl(160, 100%, 40%)' },
  { name: 'Cash', value: 10, color: 'hsl(45, 100%, 50%)' },
  { name: 'Real Estate', value: 12, color: 'hsl(280, 100%, 65%)' },
  { name: 'Crypto', value: 8, color: 'hsl(0, 100%, 65%)' },
];

const monthlyPerformance = [
  { month: 'Jan', value: 12500 },
  { month: 'Feb', value: 12800 },
  { month: 'Mar', value: 13100 },
  { month: 'Apr', value: 12900 },
  { month: 'May', value: 13400 },
  { month: 'Jun', value: 13800 },
  { month: 'Jul', value: 14300 },
  { month: 'Aug', value: 14600 },
  { month: 'Sep', value: 14900 },
  { month: 'Oct', value: 15200 },
  { month: 'Nov', value: 15800 },
  { month: 'Dec', value: 16400 },
];

const sectorPerformance = [
  { name: 'Technology', value: 32, growth: 2.8 },
  { name: 'Healthcare', value: 18, growth: 1.2 },
  { name: 'Financials', value: 14, growth: 0.5 },
  { name: 'Consumer', value: 12, growth: -0.8 },
  { name: 'Energy', value: 8, growth: -1.5 },
  { name: 'Other', value: 16, growth: 0.2 },
];

const LuminaFinanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <MockupLayout title="Lumina Finance Dashboard" projectId={1}>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-primary-600 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Lumina Finance
            </h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('dashboard')}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button 
              variant={activeTab === 'portfolio' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('portfolio')}
            >
              <BarChart4 className="mr-2 h-4 w-4" />
              Portfolio
            </Button>
            <Button 
              variant={activeTab === 'transactions' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('transactions')}
            >
              <Wallet className="mr-2 h-4 w-4" />
              Transactions
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <PieChartIcon className="mr-2 h-4 w-4" />
              Investments
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Users className="mr-2 h-4 w-4" />
              Advisors
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
            >
              <Clock className="mr-2 h-4 w-4" />
              History
            </Button>
          </nav>
          
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="text-secondary-500">Welcome back, Alex! Here's your financial summary.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-secondary-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-md border border-gray-200 pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline font-medium">Alex Chen</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-secondary-500">Total Portfolio Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">$125,430.98</div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    8.2%
                  </div>
                </div>
                <p className="text-xs text-secondary-400 mt-1">Since last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-secondary-500">Monthly Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">$2,845.36</div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                    2.3%
                  </div>
                </div>
                <p className="text-xs text-secondary-400 mt-1">Compared to $2,562.20 last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-secondary-500">Risk Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">Moderate</div>
                  <div className="text-amber-500 text-sm font-medium flex items-center">
                    <Activity className="mr-1 h-4 w-4" />
                    6.4/10
                  </div>
                </div>
                <Progress value={64} className="h-2 mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-secondary-500">Portfolio Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">78%</div>
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    <Wallet className="mr-1 h-4 w-4" />
                    On Track
                  </div>
                </div>
                <Progress value={78} className="h-2 mt-2" />
                <p className="text-xs text-secondary-400 mt-1">$125K of $160K retirement goal</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Portfolio Performance</CardTitle>
                  <Tabs defaultValue="1y" className="w-[200px]">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="1m">1M</TabsTrigger>
                      <TabsTrigger value="3m">3M</TabsTrigger>
                      <TabsTrigger value="6m">6M</TabsTrigger>
                      <TabsTrigger value="1y">1Y</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <CardDescription>Monthly portfolio value in USD</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] w-full">
                  <LineChart 
                    data={{
                      labels: monthlyPerformance.map(item => item.month),
                      datasets: [{
                        label: 'Portfolio Value',
                        data: monthlyPerformance.map(item => item.value),
                        borderColor: 'hsl(210, 100%, 60%)',
                        backgroundColor: 'hsla(210, 100%, 60%, 0.1)',
                        fill: true,
                        tension: 0.4
                      }]
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Current distribution of your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[230px] w-full">
                  <DoughnutChart 
                    data={{
                      labels: portfolioAllocation.map(item => item.name),
                      datasets: [{
                        data: portfolioAllocation.map(item => item.value),
                        backgroundColor: portfolioAllocation.map(item => item.color),
                        borderWidth: 2,
                        borderColor: '#fff'
                      }]
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {portfolioAllocation.map((item) => (
                    <div key={item.name} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-secondary-600 mr-1">{item.name}:</span>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Sector Performance</CardTitle>
                <CardDescription>Growth across investment sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <BarChart 
                    data={{
                      labels: sectorPerformance.map(item => item.name),
                      datasets: [{
                        label: 'Allocation',
                        data: sectorPerformance.map(item => item.value),
                        backgroundColor: 'hsla(210, 100%, 60%, 0.6)',
                        borderColor: 'hsla(210, 100%, 60%, 1)',
                        borderWidth: 1
                      }]
                    }}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  {sectorPerformance.map((sector) => (
                    <div key={sector.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                        <span className="text-sm text-secondary-600">{sector.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">{sector.value}%</span>
                        <span className={`text-xs font-medium ${sector.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {sector.growth > 0 ? '+' : ''}{sector.growth}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Holdings</CardTitle>
                <CardDescription>Your best performing stocks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStocks.map((stock) => (
                    <div key={stock.symbol} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold mr-3">
                          {stock.symbol.substring(0, 1)}
                        </div>
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-sm text-secondary-500">{stock.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${stock.price}</div>
                        <div className={`text-sm ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.changePercent > 0 ? '+' : ''}{stock.changePercent}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">View All Holdings</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Transactions</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Bought AAPL</div>
                        <div className="text-sm text-secondary-500">Jun 12, 2023 • 10:42 AM</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">+$2,438.00</div>
                      <div className="text-sm text-secondary-500">12 shares at $203.17</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3">
                        <ArrowDownRight className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Sold TSLA</div>
                        <div className="text-sm text-secondary-500">Jun 8, 2023 • 02:13 PM</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-red-600">-$1,874.50</div>
                      <div className="text-sm text-secondary-500">5 shares at $374.90</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Deposit</div>
                        <div className="text-sm text-secondary-500">Jun 1, 2023 • 09:25 AM</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">+$5,000.00</div>
                      <div className="text-sm text-secondary-500">From linked account</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Bought MSFT</div>
                        <div className="text-sm text-secondary-500">May 28, 2023 • 11:36 AM</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">+$3,142.25</div>
                      <div className="text-sm text-secondary-500">8 shares at $392.78</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </MockupLayout>
  );
};

export default LuminaFinanceDashboard;
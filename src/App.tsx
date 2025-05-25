import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// UI Mockups
import LuminaFinanceDashboard from './mockups/LuminaFinanceDashboard';
import NomadNestBookingPlatform from './mockups/NomadNestBookingPlatform';
import CulinaryCompanionApp from './mockups/CulinaryCompanionApp';
import ArtisanEcommercePlatform from './mockups/ArtisanEcommercePlatform';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Layout>
              <About />
            </Layout>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Layout>
              <Services />
            </Layout>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <Layout>
              <Portfolio />
            </Layout>
          } 
        />
        <Route 
          path="/portfolio/:id" 
          element={
            <Layout>
              <ProjectDetail />
            </Layout>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <Layout>
              <Blog />
            </Layout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Layout>
              <Contact />
            </Layout>
          } 
        />
        <Route 
          path="/404" 
          element={
            <Layout>
              <NotFound />
            </Layout>
          } 
        />

        {/* UI Mockup Routes */}
        <Route path="/mockups/finance-dashboard" element={<LuminaFinanceDashboard />} />
        <Route path="/mockups/booking-platform" element={<NomadNestBookingPlatform />} />
        <Route path="/mockups/culinary-app" element={<CulinaryCompanionApp />} />
        <Route path="/mockups/artisan-ecommerce" element={<ArtisanEcommercePlatform />} />
        
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
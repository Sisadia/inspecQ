import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import FunctionalTesting from './pages/services/FunctionalTesting';
import TestAutomation from './pages/services/TestAutomation';
import PerformanceTesting from './pages/services/PerformanceTesting';
import MobileTesting from './pages/services/MobileTesting';
import SecurityTesting from './pages/services/SecurityTesting';
import ApiTesting from './pages/services/ApiTesting';
import Demo from './pages/Demo';
import FreeTrial from './pages/FreeTrial';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';

// Admin imports
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCareers from './pages/admin/Careers';
import AdminNewsletter from './pages/admin/Newsletter';
import AdminForms from './pages/admin/Forms';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/functional-testing" element={<FunctionalTesting />} />
          <Route path="/services/test-automation" element={<TestAutomation />} />
          <Route path="/services/performance-testing" element={<PerformanceTesting />} />
          <Route path="/services/mobile-testing" element={<MobileTesting />} />
          <Route path="/services/security-testing" element={<SecurityTesting />} />
          <Route path="/services/api-testing" element={<ApiTesting />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/careers" element={
            <ProtectedRoute>
              <AdminCareers />
            </ProtectedRoute>
          } />
          <Route path="/admin/newsletter" element={
            <ProtectedRoute>
              <AdminNewsletter />
            </ProtectedRoute>
          } />
          <Route path="/admin/forms" element={
            <ProtectedRoute>
              <AdminForms />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
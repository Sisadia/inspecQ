import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Functional Testing', path: '/services/functional-testing' },
    { name: 'Test Automation', path: '/services/test-automation' },
    { name: 'Performance Testing', path: '/services/performance-testing' },
    { name: 'Mobile Testing', path: '/services/mobile-testing' },
    { name: 'Security Testing', path: '/services/security-testing' },
    { name: 'API Testing', path: '/services/api-testing' }
  ];

  const company = [
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' }
  ];

  const resources = [
    { name: 'Help Center', path: '/help' },
    //{ name: 'API Documentation', path: '/docs' },
    { name: 'Best Practices', path: '/best-practices' },
    { name: 'Webinars', path: '/webinars' },
    { name: 'Community', path: '/community' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">InspecQ</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Built to Inspect. Powered by Quality. We're a QA agency bringing 
              industry expertise to deliver exceptional software testing services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/inspecq" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/inspecq" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>helloinspecq@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Remote Operations</span>
              </div>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">Terms & Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">Security</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 InspecQ. All rights reserved. Empowering teams to deliver quality software.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Zap, BarChart3, Smartphone, Shield, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: 'Functional Testing',
      description: 'Comprehensive manual and automated testing to ensure your application works exactly as intended.',
      features: ['Manual Testing', 'UI/UX Validation', 'Exploratory Testing', 'User Acceptance Testing'],
      color: 'bg-blue-500',
      path: '/services/functional-testing'
    },
    {
      icon: Zap,
      title: 'Test Automation',
      description: 'Accelerate your development cycle with intelligent automation frameworks and CI/CD integration.',
      features: ['Automated Testing', 'Regression Testing', 'CI/CD Integration', 'Custom Frameworks'],
      color: 'bg-emerald-500',
      path: '/services/test-automation'
    },
    {
      icon: BarChart3,
      title: 'Performance Testing',
      description: 'Optimize your application performance and ensure it scales under real-world conditions.',
      features: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Scalability Analysis'],
      color: 'bg-purple-500',
      path: '/services/performance-testing'
    },
    {
      icon: Smartphone,
      title: 'Mobile Testing',
      description: 'Ensure flawless mobile experiences across all devices, platforms, and operating systems.',
      features: ['Cross-Platform Testing', 'Device Compatibility', 'App Store Optimization', 'Mobile Performance'],
      color: 'bg-orange-500',
      path: '/services/mobile-testing'
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Safeguard your applications with comprehensive security testing and vulnerability assessments.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Compliance Validation'],
      color: 'bg-red-500',
      path: '/services/security-testing'
    },
    {
      icon: Cog,
      title: 'API Testing',
      description: 'Validate API functionality, performance, and security to ensure seamless integrations.',
      features: ['REST API Testing', 'GraphQL Testing', 'Integration Testing', 'Contract Validation'],
      color: 'bg-teal-500',
      path: '/services/api-testing'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Built to Inspect. Powered by Quality.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Quality Assurance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From manual testing to advanced automation, we provide end-to-end QA solutions 
              that ensure your software meets the highest quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/free-trial"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6">
                  <div className={`${service.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to={service.path}
                    className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200 flex items-center"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Testing Process?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right testing strategy for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Expert Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
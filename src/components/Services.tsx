import React from 'react';
import { Bug, Zap, BarChart3, Smartphone, Shield, Cog, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: 'Functional Testing',
      description: 'Comprehensive manual and automated testing to ensure your application works exactly as intended.',
      features: ['Manual Testing', 'UI/UX Validation', 'Exploratory Testing', 'User Acceptance Testing'],
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Test Automation',
      description: 'Accelerate your development cycle with intelligent automation frameworks and CI/CD integration.',
      features: ['Automated Testing', 'Regression Testing', 'CI/CD Integration', 'Custom Frameworks'],
      color: 'bg-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Testing',
      description: 'Optimize your application performance and ensure it scales under real-world conditions.',
      features: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Scalability Analysis'],
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Testing',
      description: 'Ensure flawless mobile experiences across all devices, platforms, and operating systems.',
      features: ['Cross-Platform Testing', 'Device Compatibility', 'App Store Optimization', 'Mobile Performance'],
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Safeguard your applications with comprehensive security testing and vulnerability assessments.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Compliance Validation'],
      color: 'bg-red-500'
    },
    {
      icon: Cog,
      title: 'API Testing',
      description: 'Validate API functionality, performance, and security to ensure seamless integrations.',
      features: ['REST API Testing', 'GraphQL Testing', 'Integration Testing', 'Contract Validation'],
      color: 'bg-teal-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            Expert Testing Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Quality Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring industry expertise and proven methodologies to ensure your software meets 
            the highest quality standards from day one.
          </p>
        </div>

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

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
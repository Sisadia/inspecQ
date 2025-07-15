import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, CheckCircle, ArrowRight, Users, Clock, Target, Shield } from 'lucide-react';

const FunctionalTesting = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Comprehensive Coverage',
      description: 'Test all aspects of your application functionality to ensure everything works as intended.'
    },
    {
      icon: Users,
      title: 'User-Centric Approach',
      description: 'Focus on real user scenarios and workflows to validate the user experience.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Identify and resolve issues before they reach your users, protecting your reputation.'
    },
    {
      icon: Target,
      title: 'Business Logic Validation',
      description: 'Ensure your application behaves correctly according to business requirements.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'We analyze your requirements and create comprehensive test scenarios.'
    },
    {
      step: '2',
      title: 'Test Planning',
      description: 'Develop detailed test plans covering all functional aspects of your application.'
    },
    {
      step: '3',
      title: 'Test Execution',
      description: 'Execute manual and automated tests across different environments and scenarios.'
    },
    {
      step: '4',
      title: 'Reporting & Analysis',
      description: 'Provide detailed reports with actionable insights and recommendations.'
    }
  ];

  const testingTypes = [
    {
      title: 'Unit Testing',
      description: 'Test individual components and functions in isolation',
      features: ['Code coverage analysis', 'Automated test execution', 'Continuous integration']
    },
    {
      title: 'Integration Testing',
      description: 'Verify that different modules work together correctly',
      features: ['API testing', 'Database integration', 'Third-party services']
    },
    {
      title: 'System Testing',
      description: 'End-to-end testing of the complete application',
      features: ['User workflows', 'Business scenarios', 'Cross-browser testing']
    },
    {
      title: 'User Acceptance Testing',
      description: 'Validate that the system meets business requirements',
      features: ['Stakeholder involvement', 'Real-world scenarios', 'Sign-off criteria']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bug className="h-4 w-4 mr-2" />
              Functional Testing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Functional Testing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ensure your application works flawlessly with our thorough functional testing approach. 
              We validate every feature, workflow, and user interaction to deliver exceptional software quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Functional Testing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures your application functions perfectly across all scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Functional Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cover all aspects of functional testing to ensure comprehensive quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Testing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures thorough testing and reliable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Improve Your Software Quality?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our functional testing experts help you deliver flawless software experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/free-trial"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Try Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunctionalTesting;
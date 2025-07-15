import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Clock, Target, Cog, BarChart3 } from 'lucide-react';

const TestAutomation = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Faster Execution',
      description: 'Automated tests run 24/7, significantly reducing testing time and accelerating releases.'
    },
    {
      icon: Target,
      title: 'Higher Accuracy',
      description: 'Eliminate human error with consistent, repeatable automated test execution.'
    },
    {
      icon: BarChart3,
      title: 'Better Coverage',
      description: 'Execute thousands of test cases simultaneously across multiple environments.'
    },
    {
      icon: Cog,
      title: 'CI/CD Integration',
      description: 'Seamlessly integrate with your development pipeline for continuous testing.'
    }
  ];

  const frameworks = [
    {
      name: 'Selenium WebDriver',
      description: 'Industry-standard web automation framework',
      technologies: ['Java', 'Python', 'C#', 'JavaScript'],
      useCases: ['Web applications', 'Cross-browser testing', 'Regression testing']
    },
    {
      name: 'Cypress',
      description: 'Modern end-to-end testing framework',
      technologies: ['JavaScript', 'TypeScript'],
      useCases: ['Single-page applications', 'API testing', 'Component testing']
    },
    {
      name: 'Playwright',
      description: 'Fast and reliable cross-browser automation',
      technologies: ['JavaScript', 'Python', 'Java', 'C#'],
      useCases: ['Modern web apps', 'Mobile testing', 'API automation']
    },
    {
      name: 'Appium',
      description: 'Mobile application automation platform',
      technologies: ['Java', 'Python', 'JavaScript'],
      useCases: ['iOS apps', 'Android apps', 'Hybrid applications']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment & Strategy',
      description: 'Analyze your application and define automation strategy and framework selection.'
    },
    {
      step: '2',
      title: 'Framework Setup',
      description: 'Set up robust automation framework with best practices and design patterns.'
    },
    {
      step: '3',
      title: 'Script Development',
      description: 'Create maintainable, reusable test scripts with comprehensive coverage.'
    },
    {
      step: '4',
      title: 'CI/CD Integration',
      description: 'Integrate automated tests into your continuous integration pipeline.'
    },
    {
      step: '5',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and optimization of automation suite.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Test Automation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accelerate Your Testing with Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your testing process with intelligent automation frameworks. 
              Reduce testing time by 80% while improving coverage and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Automation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                See Demo
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
              Why Automate Your Testing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automation delivers faster feedback, better coverage, and significant cost savings.
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

      {/* Frameworks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation Frameworks We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with industry-leading automation tools and frameworks to deliver the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{framework.name}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {framework.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {framework.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Our Automation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful automation implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact of our automation solutions on testing efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">80%</div>
              <div className="text-gray-600">Faster Testing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">Test Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99%</div>
              <div className="text-gray-600">Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Testing?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our automation experts help you build a robust, scalable testing framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
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

export default TestAutomation;
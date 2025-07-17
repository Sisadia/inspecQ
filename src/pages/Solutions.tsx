import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Smartphone, Globe, ShoppingCart, Heart, DollarSign, CheckCircle, ArrowRight, Users, Clock, Target } from 'lucide-react';

const Solutions = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Ensure seamless shopping experiences with comprehensive testing for online stores, payment systems, and inventory management.',
      challenges: ['High traffic volumes', 'Payment security', 'Mobile optimization', 'Inventory sync'],
      solutions: ['Load testing for peak seasons', 'PCI compliance testing', 'Cross-device compatibility', 'Real-time data validation'],
      color: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Healthcare & Life Sciences',
      description: 'HIPAA-compliant testing solutions for healthcare applications, ensuring patient data security and regulatory compliance.',
      challenges: ['HIPAA compliance', 'Patient data security', 'Integration complexity', 'Regulatory requirements'],
      solutions: ['Security testing', 'Compliance validation', 'API testing', 'Audit trail verification'],
      color: 'bg-red-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Rigorous testing for banking, fintech, and trading platforms with focus on security, accuracy, and performance.',
      challenges: ['Transaction accuracy', 'Real-time processing', 'Regulatory compliance', 'Fraud prevention'],
      solutions: ['Precision testing', 'Performance optimization', 'Security audits', 'Compliance testing'],
      color: 'bg-green-500'
    },
    {
      icon: Building2,
      title: 'Enterprise Software',
      description: 'Scalable testing solutions for large enterprise applications, ERP systems, and business-critical software.',
      challenges: ['Complex integrations', 'Scalability requirements', 'Legacy system compatibility', 'User adoption'],
      solutions: ['Integration testing', 'Performance testing', 'Migration testing', 'Usability testing'],
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Gaming',
      description: 'Specialized testing for mobile apps, games, and entertainment platforms across all devices and platforms.',
      challenges: ['Device fragmentation', 'Performance optimization', 'User engagement', 'App store approval'],
      solutions: ['Device testing', 'Performance profiling', 'UX testing', 'Store compliance'],
      color: 'bg-orange-500'
    },
    {
      icon: Globe,
      title: 'SaaS & Cloud',
      description: 'Cloud-native testing approaches for SaaS applications, ensuring reliability, scalability, and multi-tenancy.',
      challenges: ['Multi-tenancy', 'Auto-scaling', 'Data isolation', 'Service reliability'],
      solutions: ['Cloud testing', 'Scalability testing', 'Security testing', 'Monitoring setup'],
      color: 'bg-teal-500'
    }
  ];

  const companySize = [
    {
      title: 'Startups',
      description: 'Fast, flexible testing solutions that grow with your business',
      features: ['Quick setup', 'Cost-effective', 'Scalable approach', 'Agile methodology'],
      icon: Target
    },
    {
      title: 'Mid-Market',
      description: 'Comprehensive testing strategies for growing companies',
      features: ['Process optimization', 'Team training', 'Tool integration', 'Quality metrics'],
      icon: Users
    },
    {
      title: 'Enterprise',
      description: 'Enterprise-grade testing solutions for complex environments',
      features: ['Custom frameworks', 'Dedicated teams', 'Compliance support', '24/7 support'],
      icon: Building2
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
              Tailored Testing Solutions for Every Industry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We understand that every industry has unique challenges. Our specialized testing 
              solutions are designed to meet the specific needs of your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Custom Solution</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              {/* <Link
                to="/case-studies"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Success Stories
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge and specialized testing approaches for your industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6">
                  <div className={`${industry.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
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

      {/* Company Size Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Company Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a startup or an enterprise, we have the right testing approach for your scale and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companySize.map((size, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 group text-center"
              >
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <size.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{size.title}</h3>
                <p className="text-gray-600 mb-6">{size.description}</p>
                <ul className="space-y-3 mb-8">
                  {size.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-md font-medium hover:bg-emerald-700 transition-colors duration-200 inline-block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Testing Solution?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a customized testing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/free-trial"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
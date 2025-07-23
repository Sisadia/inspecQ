import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, Star, ArrowRight, Users, Clock, Shield, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and startups',
      popular: false,
      features: [
        { name: 'Manual Testing', included: true },
        { name: 'Basic Automation', included: true },
        { name: 'Test Planning & Strategy', included: true },
        { name: 'Bug Reporting & Tracking', included: true },
        { name: 'Email Support', included: false },
        { name: 'Monthly Reports', included: true },
        { name: 'Performance Testing', included: false },
        { name: 'Security Testing', included: false },
        { name: 'Dedicated QA Manager', included: false },
        { name: '24/7 Support', included: false }
      ],
      cta: 'Start Testing',
      color: 'border-gray-200'
    },
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Ideal for growing companies',
      popular: true,
      features: [
        { name: 'Manual Testing', included: true },
        { name: 'Advanced Automation', included: true },
        { name: 'Test Planning & Strategy', included: true },
        { name: 'Bug Reporting & Tracking', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Weekly Reports', included: true },
        { name: 'Performance Testing', included: true },
        { name: 'Basic Security Testing', included: true },
        { name: 'Dedicated QA Manager', included: true },
        { name: '24/7 Support', included: false }
      ],
      cta: 'Most Popular',
      color: 'border-emerald-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      popular: false,
      features: [
        { name: 'Manual Testing', included: true },
        { name: 'Full Test Automation Suite', included: true },
        { name: 'Custom Test Strategy', included: true },
        { name: 'Advanced Reporting', included: true },
        { name: 'Dedicated Support Team', included: true },
        { name: 'Real-time Reports', included: true },
        { name: 'Comprehensive Performance Testing', included: true },
        { name: 'Full Security Testing', included: true },
        { name: 'Senior QA Manager', included: true },
        { name: '24/7 Premium Support', included: true }
      ],
      cta: 'Contact Sales',
      color: 'border-gray-200'
    }
  ];

  const comparison = [
    {
      category: 'Traditional QA Agencies',
      price: '$8,000 - $15,000/month',
      features: [
        'Long contract commitments',
        'Junior staff handling projects',
        'Slow communication',
        'Outdated methodologies',
        'High overhead costs'
      ],
      color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
    },
    {
      category: 'InspecQ (New Agency)',
      price: '$2,500 - $6,000/month',
      features: [
        'Flexible engagement models',
        'Senior experts on every project',
        'Direct communication',
        'Modern tools & methods',
        'Competitive startup rates'
      ],
      color: 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'
    },
    {
      category: 'Freelance QA Engineers',
      price: '$50 - $150/hour',
      features: [
        'Limited availability',
        'Single point of failure',
        'No process standardization',
        'Variable quality',
        'No backup support'
      ],
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Senior QA professionals from top tech companies'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all projects'
    },
    {
      icon: Zap,
      title: 'Modern Tools',
      description: 'Latest testing tools and methodologies'
    }
  ];

  return (
    <div className="pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Built to Inspect. Powered by Quality.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality Testing at Startup-Friendly Rates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              As a new agency, we offer competitive pricing without compromising on quality. 
              Choose the plan that fits your testing needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Pricing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get premium quality testing services at competitive rates designed for startups and growing companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to grow with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${plan.popular ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-500 relative' : 'bg-gradient-to-br from-white to-gray-50 border-2 ' + plan.color} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-md font-semibold transition-all duration-200 block text-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Compare to Alternatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why InspecQ offers the best value for quality assurance services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparison.map((option, index) => (
              <div key={index} className={`rounded-xl p-8 border-2 ${option.color} hover:shadow-lg transition-all duration-300`}>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{option.category}</h4>
                <div className="text-2xl font-bold text-gray-900 mb-6">{option.price}</div>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                        index === 1 ? 'bg-emerald-600' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get a custom quote tailored to your specific testing needs and project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
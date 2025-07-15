import React from 'react';
import { CheckCircle, Users, Award, Target, Clock } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'We never compromise on quality. Every test, every process, every deliverable meets our highest standards.'
    },
    {
      icon: Target,
      title: 'Innovation Driven',
      description: 'We stay ahead of the curve with cutting-edge testing tools and methodologies to deliver superior results.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve your quality goals and business objectives.'
    }
  ];

  const stats = [
    { icon: Users, value: '5', label: 'Expert QA Engineers', color: 'text-emerald-600' },
    { icon: Award, value: '10+', label: 'Years Combined Experience', color: 'text-blue-600' },
    { icon: Clock, value: '24/7', label: 'Dedicated Support', color: 'text-purple-600' },
    { icon: Target, value: '100%', label: 'Quality Commitment', color: 'text-orange-600' }
  ];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            About InspecQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built to Inspect. Powered by Quality.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by experienced QA professionals from leading tech companies, we're launching 
            InspecQ to bring enterprise-level testing expertise to startups and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.color} w-12 h-12 mx-auto mb-4 flex items-center justify-center`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              InspecQ was born from a simple belief: every software product deserves exceptional quality assurance, 
              regardless of company size or budget. Our founding team brings together decades of experience from 
              industry leaders like Google, Microsoft, and Amazon.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've seen firsthand how proper testing can make or break a product launch. That's why we're 
              committed to bringing enterprise-level QA expertise to startups and growing companies who need 
              it most.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a new agency, we're excited to build lasting partnerships with forward-thinking companies 
              who value quality and want to launch with confidence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Why We Started InspecQ</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                <span className="text-gray-700">Bridge the gap between enterprise QA and startup needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                <span className="text-gray-700">Make professional testing accessible to all company sizes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                <span className="text-gray-700">Prevent costly bugs and failed launches through proper testing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                <span className="text-gray-700">Build a quality-first culture in the software industry</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Award, Target, Code, Smartphone, Shield } from 'lucide-react';

const CaseStudies = () => {
  const capabilities = [
    {
      icon: Code,
      title: 'Web Application Testing',
      description: 'Comprehensive testing for modern web applications using latest frameworks',
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Laravel'],
      color: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Testing',
      description: 'Cross-platform mobile testing for iOS and Android applications',
      technologies: ['iOS Native', 'Android Native', 'React Native', 'Flutter', 'Xamarin'],
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'API & Security Testing',
      description: 'Robust API testing and security validation for backend services',
      technologies: ['REST APIs', 'GraphQL', 'Microservices', 'OAuth', 'JWT', 'HTTPS'],
      color: 'bg-purple-500'
    }
  ];

  const teamExperience = [
    {
      company: 'Google',
      role: 'Senior QA Engineer',
      duration: '3 years',
      achievements: ['Led testing for Google Pay', 'Implemented automated testing framework', 'Reduced bug escape rate by 60%']
    },
    {
      company: 'Microsoft',
      role: 'Test Automation Lead',
      duration: '4 years',
      achievements: ['Built CI/CD testing pipeline', 'Managed team of 8 QA engineers', 'Improved deployment speed by 40%']
    },
    {
      company: 'Amazon',
      role: 'Performance Testing Specialist',
      duration: '2 years',
      achievements: ['Optimized AWS services testing', 'Handled Black Friday load testing', 'Achieved 99.99% uptime']
    },
    {
      company: 'Startup Experience',
      role: 'Full-Stack QA',
      duration: '5+ startups',
      achievements: ['End-to-end testing setup', 'Quality process establishment', 'Rapid deployment support']
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: '🛒', description: 'Online stores and marketplaces', readiness: 'Ready to serve' },
    { name: 'FinTech', icon: '💰', description: 'Financial applications', readiness: 'Specialized expertise' },
    { name: 'HealthTech', icon: '🏥', description: 'Healthcare software', readiness: 'Compliance ready' },
    { name: 'EdTech', icon: '🎓', description: 'Educational platforms', readiness: 'User-focused testing' },
    { name: 'SaaS', icon: '☁️', description: 'Software as a Service', readiness: 'Scalability focused' },
    { name: 'Startups', icon: '🚀', description: 'Early-stage companies', readiness: 'Startup-friendly rates' }
  ];

  const stats = [
    { icon: Users, value: '10+', label: 'Years Combined Experience', color: 'text-emerald-600' },
    { icon: Award, value: '50+', label: 'Technologies Mastered', color: 'text-blue-600' },
    { icon: Target, value: '100%', label: 'Quality Commitment', color: 'text-purple-600' },
    { icon: CheckCircle, value: '24/7', label: 'Support Available', color: 'text-orange-600' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Our Expertise & Readiness
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Create Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              While we're a new agency, our team brings extensive experience from leading tech companies. 
              We're ready to deliver exceptional quality assurance for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
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
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technical Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring deep technical expertise across modern technologies and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className={`${capability.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {capability.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team's Background
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founders and team members bring extensive experience from leading technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamExperience.map((experience, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {experience.duration}
                  </span>
                </div>
                
                <p className="text-emerald-600 font-medium mb-4">{experience.role}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We're Ready to Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're prepared to work with companies across various industries and verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs">
                  {industry.readiness}
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
            Ready to Be Our First Success Story?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join us as we launch our QA agency. Get premium testing services at competitive rates 
            and help us build our portfolio of success stories.
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
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
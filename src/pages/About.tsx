import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Target, CheckCircle, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      experience: '12+ years',
      specialties: ['Test Strategy', 'Quality Leadership', 'DevOps'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['ISTQB Expert', 'AWS Solutions Architect'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Automation',
      experience: '10+ years',
      specialties: ['Test Automation', 'Framework Design', 'CI/CD'],
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['Selenium Expert', 'Docker Certified'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Johnson',
      role: 'Security Testing Lead',
      experience: '8+ years',
      specialties: ['Security Testing', 'Penetration Testing', 'Compliance'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['CISSP', 'CEH', 'OSCP'],
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Park',
      role: 'Performance Testing Specialist',
      experience: '9+ years',
      specialties: ['Load Testing', 'Performance Optimization', 'Monitoring'],
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      certifications: ['LoadRunner Expert', 'JMeter Certified'],
      linkedin: '#',
      twitter: '#'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Testing Experts', color: 'bg-emerald-500' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'bg-blue-500' },
    { icon: Clock, value: '24/7', label: 'Global Support', color: 'bg-purple-500' },
    { icon: Target, value: '99%', label: 'Client Satisfaction', color: 'bg-orange-500' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every test, every process, every deliverable meets our highest standards.',
      icon: CheckCircle
    },
    {
      title: 'Innovation Driven',
      description: 'We stay ahead of the curve with cutting-edge testing tools and methodologies.',
      icon: Target
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve your quality goals.',
      icon: Users
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small QA consultancy with a vision to transform software testing.'
    },
    {
      year: '2013',
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client, establishing our reputation in enterprise testing.'
    },
    {
      year: '2016',
      title: 'Automation Platform Launch',
      description: 'Launched our proprietary test automation platform, revolutionizing our service delivery.'
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Integrated AI and machine learning into our testing processes for smarter quality assurance.'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as a leading QA service provider with 500+ successful projects delivered.'
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
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built to Inspect. Powered by Quality.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Founded by experienced QA professionals from leading tech companies, we're launching 
              InspecQ to bring enterprise-level testing expertise to startups and growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Join Our Team</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Get in Touch
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
              <div key={index} className="text-center group">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
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

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to an industry leader - here's how we've grown and evolved.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience in quality assurance and software testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" 
                     style={{ backgroundImage: `url(${member.image})` }}>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience} experience</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="space-y-1 mb-4">
                      {member.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="text-xs text-gray-600">
                          {cert}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-3">
                      <a href={member.linkedin} className="text-gray-400 hover:text-emerald-600 transition-colors duration-200">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.twitter} className="text-gray-400 hover:text-emerald-600 transition-colors duration-200">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
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
            Ready to Work with the Best?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust our expertise to deliver exceptional software quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/careers"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
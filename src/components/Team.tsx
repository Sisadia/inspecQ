import React from 'react';
import { Award, Users, Clock, Target, CheckCircle, Linkedin, Twitter } from 'lucide-react';

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
    { icon: Users, value: '5', label: 'Expert QA Engineers', color: 'bg-emerald-500' },
    { icon: Award, value: '10+', label: 'Years Combined Experience', color: 'bg-blue-500' },
    { icon: Clock, value: '24/7', label: 'Dedicated Support', color: 'bg-purple-500' },
    { icon: Target, value: '100%', label: 'Quality Commitment', color: 'bg-orange-500' }
  ];

  const values = [
    {
      title: 'Excellence from Day One',
      description: 'We bring industry best practices and proven methodologies to deliver exceptional quality from our very first project.',
      icon: CheckCircle
    },
    {
      title: 'Client Success Focus',
      description: 'Your success is our success. We\'re committed to building long-term partnerships and delivering measurable results.',
      icon: Target
    },
    {
      title: 'Continuous Learning',
      description: 'We stay current with the latest testing technologies and methodologies to provide cutting-edge solutions.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experienced QA Professionals Ready to Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our founding team brings years of industry experience from leading tech companies, 
            ready to deliver exceptional quality assurance for your projects.
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry veterans with decades of combined experience in quality assurance and software testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group">
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
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Lock, AlertTriangle, Eye, FileCheck } from 'lucide-react';

const SecurityTesting = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Safeguard sensitive user data and business information from security breaches.'
    },
    {
      icon: Lock,
      title: 'Compliance Assurance',
      description: 'Meet regulatory requirements like GDPR, HIPAA, PCI-DSS, and SOX.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Mitigation',
      description: 'Identify and address security vulnerabilities before they can be exploited.'
    },
    {
      icon: FileCheck,
      title: 'Trust Building',
      description: 'Build customer confidence with robust security measures and certifications.'
    }
  ];

  const testingTypes = [
    {
      title: 'Penetration Testing',
      description: 'Simulate real-world attacks to identify vulnerabilities',
      icon: AlertTriangle,
      features: ['Network penetration testing', 'Web application testing', 'Social engineering tests', 'Physical security testing']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Systematic identification of security weaknesses',
      icon: Eye,
      features: ['Automated vulnerability scanning', 'Manual security testing', 'Code review', 'Configuration analysis']
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security posture evaluation',
      icon: FileCheck,
      features: ['Security policy review', 'Access control testing', 'Audit trail analysis', 'Compliance validation']
    },
    {
      title: 'Authentication Testing',
      description: 'Validate identity and access management systems',
      icon: Lock,
      features: ['Multi-factor authentication', 'Session management', 'Password policy testing', 'Authorization controls']
    }
  ];

  const securityAreas = [
    {
      area: 'Web Application Security',
      threats: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'CSRF Attacks', 'Authentication Bypass'],
      solutions: ['Input validation', 'Output encoding', 'Secure authentication', 'Session management']
    },
    {
      area: 'API Security',
      threats: ['Broken authentication', 'Excessive data exposure', 'Rate limiting issues', 'Injection attacks'],
      solutions: ['OAuth implementation', 'Rate limiting', 'Input validation', 'Encryption']
    },
    {
      area: 'Mobile App Security',
      threats: ['Insecure data storage', 'Weak cryptography', 'Insecure communication', 'Code tampering'],
      solutions: ['Secure storage', 'Strong encryption', 'Certificate pinning', 'Code obfuscation']
    },
    {
      area: 'Network Security',
      threats: ['Man-in-the-middle attacks', 'Network sniffing', 'DDoS attacks', 'Unauthorized access'],
      solutions: ['SSL/TLS encryption', 'Network segmentation', 'Intrusion detection', 'Access controls']
    }
  ];

  const compliance = [
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation',
      requirements: ['Data privacy', 'Consent management', 'Right to be forgotten', 'Data breach notification']
    },
    {
      standard: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      requirements: ['PHI protection', 'Access controls', 'Audit logs', 'Encryption requirements']
    },
    {
      standard: 'PCI-DSS',
      description: 'Payment Card Industry Data Security Standard',
      requirements: ['Cardholder data protection', 'Secure networks', 'Access controls', 'Regular monitoring']
    },
    {
      standard: 'SOX',
      description: 'Sarbanes-Oxley Act',
      requirements: ['Financial data integrity', 'Access controls', 'Change management', 'Audit trails']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Security Testing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Security Testing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protect your applications and data with thorough security testing. 
              Identify vulnerabilities, ensure compliance, and build customer trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Secure Your App</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Security Assessment
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
              Why Security Testing is Essential
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's threat landscape, security testing is not optional—it's a business necessity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
              Security Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security testing approaches to protect your applications and data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 p-3 rounded-lg mr-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                </div>
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

      {/* Security Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Testing Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cover all critical security areas to ensure comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{area.area}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-red-600 mb-3">Common Threats:</h4>
                  <ul className="space-y-2">
                    {area.threats.map((threat, threatIndex) => (
                      <li key={threatIndex} className="flex items-center text-gray-700 text-sm">
                        <AlertTriangle className="h-4 w-4 text-red-500 mr-3" />
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-600 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure your applications meet industry regulations and security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {standard.standard}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{standard.description}</h3>
                <ul className="space-y-2">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Testing Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The measurable benefits of comprehensive security testing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">99%</div>
              <div className="text-gray-600">Vulnerabilities Found</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">85%</div>
              <div className="text-gray-600">Risk Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Applications?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Let our experts protect your applications and data today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Security Testing
            </Link>
            <Link
              to="/free-trial"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Free Security Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityTesting;
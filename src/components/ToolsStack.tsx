import React from 'react';
import { Code, Database, Globe, Smartphone, Shield, Zap, CheckCircle } from 'lucide-react';

const ToolsStack = () => {
  const categories = [
    {
      title: 'Test Automation',
      icon: Zap,
      color: 'bg-emerald-500',
      tools: [
        { name: 'Selenium WebDriver', logo: '🔧', description: 'Web automation framework' },
        { name: 'Cypress', logo: '🌲', description: 'Modern end-to-end testing' },
        { name: 'Playwright', logo: '🎭', description: 'Cross-browser automation' },
        { name: 'Appium', logo: '📱', description: 'Mobile app automation' },
        { name: 'TestNG', logo: '⚡', description: 'Testing framework for Java' },
        { name: 'Jest', logo: '🃏', description: 'JavaScript testing framework' }
      ]
    },
    {
      title: 'Performance Testing',
      icon: Database,
      color: 'bg-purple-500',
      tools: [
        { name: 'JMeter', logo: '⚡', description: 'Load testing tool' },
        { name: 'LoadRunner', logo: '🏃', description: 'Enterprise performance testing' },
        { name: 'K6', logo: '📊', description: 'Modern load testing' },
        { name: 'Gatling', logo: '🔫', description: 'High-performance load testing' },
        { name: 'Artillery', logo: '💥', description: 'Modern load testing toolkit' },
        { name: 'WebPageTest', logo: '🌐', description: 'Web performance testing' }
      ]
    },
    {
      title: 'API Testing',
      icon: Globe,
      color: 'bg-blue-500',
      tools: [
        { name: 'Postman', logo: '📮', description: 'API development platform' },
        { name: 'REST Assured', logo: '☕', description: 'Java REST testing' },
        { name: 'Newman', logo: '🏃‍♂️', description: 'Postman CLI runner' },
        { name: 'SoapUI', logo: '🧼', description: 'SOAP & REST testing' },
        { name: 'Insomnia', logo: '😴', description: 'API client and testing' },
        { name: 'Paw', logo: '🐾', description: 'Advanced API tool' }
      ]
    },
    {
      title: 'Mobile Testing',
      icon: Smartphone,
      color: 'bg-orange-500',
      tools: [
        { name: 'Appium', logo: '📱', description: 'Mobile automation platform' },
        { name: 'Espresso', logo: '☕', description: 'Android UI testing' },
        { name: 'XCUITest', logo: '🍎', description: 'iOS UI testing framework' },
        { name: 'Detox', logo: '🧪', description: 'React Native testing' },
        { name: 'Firebase Test Lab', logo: '🔥', description: 'Cloud testing platform' },
        { name: 'BrowserStack', logo: '📚', description: 'Real device testing' }
      ]
    },
    {
      title: 'Security Testing',
      icon: Shield,
      color: 'bg-red-500',
      tools: [
        { name: 'OWASP ZAP', logo: '⚡', description: 'Security testing proxy' },
        { name: 'Burp Suite', logo: '🔒', description: 'Web security testing' },
        { name: 'Nessus', logo: '🛡️', description: 'Vulnerability scanner' },
        { name: 'Metasploit', logo: '💣', description: 'Penetration testing' },
        { name: 'Nmap', logo: '🗺️', description: 'Network discovery tool' },
        { name: 'Wireshark', logo: '🦈', description: 'Network protocol analyzer' }
      ]
    },
    {
      title: 'Development & CI/CD',
      icon: Code,
      color: 'bg-teal-500',
      tools: [
        { name: 'Jenkins', logo: '👨‍💼', description: 'Automation server' },
        { name: 'GitHub Actions', logo: '🐙', description: 'CI/CD workflows' },
        { name: 'Docker', logo: '🐳', description: 'Containerization platform' },
        { name: 'Kubernetes', logo: '☸️', description: 'Container orchestration' },
        { name: 'GitLab CI', logo: '🦊', description: 'DevOps platform' },
        { name: 'Azure DevOps', logo: '☁️', description: 'Microsoft DevOps suite' }
      ]
    }
  ];

  return (
    <section id="tools-stack" className="py-20 bg-gradient-to-br from-purple-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            Our Technology Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools & Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-leading tools and frameworks to deliver comprehensive 
            testing solutions across all platforms and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-lg mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center mb-2">
                      <span className="text-lg mr-2">{tool.logo}</span>
                      <span className="font-semibold text-gray-900 text-sm">{tool.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your preferred tool? We're always expanding our toolkit to meet client needs.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200">
            Discuss Your Tech Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowRight, Zap, Users, TrendingUp, Activity } from 'lucide-react';

const PerformanceTesting = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Optimal Performance',
      description: 'Ensure your application performs well under expected and peak load conditions.'
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Deliver fast, responsive experiences that keep users engaged and satisfied.'
    },
    {
      icon: TrendingUp,
      title: 'Scalability Planning',
      description: 'Understand your system limits and plan for future growth effectively.'
    },
    {
      icon: Activity,
      title: 'Issue Prevention',
      description: 'Identify and resolve performance bottlenecks before they impact users.'
    }
  ];

  const testingTypes = [
    {
      title: 'Load Testing',
      description: 'Validate system behavior under expected user load',
      icon: Users,
      features: ['Normal user load simulation', 'Response time analysis', 'Throughput measurement', 'Resource utilization']
    },
    {
      title: 'Stress Testing',
      description: 'Test system limits and breaking points',
      icon: Activity,
      features: ['Peak load simulation', 'System stability testing', 'Recovery testing', 'Error handling validation']
    },
    {
      title: 'Volume Testing',
      description: 'Test with large amounts of data',
      icon: BarChart3,
      features: ['Database performance', 'Data processing speed', 'Storage capacity testing', 'Memory usage analysis']
    },
    {
      title: 'Spike Testing',
      description: 'Test sudden load increases',
      icon: TrendingUp,
      features: ['Traffic spike simulation', 'Auto-scaling validation', 'Performance degradation analysis', 'Recovery time measurement']
    }
  ];

  const tools = [
    {
      name: 'JMeter',
      description: 'Open-source performance testing tool',
      capabilities: ['Web applications', 'APIs', 'Databases', 'FTP servers']
    },
    {
      name: 'LoadRunner',
      description: 'Enterprise performance testing platform',
      capabilities: ['Large-scale testing', 'Protocol support', 'Real-time monitoring', 'Advanced analytics']
    },
    {
      name: 'K6',
      description: 'Modern load testing tool',
      capabilities: ['Developer-friendly', 'CI/CD integration', 'Cloud testing', 'JavaScript scripting']
    },
    {
      name: 'Gatling',
      description: 'High-performance load testing framework',
      capabilities: ['High throughput', 'Real-time metrics', 'Detailed reports', 'Scala-based']
    }
  ];

  const metrics = [
    { name: 'Response Time', description: 'Time taken to process requests', target: '< 2 seconds' },
    { name: 'Throughput', description: 'Requests processed per second', target: '1000+ RPS' },
    { name: 'Error Rate', description: 'Percentage of failed requests', target: '< 1%' },
    { name: 'CPU Usage', description: 'Server CPU utilization', target: '< 80%' },
    { name: 'Memory Usage', description: 'RAM consumption', target: '< 85%' },
    { name: 'Concurrent Users', description: 'Simultaneous active users', target: '10,000+' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance Testing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Optimize Your Application Performance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ensure your application can handle real-world traffic and deliver exceptional 
              user experiences under any load condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Testing</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Demo
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
              Why Performance Testing Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance issues can cost you users, revenue, and reputation. Prevent problems before they happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
              Types of Performance Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing approaches to validate all aspects of your application performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
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

      {/* Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Performance Testing Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools to deliver accurate and comprehensive performance insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We measure and optimize the metrics that matter most for your application performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{metric.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{metric.description}</p>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  Target: {metric.target}
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
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our performance testing experts help you deliver lightning-fast user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Performance Testing
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

export default PerformanceTesting;
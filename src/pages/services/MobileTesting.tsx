import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, ArrowRight, Monitor, Tablet, Globe, Zap } from 'lucide-react';

const MobileTesting = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Cross-Platform Coverage',
      description: 'Test across iOS, Android, and hybrid platforms to ensure universal compatibility.'
    },
    {
      icon: Monitor,
      title: 'Device Fragmentation',
      description: 'Test on hundreds of real devices with different screen sizes, OS versions, and hardware.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize battery usage, memory consumption, and app responsiveness.'
    },
    {
      icon: CheckCircle,
      title: 'App Store Approval',
      description: 'Ensure your app meets all store guidelines and approval requirements.'
    }
  ];

  const testingTypes = [
    {
      title: 'Functional Testing',
      description: 'Validate all app features work correctly across devices',
      icon: CheckCircle,
      features: ['User interface testing', 'Navigation testing', 'Input validation', 'Feature functionality']
    },
    {
      title: 'Compatibility Testing',
      description: 'Ensure app works across different devices and OS versions',
      icon: Smartphone,
      features: ['Device compatibility', 'OS version testing', 'Screen resolution testing', 'Hardware compatibility']
    },
    {
      title: 'Performance Testing',
      description: 'Optimize app performance and resource usage',
      icon: Zap,
      features: ['Load time optimization', 'Memory usage testing', 'Battery consumption', 'Network performance']
    },
    {
      title: 'Usability Testing',
      description: 'Ensure excellent user experience and accessibility',
      icon: Monitor,
      features: ['User experience testing', 'Accessibility compliance', 'Gesture testing', 'Orientation testing']
    }
  ];

  const platforms = [
    {
      name: 'iOS Testing',
      description: 'Comprehensive testing for iPhone and iPad applications',
      features: ['iPhone compatibility', 'iPad optimization', 'iOS version testing', 'App Store guidelines'],
      devices: ['iPhone 15 Pro', 'iPhone 14', 'iPhone SE', 'iPad Pro', 'iPad Air', 'iPad Mini']
    },
    {
      name: 'Android Testing',
      description: 'Extensive testing across Android ecosystem',
      features: ['Multiple manufacturers', 'Android version testing', 'Google Play compliance', 'Custom ROM testing'],
      devices: ['Samsung Galaxy', 'Google Pixel', 'OnePlus', 'Xiaomi', 'Huawei', 'LG']
    },
    {
      name: 'Hybrid App Testing',
      description: 'Testing for React Native, Flutter, and Cordova apps',
      features: ['Cross-platform validation', 'Native feature testing', 'Performance optimization', 'Platform-specific UI'],
      devices: ['iOS & Android', 'Web views', 'Native modules', 'Platform APIs']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Device Strategy',
      description: 'Define target devices and testing matrix based on your user demographics.'
    },
    {
      step: '2',
      title: 'Test Planning',
      description: 'Create comprehensive test plans covering all mobile-specific scenarios.'
    },
    {
      step: '3',
      title: 'Execution',
      description: 'Execute tests on real devices using manual and automated approaches.'
    },
    {
      step: '4',
      title: 'Reporting',
      description: 'Provide detailed reports with device-specific issues and recommendations.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile Testing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Mobile App Testing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ensure your mobile app delivers exceptional experiences across all devices, 
              platforms, and user scenarios with our comprehensive mobile testing services.
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
              Why Mobile Testing is Critical
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile users expect flawless experiences. Don't let device fragmentation hurt your app's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
              Mobile Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing approaches tailored for mobile applications and user behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 p-3 rounded-lg mr-4">
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

      {/* Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We test across all major mobile platforms and device ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Supported Devices:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.devices.map((device, deviceIndex) => (
                      <span key={deviceIndex} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mobile Testing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach designed specifically for mobile application testing challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Mobile Testing Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing across the mobile ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Real Devices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">OS Versions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Store Approval</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Device Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Perfect Your Mobile App?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let our mobile testing experts ensure your app delivers exceptional experiences across all devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Mobile Testing
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

export default MobileTesting;
import React from 'react';
import { ArrowRight, CheckCircle, Calendar, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              QA Agency with Expert Team
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Built to Inspect.
              <span className="text-emerald-600 block">Powered by Quality.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Launch your software with confidence. Our expert QA team brings years of industry experience
              to deliver comprehensive testing solutions for startups and growing companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/services"
                className="bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Wrench className="h-5 w-5" />
                <span>Explore Our Services</span>
              </Link>

              <button
                onClick={() => {
                  console.log('Trying popup...');
                  window.Calendly?.initPopupWidget({
                    url: 'https://calendly.com/your-link',
                  });
                }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Free QA Session</span>
              </button>


            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { title: '10+', subtitle: 'Years Combined Experience' },
                { title: '100%', subtitle: 'Quality Commitment' },
                { title: '24/7', subtitle: 'Dedicated Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</div>
                  <div className="text-gray-600 text-sm">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Test Dashboard</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Automated Tests</span>
                    <span className="text-sm font-semibold text-green-600">✓ 1,247 Passed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Performance Tests</span>
                    <span className="text-sm font-semibold text-green-600">✓ All Passed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Security Scan</span>
                    <span className="text-sm font-semibold text-green-600">✓ No Issues</span>
                  </div>
                </div>
              </div>
              <div className="text-white text-center">
                <div className="text-2xl font-bold mb-2">100% Test Coverage</div>
                <div className="text-emerald-100">Your app is ready to ship!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

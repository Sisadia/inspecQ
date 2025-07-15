import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search, CheckCircle } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Test Automation: AI and Machine Learning',
      excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing test automation and what it means for QA professionals.',
      author: 'Sarah Chen',
      date: '2025-01-15',
      category: 'Automation',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Machine Learning', 'Test Automation', 'Future Tech']
    },
    {
      id: 2,
      title: 'Mobile Testing Best Practices for 2025',
      excerpt: 'Comprehensive guide to mobile testing strategies, tools, and techniques for ensuring flawless mobile app experiences.',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      category: 'Mobile Testing',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile Testing', 'iOS', 'Android', 'Best Practices']
    },
    {
      id: 3,
      title: 'Security Testing in the Age of Cloud Computing',
      excerpt: 'Learn about the unique security challenges in cloud environments and how to implement effective security testing strategies.',
      author: 'Emily Johnson',
      date: '2025-01-10',
      category: 'Security',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Security Testing', 'Cloud Computing', 'Cybersecurity', 'DevSecOps']
    },
    {
      id: 4,
      title: 'Performance Testing at Scale: Lessons from Enterprise Projects',
      excerpt: 'Real-world insights from large-scale performance testing projects and how to handle millions of concurrent users.',
      author: 'David Park',
      date: '2025-01-08',
      category: 'Performance',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Performance Testing', 'Scalability', 'Enterprise', 'Load Testing']
    },
    {
      id: 5,
      title: 'API Testing Fundamentals: A Complete Guide',
      excerpt: 'Everything you need to know about API testing, from basic concepts to advanced techniques and automation strategies.',
      author: 'Lisa Wang',
      date: '2025-01-05',
      category: 'API Testing',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['API Testing', 'REST', 'GraphQL', 'Automation']
    },
    {
      id: 6,
      title: 'Building a Quality Culture: Beyond Testing',
      excerpt: 'How to foster a quality-first mindset across your entire organization and make quality everyone\'s responsibility.',
      author: 'James Thompson',
      date: '2025-01-03',
      category: 'Quality Culture',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Quality Culture', 'Team Management', 'Process Improvement', 'Leadership']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'Automation', name: 'Test Automation', count: blogPosts.filter(post => post.category === 'Automation').length },
    { id: 'Mobile Testing', name: 'Mobile Testing', count: blogPosts.filter(post => post.category === 'Mobile Testing').length },
    { id: 'Security', name: 'Security Testing', count: blogPosts.filter(post => post.category === 'Security').length },
    { id: 'Performance', name: 'Performance Testing', count: blogPosts.filter(post => post.category === 'Performance').length },
    { id: 'API Testing', name: 'API Testing', count: blogPosts.filter(post => post.category === 'API Testing').length },
    { id: 'Quality Culture', name: 'Quality Culture', count: blogPosts.filter(post => post.category === 'Quality Culture').length }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  const filteredPosts = recentPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              QA Insights & Best Practices
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              InspecQ Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, best practices, and insights 
              in software testing and quality assurance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-64 lg:h-80 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${featuredPost.image})` }}>
              <div className="h-full bg-black bg-opacity-40 flex items-end p-6 rounded-xl">
                <div className="text-white">
                  <span className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(featuredPost.date)}
                </div>
                <span>{featuredPost.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2">
                <span>Read Full Article</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest insights and best practices in software testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
                    <span className="text-sm font-medium bg-emerald-600 text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-500 text-xs">+{post.tags.length - 2} more</span>
                    )}
                  </div>

                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center transition-colors duration-200">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your criteria.</p>
              <p className="text-gray-600 mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with QA Insights
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest testing tips, best practices, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-emerald-100 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
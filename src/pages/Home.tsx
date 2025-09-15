import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Calendar, 
  Bell, 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Play
} from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Automated Scheduling',
      description: 'Intelligent therapy planning with automated session management and conflict resolution.',
      color: 'bg-emerald-500'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Pre and post-procedure alerts via in-app, SMS, and email channels.',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Real-time therapy monitoring with visual progress charts and milestones.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Comprehensive patient records with treatment history and personalized care plans.',
      color: 'bg-amber-500'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'HIPAA-compliant data protection with role-based access control.',
      color: 'bg-red-500'
    },
    {
      icon: Heart,
      title: 'Holistic Care',
      description: 'Integrated feedback loops for continuous improvement and personalized treatment.',
      color: 'bg-pink-500'
    }
  ];

  const benefits = [
    'Reduce administrative overhead by 60%',
    'Improve patient satisfaction scores',
    'Streamline therapy documentation',
    'Enhance treatment consistency',
    'Enable data-driven decisions',
    'Scale operations efficiently'
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Ayurvedic Practitioner',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'This software has transformed how we manage our Panchakarma center. The automated scheduling and patient tracking features have improved our efficiency tremendously.'
    },
    {
      name: 'Rajesh Patel',
      role: 'Wellness Center Director',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The notification system ensures our patients never miss important pre-procedure instructions. Patient compliance has increased significantly.'
    },
    {
      name: 'Anita Verma',
      role: 'Patient',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'I love how I can track my progress and receive timely reminders. The visual progress charts keep me motivated throughout my treatment journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PanchakarmaMS</h1>
                <p className="text-xs text-gray-500">Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Traditional Healing Meets
                <span className="text-emerald-600 block">Modern Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline your Panchakarma practice with intelligent scheduling, automated notifications, 
                and comprehensive patient management. Built for the growing USD 16 billion Ayurveda market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    3 Sessions
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Abhyanga Therapy</p>
                      <p className="text-sm text-gray-600">10:00 AM - Priya Patel</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Shirodhara</p>
                      <p className="text-sm text-gray-600">2:00 PM - Rahul Sharma</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Panchakarma Detox</p>
                      <p className="text-sm text-gray-600">4:00 PM - Anjali Verma</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-blue-600 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Reminder Sent</p>
                    <p className="text-xs text-gray-600">Pre-procedure instructions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Panchakarma Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a modern Ayurvedic practice with traditional authenticity and digital efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow group">
                  <div className={`${feature.color} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your Practice with Digital Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join the digital transformation of Ayurvedic healthcare. Our platform combines ancient wisdom 
                with modern technology to deliver exceptional patient care and operational efficiency.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Analytics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Patient Satisfaction</span>
                      <span className="font-medium text-emerald-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Treatment Efficiency</span>
                      <span className="font-medium text-blue-600">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Appointment Adherence</span>
                      <span className="font-medium text-purple-600">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See how practitioners and patients are transforming their Ayurvedic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Panchakarma Practice?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of practitioners who have already transformed their practice with our comprehensive management solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-emerald-100 mt-4 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">PanchakarmaMS</h3>
                  <p className="text-xs text-gray-400">Management System</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Bridging traditional Ayurvedic wisdom with modern healthcare technology for better patient outcomes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PanchakarmaMS. All rights reserved. Built for SIH 2024.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
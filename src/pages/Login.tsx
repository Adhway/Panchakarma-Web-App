import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const demoLogin = (type: 'patient' | 'practitioner') => {
    const demoEmail = type === 'patient' ? 'patient@example.com' : 'practitioner@example.com';
    setEmail(demoEmail);
    setPassword('demo123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-emerald-600 p-3 rounded-2xl inline-block mb-4">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PanchakarmaMS</h1>
          <p className="text-gray-600">Traditional healing meets modern management</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Login Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-4">Demo Login (No credentials required)</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => demoLogin('patient')}
                className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                Patient Demo
              </button>
              <button
                onClick={() => demoLogin('practitioner')}
                className="px-4 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              >
                Practitioner Demo
              </button>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center space-y-2">
            <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700">
              Forgot your password?
            </a>
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Contact your administrator
              </a>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
            <div className="bg-white/70 backdrop-blur rounded-lg p-3">
              <div className="font-semibold text-emerald-600 mb-1">Smart Scheduling</div>
              <div>Automated therapy planning</div>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-lg p-3">
              <div className="font-semibold text-blue-600 mb-1">Progress Tracking</div>
              <div>Real-time monitoring</div>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-lg p-3">
              <div className="font-semibold text-purple-600 mb-1">Notifications</div>
              <div>Timely reminders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
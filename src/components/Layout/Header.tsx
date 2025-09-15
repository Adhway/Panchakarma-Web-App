import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, User, LogOut, Settings, Leaf } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const Header: React.FC = () => {
  const { user, logout, switchRole } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = user?.role === 'patient' 
    ? [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Appointments', href: '/appointments' },
        { name: 'Progress', href: '/progress' },
        { name: 'Notifications', href: '/notifications' }
      ]
    : [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Patients', href: '/patients' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'Notifications', href: '/notifications' }
      ];

  if (!user) return null;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PanchakarmaMS</h1>
              <p className="text-xs text-gray-500">Management System</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Role Switcher - Demo purpose */}
            <div className="hidden sm:block">
              <select
                value={user.role}
                onChange={(e) => switchRole(e.target.value as 'patient' | 'practitioner')}
                className="text-xs bg-gray-100 border border-gray-300 rounded px-2 py-1"
              >
                <option value="patient">Patient View</option>
                <option value="practitioner">Practitioner View</option>
              </select>
            </div>

            {/* Notifications */}
            <Link to="/notifications" className="relative p-2 text-gray-600 hover:text-emerald-600">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Link>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              {user.avatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <div className="hidden sm:block text-sm">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-gray-500 capitalize">{user.role}</p>
              </div>
              <button
                onClick={logout}
                className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
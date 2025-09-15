import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Activity, 
  Bell, 
  FileText, 
  Settings,
  Home,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const patientNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Appointments', href: '/appointments', icon: Calendar },
    { name: 'Progress', href: '/progress', icon: TrendingUp },
    { name: 'Feedback', href: '/feedback', icon: MessageSquare },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Profile', href: '/profile', icon: Settings }
  ];

  const practitionerNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Patients', href: '/patients', icon: Users },
    { name: 'Schedule', href: '/schedule', icon: Calendar },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];

  const navigation = user.role === 'patient' ? patientNavigation : practitionerNavigation;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-16">
      <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-600'
                  }`}
                >
                  <Icon
                    className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      isActive(item.href) ? 'text-emerald-500' : 'text-gray-500 group-hover:text-emerald-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
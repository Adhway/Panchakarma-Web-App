import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, User, LogOut, Settings, Leaf, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { format } from 'date-fns';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'reminder' | 'alert' | 'info' | 'success';
  read: boolean;
  date: string;
}

export const Header: React.FC = () => {
  const { user, logout, switchRole } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Hydration Reminder',
      message: 'Drink 8-10 glasses of water today.',
      type: 'reminder',
      read: false,
      date: new Date(Date.now() - 60000).toISOString(),
    },
    {
      id: '2',
      title: 'Appointment Confirmed',
      message: 'Your Panchakarma consultation is booked for Oct 3 at 2:00 PM.',
      type: 'success',
      read: false,
      date: new Date(Date.now() - 30000).toISOString(),
    },
    {
      id: '3',
      title: 'Feedback Pending',
      message: 'Please provide feedback for your last session.',
      type: 'info',
      read: true,
      date: new Date(Date.now() - 120000).toISOString(),
    },
  ]);

  // This already calculates the count, we just need to display it.
  const unreadCount = notifications.filter((n) => !n.read).length; 
  
  const addNotification = useCallback((newNotification: Notification) => {
    setNotifications(prevNotifications => {
      const updatedList = [newNotification, ...prevNotifications].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      return updatedList;
    });
  }, []);
  
  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  // ⭐️ REAL-TIME IMPLEMENTATION (Simulated)
  useEffect(() => {
    const simulationTimer = setTimeout(() => {
      const newRealtimeNotification: Notification = {
        id: Date.now().toString(),
        title: 'New Treatment Plan Ready',
        message: 'Your personalized plan has been uploaded to the Progress section.',
        type: 'info',
        read: false,
        date: new Date().toISOString(),
      };
      
      addNotification(newRealtimeNotification);
    }, 5000);

    return () => {
      clearTimeout(simulationTimer);
    };
  }, [addNotification]);
  // End Real-Time Simulation

  const getIcon = (type: string) => {
    switch (type) {
      case 'reminder':
        return <Bell className="h-4 w-4 text-blue-600" />;
      case 'alert':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-emerald-600" />;
      default:
        return <Info className="h-4 w-4 text-gray-600" />;
    }
  };

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
            {/* Role Switcher */}
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

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="relative p-2 text-gray-600 hover:text-emerald-600"
              >
                <Bell className="h-5 w-5" />
                {/* ⭐️ UPDATED: Display unread count in the badge ⭐️ */}
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                    {unreadCount}
                  </span>
                )}
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                  {/* Notification Header with Close Button */}
                  <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Notifications</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        Mark all as read
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close notifications"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  {/* End Notification Header */}
                  
                  <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center text-gray-500">No notifications</div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`flex items-start gap-3 p-3 hover:bg-gray-50 transition ${
                            !n.read ? 'bg-blue-50/50' : ''
                          }`}
                        >
                          {getIcon(n.type)}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">{n.title}</p>
                            <p className="text-xs text-gray-600">{n.message}</p>
                            <span className="text-xs text-gray-400">
                              {format(new Date(n.date), 'MMM d, h:mm a')}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-2 border-t border-gray-100 text-center">
                    <Link
                      to="/notifications"
                      onClick={() => setOpen(false)}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      View all
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* User Info and Logout */}
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
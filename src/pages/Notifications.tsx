import React, { useState } from 'react';
import { Bell, CheckCircle, AlertTriangle, Info, Settings, Filter, Search } from 'lucide-react';
import { format } from 'date-fns';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'reminder' | 'alert' | 'info' | 'success';
  read: boolean;
  date: string;
  category: 'appointment' | 'therapy' | 'medication' | 'system';
}

export const Notifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'unread' | 'reminder' | 'alert'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const notifications: Notification[] = [
    {
      id: '1',
      title: 'Pre-Procedure Reminder',
      message: 'Remember to fast for 12 hours before tomorrow\'s Abhyanga session at 10:00 AM. Avoid heavy meals and caffeine.',
      type: 'reminder',
      read: false,
      date: '2024-01-19T18:00:00Z',
      category: 'appointment'
    },
    {
      id: '2',
      title: 'Session Feedback Required',
      message: 'Please provide feedback for your Shirodhara session completed yesterday. Your input helps us improve your treatment plan.',
      type: 'info',
      read: false,
      date: '2024-01-19T14:30:00Z',
      category: 'therapy'
    },
    {
      id: '3',
      title: 'Appointment Confirmed',
      message: 'Your Panchakarma consultation with Dr. Ayush Sharma has been confirmed for January 22, 2024 at 2:00 PM.',
      type: 'success',
      read: true,
      date: '2024-01-19T10:15:00Z',
      category: 'appointment'
    },
    {
      id: '4',
      title: 'Hydration Reminder',
      message: 'Don\'t forget to drink plenty of water throughout the day. Aim for at least 8-10 glasses to support your detox process.',
      type: 'reminder',
      read: true,
      date: '2024-01-19T09:00:00Z',
      category: 'therapy'
    },
    {
      id: '5',
      title: 'Important: Side Effects Reported',
      message: 'We noticed you reported mild nausea after your last session. Our team will contact you within 24 hours to discuss this.',
      type: 'alert',
      read: false,
      date: '2024-01-18T16:45:00Z',
      category: 'therapy'
    },
    {
      id: '6',
      title: 'Weekly Progress Report Ready',
      message: 'Your wellness progress report for this week is now available. Review your improvements and upcoming recommendations.',
      type: 'info',
      read: true,
      date: '2024-01-18T08:00:00Z',
      category: 'system'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reminder':
        return <Bell className="h-5 w-5 text-blue-600" />;
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      default:
        return <Info className="h-5 w-5 text-gray-600" />;
    }
  };

  const getNotificationBorder = (type: string) => {
    switch (type) {
      case 'reminder':
        return 'border-l-blue-500';
      case 'alert':
        return 'border-l-red-500';
      case 'success':
        return 'border-l-emerald-500';
      default:
        return 'border-l-gray-500';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'unread' && !notification.read) ||
      (filter !== 'unread' && notification.type === filter);
    
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">
            Stay updated with your treatment schedule and reminders
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {unreadCount} unread
              </span>
            )}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          {/* Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Notifications</option>
              <option value="unread">Unread Only</option>
              <option value="reminder">Reminders</option>
              <option value="alert">Alerts</option>
              <option value="info">Information</option>
              <option value="success">Success</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {filteredNotifications.length === 0 ? (
          <div className="p-12 text-center">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors border-l-4 ${getNotificationBorder(notification.type)} ${
                  !notification.read ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h4 className={`text-sm font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-800'}`}>
                        {notification.title}
                        {!notification.read && (
                          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            New
                          </span>
                        )}
                      </h4>
                      <span className="text-xs text-gray-500 ml-4 flex-shrink-0">
                        {format(new Date(notification.date), 'MMM d, h:mm a')}
                      </span>
                    </div>
                    
                    <p className={`mt-2 text-sm ${!notification.read ? 'text-gray-700' : 'text-gray-600'}`}>
                      {notification.message}
                    </p>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                        {notification.category}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                            Mark as read
                          </button>
                        )}
                        <button className="text-xs text-gray-500 hover:text-gray-700">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Appointment Reminders</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">24 hours before</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">2 hours before</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="ml-2 text-sm text-gray-600">SMS notifications</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Therapy Updates</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">Progress reports</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">Side effect alerts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">Milestone achievements</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Communication</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="ml-2 text-sm text-gray-600">Push notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">Weekly summaries</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
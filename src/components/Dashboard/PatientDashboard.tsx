import React from 'react';
import { Calendar, Activity, Clock, AlertCircle, TrendingUp, Heart } from 'lucide-react';
import { StatCard } from './StatCard';
import { ProgressChart } from '../Charts/ProgressChart';

export const PatientDashboard: React.FC = () => {
  const upcomingSessions = [
    {
      id: '1',
      therapy: 'Abhyanga',
      date: '2024-01-20',
      time: '10:00 AM',
      practitioner: 'Dr. Ayush Sharma'
    },
    {
      id: '2',
      therapy: 'Shirodhara',
      date: '2024-01-22',
      time: '2:00 PM',
      practitioner: 'Dr. Priya Singh'
    }
  ];

  const recentProgress = [
    { date: '2024-01-15', wellbeing: 7, pain: 4, energy: 8 },
    { date: '2024-01-16', wellbeing: 7.5, pain: 3.5, energy: 8.2 },
    { date: '2024-01-17', wellbeing: 8, pain: 3, energy: 8.5 },
    { date: '2024-01-18', wellbeing: 8.2, pain: 2.5, energy: 8.8 },
    { date: '2024-01-19', wellbeing: 8.5, pain: 2, energy: 9 }
  ];

  const notifications = [
    {
      id: '1',
      type: 'reminder',
      message: 'Remember to fast for 12 hours before tomorrow\'s Abhyanga session',
      time: '2 hours ago'
    },
    {
      id: '2',
      type: 'info',
      message: 'Your wellness report for this week is ready',
      time: '1 day ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Neil!</h1>
        <p className="text-emerald-100">Your wellness journey continues. You have 2 upcoming sessions this week.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Sessions Completed"
          value={12}
          change="+3 this week"
          icon={Activity}
          color="emerald"
        />
        <StatCard
          title="Next Session"
          value="Tomorrow"
          change="10:00 AM"
          icon={Calendar}
          color="blue"
        />
        <StatCard
          title="Wellness Score"
          value="8.5/10"
          change="+0.3 from last week"
          icon={TrendingUp}
          color="purple"
        />
        <StatCard
          title="Treatment Days"
          value={18}
          change="6 days remaining"
          icon={Clock}
          color="amber"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
            <ProgressChart data={recentProgress} />
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Sessions</h3>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <h4 className="font-semibold text-gray-900">{session.therapy}</h4>
                <p className="text-sm text-gray-600 mt-1">{session.practitioner}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {session.date} at {session.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h3>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start p-3 bg-blue-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-gray-900">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
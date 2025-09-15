import React from 'react';
import { Users, Calendar, Activity, AlertTriangle, TrendingUp, Clock } from 'lucide-react';
import { StatCard } from './StatCard';

export const PractitionerDashboard: React.FC = () => {
  const todaySchedule = [
    {
      id: '1',
      patient: 'Neil Oberoi',
      therapy: 'Abhyanga',
      time: '10:00 AM',
      status: 'confirmed'
    },
    {
      id: '2',
      patient: 'Rahul Sharma',
      therapy: 'Shirodhara',
      time: '2:00 PM',
      status: 'pending'
    },
    {
      id: '3',
      patient: 'Anjali Verma',
      therapy: 'Panchakarma Detox',
      time: '4:00 PM',
      status: 'confirmed'
    }
  ];

  const recentPatients = [
    {
      id: '1',
      name: 'Neil Oberoi',
      lastVisit: '2024-01-19',
      progress: 'Excellent',
      nextSession: '2024-01-20'
    },
    {
      id: '2',
      name: 'Rahul Sharma',
      lastVisit: '2024-01-18',
      progress: 'Good',
      nextSession: '2024-01-20'
    }
  ];

  const alerts = [
    {
      id: '1',
      type: 'warning',
      message: 'Patient Neil Oberoi reported mild side effects after last session',
      time: '1 hour ago'
    },
    {
      id: '2',
      type: 'info',
      message: 'New patient consultation scheduled for tomorrow',
      time: '3 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Good morning, Dr. Ayush!</h1>
        <p className="text-blue-100">You have 3 sessions scheduled for today. 2 patients are waiting for feedback.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Patients"
          value={24}
          change="+2 this week"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Today's Sessions"
          value={3}
          change="2 confirmed, 1 pending"
          icon={Calendar}
          color="emerald"
        />
        <StatCard
          title="This Week"
          value={15}
          change="Sessions completed"
          icon={Activity}
          color="purple"
        />
        <StatCard
          title="Patient Satisfaction"
          value="4.8/5"
          change="+0.2 from last month"
          icon={TrendingUp}
          color="amber"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {todaySchedule.map((appointment) => (
              <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                    <p className="text-sm text-gray-600">{appointment.therapy}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {appointment.time}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'confirmed' 
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Patients</h3>
          <div className="space-y-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                <p className="text-sm text-gray-600 mt-1">Progress: {patient.progress}</p>
                <p className="text-xs text-gray-500 mt-2">Last visit: {patient.lastVisit}</p>
                <p className="text-xs text-gray-500">Next: {patient.nextSession}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start p-3 bg-amber-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-gray-900">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
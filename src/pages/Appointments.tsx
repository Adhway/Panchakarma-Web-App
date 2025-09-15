import React, { useState } from 'react';
import { Calendar, Clock, Plus, Filter, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { format, addDays, startOfWeek } from 'date-fns';

interface Appointment {
  id: string;
  therapy: string;
  date: string;
  time: string;
  practitioner: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const appointments: Appointment[] = [
    {
      id: '1',
      therapy: 'Abhyanga',
      date: '2024-01-20',
      time: '10:00 AM',
      practitioner: 'Dr. Ayush Sharma',
      status: 'scheduled'
    },
    {
      id: '2',
      therapy: 'Shirodhara',
      date: '2024-01-22',
      time: '2:00 PM',
      practitioner: 'Dr. Priya Singh',
      status: 'scheduled'
    },
    {
      id: '3',
      therapy: 'Panchakarma Detox',
      date: '2024-01-18',
      time: '11:00 AM',
      practitioner: 'Dr. Ayush Sharma',
      status: 'completed'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-blue-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startOfWeek(selectedDate), i);
    return {
      date,
      day: format(date, 'EEE'),
      number: format(date, 'd')
    };
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">Manage your therapy sessions and schedule</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewMode === 'calendar' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              List
            </button>
          </div>
          
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Book Session
          </button>
        </div>
      </div>

      {viewMode === 'calendar' ? (
        /* Calendar View */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Calendar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {format(selectedDate, 'MMMM yyyy')}
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Week View */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {weekDays.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-2">{day.day}</div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mx-auto text-sm font-medium ${
                    format(day.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}>
                    {day.number}
                  </div>
                </div>
              ))}
            </div>

            {/* Appointments for selected week */}
            <div className="space-y-3">
              {appointments
                .filter(apt => {
                  const aptDate = new Date(apt.date);
                  const weekStart = startOfWeek(selectedDate);
                  const weekEnd = addDays(weekStart, 6);
                  return aptDate >= weekStart && aptDate <= weekEnd;
                })
                .map((appointment) => (
                  <div key={appointment.id} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
                    <div className="flex-shrink-0">
                      {getStatusIcon(appointment.status)}
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900">{appointment.therapy}</h4>
                      <p className="text-sm text-gray-600">{appointment.practitioner}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                      <p className="text-xs text-gray-500">{format(new Date(appointment.date), 'MMM d')}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">All Appointments</h2>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {getStatusIcon(appointment.status)}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{appointment.therapy}</h4>
                      <p className="text-sm text-gray-600">{appointment.practitioner}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{format(new Date(appointment.date), 'MMM d, yyyy')}</p>
                      <p className="text-sm text-gray-600">{appointment.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="mt-3 ml-9">
                    <p className="text-sm text-gray-600">{appointment.notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Next Session</h3>
          <p className="text-emerald-100 mb-4">Abhyanga therapy scheduled for tomorrow at 10:00 AM</p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View Details
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Reschedule</h3>
          <p className="text-blue-100 mb-4">Need to change your appointment? Reschedule easily online</p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Reschedule
          </button>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Preparation</h3>
          <p className="text-amber-100 mb-4">Get ready for your session with our pre-procedure checklist</p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View Checklist
          </button>
        </div>
      </div>
    </div>
  );
};
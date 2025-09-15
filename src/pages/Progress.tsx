import React, { useState } from 'react';
import { TrendingUp, Calendar, Star, MessageSquare, Activity } from 'lucide-react';
import { ProgressChart } from '../components/Charts/ProgressChart';

interface ProgressEntry {
  date: string;
  wellbeing: number;
  pain: number;
  energy: number;
  notes: string;
  symptoms: string[];
  improvements: string[];
}

export const Progress: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('month');
  
  const progressData = [
    { date: '2024-01-15', wellbeing: 6.5, pain: 6, energy: 7 },
    { date: '2024-01-16', wellbeing: 7, pain: 5.5, energy: 7.2 },
    { date: '2024-01-17', wellbeing: 7.5, pain: 5, energy: 7.8 },
    { date: '2024-01-18', wellbeing: 8, pain: 4.5, energy: 8.2 },
    { date: '2024-01-19', wellbeing: 8.2, pain: 4, energy: 8.5 },
    { date: '2024-01-20', wellbeing: 8.5, pain: 3.5, energy: 8.8 },
    { date: '2024-01-21', wellbeing: 8.8, pain: 3, energy: 9 }
  ];

  const recentEntries: ProgressEntry[] = [
    {
      date: '2024-01-21',
      wellbeing: 8.8,
      pain: 3,
      energy: 9,
      notes: 'Feeling much better after the Shirodhara session. Sleep quality has improved significantly.',
      symptoms: ['Mild headache in the morning'],
      improvements: ['Better sleep', 'Increased energy', 'Reduced back pain']
    },
    {
      date: '2024-01-20',
      wellbeing: 8.5,
      pain: 3.5,
      energy: 8.8,
      notes: 'Abhyanga massage was very relaxing. Noticed improvement in joint flexibility.',
      symptoms: [],
      improvements: ['Joint flexibility', 'Relaxation', 'Better mood']
    }
  ];

  const milestones = [
    {
      id: '1',
      title: 'Pain Reduction Goal',
      description: 'Reduce pain level from 8 to 4',
      current: 3,
      target: 4,
      completed: true,
      date: '2024-01-18'
    },
    {
      id: '2',
      title: 'Energy Improvement',
      description: 'Increase energy level to 8.5',
      current: 9,
      target: 8.5,
      completed: true,
      date: '2024-01-20'
    },
    {
      id: '3',
      title: 'Wellbeing Target',
      description: 'Achieve overall wellbeing score of 9',
      current: 8.8,
      target: 9,
      completed: false,
      date: null
    }
  ];

  const therapySummary = [
    { therapy: 'Abhyanga', sessions: 8, avgImprovement: 85 },
    { therapy: 'Shirodhara', sessions: 6, avgImprovement: 92 },
    { therapy: 'Panchakarma Detox', sessions: 4, avgImprovement: 78 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
          <p className="text-gray-600">Monitor your wellness journey and treatment outcomes</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(['week', 'month', 'all'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-sm rounded-md transition-colors capitalize ${
                  selectedPeriod === period ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Overall Progress</h3>
            <TrendingUp className="h-6 w-6 text-emerald-200" />
          </div>
          <div className="text-3xl font-bold mb-2">8.8/10</div>
          <p className="text-emerald-100">+2.3 points improvement</p>
          <div className="mt-4 bg-emerald-400/30 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '88%' }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pain Reduction</h3>
            <Activity className="h-6 w-6 text-blue-200" />
          </div>
          <div className="text-3xl font-bold mb-2">70%</div>
          <p className="text-blue-100">From 8/10 to 3/10</p>
          <div className="mt-4 bg-blue-400/30 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Energy Boost</h3>
            <Star className="h-6 w-6 text-amber-200" />
          </div>
          <div className="text-3xl font-bold mb-2">9.0/10</div>
          <p className="text-amber-100">+2.0 points increase</p>
          <div className="mt-4 bg-amber-400/30 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Progress Trends</h3>
        <ProgressChart data={progressData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Milestones */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recovery Milestones</h3>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                  {milestone.completed ? (
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{milestone.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {milestone.current}/{milestone.target}
                  </span>
                  <span className="text-sm text-gray-500">
                    {milestone.completed && milestone.date ? `Achieved on ${milestone.date}` : ''}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      milestone.completed ? 'bg-emerald-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${Math.min((milestone.current / milestone.target) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Therapy Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Therapy Summary</h3>
          <div className="space-y-4">
            {therapySummary.map((therapy, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{therapy.therapy}</h4>
                <div className="text-sm text-gray-600 mb-3">
                  {therapy.sessions} sessions completed
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Improvement</span>
                  <span className="text-sm font-medium text-emerald-600">{therapy.avgImprovement}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: `${therapy.avgImprovement}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Progress Entries */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Progress Notes</h3>
        <div className="space-y-6">
          {recentEntries.map((entry, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">{entry.date}</h4>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-emerald-600 font-medium">Wellbeing: {entry.wellbeing}/10</span>
                  <span className="text-blue-600 font-medium">Energy: {entry.energy}/10</span>
                  <span className="text-purple-600 font-medium">Pain: {10 - entry.pain}/10</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {entry.improvements.length > 0 && (
                  <div>
                    <h5 className="font-medium text-emerald-700 mb-2">Improvements</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {entry.improvements.map((improvement, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {entry.symptoms.length > 0 && (
                  <div>
                    <h5 className="font-medium text-amber-700 mb-2">Symptoms</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {entry.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {entry.notes && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{entry.notes}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
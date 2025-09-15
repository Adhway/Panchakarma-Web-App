import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: LucideIcon;
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'purple';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType = 'positive',
  icon: Icon,
  color = 'emerald'
}) => {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    emerald: 'bg-emerald-500 text-white',
    amber: 'bg-amber-500 text-white',
    red: 'bg-red-500 text-white',
    purple: 'bg-purple-500 text-white'
  };

  const changeClasses = {
    positive: 'text-emerald-600',
    negative: 'text-red-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm font-medium mt-2 ${changeClasses[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
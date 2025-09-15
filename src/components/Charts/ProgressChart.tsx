import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProgressData {
  date: string;
  wellbeing: number;
  pain: number;
  energy: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formattedData = data.map(item => ({
    ...item,
    date: formatDate(item.date),
    pain: 10 - item.pain // Invert pain scale so lower values show as better
  }));

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="date" 
            className="text-sm"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[0, 10]}
            className="text-sm"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number, name: string) => [
              name === 'pain' ? `${10 - value}/10` : `${value}/10`,
              name === 'pain' ? 'Pain Relief' : name.charAt(0).toUpperCase() + name.slice(1)
            ]}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="wellbeing" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            name="Overall Wellbeing"
            activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="pain" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            name="Pain Relief"
            activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            name="Energy Level"
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
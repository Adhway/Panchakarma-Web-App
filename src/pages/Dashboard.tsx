import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PatientDashboard } from '../components/Dashboard/PatientDashboard';
import { PractitionerDashboard } from '../components/Dashboard/PractitionerDashboard';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return user.role === 'patient' ? <PatientDashboard /> : <PractitionerDashboard />;
};
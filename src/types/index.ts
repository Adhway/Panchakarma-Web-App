export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'patient' | 'practitioner';
  avatar?: string;
}

export interface Patient extends User {
  dateOfBirth: string;
  address: string;
  emergencyContact: string;
  medicalHistory: string[];
  currentConditions: string[];
}

export interface Practitioner extends User {
  specialization: string[];
  experience: number;
  qualification: string;
  licenseNumber: string;
}

export interface TherapySession {
  id: string;
  patientId: string;
  practitionerId: string;
  therapyType: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
  preProcedureChecklist: ChecklistItem[];
  postProcedureChecklist: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  description: string;
  completed: boolean;
  mandatory: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'reminder' | 'alert' | 'info' | 'warning';
  read: boolean;
  createdAt: string;
  scheduledFor?: string;
  channels: ('in-app' | 'email' | 'sms')[];
}

export interface Progress {
  sessionId: string;
  date: string;
  symptoms: string[];
  improvements: string[];
  sideEffects: string[];
  painLevel: number;
  energyLevel: number;
  sleepQuality: number;
  overallWellbeing: number;
  notes: string;
}

export interface TherapyType {
  id: string;
  name: string;
  description: string;
  duration: number;
  preProcedureInstructions: string[];
  postProcedureInstructions: string[];
  contraindications: string[];
}
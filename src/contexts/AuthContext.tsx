import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: 'patient' | 'practitioner') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock authentication - replace with real API calls
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user based on email
    const mockUser: User = {
      id: '1',
      name: email.includes('practitioner') ? 'Dr. Ayush Sharma' : 'Neil Oberoi',
      email,
      phone: '+91 98765 43210',
      role: email.includes('practitioner') ? 'practitioner' : 'patient',
      avatar: `https://images.pexels.com/photos/${email.includes('practitioner') ? '5327580' : '5327921'}/pexels-photo-${email.includes('practitioner') ? '5327580' : '5327921'}.jpeg?auto=compress&cs=tinysrgb&w=150`
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: 'patient' | 'practitioner') => {
    if (user) {
      setUser({
        ...user,
        role,
        name: role === 'practitioner' ? 'Dr. Ayush Sharma' : 'Neil Oberoi',
        avatar: `https://images.pexels.com/photos/${role === 'practitioner' ? '5327580' : '5327921'}/pexels-photo-${role === 'practitioner' ? '5327580' : '5327921'}.jpeg?auto=compress&cs=tinysrgb&w=150`
      });
    }
  };

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem('auth_token');
    if (token) {
      // In real app, validate token with API
      login('patient@example.com', 'password');
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};
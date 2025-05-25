import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

const colors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  warning: 'bg-yellow-500',
};

export const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => (
  <div className={`fixed bottom-4 right-4 px-4 py-2 text-white rounded ${colors[type]} shadow-md`}>
    {message}
  </div>
);

export {}; 

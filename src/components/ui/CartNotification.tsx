import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface CartNotificationProps {
  message: string;
}

export default function CartNotification({ message }: CartNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
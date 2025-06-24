'use client';

import { useEffect, useState } from 'react';

export default function DateDisplay() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="text-gray-600">
      Date: {currentDate}
    </div>
  );
} 
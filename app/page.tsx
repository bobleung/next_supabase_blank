"use client";

import { useEffect, useState } from 'react';

export default function Component() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Page!</h1>
        <p className="text-gray-600">This is a placeholder for your content.</p>
      </div>
    </div>
  );
}
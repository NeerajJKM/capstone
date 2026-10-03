import React from 'react';

export default function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
      <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
      <span className="text-sm font-medium text-gray-500">Loading experience...</span>
    </div>
  );
}

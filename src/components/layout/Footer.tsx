import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Apex Goods Inc. Built with Vite, React & TypeScript.</p>
        <div className="flex gap-6">
          <span className="text-gray-400">Production-Ready Capstone Architecture</span>
        </div>
      </div>
    </footer>
  );
};

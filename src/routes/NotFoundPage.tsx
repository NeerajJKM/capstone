import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center py-24 space-y-4">
      <h1 className="text-6xl font-extrabold text-brand-600">404</h1>
      <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="text-gray-500 max-w-sm mx-auto">
        The catalog link you navigated to might be broken or has moved to another address.
      </p>
      <Link
        to="/products"
        className="inline-block mt-4 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition shadow-md"
      >
        Return to Catalog
      </Link>
    </div>
  );
}

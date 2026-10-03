import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Box } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/products" className="flex items-center gap-2 group">
          <div className="bg-brand-600 text-white p-2 rounded-xl group-hover:bg-brand-700 transition">
            <Box className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Apex Goods</span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? 'text-brand-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`
            }
          >
            Catalog
          </NavLink>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-700 hover:text-brand-600 transition rounded-full hover:bg-gray-100"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

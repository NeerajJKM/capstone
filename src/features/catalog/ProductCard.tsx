import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700">
          {product.category}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-amber-500 text-xs mb-1 font-medium">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>{product.rating}</span>
          <span className="text-gray-400">({product.reviewCount})</span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
              product.inStock
                ? 'bg-brand-50 hover:bg-brand-100 text-brand-700 active:scale-95'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {product.inStock ? 'Add' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

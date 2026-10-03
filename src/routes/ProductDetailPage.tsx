import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS } from '../services/productData';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <Link to="/products" className="text-brand-600 mt-4 inline-block font-semibold">
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-600 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
        {/* Left: Product Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Info & Actions */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center gap-2 text-amber-500 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-700">{product.rating}</span>
              <span className="text-gray-400">({product.reviewCount} customer reviews)</span>
            </div>

            <p className="text-3xl font-black text-gray-900">${product.price.toFixed(2)}</p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 space-y-4 border-t border-gray-100 mt-8">
            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className={`w-full py-4 rounded-xl font-bold transition shadow-lg ${
                product.inStock
                  ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-500/25 active:scale-[0.99]'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Shopping Cart' : 'Currently Unavailable'}
            </button>

            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 pt-2">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-600" /> Fast 2-day delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-600" /> 2-year warranty included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

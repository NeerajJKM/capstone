import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'AcousticPro Wireless ANC Headphones',
    category: 'Audio',
    price: 249.99,
    rating: 4.8,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    description: 'Ultra-low latency studio monitor headphones engineered with hybrid active noise cancellation and 40-hour battery life.',
    inStock: true,
    features: ['Active Noise Cancellation', '40hr Battery', 'Multipoint Bluetooth 5.3', 'Fast USB-C Charging']
  },
  {
    id: 'prod-2',
    name: 'Titanium Chrono Smartwatch Ultra',
    category: 'Wearables',
    price: 399.00,
    rating: 4.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    description: 'Precision aerospace titanium casing with biometric health monitoring, dual-band GPS, and 100m water resistance.',
    inStock: true,
    features: ['Titanium Case', 'Always-On Retina OLED', 'ECG & SpO2 Sensors', '100m Water Resistance']
  },
  {
    id: 'prod-3',
    name: 'Lumix Mechanical 75% Keyboard',
    category: 'Electronics',
    price: 139.50,
    rating: 4.7,
    reviewCount: 188,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    description: 'Custom hot-swappable tactile switches, gasket-mounted sound dampening, and South-facing RGB lighting.',
    inStock: true,
    features: ['Hot-Swappable Switches', 'Gasket Mounted', 'Wireless 2.4GHz + BT', 'PBT Double-shot Keycaps']
  },
  {
    id: 'prod-4',
    name: 'Aerolite Ergonomic Wireless Mouse',
    category: 'Electronics',
    price: 79.99,
    rating: 4.6,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
    description: 'Featherlight 58g chassis with PAW3395 optical sensor, ultra-flexible paracord, and optical switches.',
    inStock: true,
    features: ['58g Lightweight Shell', '26,000 DPI Sensor', 'Optical Switches', '80hr Battery']
  },
  {
    id: 'prod-5',
    name: 'Leather Tech Folio & Organizer',
    category: 'Accessories',
    price: 64.00,
    rating: 4.5,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    description: 'Full-grain vegetable-tanned leather organizer designed to safeguard your tablet, cables, pens, and cards.',
    inStock: false,
    features: ['Full-Grain Leather', 'Magnetic Enclosure', 'Passport & Cable Pockets', 'Scratch-resistant Lining']
  },
  {
    id: 'prod-6',
    name: 'Spatial One Hi-Fi Desktop Speaker',
    category: 'Audio',
    price: 189.00,
    rating: 4.9,
    reviewCount: 220,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    description: 'Room-filling acoustic transparency, custom silk dome tweeters, and room calibration via integrated DSP.',
    inStock: true,
    features: ['60W Peak Output', 'DSP Room Correction', 'Optical & Bluetooth 5.2', 'Handcrafted Walnut Finish']
  }
];

export interface Product {
  id: string;
  name: string;
  category: 'Electronics' | 'Audio' | 'Wearables' | 'Accessories';
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  inStock: boolean;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

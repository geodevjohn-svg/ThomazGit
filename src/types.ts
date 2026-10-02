export type PageType = 'home' | 'nutrition' | 'contact';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  unit: string;
  packSize: string;
  image: string;
  badges: string[];
  features: string[];
  inStock: boolean;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DeliveryDetails {
  customerName: string;
  phone: string;
  address: string;
  city: string;
  neighborhood: string;
  notes: string;
  deliveryOption: 'standard' | 'priority' | 'pickup';
  paymentMethod: 'pix' | 'cartao' | 'dinheiro';
}

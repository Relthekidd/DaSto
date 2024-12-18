import { CartItem } from './cart';

export interface OrderDetails {
  orderId: string;
  customer: {
    name: string;
    address: string;
    phone: string;
    idPhotoUrl?: string;
  };
  items: CartItem[];
  total: number;
  deliveryFee: number;
  deliveryInstructions?: string;
  specialRequests?: string;
  timestamp: string;
}
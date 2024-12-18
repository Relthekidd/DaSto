import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderDetails {
  orderId: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  items: OrderItem[];
  total: number;
  deliveryFee: number;
  timestamp: string;
}

export default function OrderSuccess() {
  const location = useLocation();
  const { orderDetails } = location.state as { orderDetails: OrderDetails };

  const { orderId, customerName, customerPhone, deliveryAddress, items, total, deliveryFee, timestamp } = orderDetails;

  // Format the order items list
  const itemsList = items
    .map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-xl mb-4">
          Order Number: <span className="font-semibold">{orderId}</span>
        </p>
        <p className="text-xl mb-4">
          Customer: <span className="font-semibold">{customerName}</span>
        </p>
        <p className="text-xl mb-4">
          Phone: <span className="font-semibold">{customerPhone}</span>
        </p>
        <p className="text-xl mb-4">
          Delivery Address: <span className="font-semibold">{deliveryAddress}</span>
        </p>
        <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
          <Phone className="w-5 h-5" />
          <span>Expect a call from us shortly!</span>
        </div>
        <p className="text-gray-600">
          We'll call you within the next 15-30 minutes to confirm your order and coordinate delivery details.
          Please keep your phone handy.
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">
          You'll also receive an order confirmation email with your order details.
        </p>
        <div className="text-left mb-4">
          <h3 className="font-semibold text-lg">Order Items:</h3>
          <pre className="text-sm whitespace-pre-wrap text-gray-700">{itemsList}</pre>
        </div>
        <p className="text-lg text-gray-600">
          Total: <span className="font-semibold">${(total + deliveryFee).toFixed(2)}</span>
        </p>
        <p className="text-gray-600">
          Order placed at: <span className="font-semibold">{new Date(timestamp).toLocaleString()}</span>
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
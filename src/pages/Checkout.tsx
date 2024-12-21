import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { sendOrderNotification } from '../services/orderNotification';
import { OrderDetails } from '../types/order';

export default function Checkout() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    idPhoto: null as File | null,
    deliveryInstructions: '',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, idPhoto: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const fakeIdPhotoUrl = 'https://example.com/uploads/id-photo.jpg';

      const orderDetails: OrderDetails = {
        orderId: `ORD-${Date.now()}`,
        customer: {
          name: formData.name,
          address: formData.address,
          phone: formData.phone,
          idPhotoUrl: fakeIdPhotoUrl,
        },
        items: state.items,
        total: state.total,
        deliveryFee: 10,
        deliveryInstructions: formData.deliveryInstructions,
        specialRequests: formData.specialRequests,
        timestamp: new Date().toISOString(),
      };

      const notificationSent = await sendOrderNotification(orderDetails);

      if (!notificationSent) {
        throw new Error('Failed to send order notification');
      }

      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-success', { 
        state: { orderDetails } 
      });
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          {state.items.map(item => (
            <div key={`${item.id}-${item.selectedWeight.weight}`} className="flex justify-between mb-2">
              <span>{item.name} ({item.selectedWeight.weight}) x {item.quantity}</span>
              <span>${(item.selectedWeight.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>${(state.total + 10).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <textarea
            id="address"
            required
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="deliveryInstructions" className="block text-sm font-medium text-gray-700">
            Delivery Instructions
          </label>
          <textarea
            id="deliveryInstructions"
            rows={3}
            placeholder="E.g., Gate code, parking instructions, or preferred entrance"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={formData.deliveryInstructions}
            onChange={(e) => setFormData(prev => ({ ...prev, deliveryInstructions: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            rows={2}
            placeholder="Any special requests or notes for your order"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={formData.specialRequests}
            onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="idPhoto" className="block text-sm font-medium text-gray-700">
            Photo ID Verification
          </label>
          <p className="text-sm text-gray-500 mb-2">
            Please upload a clear photo of your face holding your ID next to it
          </p>
          <input
            type="file"
            id="idPhoto"
            accept="image/*"
            required
            className="mt-1 block w-full"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-green-600 text-white py-3 rounded-md transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}
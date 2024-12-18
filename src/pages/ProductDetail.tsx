import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../constants/products';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useNotification } from '../hooks/useNotification';
import CartNotification from '../components/ui/CartNotification';
import ProductQuantitySelector from '../components/products/ProductQuantitySelector';
import { WeightOption } from '../types/product';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { notification, showNotification } = useNotification();
  const [selectedWeight, setSelectedWeight] = useState<WeightOption | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  // Set initial selected weight if not set
  if (!selectedWeight && product.weightOptions.length > 0) {
    setSelectedWeight(product.weightOptions[0]);
  }

  const handleAddToCart = () => {
    if (!selectedWeight) return;

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: {
          ...product,
          selectedWeight
        },
        quantity: 1
      }
    });
    showNotification(`Added ${selectedWeight.weight} of ${product.name} to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-gray-600 hover:text-green-600 flex items-center"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain rounded-lg"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <button
              onClick={() => setCurrentImageIndex(prev => Math.max(0, prev - 1))}
              className="p-2 bg-white/80 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <button
              onClick={() => setCurrentImageIndex(prev => prev + 1)}
              className="p-2 bg-white/80 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {product.effects && (
            <div className="space-y-2">
              <h3 className="font-semibold">Effects</h3>
              <div className="flex flex-wrap gap-2">
                {product.effects.map(effect => (
                  <span key={effect} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {effect}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {selectedWeight && (
              <ProductQuantitySelector
                weightOptions={product.weightOptions}
                selectedWeight={selectedWeight}
                onWeightChange={setSelectedWeight}
              />
            )}

            <button
              onClick={handleAddToCart}
              disabled={!selectedWeight}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart - ${selectedWeight?.price.toFixed(2) || '0.00'}</span>
            </button>
          </div>
        </div>
      </div>
      {notification && <CartNotification message={notification} />}
    </div>
  );
}

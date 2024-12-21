import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';

type ProductCardProps = Product;

export default function ProductCard({ id, name, type, weightOptions, thc, image }: ProductCardProps) {
  // Always use the smallest weight option (3.5g) as the starting price
  const basePrice = weightOptions[0]?.price;

  return (
    <Link 
      to={`/product/${id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            className="p-2 bg-white/90 rounded-full hover:bg-green-500 hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{type}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-green-600 font-bold">
            {basePrice ? `Starting at $${basePrice.toFixed(2)}` : 'Price varies'}
          </span>
          <span className="text-sm text-gray-500">THC: {thc}</span>
        </div>
      </div>
    </Link>
  );
}
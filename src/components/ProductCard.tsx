import React from 'react';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  name: string;
  type: string;
  price: number;
  thc: string;
  image: string;
}

export default function ProductCard({ name, type, price, thc, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-green-500 hover:text-white transition-colors">
          <Eye className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{type}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-green-600 font-bold">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">THC: {thc}</span>
        </div>
        <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
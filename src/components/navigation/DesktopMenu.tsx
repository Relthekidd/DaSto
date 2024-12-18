import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { menuItems } from '../../constants/menu';

export default function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={`/${item.name.toLowerCase()}`}
          className="text-gray-700 hover:text-green-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
      <div className="flex items-center space-x-4">
        <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer" />
        <User className="w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer" />
      </div>
    </div>
  );
}
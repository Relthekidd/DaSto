import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const menuItems = [
  { name: 'Flower', href: '#flower' },
  { name: 'Carts', href: '#carts' },
  { name: 'Edibles', href: '#edibles' },
  { name: 'Pre-rolls', href: '#pre-rolls' },
  { name: 'Concentrates', href: '#concentrates' },
  { name: 'Accessories', href: '#accessories' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">Da Sto'</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer" />
              <User className="w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-green-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
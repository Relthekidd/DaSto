import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartIcon from './CartIcon';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import StoreLogo from './StoreLogo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <StoreLogo />
          </div>

          <DesktopMenu />

          <div className="flex items-center space-x-4">
            <CartIcon itemCount={state.items.length} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
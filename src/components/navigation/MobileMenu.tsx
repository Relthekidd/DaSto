import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate
import { menuItems } from '../../constants/menu';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const navigate = useNavigate(); // Initialize navigate hook

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="block px-3 py-2 text-gray-700 hover:text-green-600 text-left w-full"
            onClick={() => {
              setIsOpen(false); // Close the dropdown
              navigate(`/${item.name.toLowerCase()}`); // Navigate to the page
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

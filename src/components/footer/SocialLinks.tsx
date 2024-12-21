import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="mt-4 flex space-x-4">
      <Instagram className="w-5 h-5 cursor-pointer hover:text-green-500" />
      <Facebook className="w-5 h-5 cursor-pointer hover:text-green-500" />
      <Twitter className="w-5 h-5 cursor-pointer hover:text-green-500" />
    </div>
  );
}
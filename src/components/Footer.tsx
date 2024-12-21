import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Da Sto'</h3>
            <p className="text-sm">Premium cannabis delivery service.</p>
            <div className="mt-4 flex space-x-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-500" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-500" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-500" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@greenrush.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <p>Monday - Sunday</p>
            <p>11:00 AM - 9:00 PM</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© 2024 Dimebags & Co. All rights reserved.</p>
          <p className="mt-2">
            Must be 21 or older with valid ID for purchase and delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
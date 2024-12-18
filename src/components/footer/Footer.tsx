import React from 'react';
import { Mail, Phone } from 'lucide-react';
import SocialLinks from './SocialLinks';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Da Sto'</h3>
            <p className="text-sm">Premium cannabis delivery service.</p>
            <SocialLinks />
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
            <NewsletterForm />
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
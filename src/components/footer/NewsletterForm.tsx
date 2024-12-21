import React from 'react';

export default function NewsletterForm() {
  return (
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
  );
}
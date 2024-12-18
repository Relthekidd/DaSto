import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {/* CHANGE IMAGE HERE */}
        <img
          src="https://shopharborside.com/wp-content/uploads/2023/11/indoor-cannabis-farm-greenhouse-1024x576.jpg"  // Replace with your new image URL
          alt="Cannabis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
        {/* CENTER TEXT */}
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
           Da Sto'
            <br />
            Who got the gas? We do!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the finest selection of cannabis products with our fast,
            discreet delivery service.
          </p>
        </div>
      </div>
    </div>
  );
}

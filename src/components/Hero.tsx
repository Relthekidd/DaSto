import React from 'react';
import { branding } from '../config/branding';

export default function Hero() {
  const { heroLogo, storeName } = branding;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://shopharborside.com/wp-content/uploads/2023/11/indoor-cannabis-farm-greenhouse-1024x576.jpg"
          alt="Cannabis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-2xl text-center">
          {heroLogo.url ? (
            <img
              src={heroLogo.url}
              alt={heroLogo.alt}
              width={heroLogo.width}
              height={heroLogo.height}
              className="mx-auto mb-6"
            />
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {storeName}
            </h1>
          )}
          <p className="text-xl text-gray-200 mb-8">
            Experience the finest selection of cannabis products with our fast,
            discreet delivery service.
          </p>
        </div>
      </div>
    </div>
  );
}
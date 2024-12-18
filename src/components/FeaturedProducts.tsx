import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    name: "Blue Dream",
    type: "Hybrid Flower",
    price: 45.00,
    thc: "24%",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80"
  },
  {
    name: "Sour Diesel",
    type: "Sativa Flower",
    price: 50.00,
    thc: "26%",
    image: "https://images.unsplash.com/photo-1603909223358-9c6f495f67c9?auto=format&fit=crop&q=80"
  },
  {
    name: "Purple Kush",
    type: "Indica Flower",
    price: 48.00,
    thc: "22%",
    image: "https://images.unsplash.com/photo-1603909223595-7dee2a8c7162?auto=format&fit=crop&q=80"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
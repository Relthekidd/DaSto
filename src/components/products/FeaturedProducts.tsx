import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../constants/products';  // Importing the products array

export default function FeaturedProducts() {
  // Manually select the featured products
  const featuredProducts = products.filter(product =>
    product.name === "Zoap" ||
    product.name === "Dosi Dos" ||
    product.name === "Double Queen"
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

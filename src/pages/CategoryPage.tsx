import React from 'react';
import { products } from '../constants/products';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../types/product';
import CartNotification from '../components/ui/CartNotification';
import { useNotification } from '../hooks/useNotification';

interface CategoryPageProps {
  category: Product['category'];
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const { notification } = useNotification();
  const categoryProducts = products.filter(product => product.category === category);
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{categoryTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {categoryProducts.length === 0 && (
        <p className="text-center text-gray-500">No products available in this category yet.</p>
      )}
      {notification && <CartNotification message={notification} />}
    </div>
  );
}
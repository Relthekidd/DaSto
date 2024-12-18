import React, { useState } from 'react';
import { Product, WeightOption } from '../../types/product';

const INITIAL_WEIGHT_OPTIONS: WeightOption[] = [
  { weight: '3.5g', price: 0 },
  { weight: '7g', price: 0 },
  { weight: '14g', price: 0 },
  { weight: '28g', price: 0 },
];

export default function ProductManager() {
  const [product, setProduct] = useState<Partial<Product>>({
    weightOptions: INITIAL_WEIGHT_OPTIONS,
    category: 'flower',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the product data to your backend
    console.log('New product:', product);
  };

  const handleWeightOptionChange = (index: number, price: number) => {
    const newWeightOptions = [...(product.weightOptions || [])];
    newWeightOptions[index] = {
      ...newWeightOptions[index],
      price,
    };
    setProduct({ ...product, weightOptions: newWeightOptions });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Manager</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.name || ''}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value as Product['category'] })}
          >
            <option value="flower">Flower</option>
            <option value="carts">Carts</option>
            <option value="edibles">Edibles</option>
            <option value="pre-rolls">Pre-rolls</option>
            <option value="concentrates">Concentrates</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Type</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.type || ''}
            onChange={(e) => setProduct({ ...product, type: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">THC Content</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.thc || ''}
            onChange={(e) => setProduct({ ...product, thc: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CBD Content (optional)</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.cbd || ''}
            onChange={(e) => setProduct({ ...product, cbd: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.image || ''}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={product.description || ''}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Weight Options</label>
          <div className="space-y-2">
            {INITIAL_WEIGHT_OPTIONS.map((option, index) => (
              <div key={option.weight} className="flex items-center gap-4">
                <span className="w-20">{option.weight}</span>
                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    className="block w-32 rounded-md border-gray-300 shadow-sm"
                    value={product.weightOptions?.[index].price || ''}
                    onChange={(e) => handleWeightOptionChange(index, parseFloat(e.target.value))}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
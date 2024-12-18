import React from 'react';
import { WeightOption } from '../../types/product';

interface ProductQuantitySelectorProps {
  weightOptions: WeightOption[];
  selectedWeight: WeightOption;
  onWeightChange: (weight: WeightOption) => void;
}

export default function ProductQuantitySelector({
  weightOptions,
  selectedWeight,
  onWeightChange,
}: ProductQuantitySelectorProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">Select Quantity</label>
      <div className="grid grid-cols-2 gap-2">
        {weightOptions.map((option) => (
          <button
            key={option.weight}
            onClick={() => onWeightChange(option)}
            className={`px-4 py-2 rounded-md border ${
              selectedWeight.weight === option.weight
                ? 'border-green-600 bg-green-50 text-green-600'
                : 'border-gray-300 hover:border-green-600'
            }`}
          >
            <div className="text-sm font-medium">{option.weight}</div>
            <div className="text-lg font-bold">${option.price.toFixed(2)}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
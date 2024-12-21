import React from 'react';
import { Truck, Shield, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery within our service area'
  },
  {
    icon: Shield,
    title: 'Lab Tested',
    description: 'All products verified for quality and safety'
  },
  {
    icon: Leaf,
    title: 'Premium Selection',
    description: 'Curated collection of top-tier products'
  }
];

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Da Sto'</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality cannabis products with
            exceptional service and convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
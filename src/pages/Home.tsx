import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/products/FeaturedProducts';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
    </>
  );
}
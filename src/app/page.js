// src/app/page.js
"use client"; // Crucial. Necesario para usar useContext
import Header from "../components/Header";
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

import ProductCard from '../components/ProductCard';

const translations = {
  en: {
    title: "Generic Store xd",
    description: "Welcome to our fictional store!",
  },
  es: {
    title: "Tienda generica xd",
    description: "¡Bienvenido a nuestra tienda ficticia!",
  },
  de: {
    title: "Generischer Laden xd",
    description: "Willkommen in unserem fiktiven Laden!",
  },
  fr: {
    title: "Magasin générique xd",
    description: "Bienvenue dans notre magasin fictif !",
  },
};

export default function Home() {
  const { language } = useContext(LanguageContext); // Accede al lenguaje seleccionado usando useContext
  const handleAddToCart = (productName) => {alert(`${productName} added to cart!`)};

  const sampleProduct = { // Datos de ejemplo para un producto
    imageUrl: 'https://via.placeholder.com/150',
    name: 'Sample Product',
    price: 29.99,
  };

  return (
    <div className="min-h-screen bg-background text-white relative">
      {/* Title */}
      <div className="p-8 sm:p-20">
        <header className="text-center text-4xl font-bold mb-8">
          {translations[language].title} {/* Titulo basado en lenguaje (placeholder) */}
        </header>
        <p className="text-center text-lg">
          {translations[language].description} {/* Descripción basado en lenguaje (placeholder) */}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '0 130px', margin: '0 auto'}}>
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      <ProductCard
        imageUrl={sampleProduct.imageUrl}
        name={sampleProduct.name}
        price={sampleProduct.price}
        onAddToCart={() => handleAddToCart(sampleProduct.name)}
      />
      
      {/* Add more ProductCard components as needed */}
      </div>
    </div>
  );
}
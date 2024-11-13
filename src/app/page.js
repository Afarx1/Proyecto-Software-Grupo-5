// src/app/page.js
"use client"; // Crucial. Necesario para usar useContext
import Header from "../components/Header";
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

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
    </div>
  );
}


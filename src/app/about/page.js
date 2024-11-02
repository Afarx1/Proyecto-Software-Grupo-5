"use client"; // para use context
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
  en: {
    title: "About",
    description: "Information about our fictional company 'Generic inc'.",
  },
  es: {
    title: "Acerca de",
    description: "Poner información acerca de nuestra empresa ficticia 'Generic inc'.",
  },
};

export default function About() {
  const { language } = useContext(LanguageContext); // Para acceder al lenguaje seleccionado (localstorage)

  return (
    <div className="min-h-screen bg-background text-white p-8 sm:p-20">
      <h2 className="text-center text-3xl font-bold mb-4">
        {translations[language].title} {/* Use the title based on selected language */}
      </h2>
      <p className="text-center text-lg">
        {translations[language].description} {/* Use the description based on selected language */}
      </p>
    </div>
  );
}

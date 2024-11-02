"use client"; // This allows the component to use hooks like useContext
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
  en: {
    description: "How to get in touch with our fictional company 'Generic inc'.",
  },
  es: {
    description: "Cómo ponerse en contacto con nuestra empresa ficticia 'Generic inc'.",
  },
};

export default function Contact() {
  const { language } = useContext(LanguageContext); // Access current language

  return (
    <div className="min-h-screen bg-background text-white p-8 sm:p-20">
      <h2 className="text-2xl font-bold mb-2">
        {language === "en" ? "Contact" : "Contacto"}
      </h2>
      <p className="text-lg">
        {translations[language].description} {/* Render description based on selected language */}
      </p>
    </div>
  );
}

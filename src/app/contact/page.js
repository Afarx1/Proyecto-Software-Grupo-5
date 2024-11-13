"use client"; // This allows the component to use hooks like useContext
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
  en: {
    contact: "Contact",
    description: "How to get in touch with our fictional company 'Generic inc'.",
  },
  es: {
    contact: "Contacto",
    description: "Cómo ponerse en contacto con nuestra empresa ficticia 'Generic inc'.",
  },
  de: {
    contact: "Kontakt",
    description: "Wie man mit unserer fiktiven Firma 'Generic inc' in Kontakt tritt.",
  },
  fr: {
    contact: "Contact",
    description: "Comment entrer en contact avec notre entreprise fictive 'Generic inc'.",
  },
};

export default function Contact() {
  const { language } = useContext(LanguageContext); // Access current language

  return (
    <div className="min-h-screen bg-background text-white p-8 sm:p-20">
      <h2 className="text-2xl font-bold mb-2">
        {translations[language].contact}
      </h2>
      <p className="text-lg">
        {translations[language].description} {/* Render description based on selected language */}
      </p>
    </div>
  );
}

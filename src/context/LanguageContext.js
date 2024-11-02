"use client";  // Crucial para que funcione el multilenguaje
import React, { createContext, useState, useEffect } from 'react';

// Crear el LanguageContext
export const LanguageContext = createContext();

// LanguageProvider es el componente que debe estar en todas las paginas
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es"); // Español como lenguaje por default

  useEffect(() => {
    // Usa localstorage para cargar el lenguaje de preferencia, con español como default si no existe alguna preferencia guardada
    const savedLanguage = localStorage.getItem("language") || "es";
    setLanguage(savedLanguage);
  }, []);

  // Guarda el lenguaje preferido al localstorage
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

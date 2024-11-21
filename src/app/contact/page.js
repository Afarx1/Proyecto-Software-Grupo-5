"use client"; 
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
  en: {
    contact: "Contact",
    description: "How to get in touch with our fictional company 'Generic inc'.",
    emailAndNumberTitle: "Contact Email and Number",
    email: "tienda@ficticia.com",
    phone: "111-222-333-44",
    shopLocationTitle: "Shop Location",
    shopAddress: "Calle Común 123",
    openingHoursTitle: "Opening Hours",
    openingHours: "Mondays to Fridays: 7am-10pm",
  },
  es: {
    contact: "Contacto",
    description: "Cómo ponerse en contacto con nuestra empresa ficticia 'Generic inc'.",
    emailAndNumberTitle: "Correo y Número de Contacto",
    email: "tienda@ficticia.com",
    phone: "111-222-333-44",
    shopLocationTitle: "Ubicación de la Tienda",
    shopAddress: "Calle Común 123",
    openingHoursTitle: "Horario de Atención",
    openingHours: "Lunes a Viernes: 7am-10pm",
  },
  de: {
    contact: "Kontakt",
    description: "Wie man mit unserer fiktiven Firma 'Generic inc' in Kontakt tritt.",
    emailAndNumberTitle: "Kontakt E-Mail und Nummer",
    email: "tienda@ficticia.com",
    phone: "111-222-333-44",
    shopLocationTitle: "Geschäftsadresse",
    shopAddress: "Calle Común 123",
    openingHoursTitle: "Öffnungszeiten",
    openingHours: "Montag bis Freitag: 7 Uhr bis 22 Uhr",
  },
  fr: {
    contact: "Contact",
    description: "Comment entrer en contact avec notre entreprise fictive 'Generic inc'.",
    emailAndNumberTitle: "E-mail et numéro de contact",
    email: "tienda@ficticia.com",
    phone: "111-222-333-44",
    shopLocationTitle: "Adresse du magasin",
    shopAddress: "Calle Común 123",
    openingHoursTitle: "Horaires d'ouverture",
    openingHours: "Lundi à vendredi: 7h-22h",
  },
};

export default function Contact() {
  const { language } = useContext(LanguageContext); // Accede al lenguaje escogido en el local storage

  const content = translations[language] || translations.es; // Español como default

  return (
    <div className="min-h-screen bg-background text-white p-8 sm:p-20">
      {/* Contact Title */}
      <h2 className="text-2xl font-bold mb-4">{content.contact}</h2>

      {/* Description */}
      <p className="text-lg mb-8">{content.description}</p>

      {/* Contact Email and Number */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{content.emailAndNumberTitle}</h3>
        <p>Email: <a href={`mailto:${content.email}`} className="underline">{content.email}</a></p>
        <p>Phone: <span>{content.phone}</span></p>
      </div>

      {/* Shop Location */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{content.shopLocationTitle}</h3>
        <p>{content.shopAddress}</p>
      </div>

      {/* Opening Hours */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{content.openingHoursTitle}</h3>
        <p>{content.openingHours}</p>
      </div>
    </div>
  );
}

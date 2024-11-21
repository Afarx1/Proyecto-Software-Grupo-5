"use client";
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import capturaImage from './Captura.png';

const translations = {
  en: {
    title: "About",
    description: "Our dedicated team of three is committed to creating the best fictional store experience. At Generic Inc., we believe in quality, innovation, and customer satisfaction. Our mission is to bring a seamless shopping experience to all who visit.",
    extendedDescription: "With our passion for excellence and commitment to value, we strive to build a brand that represents both trust and creativity in the market. Our team is always ready to innovate and improve, ensuring that Generic Inc. remains a top choice for fictional shopping.",
  },
  es: {
    title: "Acerca de",
    description: "Nuestro dedicado equipo de tres personas está comprometido a crear la mejor experiencia de tienda ficticia. En Generic Inc., creemos en la calidad, la innovación y la satisfacción del cliente. Nuestra misión es brindar una experiencia de compra perfecta para todos los visitantes.",
    extendedDescription: "Con nuestra pasión por la excelencia y el compromiso con el valor, nos esforzamos por construir una marca que represente tanto confianza como creatividad en el mercado. Nuestro equipo siempre está listo para innovar y mejorar, asegurando que Generic Inc. siga siendo una opción preferida para compras ficticias.",
  },
  de: {
    title: "Über uns",
    description: "Unser engagiertes Team von drei Personen setzt sich dafür ein, das beste fiktive Einkaufserlebnis zu schaffen. Bei Generic Inc. glauben wir an Qualität, Innovation und Kundenzufriedenheit. Unsere Mission ist es, allen Besuchern ein nahtloses Einkaufserlebnis zu bieten.",
    extendedDescription: "Mit unserer Leidenschaft für Exzellenz und unserem Engagement für Wert streben wir danach, eine Marke aufzubauen, die sowohl Vertrauen als auch Kreativität auf dem Markt repräsentiert. Unser Team ist immer bereit zu innovieren und sich zu verbessern, um sicherzustellen, dass Generic Inc. weiterhin eine Top-Wahl für fiktives Einkaufen bleibt.",
  },
  fr: {
    title: "À propos",
    description: "Notre équipe dédiée de trois personnes est déterminée à offrir la meilleure expérience de magasin fictif. Chez Generic Inc., nous croyons en la qualité, l'innovation et la satisfaction du client. Notre mission est d'offrir une expérience d'achat fluide à tous ceux qui nous visitent.",
    extendedDescription: "Avec notre passion pour l'excellence et notre engagement envers la valeur, nous nous efforçons de créer une marque qui représente à la fois la confiance et la créativité sur le marché. Notre équipe est toujours prête à innover et à améliorer, garantissant que Generic Inc. reste un choix privilégié pour les achats fictifs.",
  },
};

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-background text-white p-8 sm:p-20">
      <h2 className="text-center text-3xl font-bold mb-4">
        {translations[language].title}
      </h2>
      <p className="text-left text-lg mb-4">
        {translations[language].description}
      </p>
      <p className="text-left text-lg mb-8 whitespace-pre-line">
        {translations[language].extendedDescription}
      </p>
      <div className="flex justify-center">
        <Image
          src={capturaImage}
          alt="About Us"
          width={300}
          height={100}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

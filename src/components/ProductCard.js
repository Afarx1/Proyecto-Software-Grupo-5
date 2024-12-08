'use client';

import React, { useContext } from 'react';
import styles from './ProductCard.module.css';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
  en: {
    add: "Add to Cart",
  },
  es: {
    add: "Agregar al carrito",
  },
  de: {
    add: "In den Warenkorb",
  },
  fr: {
    add: "Ajouter au panier",
  },
};

const ProductCard = ({ imageUrl, name, price, onAddToCart }) => {
  const { language } = useContext(LanguageContext); // esto es para acceder al lenguaje seleccionado

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productPrice}>${price.toFixed(2)}</p>
      <button
        className={styles.addToCartButton}
        onClick={onAddToCart} // prop en home
      >
        {translations[language].add} {/* Boton cambia según lenguaje */}
      </button>
    </div>
  );
};

export default ProductCard;

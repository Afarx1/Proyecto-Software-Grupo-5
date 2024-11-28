'use client'

import React from 'react';
import styles from './ProductCard.module.css';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useCart } from '@/context/CartContext'

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

const ProductCard = ({ id, imageUrl, name, price, onAddToCart }) => {

  const { addToCart } = useCart()
  const { language, changeLanguage } = useContext(LanguageContext); // Access global language state

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageUrl })
    alert(`${productName} added to cart!`)
  }

  function Tocart(){

    handleAddToCart();
    onAddToCart();
  }

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productPrice}>${price.toFixed(2)}</p>
        <button className={styles.addToCartButton}
          onClick={Tocart}
        >
        {translations[language].add}
        </button>
    </div>
  )
}

export default ProductCard;
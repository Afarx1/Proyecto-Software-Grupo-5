'use client'

import React from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext'
import { useTranslation } from 'next-i18next'  

const ProductCard = ({ id, imageUrl, name, price, onAddToCart }) => {
  

  const { addToCart } = useCart()
  const { t } = useTranslation('common')

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
         Comprar 
        </button>
    </div>
  )
}

export default ProductCard;
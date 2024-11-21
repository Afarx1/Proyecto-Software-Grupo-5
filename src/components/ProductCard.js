import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ imageUrl, name, price, onAddToCart }) => {
  
  const handleAddToCart = (productName) => {alert(`${productName} added to cart!`)};

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productPrice}>${price.toFixed(2)}</p>
      <button className={styles.addToCartButton} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
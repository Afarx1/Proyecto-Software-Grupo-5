"use client"; // Crucial. Necesario para usar useContext
import React, { useContext, useState } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const translations = {
  en: {
    title: "Generic Store xd",
    description: "Welcome to our fictional store!",
    cartTitle: "Your Cart",
    viewCart: "View Cart",
    close: "Close",
    emptyCart: "Your cart is empty.",
    total: "Total",
    remove: "Remove",
    pay: "Pay",
    paidMessage: "You've paid a total of",
  },
  es: {
    title: "Tienda generica xd",
    description: "¡Bienvenido a nuestra tienda ficticia!",
    cartTitle: "Tu Carrito",
    viewCart: "Ver Carrito",
    close: "Cerrar",
    emptyCart: "Tu carrito está vacío.",
    total: "Total",
    remove: "Eliminar",
    pay: "Pagar",
    paidMessage: "Has pagado un total de",
  },
  de: {
    title: "Generischer Laden xd",
    description: "Willkommen in unserem fiktiven Laden!",
    cartTitle: "Ihr Warenkorb",
    viewCart: "Warenkorb anzeigen",
    close: "Schließen",
    emptyCart: "Ihr Warenkorb ist leer.",
    total: "Gesamt",
    remove: "Entfernen",
    pay: "Bezahlen",
    paidMessage: "Sie haben einen Gesamtbetrag von",
  },
  fr: {
    title: "Magasin générique xd",
    description: "Bienvenue dans notre magasin fictif !",
    cartTitle: "Votre Panier",
    viewCart: "Voir le Panier",
    close: "Fermer",
    emptyCart: "Votre panier est vide.",
    total: "Total",
    remove: "Retirer",
    pay: "Payer",
    paidMessage: "Vous avez payé un total de",
  },
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handlePay = () => {
    const total = calculateTotal();
    alert(`${content.paidMessage} $${total}`);
    setCart([]); // esto es para borrar lo que tiene el carro
    toggleCart(); // cierra el pop-up del carrito
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const content = translations[language] || translations.es;

  return (
    <div className="min-h-screen bg-background text-white relative">
      {/* Title */}
      <div className="p-8 sm:p-20">
        <header className="text-center text-4xl font-bold mb-8">
          {content.title}
        </header>
        <p className="text-center text-lg">{content.description}</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          padding: '0 130px',
          margin: '0 auto',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>

      {/* Boton para ver el carro */}
      <button
        onClick={toggleCart}
        className="fixed bottom-16 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg"
      >
        {content.viewCart}
      </button>

      {/* pop-up del carro */}
      {isCartVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleCart}></div>
          <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-6 shadow-lg w-80 z-50">
            <h2 className="text-lg font-bold mb-4">{content.cartTitle}</h2>
            {cart.length > 0 ? (
              <>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between border-b py-2">
                      <div>
                        <span>{item.name}</span>
                        <span className="ml-2">${item.price.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="text-red-600 hover:underline"
                      >
                        {content.remove}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-lg font-bold">
                  {content.total}: ${calculateTotal()}
                </div>
                <button
                  onClick={handlePay}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md w-full"
                >
                  {content.pay}
                </button>
              </>
            ) : (
              <p>{content.emptyCart}</p>
            )}
            <button
              onClick={toggleCart}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md w-full"
            >
              {content.close}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

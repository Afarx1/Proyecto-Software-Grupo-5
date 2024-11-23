// components/Header.js
"use client";
import Link from 'next/link';
import styles from './Header.module.css';
import { useContext, useState } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext'

const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    register: "Register",
    login: "Login",
    lang: "Language",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    register: "Registrarse",
    login: "Iniciar sesión",
    lang: "Idioma",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt",
    register: "Registrieren",
    login: "Anmelden",
    lang: "Sprache",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    register: "S'inscrire",
    login: "Se connecter",
    lang: "Langue",
  },
};

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext); // Access global language state

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/" className={styles.link}>{translations[language].home}</Link>
          </li>
          <li style={liStyle}>
            <Link href="/about" className={styles.link}>{translations[language].about}</Link>
          </li>
          <li style={liStyle}>
            <Link href="/contact" className={styles.link}>{translations[language].contact}</Link>
          </li>
          <li style={{ ...liStyle, display: 'flex', alignItems: 'center' }}>
            <Link href="register" className={styles.link}>{translations[language].register}</Link>
            <span className={styles.separator}>|</span>
            <Link href="/login" className={styles.link}>{translations[language].login}</Link>
          </li>
          <li style={{ ...liStyle, position: 'relative', cursor: 'pointer' }} onClick={toggleDropdown}>
            <span className={styles.link}>{translations[language].lang}</span>
            {dropdownVisible && (
              <ul style={dropdownMenuStyle}>
                <li style={dropdownItemStyle} onClick={() => changeLanguage("en")}>English</li>
                <li style={dropdownItemStyle} onClick={() => changeLanguage("es")}>Español</li>
                <li style={dropdownItemStyle} onClick={() => changeLanguage("de")}>Deutsch</li>
                <li style={dropdownItemStyle} onClick={() => changeLanguage("fr")}>Français</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}


// Estructura basica de las paginas de tal forma que puedan funcionar
const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

const navStyle = {
  margin: '0 auto',
  maxWidth: '960px',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
};

const liStyle = {
  margin: '0 10px',
};

const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1,
};

const dropdownItemStyle = {
  padding: '8px 0',
  textAlign: 'right',
};
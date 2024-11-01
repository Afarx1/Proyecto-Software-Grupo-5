// components/Header.js
"use client";
import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li style={liStyle}>
            <Link href="/about" className={styles.link}>About</Link>
          </li>
          <li style={liStyle}>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </li>
          <li style={{ ...liStyle, display: 'flex', alignItems: 'center' }}>
            <Link href="register" className={styles.link}>Register</Link>
            <span className={styles.separator}>|</span>
            <Link href="/login" className={styles.link}>Login</Link>
          </li>
          <li style={{ ...liStyle, position: 'relative', cursor: 'pointer' }} onClick={toggleDropdown}>
            <span className={styles.link}>Language</span>
            {dropdownVisible && (
              <ul style={dropdownMenuStyle}>
                <li style={dropdownItemStyle}>
                  <Link href="en" className={styles.link}>English</Link>
                </li>
                <li style={dropdownItemStyle}>
                  <Link href="es" className={styles.link}>Español</Link>
                </li>
                <li style={dropdownItemStyle}>
                  <Link href="de" className={styles.link}>Deustch</Link>
                </li>
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
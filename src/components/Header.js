// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
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
          <li style={{liStyle, display: 'flex', alignItems: 'center'}}>
            <span className={styles.separator}>|</span>
            <Link href="/login" className={styles.link}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Estilos básicos en línea
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

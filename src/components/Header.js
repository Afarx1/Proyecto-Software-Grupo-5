// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link href="/about">About</Link>
          </li>
          <li style={liStyle}>
            <Link href="/contact">Contact</Link>
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

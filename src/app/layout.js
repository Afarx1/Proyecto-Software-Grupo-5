import localFont from "next/font/local";
import './globals.css';
import Header from '@/components/Header';
import { LanguageProvider } from '@/context/LanguageContext'; 
import { CartProvider } from '@/context/CartContext'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Tienda generica xd',
  description: 'A simple e-commerce application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-white min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
              {children}
            </main>
            <footer className="text-sm p-4 text-center bg-background border-t border-border">
              Grupo-5. Todos los derechos reservados.
            </footer>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}


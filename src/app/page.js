import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white relative p-8 sm:p-20">
      <header className="text-center text-4xl font-bold mb-8">
        Tienda generica de objetos ficticios xd
      </header>

      <footer className="absolute bottom-4 left-4 text-sm">
        Grupo-5. Todos los derechos reservados.
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-primary font-heading text-6xl md:text-8xl font-bold">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl md:text-3xl font-bold text-foreground">
          Página no encontrada
        </h1>
        <p className="mt-3 text-muted max-w-md mx-auto">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}

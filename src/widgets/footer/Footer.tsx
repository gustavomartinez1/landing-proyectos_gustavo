import { SITE_NAME } from "@/config/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} {SITE_NAME}. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted">
          Hecho con Next.js, Tailwind CSS y mucho café ☕
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
          <div className="text-center">
            <p className="text-red-400 font-heading text-5xl font-bold">
              Error crítico
            </p>
            <h1 className="mt-4 font-heading text-xl font-semibold text-[#ededed]">
              Algo salió mal a nivel de aplicación
            </h1>
            <p className="mt-2 text-[#888888] max-w-md mx-auto">
              Ha ocurrido un error inesperado. Intenta recargar la página.
            </p>
            <button
              onClick={reset}
              className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-[#10b981] text-white font-medium hover:bg-[#059669] transition-colors"
            >
              Recargar
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

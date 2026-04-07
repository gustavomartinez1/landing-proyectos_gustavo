"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-red-400 font-heading text-5xl font-bold">Error</p>
        <h1 className="mt-4 font-heading text-xl font-semibold text-foreground">
          Algo salió mal
        </h1>
        <p className="mt-2 text-muted max-w-md mx-auto">
          Ha ocurrido un error inesperado. Intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}

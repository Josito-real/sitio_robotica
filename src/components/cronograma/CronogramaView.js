"use client";

import { useState } from "react";
import { secciones, getCronograma } from "@/data/cronograma";
import WeekRow from "@/components/cronograma/WeekRow";

export default function CronogramaView() {
  const [seccionId, setSeccionId] = useState(secciones[0].id);
  const seccionActiva = secciones.find((s) => s.id === seccionId);
  const semanas = getCronograma(seccionId);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sección"
        className="inline-flex rounded-full border border-zinc-200 p-1 dark:border-zinc-800"
      >
        {secciones.map((seccion) => (
          <button
            key={seccion.id}
            type="button"
            role="tab"
            aria-selected={seccion.id === seccionId}
            onClick={() => setSeccionId(seccion.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              seccion.id === seccionId
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            {seccion.nombre}
          </button>
        ))}
      </div>

      {seccionActiva.nota && (
        <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
          🔶 {seccionActiva.nota}
        </p>
      )}

      <ol className="mt-8 flex flex-col gap-4">
        {semanas.map((semana) => (
          <WeekRow key={semana.semana} semana={semana} />
        ))}
      </ol>
    </div>
  );
}

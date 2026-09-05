"use client";

import { useState } from "react";
import { secciones, getSemanas } from "@/data/cronograma";
import WeekRow from "@/components/cronograma/WeekRow";
import ClaseTipoBadge, {
  TIPOS_LEYENDA,
} from "@/components/cronograma/ClaseTipoBadge";

export default function CronogramaView() {
  const [seccionId, setSeccionId] = useState(secciones[0].id);
  const seccion = secciones.find((s) => s.id === seccionId);
  const semanas = getSemanas(seccionId);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sección"
        className="inline-flex rounded-full border border-zinc-200 p-1 dark:border-zinc-800"
      >
        {secciones.map((opcion) => (
          <button
            key={opcion.id}
            type="button"
            role="tab"
            aria-selected={opcion.id === seccionId}
            onClick={() => setSeccionId(opcion.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              opcion.id === seccionId
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            {opcion.nombre} · {opcion.dias.toLowerCase()}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
        {seccion.dias}, {seccion.horario} · {seccion.totalClases} clases
      </p>

      {seccion.nota && (
        <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
          🔶 {seccion.nota}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {TIPOS_LEYENDA.map((tipo) => (
          <ClaseTipoBadge key={tipo} tipo={tipo} />
        ))}
      </div>

      <ol className="mt-6 flex flex-col gap-4">
        {semanas.map((semana) => (
          <WeekRow key={semana.numero} semana={semana} />
        ))}
      </ol>
    </div>
  );
}

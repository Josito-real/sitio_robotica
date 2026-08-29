import ClaseTipoBadge from "@/components/cronograma/ClaseTipoBadge";

function ClaseBlock({ clase }) {
  return (
    <div className="flex-1 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Clase {clase.numero} — {clase.fecha}
        </span>
        <ClaseTipoBadge tipo={clase.tipo} />
      </div>
      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
        {clase.contenido}
      </p>
    </div>
  );
}

export default function WeekRow({ semana }) {
  return (
    <li className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
      <h3 className="mb-3 font-semibold">Semana {semana.semana}</h3>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ClaseBlock clase={semana.clase1} />
        <ClaseBlock clase={semana.clase2} />
      </div>
      {semana.hitos.length > 0 && (
        <ul className="mt-3 space-y-1 border-t border-dashed border-zinc-200 pt-3 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          {semana.hitos.map((hito) => (
            <li key={hito}>🚩 {hito}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

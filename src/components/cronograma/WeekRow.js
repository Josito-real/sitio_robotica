import ClaseTipoBadge from "@/components/cronograma/ClaseTipoBadge";

function ClaseBlock({ clase }) {
  const esFeriado = clase.tipo === "feriado";

  return (
    <div
      className={`flex-1 rounded-lg p-4 ${
        esFeriado
          ? "border border-dashed border-zinc-300 dark:border-zinc-700"
          : "bg-zinc-50 dark:bg-zinc-900"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {clase.fechaLabel}
        </span>
        <ClaseTipoBadge tipo={clase.tipo} />
      </div>
      <p
        className={`mt-2 text-sm ${
          esFeriado
            ? "text-zinc-500 dark:text-zinc-400"
            : "text-zinc-700 dark:text-zinc-200"
        }`}
      >
        {clase.contenido}
      </p>
      {clase.marcador && (
        <p className="mt-3 text-sm font-medium text-green-700 dark:text-green-400">
          ▸ {clase.marcador}
        </p>
      )}
    </div>
  );
}

export default function WeekRow({ semana }) {
  return (
    <li className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
      <h3 className="mb-3 font-semibold">Semana {semana.numero}</h3>
      <div className="flex flex-col gap-3 sm:flex-row">
        {semana.clases.map((clase) => (
          <ClaseBlock key={clase.fecha} clase={clase} />
        ))}
      </div>
    </li>
  );
}

export default function PracticaCard({ practica }) {
  const publicada = Boolean(practica.guia);

  return (
    <article className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
          Práctica {practica.numero}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            publicada
              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {publicada ? "Guía publicada" : "Guía próximamente"}
        </span>
      </div>

      <h3 className="mt-2 font-semibold">{practica.nombre}</h3>

      <dl className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex gap-2">
          <dt className="text-zinc-500 dark:text-zinc-400">Equipo:</dt>
          <dd>{practica.equipo}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-zinc-500 dark:text-zinc-400">Cuándo:</dt>
          <dd>{practica.semana}</dd>
        </div>
      </dl>

      <div className="mt-5 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-700">
        {publicada ? (
          <a
            href={practica.guia}
            className="text-sm font-medium underline underline-offset-4"
          >
            Descargar guía (PDF)
          </a>
        ) : (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            La guía se publica aquí antes de la práctica.
          </p>
        )}
      </div>
    </article>
  );
}

export default function DocumentoCard({
  titulo,
  descripcion,
  etiqueta,
  archivo,
  paginas,
  peso,
  destacado = false,
  proximamente = false,
}) {
  // Tarjeta anunciada pero todavía sin publicar: se ve el sitio que ocupará la
  // lámina, con los botones inertes. El PDF no está en el servidor hasta que se
  // active, así que no hay URL que adivinar.
  if (proximamente) {
    return (
      <article className="flex flex-col rounded-xl border border-dashed border-zinc-300 p-6 dark:border-zinc-700">
        <span className="mb-2 self-start rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          Próximamente
        </span>
        <h3 className="font-semibold text-zinc-500 dark:text-zinc-400">
          {titulo}
        </h3>
        {etiqueta && (
          <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
            {etiqueta}
          </p>
        )}
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
          Se publica después de la clase.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            disabled
            title="Disponible después de la clase"
            className="cursor-not-allowed rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
          >
            Abrir
          </button>
          <button
            type="button"
            disabled
            title="Disponible después de la clase"
            className="cursor-not-allowed rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-400 dark:border-zinc-800 dark:text-zinc-600"
          >
            Descargar
          </button>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`flex flex-col rounded-xl border p-6 ${
        destacado
          ? "border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900"
          : "border-zinc-200 dark:border-zinc-800"
      }`}
    >
      {etiqueta && (
        <span className="mb-2 self-start rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {etiqueta}
        </span>
      )}
      <h3 className="font-semibold">{titulo}</h3>
      {descripcion && (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {descripcion}
        </p>
      )}
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        PDF · {paginas} páginas · {peso}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={archivo}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Abrir
        </a>
        <a
          href={archivo}
          download
          className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
        >
          Descargar
        </a>
      </div>
    </article>
  );
}

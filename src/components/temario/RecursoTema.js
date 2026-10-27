// Material de preparación atado a un tema. A diferencia de las láminas, trae
// archivos que no son PDF y pasos a seguir, así que se muestra como bloque
// dentro de la tarjeta del tema en vez de como un enlace suelto.
export default function RecursoTema({ recurso }) {
  return (
    <div className="mt-5 rounded-lg bg-zinc-50 p-5 dark:bg-zinc-900">
      <h3 className="font-semibold">{recurso.titulo}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {recurso.descripcion}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {recurso.archivos.map((archivo, indice) => (
          <a
            key={archivo.id}
            href={archivo.archivo}
            download={archivo.descargar || undefined}
            target={archivo.descargar ? undefined : "_blank"}
            rel={archivo.descargar ? undefined : "noopener"}
            className={
              indice === 0
                ? "rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                : "rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
            }
          >
            {archivo.etiqueta}
          </a>
        ))}
      </div>
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        {recurso.detalleArchivos}
      </p>

      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
        <span className="font-medium text-zinc-700 dark:text-zinc-200">
          Requisitos:
        </span>{" "}
        {recurso.requisitos}
      </p>

      <p className="mt-4 text-sm font-medium">Pasos sugeridos</p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
        {recurso.pasos.map((paso) => (
          <li key={paso}>{paso}</li>
        ))}
      </ol>
    </div>
  );
}

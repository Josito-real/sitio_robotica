import {
  tareasMatlab,
  ejercicioEnClase,
  proyectoFinal,
  parciales,
} from "@/data/evaluacion";

function Dato({ etiqueta, children }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
      <dt className="shrink-0 font-medium text-zinc-500 dark:text-zinc-400">
        {etiqueta}
      </dt>
      <dd className="text-zinc-700 dark:text-zinc-200">{children}</dd>
    </div>
  );
}

export function TareasMatlab() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {tareasMatlab.map((tarea) => (
        <article
          key={tarea.numero}
          className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <h3 className="font-semibold">
            Tarea {tarea.numero} — {tarea.titulo}{" "}
            <span className="text-zinc-400 dark:text-zinc-500">
              ({tarea.peso})
            </span>
          </h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            {tarea.descripcion}
          </p>
          <dl className="mt-4 space-y-1.5 text-sm">
            <Dato etiqueta="Se asigna en:">{tarea.asignacion}</Dato>
            <Dato etiqueta="Se entrega en:">{tarea.entrega}</Dato>
            <Dato etiqueta="Herramientas:">{tarea.herramientas}</Dato>
          </dl>
        </article>
      ))}
    </div>
  );
}

export function EjercicioEnClase() {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h3 className="font-semibold">
        {ejercicioEnClase.titulo}{" "}
        <span className="text-zinc-400 dark:text-zinc-500">
          ({ejercicioEnClase.peso})
        </span>
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {ejercicioEnClase.momento}
      </p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
        {ejercicioEnClase.descripcion}
      </p>
      <ul className="mt-4 space-y-1 border-t border-dashed border-zinc-200 pt-3 text-sm dark:border-zinc-700">
        {ejercicioEnClase.fechas.map((fecha) => (
          <li key={fecha.seccion} className="flex flex-wrap gap-x-2">
            <span className="text-zinc-500 dark:text-zinc-400">
              {fecha.seccion}:
            </span>
            <span className="font-medium">{fecha.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProyectoFinal() {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <p className="text-zinc-600 dark:text-zinc-300">
        {proyectoFinal.descripcion}
      </p>
      <dl className="mt-5 space-y-1.5 text-sm">
        <Dato etiqueta="Peso:">{proyectoFinal.peso}</Dato>
        <Dato etiqueta="Modalidad:">{proyectoFinal.modalidad}</Dato>
        <Dato etiqueta="Directrices:">
          {proyectoFinal.publicacionDirectrices}
        </Dato>
      </dl>

      <a
        href={proyectoFinal.directrices.archivo}
        target="_blank"
        rel="noopener"
        className="mt-5 inline-block rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Descargar las directrices ({proyectoFinal.directrices.paginas} páginas,
        PDF)
      </a>

      <h4 className="mt-6 font-semibold">Los tres cortes</h4>
      <ul className="mt-3 space-y-3">
        {proyectoFinal.cortes.map((corte) => (
          <li
            key={corte.id}
            className="rounded-lg bg-zinc-50 px-4 py-3 dark:bg-zinc-900"
          >
            <p className="text-sm font-medium">
              {corte.nombre}{" "}
              <span className="text-zinc-400 dark:text-zinc-500">
                ({corte.peso})
              </span>
            </p>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              {corte.fecha}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {corte.detalle}
            </p>
          </li>
        ))}
      </ul>

      <h4 className="mt-6 font-semibold">Las tres rutas</h4>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
        Cada equipo elige una:
      </p>
      <ul className="mt-3 space-y-2">
        {proyectoFinal.rutas.map((ruta) => (
          <li key={ruta.id} className="text-sm">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">
              {ruta.nombre}
            </span>
            <span className="text-zinc-600 dark:text-zinc-300">
              {" "}
              — {ruta.detalle}
            </span>
          </li>
        ))}
      </ul>

      <h4 className="mt-6 font-semibold">El piso común</h4>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
        Sea cual sea la ruta, todo proyecto cumple:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
        {proyectoFinal.pisoComun.map((punto) => (
          <li key={punto}>{punto}</li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-300">
        {proyectoFinal.coordinacionDefensa}
      </p>
      <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
        🔶 {proyectoFinal.advertencia}
      </p>
    </div>
  );
}

export function Parciales() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {parciales.map((parcial) => (
        <article
          key={parcial.id}
          className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <h3 className="font-semibold">
            {parcial.nombre}{" "}
            <span className="text-zinc-400 dark:text-zinc-500">
              ({parcial.peso})
            </span>
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {parcial.momento} · {parcial.contenido}
          </p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            {parcial.detalle}
          </p>
          <ul className="mt-4 space-y-1 border-t border-dashed border-zinc-200 pt-3 text-sm dark:border-zinc-700">
            {parcial.fechas.map((fecha) => (
              <li key={fecha.seccion} className="flex flex-wrap gap-x-2">
                <span className="text-zinc-500 dark:text-zinc-400">
                  {fecha.seccion}:
                </span>
                <span className="font-medium">{fecha.fecha}</span>
              </li>
            ))}
          </ul>
          {parcial.modelos && (
            <div className="mt-4 border-t border-dashed border-zinc-200 pt-3 dark:border-zinc-700">
              <p className="text-sm font-medium">Modelos de práctica</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Misma estructura, pesos y duración que el parcial, con preguntas
                distintas. Cada uno trae su solucionario al final.
              </p>
              <ul className="mt-2 space-y-1">
                {parcial.modelos.map((modelo) => (
                  <li key={modelo.id}>
                    <a
                      href={modelo.archivo}
                      target="_blank"
                      rel="noopener"
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      {modelo.nombre} ({modelo.paginas} páginas, PDF)
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

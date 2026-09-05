import { tareasMatlab, proyectoFinal, parciales } from "@/data/evaluacion";

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

export function ProyectoFinal() {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <p className="text-zinc-600 dark:text-zinc-300">
        {proyectoFinal.descripcion}
      </p>
      <dl className="mt-5 space-y-1.5 text-sm">
        <Dato etiqueta="Peso:">{proyectoFinal.peso}</Dato>
        <Dato etiqueta="Modalidad:">{proyectoFinal.modalidad}</Dato>
        <Dato etiqueta="Herramientas:">{proyectoFinal.herramientas}</Dato>
        <Dato etiqueta="Directrices:">
          {proyectoFinal.publicacionDirectrices}
        </Dato>
        <Dato etiqueta="Entrega y defensa:">{proyectoFinal.entrega}</Dato>
      </dl>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
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
        </article>
      ))}
    </div>
  );
}

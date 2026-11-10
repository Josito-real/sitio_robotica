import { temario } from "@/data/temario";
import {
  laminasDelTema,
  recursosDelTema,
  grabacionDelTema,
} from "@/data/materiales";
import RecursoTema from "@/components/temario/RecursoTema";

export default function TemarioList() {
  return (
    <ol className="flex flex-col gap-4">
      {temario.map((tema) => {
        const laminas = laminasDelTema(tema.id);
        const disponibles = laminas.filter(
          (lamina) => lamina.estado !== "proximamente"
        );
        const recursos = recursosDelTema(tema.id);
        const grabacion = grabacionDelTema(tema.id);
        return (
        <li
          key={tema.id}
          className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <h2 className="font-semibold">
            <span className="text-zinc-400 dark:text-zinc-500">
              Tema {tema.id} —{" "}
            </span>
            {tema.titulo}
          </h2>
          {tema.subtemas && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {tema.subtemas.map((subtema) => (
                <li key={subtema}>{subtema}</li>
              ))}
            </ul>
          )}
          {tema.descripcion && (
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {tema.descripcion}
            </p>
          )}
          {disponibles.length > 0 && (
            <ul className="mt-4 flex flex-col gap-1">
              {disponibles.map((lamina) => (
                <li key={lamina.id}>
                  <a
                    href={lamina.archivo}
                    target="_blank"
                    rel="noopener"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    {disponibles.length > 1
                      ? `${lamina.parte} ${lamina.titulo}`
                      : "Ver las láminas"}{" "}
                    ({lamina.paginas} páginas, PDF)
                  </a>
                </li>
              ))}
            </ul>
          )}
          {disponibles.length === 0 && laminas.length > 0 && (
            <p className="mt-4 text-sm text-zinc-400 dark:text-zinc-500">
              Láminas: se publican después de la clase.
            </p>
          )}
          {grabacion && (
            <div className="mt-5 rounded-lg bg-zinc-50 p-5 dark:bg-zinc-900">
              <h3 className="font-semibold">{grabacion.titulo}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {grabacion.motivo}
              </p>
              <a
                href={grabacion.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Ver la clase grabada
              </a>
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                Se abre en Google Drive.
              </p>
            </div>
          )}
          {recursos.map((recurso) => (
            <RecursoTema key={recurso.id} recurso={recurso} />
          ))}
        </li>
        );
      })}
    </ol>
  );
}

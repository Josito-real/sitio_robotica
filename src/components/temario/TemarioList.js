import { temario } from "@/data/temario";
import { laminasDelTema } from "@/data/materiales";

export default function TemarioList() {
  return (
    <ol className="flex flex-col gap-4">
      {temario.map((tema) => {
        const laminas = laminasDelTema(tema.id);
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
          {laminas.map((lamina) => (
            <a
              key={lamina.id}
              href={lamina.archivo}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
            >
              Ver las láminas ({lamina.paginas} páginas, PDF)
            </a>
          ))}
        </li>
        );
      })}
    </ol>
  );
}

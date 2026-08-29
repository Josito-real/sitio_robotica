import { temario } from "@/data/temario";

export default function TemarioList() {
  return (
    <ol className="flex flex-col gap-6">
      {temario.map((tema) => (
        <li
          key={tema.id}
          className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <h3 className="font-semibold">
            <span className="text-zinc-400 dark:text-zinc-500">
              Tema {tema.id} —{" "}
            </span>
            {tema.titulo}
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {tema.subtemas.map((subtema) => (
              <li key={subtema}>{subtema}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

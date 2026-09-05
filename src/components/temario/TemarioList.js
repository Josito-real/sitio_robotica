import { temario } from "@/data/temario";

export default function TemarioList() {
  return (
    <ol className="flex flex-col gap-4">
      {temario.map((tema) => (
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
          {tema.descripcion && (
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {tema.descripcion}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

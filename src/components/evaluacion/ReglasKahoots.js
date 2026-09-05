import { kahoots } from "@/data/evaluacion";

export default function ReglasKahoots() {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <p className="text-zinc-600 dark:text-zinc-300">{kahoots.resumen}</p>

      <h3 className="mt-6 font-semibold">Cómo se obtienen los puntos</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
        {kahoots.comoSeObtienen.map((regla) => (
          <li key={regla}>{regla}</li>
        ))}
      </ul>

      <h3 className="mt-6 font-semibold">Cómo se aplican a la nota</h3>
      <div className="mt-2 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-2.5 font-medium">Corte</th>
              <th className="px-4 py-2.5 font-medium">Clases teóricas</th>
              <th className="px-4 py-2.5 font-medium">Se suman al</th>
            </tr>
          </thead>
          <tbody>
            {kahoots.cortes.map((corte) => (
              <tr
                key={corte.corte}
                className="border-t border-zinc-200 dark:border-zinc-800"
              >
                <td className="px-4 py-2.5">{corte.corte}</td>
                <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300">
                  {corte.clases}
                </td>
                <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300">
                  {corte.suma}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
        {kahoots.reglas.map((regla) => (
          <li key={regla}>{regla}</li>
        ))}
      </ul>
    </div>
  );
}

import { dinamica } from "@/data/laboratorios";

export default function DinamicaLaboratorio() {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <p className="text-zinc-600 dark:text-zinc-300">{dinamica.resumen}</p>

      <div className="mt-5 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-2.5 font-medium">Parte</th>
              <th className="px-4 py-2.5 font-medium">Duración</th>
              <th className="px-4 py-2.5 font-medium">Peso</th>
              <th className="px-4 py-2.5 font-medium">Instrumento</th>
            </tr>
          </thead>
          <tbody>
            {dinamica.partes.map((parte) => (
              <tr
                key={parte.parte}
                className="border-t border-zinc-200 dark:border-zinc-800"
              >
                <td className="px-4 py-2.5 font-medium">{parte.parte}</td>
                <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300">
                  {parte.duracion}
                </td>
                <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300">
                  {parte.peso}
                </td>
                <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300">
                  {parte.instrumento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
        {dinamica.detalle.map((punto) => (
          <li key={punto}>{punto}</li>
        ))}
      </ul>

      <h3 className="mt-8 font-semibold">Normas del laboratorio</h3>
      <dl className="mt-3 space-y-3 text-sm">
        {dinamica.normas.map((norma) => (
          <div key={norma.titulo}>
            <dt className="font-medium text-zinc-700 dark:text-zinc-200">
              {norma.titulo}
            </dt>
            <dd className="text-zinc-600 dark:text-zinc-300">{norma.texto}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

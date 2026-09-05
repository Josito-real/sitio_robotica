import { fechasClave } from "@/data/evaluacion";

export default function FechasClave() {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead className="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">Hito</th>
            <th className="px-5 py-3 font-medium">Sección 1 · lun y mié</th>
            <th className="px-5 py-3 font-medium">Sección 2 · mar y jue</th>
          </tr>
        </thead>
        <tbody>
          {fechasClave.map((fila) => (
            <tr
              key={fila.hito}
              className="border-t border-zinc-200 dark:border-zinc-800"
            >
              <td className="px-5 py-3 font-medium">{fila.hito}</td>
              <td className="px-5 py-3 text-zinc-600 dark:text-zinc-300">
                {fila.seccion1}
              </td>
              <td className="px-5 py-3 text-zinc-600 dark:text-zinc-300">
                {fila.seccion2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

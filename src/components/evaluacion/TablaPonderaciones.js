import { componentes } from "@/data/evaluacion";

export default function TablaPonderaciones() {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead className="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">Componente</th>
            <th className="px-5 py-3 font-medium">Peso</th>
            <th className="px-5 py-3 font-medium">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {componentes.map((componente) => (
            <tr
              key={componente.id}
              className="border-t border-zinc-200 dark:border-zinc-800"
            >
              <td className="px-5 py-3 font-medium">{componente.nombre}</td>
              <td className="px-5 py-3 tabular-nums">{componente.peso}</td>
              <td className="px-5 py-3 text-zinc-600 dark:text-zinc-300">
                {componente.descripcion}
              </td>
            </tr>
          ))}
          <tr className="border-t border-zinc-200 bg-zinc-50 font-semibold dark:border-zinc-800 dark:bg-zinc-900">
            <td className="px-5 py-3">Total</td>
            <td className="px-5 py-3 tabular-nums">100%</td>
            <td className="px-5 py-3" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

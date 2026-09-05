const ESTILOS_POR_TIPO = {
  teoria: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  laboratorio: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  parcial: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  defensa:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  feriado: "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
};

const ETIQUETA_POR_TIPO = {
  teoria: "Teoría",
  laboratorio: "Laboratorio",
  parcial: "Parcial",
  defensa: "Defensa",
  feriado: "Feriado",
};

export const TIPOS_LEYENDA = Object.keys(ETIQUETA_POR_TIPO);

export default function ClaseTipoBadge({ tipo }) {
  return (
    <span
      className={`inline-block shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${ESTILOS_POR_TIPO[tipo]}`}
    >
      {ETIQUETA_POR_TIPO[tipo]}
    </span>
  );
}

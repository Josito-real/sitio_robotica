const ESTILOS_POR_TIPO = {
  clase: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  lab: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  examen: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  revision:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

const ETIQUETA_POR_TIPO = {
  clase: "Clase",
  lab: "Laboratorio",
  examen: "Examen",
  revision: "Revisión",
};

export default function ClaseTipoBadge({ tipo }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${ESTILOS_POR_TIPO[tipo]}`}
    >
      {ETIQUETA_POR_TIPO[tipo]}
    </span>
  );
}

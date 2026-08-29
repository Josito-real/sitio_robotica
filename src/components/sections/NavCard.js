export default function NavCard({ label, description, href }) {
  return (
    // TODO: reemplazar href="#" por las rutas reales cuando existan
    // (/planes-evaluacion, /cronogramas, /material-interactivo, etc.)
    <a
      href={href}
      className="block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
    >
      <h3 className="font-semibold">{label}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </a>
  );
}

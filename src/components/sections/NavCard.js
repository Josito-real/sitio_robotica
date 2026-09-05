import Link from "next/link";

const CLASES =
  "block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900";

export default function NavCard({ label, description, href }) {
  const contenido = (
    <>
      <h3 className="font-semibold">{label}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </>
  );

  // Las secciones aún sin página propia siguen apuntando a "#".
  if (!href.startsWith("/")) {
    return (
      <a href={href} className={CLASES}>
        {contenido}
      </a>
    );
  }

  return (
    <Link href={href} className={CLASES}>
      {contenido}
    </Link>
  );
}

import Link from "next/link";
import Container from "@/components/layout/Container";
import { interactivos } from "@/data/interactivos";

export const metadata = {
  title: "Material interactivo — Robótica UNIMET",
  description:
    "Simuladores para explorar los conceptos del curso de Robótica Industrial.",
};

function Tarjeta({ item }) {
  const disponible = item.estado === "disponible";

  const contenido = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-semibold">{item.titulo}</h2>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            disponible
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {disponible ? item.tema : "Próximamente"}
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {item.resumen}
      </p>
      {!disponible && (
        <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
          {item.tema}
        </p>
      )}
    </>
  );

  if (!disponible) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-200 p-6 dark:border-zinc-800">
        {contenido}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
    >
      {contenido}
    </Link>
  );
}

export default function InteractivosPage() {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Material interactivo
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Simuladores para mover los parámetros del curso y ver qué pasa. Cada
          uno está atado a un tema del temario y funciona en el navegador, sin
          instalar nada.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {interactivos.map((item) => (
            <Tarjeta key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </main>
  );
}

import Link from "next/link";
import Container from "@/components/layout/Container";

export default function PaginaSimulador({ titulo, tema, resumen, children }) {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <Link
          href="/interactivos"
          className="text-sm text-zinc-500 underline underline-offset-4 dark:text-zinc-400"
        >
          ← Material interactivo
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {titulo}
          </h1>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {tema}
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          {resumen}
        </p>
        <div className="mt-10">{children}</div>
      </Container>
    </main>
  );
}

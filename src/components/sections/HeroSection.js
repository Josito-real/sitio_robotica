import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col items-start gap-6">
        <span className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Robótica — UNIMET
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bienvenida a la materia
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Este es un texto de bienvenida genérico. Aquí se colocará una
          introducción a la materia, sus objetivos y lo que los estudiantes
          encontrarán en este sitio.
        </p>
        <a
          href="#"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Comenzar
        </a>
      </Container>
    </section>
  );
}

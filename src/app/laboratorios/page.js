import Container from "@/components/layout/Container";
import PracticaCard from "@/components/laboratorios/PracticaCard";
import DinamicaLaboratorio from "@/components/laboratorios/DinamicaLaboratorio";
import { practicas, dinamica } from "@/data/laboratorios";

export const metadata = {
  title: "Laboratorios — Robótica UNIMET",
  description:
    "Las 6 prácticas de laboratorio del curso, sus guías y las normas de la sesión.",
};

export default function LaboratoriosPage() {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Laboratorios
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          6 prácticas, 5% cada una — 30% de la nota final. Cada guía se publica
          aquí antes de su práctica.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practicas.map((practica) => (
            <PracticaCard key={practica.numero} practica={practica} />
          ))}
        </div>

        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
          {dinamica.distribucion}
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Cómo funciona una práctica</h2>
          <div className="mt-5">
            <DinamicaLaboratorio />
          </div>
        </section>
      </Container>
    </main>
  );
}

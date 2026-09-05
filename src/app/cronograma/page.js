import Container from "@/components/layout/Container";
import CronogramaView from "@/components/cronograma/CronogramaView";
import { periodo } from "@/data/cronograma";

export const metadata = {
  title: "Cronograma — Robótica UNIMET",
  description:
    "Cronograma de clases por sección del curso de Robótica Industrial (FPTEN27).",
};

export default function CronogramaPage() {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Cronograma
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          {periodo.nombre}. {periodo.duracion}: del {periodo.inicio.toLowerCase()}{" "}
          al {periodo.cierre.toLowerCase()}. Selecciona tu sección para ver sus
          fechas.
        </p>
        <div className="mt-10">
          <CronogramaView />
        </div>
      </Container>
    </main>
  );
}

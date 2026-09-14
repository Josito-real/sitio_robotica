import Container from "@/components/layout/Container";
import TemarioList from "@/components/temario/TemarioList";

export const metadata = {
  title: "Temario — Robótica UNIMET",
  description: "Contenido temático del curso de Robótica Industrial.",
};

export default function TemarioPage() {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Temario
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Los 12 temas del curso de Robótica Industrial, según el sílabo del
          período 2627-1. El primer parcial evalúa los temas 1 al 7 y el
          segundo, los temas 8 al 12.
        </p>
        <div className="mt-10">
          <TemarioList />
        </div>
      </Container>
    </main>
  );
}

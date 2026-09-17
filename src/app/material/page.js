import Container from "@/components/layout/Container";
import DocumentoCard from "@/components/materiales/DocumentoCard";
import { silabo, laminas } from "@/data/materiales";

export const metadata = {
  title: "Material de clase — Robótica UNIMET",
  description:
    "Sílabo y láminas de clase en PDF del curso de Robótica Industrial (FPTEN27).",
};

export default function MaterialPage() {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Material de clase
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          El sílabo del curso y las láminas de cada tema, en PDF. Las láminas se
          publican aquí a medida que se dictan las clases.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Sílabo</h2>
          <div className="mt-5 max-w-2xl">
            <DocumentoCard
              titulo={silabo.titulo}
              descripcion={silabo.descripcion}
              etiqueta={silabo.periodo}
              archivo={silabo.archivo}
              paginas={silabo.paginas}
              peso={silabo.peso}
              destacado
            />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Láminas de clase</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {laminas.map((lamina) => (
              <DocumentoCard
                key={lamina.id}
                titulo={lamina.titulo}
                descripcion={lamina.descripcion}
                etiqueta={lamina.tema ? `Tema ${lamina.tema}` : "Presentación inicial"}
                archivo={lamina.archivo}
                paginas={lamina.paginas}
                peso={lamina.peso}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

import Link from "next/link";
import Container from "@/components/layout/Container";
import TablaPonderaciones from "@/components/evaluacion/TablaPonderaciones";
import {
  TareasMatlab,
  ProyectoFinal,
  Parciales,
} from "@/components/evaluacion/DetalleEvaluaciones";
import ReglasKahoots from "@/components/evaluacion/ReglasKahoots";
import FechasClave from "@/components/evaluacion/FechasClave";
import { dinamica } from "@/data/laboratorios";

export const metadata = {
  title: "Plan de evaluación — Robótica UNIMET",
  description:
    "Ponderaciones, evaluaciones y fechas clave del curso de Robótica Industrial (FPTEN27).",
};

function Bloque({ titulo, children }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold">{titulo}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function EvaluacionPage() {
  return (
    <main className="flex flex-1 flex-col py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Plan de evaluación
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Cómo se compone la nota del trimestre, qué evalúa cada componente y
          cuándo ocurre cada cosa.
        </p>

        <div className="mt-10">
          <TablaPonderaciones />
        </div>

        <Bloque titulo="Laboratorios · 30%">
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-300">
              {dinamica.resumen}
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {dinamica.partes.map((parte) => (
                <li key={parte.parte}>
                  <span className="font-medium text-zinc-700 dark:text-zinc-200">
                    {parte.parte}
                  </span>{" "}
                  — {parte.duracion} · {parte.peso} · {parte.instrumento}.
                </li>
              ))}
            </ul>
            <Link
              href="/laboratorios"
              className="mt-5 inline-block text-sm font-medium underline underline-offset-4"
            >
              Ver las 6 prácticas, sus guías y las normas del laboratorio
            </Link>
          </div>
        </Bloque>

        <Bloque titulo="Tareas de MATLAB · 10%">
          <TareasMatlab />
        </Bloque>

        <Bloque titulo="Proyecto final · 20%">
          <ProyectoFinal />
        </Bloque>

        <Bloque titulo="Exámenes parciales · 40%">
          <Parciales />
        </Bloque>

        <Bloque titulo="Kahoots · puntos bonus sobre los parciales">
          <ReglasKahoots />
        </Bloque>

        <Bloque titulo="Fechas clave">
          <FechasClave />
        </Bloque>
      </Container>
    </main>
  );
}

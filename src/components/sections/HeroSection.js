import Link from "next/link";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col items-start gap-6">
        <span className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          FPTEN27 · Universidad Metropolitana
        </span>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Robótica Industrial
        </h1>

        <div className="flex max-w-2xl flex-col gap-4 text-lg text-zinc-600 dark:text-zinc-300">
          <p>
            Te damos la bienvenida al curso. Aquí vas a construir los
            fundamentos teóricos y prácticos para comprender, diseñar y
            programar sistemas robóticos: desde la morfología y la cinemática
            hasta la generación de trayectorias, la visión artificial y la
            inteligencia artificial aplicada a la robótica.
          </p>
          <p>
            Vas a trabajar en dos frentes. Por un lado, los robots del
            laboratorio: Arduino, Dobot Magician y PiCar-X. Por otro, la
            simulación con CoppeliaSim Edu controlada desde Python, más MATLAB
            para el cálculo cinemático y para implementar arquitecturas bajo el
            paradigma ROS 2. El curso cierra con un proyecto integrador en el
            que cada equipo concibe, implementa y defiende una aplicación
            robótica propia.
          </p>
          <p>
            La nota se reparte entre 6 prácticas de laboratorio (30%), 2 tareas
            de MATLAB (10%), el proyecto final (20%) y dos parciales (40%).
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/cronograma"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Ver el cronograma
          </Link>
          <Link
            href="/evaluacion"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
          >
            Plan de evaluación
          </Link>
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Trimestre septiembre – diciembre 2026 · Sección 1: lunes y miércoles,
          7:00 – 8:30 a.m. · Sección 2: martes y jueves, 7:00 – 8:30 a.m. ·
          Todas las clases en el Laboratorio de Autómatas
        </p>

        <p className="rounded-lg bg-zinc-100 px-4 py-3 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
          Todo el material del curso vive en este sitio: temario, contenido de
          cada clase, cronogramas por sección, guías de laboratorio y
          directrices de las evaluaciones. Aulas Virtuales se usa únicamente
          para entregar evaluaciones y publicar calificaciones.
        </p>
      </Container>
    </section>
  );
}

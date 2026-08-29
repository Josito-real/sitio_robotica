import Image from "next/image";
import Container from "@/components/layout/Container";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/images/perfil/profesor.png"
            alt="Foto del profesor"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Sobre el profesor</h2>
          <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            José Gabriel Montilva Palencia
          </p>
          <div className="mt-3 max-w-2xl space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>
              Soy José Gabriel Montilva Palencia, Ingeniero Electricista
              egresado Cum Laude de la UNIMET, y aspirante a Ingeniero
              Mecánico por la misma casa. Terminé todas las materias de la
              segunda carrera y me falta únicamente el trabajo de grado, así
              que técnicamente sigo siendo estudiante de esta universidad.
              Cuando les diga que entiendo lo que es entregar algo a las
              11:58 p.m., no lo digo por empatía teórica.
            </p>
            <p>
              Fuera del aula he trabajado en el diseño de microrredes y sistemas de almacenamiento con baterías, en electrónica de potencia y en el diseño de tarjetas electrónicas. Hoy me dedico a la industria de los gases criogénicos: oxígeno, nitrógeno y argón licuados, que se almacenan y transportan a temperaturas del orden de los 180 a 200 grados bajo cero. Son los gases que hacen funcionar un hospital, una acería o una planta de alimentos, y a esas temperaturas los materiales se comportan de formas que no aparecen en las tablas del pregrado: el acero se vuelve frágil, los sellos se contraen y una válvula mal seleccionada deja de ser un detalle. Mi trabajo es especificar los equipos que hacen que todo eso funcione sin sorpresas.
            </p>
            <p>
              Me muevo entre SolidWorks, Fusion 360, MATLAB/Simulink, Ansys
              Fluent, Python y KiCad. Investigo turbomaquinaria y energías
              renovables, área en la que actualmente trabajo con simulación
              CFD de turbinas eólicas de eje vertical. Hablo español,
              inglés y francés, y sé lo suficiente de mandarín para pedir
              comida con una confianza que los resultados no siempre
              respaldan.
            </p>
            <p>
              Mi puerta está abierta para preguntas del curso, para dudas
              de trabajo de grado y para discutir por qué su robot
              funciona en simulación y no en el laboratorio. Sobre esto
              último tengo bastante experiencia personal.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

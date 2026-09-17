import { interactivos } from "@/data/interactivos";

export const enlacesDelCurso = [
  {
    id: "temario",
    label: "Temario",
    description: "Los 12 temas que se cubren a lo largo del trimestre.",
    href: "/temario",
  },
  {
    id: "material",
    label: "Material de clase",
    description: "El sílabo y las láminas de cada tema, en PDF.",
    href: "/material",
  },
  {
    id: "cronograma",
    label: "Cronograma",
    description: "Fecha y contenido de cada clase, por sección.",
    href: "/cronograma",
  },
  {
    id: "evaluacion",
    label: "Plan de evaluación",
    description: "Ponderaciones, reglas de los Kahoots y fechas clave.",
    href: "/evaluacion",
  },
  {
    id: "laboratorios",
    label: "Laboratorios",
    description: "Las 6 prácticas, sus guías y las normas de la sesión.",
    href: "/laboratorios",
  },
];

// Se derivan del catálogo para que el home y /interactivos no se
// desincronicen cuando se publique un simulador nuevo.
export const enlacesMaterialInteractivo = interactivos
  .filter((item) => item.estado === "disponible")
  .map((item) => ({
    id: item.id,
    label: item.titulo,
    description: item.resumen,
    href: item.href,
  }));

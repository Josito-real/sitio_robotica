// Documentos publicados del curso. Para agregar las láminas de un tema nuevo,
// copia el PDF a public/laminas y añade una entrada aquí con su número de tema.
export const silabo = {
  titulo: "Sílabo del curso",
  descripcion:
    "El documento oficial de la materia: información general, objetivos, contenido temático, plan de evaluación, laboratorios, tareas, proyecto final y cronograma de ambas secciones.",
  archivo: "/documentos/silabo-fpten27-2627-1.pdf",
  paginas: 13,
  peso: "250 KB",
  periodo: "Período 2627-1 · septiembre – diciembre 2026",
};

export const laminas = [
  {
    id: "programa",
    titulo: "Programa del curso",
    descripcion:
      "Presentación de apertura: cómo está organizada la materia y qué se espera del trimestre.",
    archivo: "/laminas/00-programa.pdf",
    paginas: 21,
    peso: "1,0 MB",
  },
  {
    id: "tema-1",
    tema: 1,
    titulo: "Definición y morfología de robots",
    archivo: "/laminas/01-definicion-y-morfologia-de-robots.pdf",
    paginas: 31,
    peso: "1,9 MB",
  },
  {
    id: "tema-2",
    tema: 2,
    titulo: "Ejes de coordenadas en robótica",
    archivo: "/laminas/02-ejes-de-coordenadas-en-robotica.pdf",
    paginas: 20,
    peso: "1,3 MB",
  },
  {
    id: "tema-3",
    tema: 3,
    titulo: "Estructura mecánica de un robot",
    archivo: "/laminas/03-estructura-mecanica-de-un-robot.pdf",
    paginas: 27,
    peso: "2,4 MB",
  },
];

export function laminasDelTema(numeroDeTema) {
  return laminas.filter((lamina) => lamina.tema === numeroDeTema);
}

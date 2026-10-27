// Documentos publicados del curso. Para agregar las láminas de un tema nuevo,
// copia el PDF a public/laminas y añade una entrada aquí con su número de tema.
export const silabo = {
  titulo: "Sílabo del curso",
  descripcion:
    "El documento oficial de la materia: información general, objetivos, contenido temático, plan de evaluación, laboratorios, el ejercicio evaluado en clase, la tarea de MATLAB, el proyecto final y el cronograma de ambas secciones.",
  archivo: "/documentos/silabo-fpten27-2627-1.pdf",
  paginas: 14,
  peso: "264 KB",
  periodo: "Período 2627-1 · septiembre – diciembre 2026",
};

// Documentos de referencia del curso, aparte del sílabo. Son los mismos PDF
// que el profesor reparte en clase.
export const documentos = [
  {
    id: "plan-evaluacion",
    titulo: "Plan de evaluación",
    descripcion:
      "Las diez actividades evaluadas del trimestre, con su semana, su porcentaje y si son grupales o individuales.",
    archivo: "/documentos/plan-de-evaluacion-fpten27.pdf",
    paginas: 1,
    peso: "66 KB",
  },
  {
    id: "cronograma-lunes-y-miercoles",
    titulo: "Cronograma — lunes y miércoles",
    descripcion:
      "Las 12 semanas del trimestre para las secciones de lunes y miércoles, con sus evaluaciones y entregas.",
    archivo: "/documentos/cronograma-lunes-y-miercoles-fpten27.pdf",
    paginas: 1,
    peso: "101 KB",
  },
  {
    id: "cronograma-martes-y-jueves",
    titulo: "Cronograma — martes y jueves",
    descripcion:
      "Las 12 semanas del trimestre para las secciones de martes y jueves, con sus evaluaciones y entregas.",
    archivo: "/documentos/cronograma-martes-y-jueves-fpten27.pdf",
    paginas: 1,
    peso: "92 KB",
  },
];

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
  {
    id: "tema-4-1",
    tema: 4,
    parte: "4.1",
    titulo: "Interpretación de señales de entrada y salida",
    archivo: "/laminas/04-1-interpretacion-de-senales-de-entrada-y-salida.pdf",
    paginas: 19,
    peso: "2,1 MB",
  },
  {
    id: "tema-4-2",
    tema: 4,
    parte: "4.2",
    titulo: "Acondicionamiento de señales",
    archivo: "/laminas/04-2-acondicionamiento-de-senales.pdf",
    paginas: 15,
    peso: "2,2 MB",
  },
  {
    id: "tema-4-3",
    tema: 4,
    parte: "4.3",
    titulo: "Comunicación serial",
    archivo: "/laminas/04-3-comunicacion-serial.pdf",
    paginas: 10,
    peso: "1,2 MB",
  },
  {
    id: "tema-5-1",
    tema: 5,
    parte: "5.1",
    titulo: "Microprocesador vs. microcontrolador",
    archivo: "/laminas/05-1-microprocesador-vs-microcontrolador.pdf",
    paginas: 27,
    peso: "1,8 MB",
  },
  {
    id: "tema-5-2",
    tema: 5,
    parte: "5.2",
    titulo: "Arduino, ESP32 y Raspberry Pi",
    archivo: "/laminas/05-2-arduino-esp32-raspberry-pi.pdf",
    paginas: 55,
    peso: "2,9 MB",
  },

  // Anunciadas pero sin publicar: la tarjeta se ve con los botones
  // inertes y el PDF no esta en el servidor. Para publicar una:
  //   node scripts/activar-lamina.mjs tema-6-1
  // El Tema 12 apunta a Redes neuronales de forma provisional, a
  // confirmar con el profesor antes de activarlo.
  {
    id: "tema-6-1",
    tema: 6,
    parte: "6.1",
    titulo: "Sensores: tipos, posición y proximidad",
    archivo: "/laminas/06-1-sensores-posicion-y-proximidad.pdf",
    paginas: 44,
    peso: "4,0 MB",
  },
  {
    id: "tema-6-2",
    tema: 6,
    parte: "6.2",
    titulo: "Sensores: velocidad, aceleración, presión y temperatura",
    archivo: "/laminas/06-2-sensores-velocidad-aceleracion-y-temperatura.pdf",
    paginas: 30,
    peso: "4,6 MB",
  },
  {
    id: "tema-7",
    tema: 7,
    titulo: "Actuadores",
    archivo: "/laminas/07-actuadores.pdf",
    paginas: 53,
    peso: "11,5 MB",
  },
  {
    id: "tema-8-1",
    tema: 8,
    parte: "8.1",
    titulo: "Cinemática directa: matrices de transformación",
    archivo: "/laminas/08-1-cinematica-directa.pdf",
    paginas: 37,
    peso: "1,7 MB",
  },
  {
    id: "tema-8-2",
    tema: 8,
    parte: "8.2",
    titulo: "Cinemática inversa: matriz Jacobiana",
    archivo: "/laminas/08-2-cinematica-inversa-jacobiana.pdf",
    paginas: 26,
    peso: "2,4 MB",
  },
  {
    id: "tema-8-3",
    tema: 8,
    parte: "8.3",
    titulo: "Ejercicios de Denavit-Hartenberg",
    archivo: "/laminas/08-3-ejercicios-dh.pdf",
    paginas: 6,
    peso: "1,0 MB",
  },
  {
    id: "tema-9",
    tema: 9,
    titulo: "Generación de trayectorias",
    estado: "proximamente",
    origen: "9 - Generación de trayectorias.pdf",
    destino: "/laminas/09-generacion-de-trayectorias.pdf",
  },
  {
    id: "tema-10",
    tema: 10,
    titulo: "Lenguajes de robótica: ROS 2",
    estado: "proximamente",
    origen: "10 - Lenguajes de robótica_ROS2.pdf",
    destino: "/laminas/10-lenguajes-de-robotica-ros2.pdf",
  },
  {
    id: "tema-11",
    tema: 11,
    titulo: "Visión artificial",
    estado: "proximamente",
    origen: "Robotic_Vision.pdf",
    destino: "/laminas/11-vision-artificial.pdf",
  },
  {
    id: "tema-12",
    tema: 12,
    titulo: "Redes neuronales",
    estado: "proximamente",
    origen: "7_1.-Redes neuronales.pdf",
    destino: "/laminas/12-redes-neuronales.pdf",
  },
];

// Material de preparación de un tema: archivos que no son solo láminas
// (guía más paquete de trabajo) y los pasos para usarlos.
export const recursosDeTema = [
  {
    id: "tema-8-herramienta-cinematica",
    tema: 8,
    titulo: "Herramienta de cinemática en MATLAB — material de preparación",
    descripcion:
      "Guía para instalar MATLAB con la licencia de UNIMET, conocer la herramienta de cinemática y practicar con un robot de ejemplo de 5 grados de libertad: tabla de Denavit-Hartenberg, cinemática directa e inversa, espacio de trabajo y simulación de láser y pinza.",
    archivos: [
      {
        id: "guia",
        etiqueta: "Guía (PDF)",
        archivo: "/materiales/tema-8/Guia_Herramienta_Cinematica.pdf",
      },
      {
        id: "paquete",
        etiqueta: "Paquete MATLAB (.zip)",
        archivo: "/materiales/tema-8/Herramienta_Cinematica_Practica.zip",
        descargar: true,
      },
    ],
    detalleArchivos: "La guía tiene 24 páginas (1,5 MB); el paquete pesa 235 KB.",
    requisitos:
      "MATLAB R2021a o posterior con Robotics System Toolbox (incluidos en la licencia institucional de UNIMET).",
    pasos: [
      "Lee la guía e instala MATLAB.",
      "Descomprime el .zip y abre tarea_cinematica.m.",
      "Ejecuta el script por secciones (Ctrl + Enter).",
      "Deriva la tabla DH del modelo de práctica en tabla_dh.m, verifícala con la sección 3 y compárala después con tabla_dh_solucion.m.",
    ],
  },
];

export function recursosDelTema(numeroDeTema) {
  return recursosDeTema.filter((recurso) => recurso.tema === numeroDeTema);
}

export function laminasDelTema(numeroDeTema) {
  return laminas.filter((lamina) => lamina.tema === numeroDeTema);
}

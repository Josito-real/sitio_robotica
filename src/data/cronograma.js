const DIAS = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function formatFecha(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const dia = DIAS[date.getUTCDay()];
  const mes = MESES[date.getUTCMonth()];
  return `${dia.charAt(0).toUpperCase()}${dia.slice(1)} ${date.getUTCDate()} de ${mes}`;
}

// Contenido de las 24 clases, común a ambas secciones — solo cambian las
// fechas según los días de la semana en que se dicte cada sección.
const CONTENIDO_SEMANAS = [
  {
    semana: 1,
    clase1: {
      numero: 1,
      tipo: "clase",
      contenido:
        "Tema 1: Introducción a la robótica. Antecedentes, definición de robot, articulación, eslabón y grados de libertad (GDL).",
    },
    clase2: {
      numero: 2,
      tipo: "clase",
      contenido:
        "Tema 1 (cont.): Aplicaciones industriales. Tema 2: Morfología del robot — clasificación y configuraciones.",
    },
    hitos: [
      "Publicación de directrices de la Fase 1 del proyecto final en Aulas Virtuales.",
    ],
  },
  {
    semana: 2,
    clase1: {
      numero: 3,
      tipo: "clase",
      contenido:
        "Tema 3 y 4: Estructura mecánica del manipulador. Configuraciones clásicas (Cartesiano, SCARA, Antropomórfico). Análisis de GDL.",
    },
    clase2: {
      numero: 4,
      tipo: "clase",
      contenido:
        "Tema 5: Señales de entrada y salida. Microcontroladores: Arduino, ESP-32 y Raspberry Pi. Aplicaciones y programación.",
    },
    hitos: [],
  },
  {
    semana: 3,
    clase1: {
      numero: 5,
      tipo: "clase",
      contenido:
        "Tema 6: Sensores de Posición (Potenciómetro, Encoder) y Proximidad (Óptico, Inductivo, Ultrasónico, Infrarrojo).",
    },
    clase2: {
      numero: 6,
      tipo: "clase",
      contenido:
        "Tema 6 (cont.): Sensores de Velocidad, Aceleración, Presión y Temperatura. Acondicionamiento de señal.",
    },
    hitos: [],
  },
  {
    semana: 4,
    clase1: {
      numero: 7,
      tipo: "clase",
      contenido:
        "Tema 7: Actuadores — Solenoides, Motores DC (control PWM y Puentes H), Motores Paso a Paso y Servomotores.",
    },
    clase2: {
      numero: 8,
      tipo: "lab",
      contenido: "LAB 1 — Programación de microcontroladores (Arduino).",
    },
    hitos: [
      "Fecha límite de la Fase 1 del proyecto final: anteproyecto y boceto del diseño.",
    ],
  },
  {
    semana: 5,
    clase1: {
      numero: 9,
      tipo: "lab",
      contenido:
        "LAB 2 — Adquisición de datos con sensores y microcontroladores (Arduino).",
    },
    clase2: {
      numero: 10,
      tipo: "lab",
      contenido: "LAB 3 — Control de actuadores (Arduino).",
    },
    hitos: [
      "Publicación de directrices de la Fase 2 del proyecto final en Aulas Virtuales.",
    ],
  },
  {
    semana: 6,
    clase1: {
      numero: 11,
      tipo: "examen",
      contenido: "Primer examen — Temas 1 al 7.",
    },
    clase2: {
      numero: 12,
      tipo: "clase",
      contenido:
        "Tema 8: Cinemática Directa — Matemáticas para robótica, matrices de transformación homogénea, notación Denavit-Hartenberg (DH).",
    },
    hitos: [],
  },
  {
    semana: 7,
    clase1: {
      numero: 13,
      tipo: "clase",
      contenido:
        "Tema 8 (cont.): Cinemática Inversa — métodos analíticos y numéricos. Espacio de trabajo y restricciones.",
    },
    clase2: {
      numero: 14,
      tipo: "clase",
      contenido:
        "Tema 9: Generación de trayectorias (PTP, Lineal, Circular). Detección de colisiones y puntos de paso de seguridad.",
    },
    hitos: [],
  },
  {
    semana: 8,
    clase1: {
      numero: 15,
      tipo: "clase",
      contenido:
        "Tema 10: Lenguajes de programación robótica (RAPID, KRL, Python). Introducción a ROS 2: nodos, tópicos y mensajes.",
    },
    clase2: {
      numero: 16,
      tipo: "clase",
      contenido:
        "Tema 11: Visión Artificial — Procesamiento de imágenes con OpenCV, detección de colores, bordes y reconocimiento de patrones.",
    },
    hitos: [
      "Fecha límite de la Fase 2 del proyecto final: estructura física y software.",
    ],
  },
  {
    semana: 9,
    clase1: {
      numero: 17,
      tipo: "clase",
      contenido:
        "Tema 12: Redes neuronales y planificación de movimientos (Path Planning) aplicados a robótica.",
    },
    clase2: {
      numero: 18,
      tipo: "lab",
      contenido: "LAB 4 — Dobot Magician: pick and place, trayectorias y programación.",
    },
    hitos: [
      "Publicación de directrices de la Fase 3 del proyecto final en Aulas Virtuales.",
    ],
  },
  {
    semana: 10,
    clase1: {
      numero: 19,
      tipo: "lab",
      contenido:
        "LAB 5 — PiCar-X Sesión 1: conexión, configuración y movimiento básico.",
    },
    clase2: {
      numero: 20,
      tipo: "lab",
      contenido:
        "LAB 6 — PiCar-X Sesión 2: sensores, evasión de obstáculos y seguimiento de línea.",
    },
    hitos: [],
  },
  {
    semana: 11,
    clase1: {
      numero: 21,
      tipo: "lab",
      contenido:
        "LAB 7 — Bioloid: programación de rutinas de movimiento y comportamiento.",
    },
    clase2: {
      numero: 22,
      tipo: "clase",
      contenido:
        "Simulación en CoppeliaSim — Fundamentos, importación de modelos y programación de escenas robóticas.",
    },
    hitos: [
      "Inicio de la ventana de defensas de la Fase 3 (semanas 11–12, horario a coordinar con el profesor).",
    ],
  },
  {
    semana: 12,
    clase1: {
      numero: 23,
      tipo: "examen",
      contenido: "Segundo examen — Temas 8 al 12.",
    },
    clase2: {
      numero: 24,
      tipo: "revision",
      contenido: "Revisión de notas finales.",
    },
    hitos: ["Cierre de la ventana de defensas de la Fase 3 del proyecto final."],
  },
];

// Fechas [claseImpar, clasePar] de cada semana, confirmadas contra el
// calendario real (día de la semana verificado, no calculado a mano).
const FECHAS_MARTES_JUEVES = [
  ["2026-09-15", "2026-09-17"],
  ["2026-09-22", "2026-09-24"],
  ["2026-09-29", "2026-10-01"],
  ["2026-10-06", "2026-10-08"],
  ["2026-10-13", "2026-10-15"],
  ["2026-10-20", "2026-10-22"],
  ["2026-10-27", "2026-10-29"],
  ["2026-11-03", "2026-11-05"],
  ["2026-11-10", "2026-11-12"],
  ["2026-11-17", "2026-11-19"],
  ["2026-11-24", "2026-11-26"],
  ["2026-12-01", "2026-12-03"],
];

// El lunes 12 de octubre de 2026 es feriado (Día de la Resistencia
// Indígena) — esa clase se omite y el resto de las fechas de esta sección
// se recorre en consecuencia para conservar las 24 clases. Por eso, a
// partir de la Semana 5, el orden dentro de la semana pasa a ser
// miércoles-antes-que-lunes.
const FECHAS_LUNES_MIERCOLES = [
  ["2026-09-14", "2026-09-16"],
  ["2026-09-21", "2026-09-23"],
  ["2026-09-28", "2026-09-30"],
  ["2026-10-05", "2026-10-07"],
  ["2026-10-14", "2026-10-19"],
  ["2026-10-21", "2026-10-26"],
  ["2026-10-28", "2026-11-02"],
  ["2026-11-04", "2026-11-09"],
  ["2026-11-11", "2026-11-16"],
  ["2026-11-18", "2026-11-23"],
  ["2026-11-25", "2026-11-30"],
  ["2026-12-02", "2026-12-07"],
];

export const secciones = [
  {
    id: "martes-jueves",
    nombre: "Martes y Jueves",
    dias: "Martes y jueves",
    fechas: FECHAS_MARTES_JUEVES,
  },
  {
    id: "lunes-miercoles",
    nombre: "Lunes y Miércoles",
    dias: "Lunes y miércoles",
    fechas: FECHAS_LUNES_MIERCOLES,
    nota: "El lunes 12 de octubre de 2026 es feriado (Día de la Resistencia Indígena), así que esa clase no se dicta. A partir de la Semana 5, el resto de las fechas se recorre para conservar las 24 clases del curso.",
  },
];

export function getCronograma(seccionId) {
  const seccion = secciones.find((s) => s.id === seccionId) ?? secciones[0];

  return CONTENIDO_SEMANAS.map((semana, index) => {
    const [fecha1, fecha2] = seccion.fechas[index];
    return {
      ...semana,
      clase1: { ...semana.clase1, fecha: formatFecha(fecha1) },
      clase2: { ...semana.clase2, fecha: formatFecha(fecha2) },
    };
  });
}

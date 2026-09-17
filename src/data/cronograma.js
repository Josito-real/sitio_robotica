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

export const periodo = {
  nombre: "Trimestre septiembre – diciembre 2026 · Período 2627-1",
  inicio: "Lunes 14 de septiembre de 2026",
  cierre: "Viernes 4 de diciembre de 2026",
  duracion: "12 semanas",
  lugar: "Laboratorio de Autómatas",
};

// Contenido tomado del sílabo FPTEN27 del período 2627-1, sección 11.
// La Sección 1 pierde la clase del lunes 12 de octubre por feriado nacional
// y dicta 23 clases: el contenido de las Semanas 1 a 3 va comprimido. Desde
// la Semana 6 ambas secciones avanzan al mismo ritmo.
const CLASES_SECCION_1 = [
  { semana: 1, fecha: "2026-09-14", tipo: "teoria", contenido: "Tema 1: Definición y morfología de robots. Criterios que definen a un robot, eslabones y articulaciones, efector final y sus tipos de sujeción, y grados de libertad." },
  { semana: 1, fecha: "2026-09-16", tipo: "teoria", contenido: "Tema 2: Ejes de coordenadas — espacios articular, de tarea y de trabajo; configuraciones cartesiana, cilíndrica, esférica, articulada, SCARA y Delta. Tema 3: Estructura mecánica: alimentación, percepción, actuadores y transmisión." },
  { semana: 2, fecha: "2026-09-21", tipo: "teoria", contenido: "Tema 4: Señales de entrada y salida. Interpretación, acondicionamiento de señales y comunicación serial." },
  { semana: 2, fecha: "2026-09-23", tipo: "teoria", contenido: "Tema 5: Microprocesador vs. microcontrolador. Arduino, ESP32 y Raspberry Pi." },
  { semana: 3, fecha: "2026-09-28", tipo: "teoria", contenido: "Tema 6: Sensores de posición, proximidad, velocidad, aceleración, presión y temperatura." },
  { semana: 3, fecha: "2026-09-30", tipo: "teoria", contenido: "Tema 7: Actuadores. Solenoides, motores DC (control PWM y puentes H), motores paso a paso y servomotores." },
  { semana: 4, fecha: "2026-10-05", tipo: "laboratorio", contenido: "Práctica 1: Programación de microcontroladores (Arduino)." },
  { semana: 4, fecha: "2026-10-07", tipo: "laboratorio", contenido: "Práctica 2: Adquisición de datos con sensores (Arduino)." },
  { semana: 5, fecha: "2026-10-12", tipo: "feriado", contenido: "Feriado nacional — no hay clase." },
  { semana: 5, fecha: "2026-10-14", tipo: "laboratorio", contenido: "Práctica 3: Control de actuadores (Arduino)." },
  { semana: 6, fecha: "2026-10-19", tipo: "parcial", contenido: "Primer parcial — Temas 1 al 7." },
  { semana: 6, fecha: "2026-10-21", tipo: "teoria", contenido: "Tema 8: Cinemática directa. Matrices de transformación homogénea y notación Denavit-Hartenberg.", marcador: "Publicación de directrices del Proyecto Final" },
  { semana: 7, fecha: "2026-10-26", tipo: "teoria", contenido: "Tema 8 (cont.): Cinemática inversa, métodos analíticos y numéricos. Matriz Jacobiana. Espacio de trabajo y restricciones." },
  { semana: 7, fecha: "2026-10-28", tipo: "teoria", contenido: "Clase de MATLAB: resolución computacional de cinemática con guía práctica.", marcador: "Asignación de la Tarea 1" },
  { semana: 8, fecha: "2026-11-02", tipo: "teoria", contenido: "Tema 9: Generación de trayectorias (PTP, lineal, circular). Detección de colisiones y puntos de paso de seguridad.", marcador: "Entrega de la Tarea 1" },
  { semana: 8, fecha: "2026-11-04", tipo: "teoria", contenido: "Tema 10: Lenguajes de programación robótica (RAPID, KRL, Python). Arquitectura ROS 2: nodos, tópicos y paradigma publicador/suscriptor. Demostración en MATLAB.", marcador: "Asignación de la Tarea 2" },
  { semana: 9, fecha: "2026-11-09", tipo: "teoria", contenido: "Tema 11: Visión artificial. Procesamiento de imágenes con OpenCV, detección de colores, bordes y reconocimiento de patrones." },
  { semana: 9, fecha: "2026-11-11", tipo: "teoria", contenido: "Tema 12: Redes neuronales y planificación de movimientos (Dijkstra, A*, RRT, RRT*, campos potenciales) aplicados a robótica." },
  { semana: 10, fecha: "2026-11-16", tipo: "laboratorio", contenido: "Práctica 4: PiCar-X con Blockly — conexión, configuración y movimiento básico." },
  { semana: 10, fecha: "2026-11-18", tipo: "laboratorio", contenido: "Práctica 5: PiCar-X desde la Raspberry Pi — sensores, evasión de obstáculos y seguimiento de línea.", marcador: "Entrega de la Tarea 2" },
  { semana: 11, fecha: "2026-11-23", tipo: "laboratorio", contenido: "Práctica 6: Dobot Magician — pick and place y generación de trayectorias.", marcador: "Coordinación de horarios de defensa" },
  { semana: 11, fecha: "2026-11-25", tipo: "parcial", contenido: "Segundo parcial — Temas 8 al 12." },
  { semana: 12, fecha: "2026-11-30", tipo: "defensa", contenido: "Defensas del Proyecto Final." },
  { semana: 12, fecha: "2026-12-02", tipo: "defensa", contenido: "Defensas del Proyecto Final. Revisión de notas finales." },
];

const CLASES_SECCION_2 = [
  { semana: 1, fecha: "2026-09-15", tipo: "teoria", contenido: "Tema 1: Definición y morfología de robots. Criterios que definen a un robot, eslabones y articulaciones, efector final y sus tipos de sujeción, y grados de libertad." },
  { semana: 1, fecha: "2026-09-17", tipo: "teoria", contenido: "Tema 2: Ejes de coordenadas — espacios articular, de tarea y de trabajo; configuraciones cartesiana, cilíndrica, esférica, articulada, SCARA y Delta. Tema 3: Estructura mecánica: alimentación, percepción, actuadores y transmisión." },
  { semana: 2, fecha: "2026-09-22", tipo: "teoria", contenido: "Tema 4: Señales de entrada y salida. Interpretación, acondicionamiento de señales y comunicación serial." },
  { semana: 2, fecha: "2026-09-24", tipo: "teoria", contenido: "Tema 5: Microprocesador vs. microcontrolador. Arduino, ESP32 y Raspberry Pi." },
  { semana: 3, fecha: "2026-09-29", tipo: "teoria", contenido: "Tema 6: Sensores de posición (potenciómetro, encoder) y de proximidad (óptico, inductivo, ultrasónico, infrarrojo)." },
  { semana: 3, fecha: "2026-10-01", tipo: "teoria", contenido: "Tema 6 (cont.): Sensores de velocidad, aceleración, presión y temperatura." },
  { semana: 4, fecha: "2026-10-06", tipo: "teoria", contenido: "Tema 7: Actuadores. Solenoides, motores DC (control PWM y puentes H), motores paso a paso y servomotores." },
  { semana: 4, fecha: "2026-10-08", tipo: "laboratorio", contenido: "Práctica 1: Programación de microcontroladores (Arduino)." },
  { semana: 5, fecha: "2026-10-13", tipo: "laboratorio", contenido: "Práctica 2: Adquisición de datos con sensores (Arduino)." },
  { semana: 5, fecha: "2026-10-15", tipo: "laboratorio", contenido: "Práctica 3: Control de actuadores (Arduino)." },
  { semana: 6, fecha: "2026-10-20", tipo: "parcial", contenido: "Primer parcial — Temas 1 al 7." },
  { semana: 6, fecha: "2026-10-22", tipo: "teoria", contenido: "Tema 8: Cinemática directa. Matrices de transformación homogénea y notación Denavit-Hartenberg.", marcador: "Publicación de directrices del Proyecto Final" },
  { semana: 7, fecha: "2026-10-27", tipo: "teoria", contenido: "Tema 8 (cont.): Cinemática inversa, métodos analíticos y numéricos. Matriz Jacobiana. Espacio de trabajo y restricciones." },
  { semana: 7, fecha: "2026-10-29", tipo: "teoria", contenido: "Clase de MATLAB: resolución computacional de cinemática con guía práctica.", marcador: "Asignación de la Tarea 1" },
  { semana: 8, fecha: "2026-11-03", tipo: "teoria", contenido: "Tema 9: Generación de trayectorias (PTP, lineal, circular). Detección de colisiones y puntos de paso de seguridad.", marcador: "Entrega de la Tarea 1" },
  { semana: 8, fecha: "2026-11-05", tipo: "teoria", contenido: "Tema 10: Lenguajes de programación robótica (RAPID, KRL, Python). Arquitectura ROS 2: nodos, tópicos y paradigma publicador/suscriptor. Demostración en MATLAB.", marcador: "Asignación de la Tarea 2" },
  { semana: 9, fecha: "2026-11-10", tipo: "teoria", contenido: "Tema 11: Visión artificial. Procesamiento de imágenes con OpenCV, detección de colores, bordes y reconocimiento de patrones." },
  { semana: 9, fecha: "2026-11-12", tipo: "teoria", contenido: "Tema 12: Redes neuronales y planificación de movimientos (Dijkstra, A*, RRT, RRT*, campos potenciales) aplicados a robótica." },
  { semana: 10, fecha: "2026-11-17", tipo: "laboratorio", contenido: "Práctica 4: PiCar-X con Blockly — conexión, configuración y movimiento básico." },
  { semana: 10, fecha: "2026-11-19", tipo: "laboratorio", contenido: "Práctica 5: PiCar-X desde la Raspberry Pi — sensores, evasión de obstáculos y seguimiento de línea.", marcador: "Entrega de la Tarea 2" },
  { semana: 11, fecha: "2026-11-24", tipo: "laboratorio", contenido: "Práctica 6: Dobot Magician — pick and place y generación de trayectorias.", marcador: "Coordinación de horarios de defensa" },
  { semana: 11, fecha: "2026-11-26", tipo: "parcial", contenido: "Segundo parcial — Temas 8 al 12." },
  { semana: 12, fecha: "2026-12-01", tipo: "defensa", contenido: "Defensas del Proyecto Final." },
  { semana: 12, fecha: "2026-12-03", tipo: "defensa", contenido: "Defensas del Proyecto Final. Revisión de notas finales." },
];

export const secciones = [
  {
    id: "seccion-1",
    nombre: "Sección 1",
    dias: "Lunes y miércoles",
    horario: "7:00 – 8:30 a.m.",
    totalClases: 23,
    clases: CLASES_SECCION_1,
    nota: "El lunes 12 de octubre de 2026 es feriado nacional, así que esta sección dicta 23 clases en lugar de 24. El contenido de las Semanas 1 a 3 va comprimido para compensarlo: desde la Semana 6 ambas secciones avanzan al mismo ritmo, con las mismas evaluaciones y las mismas fechas de entrega.",
  },
  {
    id: "seccion-2",
    nombre: "Sección 2",
    dias: "Martes y jueves",
    horario: "7:00 – 8:30 a.m.",
    totalClases: 24,
    clases: CLASES_SECCION_2,
  },
];

export function getSemanas(seccionId) {
  const seccion = secciones.find((s) => s.id === seccionId) ?? secciones[0];
  const semanas = [];

  for (const clase of seccion.clases) {
    let semana = semanas.find((s) => s.numero === clase.semana);
    if (!semana) {
      semana = { numero: clase.semana, clases: [] };
      semanas.push(semana);
    }
    semana.clases.push({ ...clase, fechaLabel: formatFecha(clase.fecha) });
  }

  return semanas;
}

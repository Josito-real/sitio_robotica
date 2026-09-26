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
    estado: "proximamente",
    origen: "6.1 - Sensores.pdf",
    destino: "/laminas/06-1-sensores-posicion-y-proximidad.pdf",
  },
  {
    id: "tema-6-2",
    tema: 6,
    parte: "6.2",
    titulo: "Sensores: velocidad, aceleración, presión y temperatura",
    estado: "proximamente",
    origen: "6.2 - Sensores.pdf",
    destino: "/laminas/06-2-sensores-velocidad-aceleracion-y-temperatura.pdf",
  },
  {
    id: "tema-7",
    tema: 7,
    titulo: "Actuadores",
    estado: "proximamente",
    origen: "7 - Actuadores.pdf",
    destino: "/laminas/07-actuadores.pdf",
  },
  {
    id: "tema-8-1",
    tema: 8,
    parte: "8.1",
    titulo: "Cinemática directa: matrices de transformación",
    estado: "proximamente",
    origen: "8.1 - Cinemática Directa - Matrices de transformación.pdf",
    destino: "/laminas/08-1-cinematica-directa.pdf",
  },
  {
    id: "tema-8-2",
    tema: 8,
    parte: "8.2",
    titulo: "Cinemática inversa: matriz Jacobiana",
    estado: "proximamente",
    origen: "8.2 - Cinemática Inversa - Matriz Jacobiana.pdf",
    destino: "/laminas/08-2-cinematica-inversa-jacobiana.pdf",
  },
  {
    id: "tema-8-3",
    tema: 8,
    parte: "8.3",
    titulo: "Ejercicios de Denavit-Hartenberg",
    estado: "proximamente",
    origen: "8.3 - Ejercicios DH.pdf",
    destino: "/laminas/08-3-ejercicios-dh.pdf",
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

export function laminasDelTema(numeroDeTema) {
  return laminas.filter((lamina) => lamina.tema === numeroDeTema);
}

// Temario oficial FPTEN27, período 2627-1. La numeración coincide con los
// archivos de presentaciones del profesor: debe respetarse literalmente.
export const temario = [
  {
    id: 1,
    titulo: "Definición y morfología de robots",
    subtemas: [
      "Criterios que definen a un robot",
      "El manipulador, eslabones y articulaciones rotacionales y prismáticas",
      "Efector final: manipulación simple y dextra, pinzas mecánicas, ventosas de vacío y electroimán",
      "Grados de libertad y fórmula de Grübler",
    ],
  },
  {
    id: 2,
    titulo: "Ejes de coordenadas en robótica",
    subtemas: [
      "Espacio articular, espacio de tarea y espacio de trabajo",
      "Clasificación por sistema de coordenadas: cartesiano, cilíndrico, esférico y articulado",
      "Configuraciones SCARA, Delta y antropomórfica",
      "Criterios de selección y compromisos entre velocidad, carga, alcance, precisión y costo",
    ],
  },
  {
    id: 3,
    titulo: "Estructura mecánica de un robot",
    subtemas: [
      "Anatomía del robot",
      "Alimentación: baterías de litio, reguladores, etapa de potencia y de control",
      "Accionamiento eléctrico, hidráulico y neumático",
      "Sensores internos y externos",
      "Actuadores y transmisión: engranajes, bandas síncronas, cadenas y husillos a bolas",
    ],
  },
  {
    id: 4,
    titulo: "Señales de entrada y salida",
    descripcion:
      "Interpretación de señales, acondicionamiento, conversión ADC/DAC y comunicación serial.",
  },
  {
    id: 5,
    titulo: "Microprocesador vs. microcontrolador",
    descripcion: "Arduino, ESP32 y Raspberry Pi.",
  },
  {
    id: 6,
    titulo: "Sensores",
    descripcion:
      "Posición, proximidad, velocidad, aceleración, presión y temperatura.",
  },
  {
    id: 7,
    titulo: "Actuadores",
    descripcion:
      "Solenoides, motores DC con PWM y puentes H, motores paso a paso, servomotores y actuadores neumáticos.",
  },
  {
    id: 8,
    titulo: "Cinemática de robots",
    descripcion:
      "Matrices de transformación homogénea, Denavit-Hartenberg, cinemática inversa, matriz Jacobiana y espacio de trabajo.",
  },
  {
    id: 9,
    titulo: "Generación de trayectorias",
    descripcion:
      "PTP, lineal y circular, detección de colisiones y puntos de paso de seguridad.",
  },
  {
    id: 10,
    titulo: "Lenguajes de robótica y ROS 2",
    descripcion:
      "RAPID, KRL y Python; arquitectura ROS 2 y paradigma publicador/suscriptor.",
  },
  {
    id: 11,
    titulo: "Visión artificial",
    descripcion:
      "OpenCV, detección de colores, bordes y formas, y reconocimiento de patrones.",
  },
  {
    id: 12,
    titulo: "Inteligencia artificial en robótica",
    descripcion:
      "Redes neuronales y planificación de movimientos (Dijkstra, A*, RRT, RRT* y campos potenciales).",
  },
];

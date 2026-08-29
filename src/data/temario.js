export const temario = [
  {
    id: 1,
    titulo: "Introducción a la Robótica",
    subtemas: [
      "Antecedentes históricos y evolución de la robótica.",
      "Conceptos básicos: articulación, eslabón, grados de libertad (GDL).",
      "Aplicaciones industriales y tendencias actuales.",
    ],
  },
  {
    id: 2,
    titulo: "Morfología del Robot",
    subtemas: [
      "Clasificación de robots por morfología.",
      "Configuraciones clásicas: Cartesiano, Cilíndrico, Polar, SCARA, Antropomórfico.",
    ],
  },
  {
    id: "3-4",
    titulo: "Estructura Mecánica",
    subtemas: [
      "Estructura mecánica del manipulador: cadena cinemática abierta y cerrada.",
      "Diseño y simulación de piezas robóticas.",
      "Identificación de morfología y grados de libertad en robots reales.",
    ],
  },
  {
    id: 5,
    titulo: "Señales, Entradas y Salidas",
    subtemas: [
      "Tipos de señales: analógicas y digitales.",
      "Señales de entrada (sensores) y de salida (actuadores). Acondicionamiento y conversión ADC/DAC.",
      "Microcontroladores: Arduino, ESP-32 y Raspberry Pi.",
    ],
  },
  {
    id: 6,
    titulo: "Sensores",
    subtemas: [
      "Sensores de posición: Potenciómetro, Encoder.",
      "Sensores de proximidad: Óptico, Inductivo, Capacitivo, Ultrasónico, Infrarrojo.",
      "Sensores de velocidad, aceleración, presión y temperatura.",
      "Acondicionamiento de señal en sistemas reales.",
    ],
  },
  {
    id: 7,
    titulo: "Actuadores",
    subtemas: [
      "Solenoides y motores DC: control PWM y Puentes H.",
      "Motores Paso a Paso: control por pulsos y microstepping.",
      "Servomotores: lazo cerrado local y control de posición.",
      "Actuadores neumáticos: conceptos básicos.",
    ],
  },
  {
    id: 8,
    titulo: "Cinemática de Robots",
    subtemas: [
      "Matemáticas para robótica: matrices de transformación homogénea.",
      "Cinemática Directa: convenio Denavit-Hartenberg (DH).",
      "Cinemática Inversa: métodos analíticos y numéricos.",
      "Espacio de trabajo y restricciones del manipulador.",
    ],
  },
  {
    id: 9,
    titulo: "Generación de Trayectorias",
    subtemas: [
      "Generación de trayectorias: PTP (Punto a Punto), Lineal y Circular.",
      "Detección de colisiones y puntos de paso de seguridad.",
      "Path Planning: algoritmos clásicos de planificación de rutas.",
    ],
  },
  {
    id: 10,
    titulo: "Lenguajes de Programación Robótica y ROS",
    subtemas: [
      "Lenguajes propietarios: RAPID (ABB), KRL (KUKA).",
      "Programación genérica con Python para robótica.",
      "Introducción a ROS 2: conceptos, nodos, tópicos y mensajes.",
    ],
  },
  {
    id: 11,
    titulo: "Visión Artificial",
    subtemas: [
      "Procesamiento de imágenes con OpenCV.",
      "Detección de colores, bordes y formas.",
      "Reconocimiento de patrones y rostros.",
      "Integración de visión en sistemas robóticos (PiCar-X / Vilib).",
    ],
  },
  {
    id: 12,
    titulo: "Inteligencia Artificial en Robótica",
    subtemas: [
      "Redes neuronales aplicadas a la robótica.",
      "Planificación de movimientos con IA (Path Planning inteligente).",
      "Casos de uso industriales: robótica colaborativa e IA integrada.",
    ],
  },
  {
    id: 13,
    titulo: "Simulación con CoppeliaSim",
    subtemas: [
      "Interfaz y fundamentos de CoppeliaSim.",
      "Importación de modelos 3D y creación de escenas robóticas.",
      "Programación de simulaciones y validación de trayectorias.",
    ],
  },
];

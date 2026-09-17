// Temario oficial FPTEN27, período 2627-1. La numeración coincide con los
// archivos de presentaciones del profesor: debe respetarse literalmente.
export const temario = [
  {
    id: 1,
    titulo: "Definición y morfología de robots",
    subtemas: [
      "Criterios que definen a un robot",
      "Componentes fundamentales: el manipulador, eslabones y articulaciones rotacionales y prismáticas",
      "Efector final: manipulación simple y dextra, dispositivos de sujeción (pinzas mecánicas, ventosas de vacío, electroimán) y herramientas especializadas",
      "Grados de libertad: definición, cálculo mediante la fórmula de Grübler y comparación entre robots de 3, 6 y más de 6 GDL",
    ],
  },

  {
    id: 2,
    titulo: "Ejes de coordenadas en robótica",
    subtemas: [
      "Espacio articular, espacio de tarea y espacio de trabajo",
      "Clasificación por sistema de coordenadas: cartesiano, cilíndrico, esférico o polar y articulado o de revoluta, con su espacio de trabajo y aplicaciones características",
      "Configuraciones SCARA, Delta y antropomórfica",
      "Criterios de selección como análisis de compromisos entre velocidad, carga, alcance, precisión y costo",
    ],
  },

  {
    id: 3,
    titulo: "Estructura mecánica de un robot",
    subtemas: [
      "Anatomía general del robot",
      "Sistemas de alimentación: baterías de litio, reguladores de tensión, etapa de potencia y etapa de control",
      "Comparación entre accionamiento eléctrico, hidráulico y neumático",
      "Sensores internos y externos como sistema de percepción",
      "Actuadores y sistemas de transmisión: engranajes, bandas síncronas, cadenas y husillos a bolas",
    ],
  },

  {
    id: 4,
    titulo: "Señales de entrada y salida",
    descripcion:
      "Interpretación de señales analógicas y digitales. Acondicionamiento de señal y conversión ADC/DAC. Comunicación serial.",
  },

  {
    id: 5,
    titulo: "Microprocesador vs. microcontrolador",
    descripcion:
      "Diferencias arquitectónicas y criterios de selección. Plataformas: Arduino, ESP32 y Raspberry Pi.",
  },

  {
    id: 6,
    titulo: "Sensores",
    descripcion:
      "Sensores de posición: potenciómetro y encoder. Sensores de proximidad: óptico, inductivo, capacitivo, ultrasónico e infrarrojo. Sensores de velocidad, aceleración, presión y temperatura.",
  },

  {
    id: 7,
    titulo: "Actuadores",
    descripcion:
      "Solenoides y motores DC: control PWM y puentes H. Motores paso a paso: control por pulsos y microstepping. Servomotores: lazo cerrado local y control de posición. Actuadores neumáticos.",
  },

  {
    id: 8,
    titulo: "Cinemática de robots",
    descripcion:
      "Matrices de transformación homogénea. Cinemática directa: convenio Denavit-Hartenberg. Cinemática inversa: métodos analíticos y numéricos. Matriz Jacobiana. Espacio de trabajo y restricciones.",
  },

  {
    id: 9,
    titulo: "Generación de trayectorias",
    descripcion:
      "Trayectorias punto a punto, lineales y circulares. Detección de colisiones y puntos de paso de seguridad.",
  },

  {
    id: 10,
    titulo: "Lenguajes de robótica y ROS 2",
    descripcion:
      "Lenguajes propietarios: RAPID (ABB) y KRL (KUKA). Programación con Python. Arquitectura ROS 2: nodos, tópicos, mensajes y paradigma publicador/suscriptor.",
  },

  {
    id: 11,
    titulo: "Visión artificial",
    descripcion:
      "Procesamiento de imágenes con OpenCV. Detección de colores, bordes y formas. Reconocimiento de patrones. Integración de visión en sistemas robóticos.",
  },

  {
    id: 12,
    titulo: "Inteligencia artificial en robótica",
    descripcion:
      "Redes neuronales aplicadas a la robótica. Planificación de movimientos: Dijkstra, A*, RRT, RRT* y campos potenciales. Casos de uso industriales.",
  },
];

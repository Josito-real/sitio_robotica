// Catálogo de simuladores. `estado: "proximamente"` deja la tarjeta visible
// pero sin enlace, para ir publicando de a poco sin que la página se vea rota.
export const interactivos = [
  {
    id: "transmision",
    titulo: "Transmisión de potencia",
    tema: "Tema 3",
    resumen:
      "Un par de engranajes engranando: cómo la relación de transmisión intercambia velocidad por torque, y qué pasa con la potencia cuando hay pérdidas.",
    href: "/interactivos/transmision",
    estado: "disponible",
  },
  {
    id: "adc",
    titulo: "Escalamiento ADC",
    tema: "Tema 4",
    resumen:
      "Convierte un voltaje en código digital y escálalo a unidades de ingeniería. Muestra resolución, error de cuantización y la curva escalera del convertidor.",
    href: "/interactivos/adc",
    estado: "disponible",
  },
  {
    id: "sensores",
    titulo: "Sensor ultrasónico y encoder",
    tema: "Tema 6",
    resumen:
      "Tiempo de vuelo a distancia, y resolución angular de un encoder en cuadratura según sus pulsos por revolución.",
    estado: "proximamente",
  },
  {
    id: "pwm",
    titulo: "PWM y puente H",
    tema: "Tema 7",
    resumen:
      "Ajusta el ciclo de trabajo y observa el voltaje medio que ve el motor, junto con la tabla de verdad del puente H para giro, freno y rueda libre.",
    href: "/interactivos/pwm",
    estado: "disponible",
  },
  {
    id: "servo-paso",
    titulo: "Servomotor y motor paso a paso",
    tema: "Tema 7",
    resumen:
      "El ancho del pulso que fija la posición de un servo, y el ángulo por paso de un motor paso a paso según su microstepping. Dos formas opuestas de mover un eje.",
    href: "/interactivos/servo-paso",
    estado: "disponible",
  },
  {
    id: "cinematica",
    titulo: "Cinemática directa de un brazo 2R",
    tema: "Tema 8",
    resumen:
      "Mueve las dos articulaciones y observa dónde queda el efector final, su matriz de transformación homogénea y el espacio de trabajo alcanzable.",
    href: "/interactivos/cinematica",
    estado: "disponible",
  },
  {
    id: "jacobiana",
    titulo: "Jacobiana y singularidades",
    tema: "Tema 8",
    resumen:
      "La elipse de manipulabilidad sobre el mismo brazo 2R: en qué direcciones se mueve bien, y qué pasa cuando el brazo se estira y pierde un grado de libertad.",
    href: "/interactivos/jacobiana",
    estado: "disponible",
  },
  {
    id: "cinematica-inversa",
    titulo: "Cinemática inversa 2R",
    tema: "Tema 8",
    resumen:
      "Elige un punto en el plano y calcula los ángulos que lo alcanzan, con las dos soluciones (codo arriba y codo abajo) y los puntos fuera del alcance.",
    estado: "proximamente",
  },
  {
    id: "trayectorias",
    titulo: "Espacio articular vs. cartesiano",
    tema: "Tema 9",
    resumen:
      "El mismo punto de partida y de llegada, interpolando ángulos o interpolando en línea recta. Por qué existen MOVJ y MOVL, y cuándo la recta no se puede hacer.",
    href: "/interactivos/trayectorias",
    estado: "disponible",
  },
  {
    id: "vision",
    titulo: "Umbral HSV y convolución",
    tema: "Tema 11",
    resumen:
      "Segmenta una imagen por color con umbrales HSV y aplica núcleos de convolución (Sobel, desenfoque, realce) para ver de dónde salen los bordes.",
    href: "/interactivos/vision",
    estado: "disponible",
  },
  {
    id: "path-planning",
    titulo: "Planificación de rutas",
    tema: "Tema 12",
    resumen:
      "Dibuja obstáculos en una grilla y observa cómo exploran Dijkstra, A* y RRT hasta encontrar el camino.",
    estado: "proximamente",
  },
];

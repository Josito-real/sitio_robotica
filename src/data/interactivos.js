// Catálogo de simuladores. `estado: "proximamente"` deja la tarjeta visible
// pero sin enlace, para ir publicando de a poco sin que la página se vea rota.
export const interactivos = [
  {
    id: "adc",
    titulo: "Escalamiento ADC",
    tema: "Tema 5",
    resumen:
      "Convierte un voltaje en código digital y escálalo a unidades de ingeniería. Muestra resolución, error de cuantización y la curva escalera del convertidor.",
    href: "/interactivos/adc",
    estado: "disponible",
  },
  {
    id: "transmision",
    titulo: "Transmisión de potencia",
    tema: "Tema 7",
    resumen:
      "Un par de engranajes: cómo la relación de transmisión intercambia velocidad por torque, y qué pasa con la potencia cuando hay pérdidas.",
    href: "/interactivos/transmision",
    estado: "disponible",
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
    id: "cinematica",
    titulo: "Cinemática directa de un brazo 2R",
    tema: "Tema 8",
    resumen:
      "Mueve las dos articulaciones y observa dónde queda el efector final, su matriz de transformación homogénea y el espacio de trabajo alcanzable.",
    href: "/interactivos/cinematica",
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
    titulo: "Generación de trayectorias",
    tema: "Tema 9",
    resumen:
      "Compara PTP, lineal y circular sobre el mismo par de puntos, con el perfil trapezoidal de velocidad y las curvas de posición, velocidad y aceleración.",
    estado: "proximamente",
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
    id: "path-planning",
    titulo: "Planificación de rutas",
    tema: "Tema 12",
    resumen:
      "Dibuja obstáculos en una grilla y observa cómo exploran Dijkstra, A* y RRT hasta encontrar el camino.",
    estado: "proximamente",
  },
];

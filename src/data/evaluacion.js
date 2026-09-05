export const componentes = [
  {
    id: "laboratorios",
    nombre: "Laboratorios",
    peso: "30%",
    descripcion: "6 prácticas de laboratorio × 5% cada una.",
  },
  {
    id: "matlab",
    nombre: "Tareas de MATLAB",
    peso: "10%",
    descripcion: "2 tareas individuales × 5% cada una.",
  },
  {
    id: "proyecto",
    nombre: "Proyecto final",
    peso: "20%",
    descripcion: "Entrega y defensa única en la Semana 12.",
  },
  {
    id: "parcial-1",
    nombre: "Primer parcial",
    peso: "20%",
    descripcion: "Evaluación teórica — Semana 6, Temas 1 al 7.",
  },
  {
    id: "parcial-2",
    nombre: "Segundo parcial",
    peso: "20%",
    descripcion: "Evaluación teórica y práctica — Semana 11, Temas 8 al 12.",
  },
];

export const tareasMatlab = [
  {
    numero: 1,
    titulo: "Cinemática con MATLAB",
    peso: "5%",
    descripcion:
      "Resolución de problemas de cinemática directa e inversa sobre un manipulador dado: construcción de la tabla de parámetros Denavit-Hartenberg, obtención de las matrices de transformación homogénea, cálculo de la matriz Jacobiana y análisis del espacio de trabajo.",
    asignacion: "Clase de MATLAB de la Semana 7.",
    entrega: "Primera clase de la Semana 8, a través de Aulas Virtuales.",
    herramientas:
      "MATLAB R2025b, Robotics System Toolbox y Symbolic Math Toolbox.",
  },
  {
    numero: 2,
    titulo: "Simulación bajo el paradigma ROS 2",
    peso: "5%",
    descripcion:
      "Implementación en MATLAB de una estructura distribuida bajo el paradigma ROS 2: creación de nodos, definición de tópicos y comunicación entre publicadores y suscriptores para un escenario robótico propuesto.",
    asignacion: "Segunda clase de la Semana 8.",
    entrega: "Segunda clase de la Semana 10, a través de Aulas Virtuales.",
    herramientas: "MATLAB R2025b y ROS Toolbox.",
  },
];

export const proyectoFinal = {
  peso: "20% de la nota final",
  modalidad: "Equipos, entorno de simulación",
  herramientas: "CoppeliaSim Edu + Python (API remota ZeroMQ)",
  publicacionDirectrices:
    "Semana 6, inmediatamente después del Primer Parcial",
  entrega: "Semana 12",
  descripcion:
    "Evaluación integradora en la que cada equipo concibe, desarrolla y defiende una aplicación robótica propia, desarrollada íntegramente en simulación con CoppeliaSim Edu y control desde Python. Consta de una sola entrega con su defensa correspondiente, sin fases parciales evaluadas.",
  coordinacionDefensa:
    "Cada equipo coordina su horario de defensa con el profesor a partir de la Semana 11.",
  advertencia:
    "Hay seis semanas entre la publicación de las directrices y la entrega. En proyectos de simulación surgen contratiempos técnicos, y al ser una entrega única no hay puntos de control intermedios que sirvan de red. Conviene empezar en la Semana 6 y no dejar la integración para los últimos días.",
};

export const parciales = [
  {
    id: "parcial-1",
    nombre: "Primer parcial",
    peso: "20%",
    momento: "Semana 6, primera clase",
    contenido: "Temas 1 al 7",
    detalle:
      "Evaluación teórica sobre los fundamentos: introducción a la robótica, morfología, estructura mecánica, señales de entrada y salida, microcontroladores, sensores y actuadores.",
    fechas: [
      { seccion: "Sección 1 — lunes y miércoles", fecha: "Lunes 19 de octubre" },
      { seccion: "Sección 2 — martes y jueves", fecha: "Martes 20 de octubre" },
    ],
  },
  {
    id: "parcial-2",
    nombre: "Segundo parcial",
    peso: "20%",
    momento: "Semana 11, segunda clase",
    contenido: "Temas 8 al 12, incluye MATLAB",
    detalle:
      "Cubre cinemática directa e inversa, generación de trayectorias, lenguajes de programación robótica, visión artificial e inteligencia artificial aplicada. Incluye componente práctica de MATLAB, por lo que se rinde en el laboratorio de computación, en las máquinas de la universidad.",
    fechas: [
      {
        seccion: "Sección 1 — lunes y miércoles",
        fecha: "Miércoles 25 de noviembre",
      },
      { seccion: "Sección 2 — martes y jueves", fecha: "Jueves 26 de noviembre" },
    ],
  },
];

export const kahoots = {
  resumen:
    "Al final de cada clase teórica se aplica un Kahoot sobre el contenido visto ese día. Sus puntos no se suman a la nota final: se suman a la nota del examen parcial del corte correspondiente.",
  comoSeObtienen: [
    "Se aplican al final de cada clase teórica. No hay Kahoot en sesiones de laboratorio, exámenes ni defensas.",
    "En cada Kahoot obtienen punto los dos primeros lugares de la tabla de posiciones.",
    "Cada uno de esos dos estudiantes suma 1 punto: el primer y el segundo lugar valen exactamente lo mismo.",
    "Los puntos son individuales y no transferibles entre miembros de un equipo.",
  ],
  cortes: [
    {
      corte: "Primer corte — Temas 1 al 7",
      clases: "Semanas 1 a 3",
      suma: "Primer Parcial (Semana 6)",
    },
    {
      corte: "Segundo corte — Temas 8 al 12",
      clases: "Semanas 6 a 9",
      suma: "Segundo Parcial (Semana 11)",
    },
  ],
  reglas: [
    "Máximo por corte: 2 puntos. Los Kahoots que ganes después de llegar al tope no acumulan puntos adicionales ni se transfieren al otro corte.",
    "Máximo en el trimestre: 4 puntos, si acumulas 2 en cada corte.",
    "Los puntos se suman sobre la base de 20 del examen: 19 puntos en el parcial más 2 de Kahoot son 21 puntos en ese examen. La nota del examen sí puede superar los 20 puntos.",
    "No son recuperables: no se anuncian con anticipación y se realizan solo en el momento de la clase. Al ser puntos bonus, no participar no perjudica la nota base.",
  ],
};

export const fechasClave = [
  {
    hito: "Publicación de directrices del Proyecto Final",
    seccion1: "Miércoles 21 de octubre",
    seccion2: "Jueves 22 de octubre",
  },
  {
    hito: "Asignación de la Tarea 1 (MATLAB)",
    seccion1: "Miércoles 28 de octubre",
    seccion2: "Jueves 29 de octubre",
  },
  {
    hito: "Entrega de la Tarea 1",
    seccion1: "Lunes 2 de noviembre",
    seccion2: "Martes 3 de noviembre",
  },
  {
    hito: "Asignación de la Tarea 2 (MATLAB)",
    seccion1: "Miércoles 4 de noviembre",
    seccion2: "Jueves 5 de noviembre",
  },
  {
    hito: "Entrega de la Tarea 2",
    seccion1: "Miércoles 18 de noviembre",
    seccion2: "Jueves 19 de noviembre",
  },
  {
    hito: "Coordinación de horarios de defensa",
    seccion1: "Lunes 23 de noviembre",
    seccion2: "Martes 24 de noviembre",
  },
  {
    hito: "Entrega y defensa del Proyecto Final",
    seccion1: "Lunes 30 de noviembre y miércoles 2 de diciembre",
    seccion2: "Martes 1 y jueves 3 de diciembre",
  },
];

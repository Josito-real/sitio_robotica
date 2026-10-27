export const componentes = [
  {
    id: "laboratorios",
    nombre: "Laboratorios",
    peso: "30%",
    descripcion: "6 prácticas de laboratorio × 5% cada una.",
  },
  {
    id: "ejercicio-dh",
    nombre: "Ejercicio evaluado en clase",
    peso: "5%",
    descripcion:
      "Parámetros Denavit-Hartenberg con verificación en MATLAB — Semana 8.",
  },
  {
    id: "matlab",
    nombre: "Tarea de MATLAB",
    peso: "5%",
    descripcion:
      "1 tarea individual — se asigna en la Semana 8 y se entrega en la Semana 10.",
  },
  {
    id: "proyecto-entrega-0",
    nombre: "Proyecto final — Entrega 0 (anteproyecto)",
    peso: "0%",
    descripcion:
      "Propuesta sin nota, con veredicto del profesor — viernes 6 de noviembre, Semana 8.",
  },
  {
    id: "proyecto-entrega-1",
    nombre: "Proyecto final — Entrega 1 (avance)",
    peso: "5%",
    descripcion:
      "Video, archivos fuente y primera versión del documento — domingo 22 de noviembre, Semana 10.",
  },
  {
    id: "proyecto-entrega-final",
    nombre: "Proyecto final — Entrega final y defensa",
    peso: "15%",
    descripcion:
      "Documento final y defensa presencial — Semana 12, del 30 de noviembre al 4 de diciembre.",
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
    numero: 2,
    titulo: "Simulación bajo el paradigma ROS 2",
    peso: "5%",
    descripcion:
      "Implementación en MATLAB de una estructura distribuida bajo el paradigma ROS 2: creación de nodos, definición de tópicos y comunicación entre publicadores y suscriptores para un escenario robótico propuesto.",
    asignacion: "Primera clase de la Semana 8.",
    entrega: "Segunda clase de la Semana 10, a través de Aulas Virtuales.",
    herramientas: "MATLAB R2025b y ROS Toolbox.",
  },
];

export const ejercicioEnClase = {
  titulo: "Parámetros Denavit-Hartenberg con verificación en MATLAB",
  peso: "5%",
  momento: "Semana 8, segunda clase",
  descripcion:
    "Resolución de los parámetros Denavit-Hartenberg de un manipulador, en los mismos equipos de laboratorio, con verificación posterior usando las herramientas de MATLAB suministradas por el profesor.",
  fechas: [
    { seccion: "Sección 1 — lunes y miércoles", fecha: "Miércoles 4 de noviembre" },
    { seccion: "Sección 2 — martes y jueves", fecha: "Jueves 5 de noviembre" },
  ],
};

export const proyectoFinal = {
  peso: "20% de la nota final, repartido en tres cortes",
  modalidad: "Equipos · proyecto abierto, con tres rutas posibles",
  publicacionDirectrices: "Semana 7",
  descripcion:
    "Evaluación integradora en la que cada equipo concibe, desarrolla y defiende una aplicación robótica propia. El proyecto es abierto: cada equipo elige su ruta y propone su alcance, que el profesor ajusta tras revisar el anteproyecto. Los objetivos deben ser medibles.",
  directrices: {
    archivo: "/documentos/directrices-proyecto-final-fpten27.pdf",
    paginas: 7,
    peso: "169 KB",
  },
  cortes: [
    {
      id: "entrega-0",
      nombre: "Entrega 0 — Anteproyecto",
      peso: "0%",
      fecha: "Viernes 6 de noviembre · Semana 8",
      detalle:
        "El equipo entrega su propuesta. No tiene nota. El fin de semana del 7 y 8 de noviembre el profesor devuelve un veredicto con recomendaciones: aprobado, subir alcance o bajar alcance.",
    },
    {
      id: "entrega-1",
      nombre: "Entrega 1 — Avance",
      peso: "5%",
      fecha: "Domingo 22 de noviembre · Semana 10",
      detalle:
        "Un video de 1 a 2 minutos, los archivos fuente y la primera versión del documento.",
    },
    {
      id: "entrega-final",
      nombre: "Entrega final y defensa",
      peso: "15%",
      fecha: "Del 30 de noviembre al 4 de diciembre · Semana 12",
      detalle:
        "Defensa presencial, en cualquier momento de esa semana —en horario de clase o fuera de él—, según lo que cada equipo acuerde con el profesor durante la Semana 11. De los 15 puntos, 10 son comunes al equipo y 5 individuales: preguntas individuales y una pregunta cruzada.",
    },
  ],
  rutas: [
    {
      id: "ruta-a",
      nombre: "Ruta A — Simulación en CoppeliaSim",
      detalle:
        "No hay una tarea fija: el equipo investiga la herramienta y propone su propia aplicación.",
    },
    {
      id: "ruta-b",
      nombre: "Ruta B — MATLAB / Simulink",
      detalle:
        "Uso obligatorio de al menos un toolbox de robótica de MathWorks.",
    },
    {
      id: "ruta-c",
      nombre: "Ruta C — Aplicación robótica física",
      detalle:
        "Los materiales corren por cuenta del equipo y el robot se muestra en vivo durante la defensa.",
    },
  ],
  pisoComun: [
    "Modelo cinemático del robot.",
    "Un tema adicional del segundo corte, aplicado (Temas 9 a 12).",
    "Verificación numérica entre la teoría y el resultado obtenido.",
    "Aplicación industrial, con su fuente.",
    "Declaración de lo que no es propio.",
  ],
  coordinacionDefensa:
    "Cada equipo coordina su horario de defensa con el profesor durante la Semana 11.",
  advertencia:
    "El anteproyecto no tiene nota, pero sí consecuencias: es donde el profesor ajusta el alcance. El equipo que no lo entregue pierde esa corrección y llega a la Entrega 1 con un proyecto que puede estar muy por encima o muy por debajo de lo pedido.",
};

export const parciales = [
  {
    id: "parcial-1",
    nombre: "Primer parcial",
    peso: "20%",
    momento: "Semana 6, primera clase",
    contenido: "Temas 1 al 7",
    detalle:
      "Evaluación teórica sobre los fundamentos: definición y morfología de robots, ejes de coordenadas, estructura mecánica, señales de entrada y salida, microprocesadores y microcontroladores, sensores y actuadores.",
    fechas: [
      { seccion: "Sección 1 — lunes y miércoles", fecha: "Lunes 19 de octubre" },
      { seccion: "Sección 2 — martes y jueves", fecha: "Martes 20 de octubre" },
    ],
    modelos: [
      {
        id: "parcial-1-modelo-a",
        nombre: "Modelo de práctica A",
        archivo: "/documentos/parcial-1-modelo-a.pdf",
        paginas: 5,
        peso: "212 KB",
      },
      {
        id: "parcial-1-modelo-b",
        nombre: "Modelo de práctica B",
        archivo: "/documentos/parcial-1-modelo-b.pdf",
        paginas: 5,
        peso: "211 KB",
      },
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
    hito: "Publicación de las directrices del Proyecto Final",
    seccion1: "Lunes 26 de octubre",
    seccion2: "Martes 27 de octubre",
  },
  {
    hito: "Asignación de la Tarea 2 (MATLAB)",
    seccion1: "Lunes 2 de noviembre",
    seccion2: "Martes 3 de noviembre",
  },
  {
    hito: "Ejercicio evaluado en clase (5%)",
    seccion1: "Miércoles 4 de noviembre",
    seccion2: "Jueves 5 de noviembre",
  },
  {
    hito: "Entrega 0 del Proyecto Final (anteproyecto, sin nota)",
    seccion1: "Viernes 6 de noviembre",
    seccion2: "Viernes 6 de noviembre",
  },
  {
    hito: "Entrega de la Tarea 2",
    seccion1: "Miércoles 18 de noviembre",
    seccion2: "Jueves 19 de noviembre",
  },
  {
    hito: "Entrega 1 del Proyecto Final (avance, 5%)",
    seccion1: "Domingo 22 de noviembre",
    seccion2: "Domingo 22 de noviembre",
  },
  {
    hito: "Coordinación de horarios de defensa",
    seccion1: "Lunes 23 de noviembre",
    seccion2: "Martes 24 de noviembre",
  },
  {
    hito: "Entrega final y defensa del Proyecto Final (15%)",
    seccion1: "Del 30 de noviembre al 4 de diciembre",
    seccion2: "Del 30 de noviembre al 4 de diciembre",
  },
];

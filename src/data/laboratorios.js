// Prácticas del trimestre. `guia` apunta al PDF en /public/guias cuando la
// guía está publicada; mientras sea null, la práctica se muestra como
// "Próximamente" y la tarjeta sigue funcionando igual.
export const practicas = [
  {
    numero: 1,
    nombre: "Programación de microcontroladores",
    equipo: "Arduino",
    semana: "Semana 4",
    guia: null,
  },
  {
    numero: 2,
    nombre: "Adquisición de datos con sensores",
    equipo: "Arduino",
    semana: "Semanas 4–5",
    guia: null,
  },
  {
    numero: 3,
    nombre: "Control de actuadores",
    equipo: "Arduino",
    semana: "Semana 5",
    guia: null,
  },
  {
    numero: 4,
    nombre: "Simulación y control remoto de escenas robóticas",
    equipo: "CoppeliaSim + Python",
    semana: "Semana 10",
    guia: null,
  },
  {
    numero: 5,
    nombre: "Pick and place y generación de trayectorias",
    equipo: "Dobot Magician",
    semana: "Semana 10",
    guia: null,
  },
  {
    numero: 6,
    nombre: "Percepción y navegación en robot móvil",
    equipo: "PiCar-X",
    semana: "Semana 11",
    guia: null,
  },
];

export const dinamica = {
  resumen:
    "Los laboratorios se realizan en grupos de 3 estudiantes. Cada práctica ocupa un bloque completo de clase de 90 minutos y vale 5% de la nota final.",
  partes: [
    {
      parte: "Ejecución de la práctica",
      duracion: "1 h 15 min",
      peso: "50% · 10 pts",
      instrumento: "Bitácora de datos llenada durante la sesión",
    },
    {
      parte: "Cuestionario de cierre",
      duracion: "15 min",
      peso: "50% · 10 pts",
      instrumento: "Cuestionario grupal en papel",
    },
  ],
  detalle: [
    "Antes de cada práctica se publica en este sitio una guía detallada que debes revisar con anticipación: instrucciones paso a paso, códigos de programación y todo lo necesario para aprovechar el tiempo en el laboratorio.",
    "La universidad provee todos los materiales y equipos; no debes traer componentes propios salvo indicación explícita.",
    "Durante la primera hora y cuarto cada grupo ejecuta la práctica y completa su bitácora con los datos que mide en tiempo real.",
    "En los últimos 15 minutos se aplica un cuestionario corto sobre lo realizado en esa misma sesión, anclado a los datos que el grupo midió.",
  ],
  normas: [
    {
      titulo: "Sin dispositivos electrónicos durante el cuestionario",
      texto:
        "En los últimos 15 minutos se guardan teléfonos, computadoras y cualquier dispositivo electrónico: el cuestionario se responde solo en papel. Durante la hora y cuarto de práctica los equipos usan libremente las computadoras y el material. El profesor puede retirar el cuestionario al grupo que incumpla, lo que equivale a laboratorio invalidado con nota cero para ese grupo.",
    },
    {
      titulo: "Puntualidad",
      texto:
        "Llegar con 10 minutos o más de retraso resta 2 puntos sobre la nota individual de ese integrante en ese laboratorio. Llegar con 45 minutos o más equivale a ausencia: nota cero en esa práctica.",
    },
    {
      titulo: "Cuidado del equipo",
      texto:
        "Los grupos deben mantener el orden, cuidar el equipo y devolver todo el material en las mismas condiciones en que fue entregado.",
    },
  ],
  distribucion:
    "Los laboratorios se agrupan en dos bloques (Semanas 4–5 y Semanas 10–11) que siguen inmediatamente al contenido teórico correspondiente: primero el marco conceptual completo, luego su aplicación concentrada sobre el equipo.",
};

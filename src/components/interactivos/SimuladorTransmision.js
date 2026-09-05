"use client";

import { useState } from "react";
import MarcoSimulador from "@/components/interactivos/MarcoSimulador";
import {
  Control,
  Opciones,
  Lectura,
  Formula,
  Nota,
  usePrefiereMenosMovimiento,
} from "@/components/interactivos/Primitivos";

const MODULOS = [0.5, 1, 1.5, 2].map((m) => ({
  valor: m,
  etiqueta: `m = ${m} mm`,
}));

// Dibuja una rueda dentada sencilla: circunferencia primitiva más un diente
// radial por cada Z. No es un perfil de evolvente, solo una representación.
function Engranaje({ dientes, radio, duracion, sentido, animando }) {
  const paso = 360 / dientes;
  const alturaDiente = Math.max(3, radio * 0.12);

  return (
    <g
      style={{
        transformBox: "fill-box",
        transformOrigin: "center",
        animationName: sentido === "horario" ? "girar-horario" : "girar-antihorario",
        animationDuration: `${duracion}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationPlayState: animando ? "running" : "paused",
      }}
    >
      <circle r={radio} className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-800 dark:stroke-zinc-500" />
      <circle r={radio * 0.18} className="fill-white stroke-zinc-400 dark:fill-zinc-900 dark:stroke-zinc-500" />
      {Array.from({ length: dientes }, (_, k) => (
        <line
          key={k}
          x1={0}
          y1={-radio}
          x2={0}
          y2={-radio - alturaDiente}
          transform={`rotate(${k * paso})`}
          className="stroke-zinc-500 dark:stroke-zinc-400"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={-radio * 0.8}
        className="stroke-blue-500"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

export default function SimuladorTransmision() {
  const [z1, setZ1] = useState(12);
  const [z2, setZ2] = useState(48);
  const [modulo, setModulo] = useState(1);
  const [n1, setN1] = useState(1200);
  const [t1, setT1] = useState(0.2);
  const [rendimiento, setRendimiento] = useState(95);
  const [animarManual, setAnimarManual] = useState(null);

  const menosMovimiento = usePrefiereMenosMovimiento();
  const animando = animarManual ?? !menosMovimiento;

  const i = z2 / z1;
  const eta = rendimiento / 100;
  const n2 = n1 / i;
  const t2 = t1 * i * eta;
  const w1 = (2 * Math.PI * n1) / 60;
  const w2 = (2 * Math.PI * n2) / 60;
  const p1 = t1 * w1;
  const p2 = t2 * w2;

  const d1 = modulo * z1;
  const d2 = modulo * z2;
  const distanciaCentros = (d1 + d2) / 2;

  // Escala de dibujo: el par siempre cabe en el lienzo.
  const escala = 150 / (d1 / 2 + d2 / 2 + modulo * 4);
  const r1 = (d1 / 2) * escala;
  const r2 = (d2 / 2) * escala;
  const cx1 = 170 - r2;
  const cx2 = 170 + r1;

  // La animación es una representación: se acota para que siga siendo legible.
  const duracion1 = Math.max(0.35, (60 / n1) * 3.3);
  const duracion2 = duracion1 * i;

  const visual = (
    <div className="flex flex-col gap-3">
      <svg viewBox="0 0 340 220" className="w-full" role="img">
        <title>Par de engranajes girando en sentidos opuestos</title>
        <g transform={`translate(${cx1} 110)`}>
          <Engranaje
            dientes={z1}
            radio={r1}
            duracion={duracion1}
            sentido="horario"
            animando={animando}
          />
        </g>
        <g transform={`translate(${cx2} 110)`}>
          <Engranaje
            dientes={z2}
            radio={r2}
            duracion={duracion2}
            sentido="antihorario"
            animando={animando}
          />
        </g>
        <text x={cx1} y={206} fontSize="11" textAnchor="middle" className="fill-zinc-500">
          entrada · {z1} dientes
        </text>
        <text x={cx2} y={206} fontSize="11" textAnchor="middle" className="fill-zinc-500">
          salida · {z2} dientes
        </text>
      </svg>
      <button
        type="button"
        onClick={() => setAnimarManual(!animando)}
        className="self-start rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
      >
        {animando ? "Pausar giro" : "Reanudar giro"}
      </button>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        La velocidad del dibujo está acotada para que siga siendo legible: lo
        fiel es la proporción entre ambos ejes, no las revoluciones por segundo
        en pantalla.
      </p>
    </div>
  );

  const controles = (
    <>
      <Control
        etiqueta="Dientes del piñón (entrada)"
        valor={z1}
        onChange={setZ1}
        min={8}
        max={40}
        unidad="dientes"
      />
      <Control
        etiqueta="Dientes de la corona (salida)"
        valor={z2}
        onChange={setZ2}
        min={8}
        max={100}
        unidad="dientes"
      />
      <Opciones etiqueta="Módulo" valor={modulo} onChange={setModulo} opciones={MODULOS} />
      <Control
        etiqueta="Velocidad de entrada"
        valor={n1}
        onChange={setN1}
        min={60}
        max={3000}
        paso={10}
        unidad="rpm"
      />
      <Control
        etiqueta="Torque de entrada"
        valor={t1}
        onChange={setT1}
        min={0.02}
        max={2}
        paso={0.01}
        unidad="N·m"
        decimales={2}
      />
      <Control
        etiqueta="Rendimiento"
        valor={rendimiento}
        onChange={setRendimiento}
        min={60}
        max={100}
        unidad="%"
      />
      <Formula>i = Z₂/Z₁ · n₂ = n₁/i · T₂ = T₁ · i · η</Formula>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Relación de transmisión" valor={`${i.toFixed(2)} : 1`} destacado />
      <Lectura etiqueta="Velocidad de salida" valor={n2.toFixed(1)} unidad="rpm" />
      <Lectura etiqueta="Torque de salida" valor={t2.toFixed(3)} unidad="N·m" destacado />
      <Lectura etiqueta="Potencia de entrada" valor={p1.toFixed(1)} unidad="W" />
      <Lectura etiqueta="Potencia de salida" valor={p2.toFixed(1)} unidad="W" />
      <Lectura etiqueta="Pérdidas" valor={(p1 - p2).toFixed(1)} unidad="W" />
      <Lectura etiqueta="Diámetros primitivos" valor={`${d1} / ${d2}`} unidad="mm" />
      <Lectura etiqueta="Distancia entre centros" valor={distanciaCentros.toFixed(1)} unidad="mm" />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Aumenta los dientes de la corona dejando todo lo demás quieto: la
          velocidad de salida cae en la misma proporción en que sube el torque.
          Esa es toda la idea de un reductor — no crea energía, redistribuye
          velocidad y torque.
        </p>
        <p>
          Mira las dos potencias: la de salida nunca supera la de entrada, y la
          diferencia es lo que se pierde en fricción. Baja el rendimiento al 60%
          y observa cuánta potencia se va en calor.
        </p>
      </Nota>
      <Nota titulo="Por qué importa en robótica">
        <p>
          Los motores dan poco torque a muchas revoluciones, y una articulación
          necesita lo contrario: moverse despacio con fuerza. El reductor hace
          esa traducción. El precio es que también multiplica por i cualquier
          juego mecánico y divide por i la resolución angular que se ve desde el
          eje del motor.
        </p>
        <p>
          El módulo no cambia la relación de transmisión, pero sí el tamaño:
          para los mismos dientes, más módulo es un engranaje más grande y una
          distancia entre centros mayor. Dos engranajes solo engranan si
          comparten módulo.
        </p>
      </Nota>
    </>
  );

  return (
    <MarcoSimulador
      visual={visual}
      controles={controles}
      lecturas={lecturas}
      notas={notas}
    />
  );
}

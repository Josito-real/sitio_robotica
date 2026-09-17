"use client";

import { useState } from "react";
import MarcoSimulador from "@/components/interactivos/MarcoSimulador";
import {
  Control,
  Lectura,
  Formula,
  Nota,
} from "@/components/interactivos/Primitivos";

const RAD = Math.PI / 180;

function punta(l1, l2, g1, g2) {
  const a = g1 * RAD;
  const b = (g1 + g2) * RAD;
  return {
    x: l1 * Math.cos(a) + l2 * Math.cos(b),
    y: l1 * Math.sin(a) + l2 * Math.sin(b),
  };
}

export default function SimuladorCinematica() {
  const [l1, setL1] = useState(20);
  const [l2, setL2] = useState(15);
  const [theta1, setTheta1] = useState(35);
  const [theta2, setTheta2] = useState(55);
  const [rastro, setRastro] = useState(false);
  const [puntos, setPuntos] = useState([]);

  const agregar = (p) => setPuntos((previos) => [...previos.slice(-399), p]);

  const cambiarTheta1 = (v) => {
    setTheta1(v);
    if (rastro) agregar(punta(l1, l2, v, theta2));
  };
  const cambiarTheta2 = (v) => {
    setTheta2(v);
    if (rastro) agregar(punta(l1, l2, theta1, v));
  };

  const codo = {
    x: l1 * Math.cos(theta1 * RAD),
    y: l1 * Math.sin(theta1 * RAD),
  };
  const efector = punta(l1, l2, theta1, theta2);
  const phi = theta1 + theta2;
  const alcance = Math.hypot(efector.x, efector.y);
  const alcanceMax = l1 + l2;
  const alcanceMin = Math.abs(l1 - l2);

  const BX = 170;
  const BY = 190;
  const escala = 130 / alcanceMax;
  const px = (x) => BX + x * escala;
  const py = (y) => BY - y * escala;

  const visual = (
    <div className="flex flex-col gap-3">
      <svg viewBox="0 0 340 330" className="w-full" role="img">
        <title>Brazo de dos articulaciones y su espacio de trabajo</title>
        {/* Anillo alcanzable: un solo path con evenodd, así el hueco central
            es realmente transparente y no un círculo pintado del color del
            fondo, que se notaba al cambiar de tema. */}
        <path
          d={`M ${BX} ${BY} m ${-alcanceMax * escala} 0 a ${alcanceMax * escala} ${alcanceMax * escala} 0 1 0 ${2 * alcanceMax * escala} 0 a ${alcanceMax * escala} ${alcanceMax * escala} 0 1 0 ${-2 * alcanceMax * escala} 0 Z M ${BX} ${BY} m ${-alcanceMin * escala} 0 a ${alcanceMin * escala} ${alcanceMin * escala} 0 1 0 ${2 * alcanceMin * escala} 0 a ${alcanceMin * escala} ${alcanceMin * escala} 0 1 0 ${-2 * alcanceMin * escala} 0 Z`}
          fillRule="evenodd"
          className="fill-blue-500/10 stroke-none"
        />
        <circle
          cx={BX}
          cy={BY}
          r={alcanceMax * escala}
          className="fill-none stroke-blue-500/40"
          strokeDasharray="4 4"
        />
        {alcanceMin > 0.01 && (
          <circle
            cx={BX}
            cy={BY}
            r={alcanceMin * escala}
            className="fill-none stroke-blue-500/40"
            strokeDasharray="4 4"
          />
        )}
        <line x1={40} y1={BY} x2={300} y2={BY} className="stroke-zinc-200 dark:stroke-zinc-800" />
        <line x1={BX} y1={50} x2={BX} y2={320} className="stroke-zinc-200 dark:stroke-zinc-800" />

        {puntos.map((p, k) => (
          <circle key={k} cx={px(p.x)} cy={py(p.y)} r="1.5" className="fill-amber-500/70" />
        ))}

        <line
          x1={px(0)}
          y1={py(0)}
          x2={px(codo.x)}
          y2={py(codo.y)}
          className="stroke-zinc-700 dark:stroke-zinc-200"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1={px(codo.x)}
          y1={py(codo.y)}
          x2={px(efector.x)}
          y2={py(efector.y)}
          className="stroke-blue-500"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx={px(0)} cy={py(0)} r="7" className="fill-zinc-900 dark:fill-zinc-100" />
        <circle cx={px(codo.x)} cy={py(codo.y)} r="6" className="fill-white stroke-zinc-700 dark:fill-zinc-900 dark:stroke-zinc-200" strokeWidth="2.5" />
        <circle cx={px(efector.x)} cy={py(efector.y)} r="5" className="fill-blue-500" />

        <text x={px(efector.x) + 10} y={py(efector.y) - 8} fontSize="11" className="fill-blue-600 dark:fill-blue-400">
          ({efector.x.toFixed(1)}, {efector.y.toFixed(1)})
        </text>
        <text x={302} y={BY - 6} fontSize="10" textAnchor="end" className="fill-zinc-400">x</text>
        <text x={BX + 6} y={58} fontSize="10" className="fill-zinc-400">y</text>
      </svg>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setRastro((v) => !v)}
          className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
        >
          {rastro ? "Dejar de trazar" : "Trazar el recorrido"}
        </button>
        {puntos.length > 0 && (
          <button
            type="button"
            onClick={() => setPuntos([])}
            className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
          >
            Borrar rastro
          </button>
        )}
      </div>
    </div>
  );

  const controles = (
    <>
      <Control
        etiqueta="Longitud del eslabón 1 (L₁)"
        valor={l1}
        onChange={setL1}
        min={5}
        max={30}
        unidad="cm"
      />
      <Control
        etiqueta="Longitud del eslabón 2 (L₂)"
        valor={l2}
        onChange={setL2}
        min={5}
        max={30}
        unidad="cm"
      />
      <Control
        etiqueta="Ángulo θ₁ (hombro)"
        valor={theta1}
        onChange={cambiarTheta1}
        min={-180}
        max={180}
        unidad="°"
      />
      <Control
        etiqueta="Ángulo θ₂ (codo)"
        valor={theta2}
        onChange={cambiarTheta2}
        min={-180}
        max={180}
        unidad="°"
      />
      <Formula>
        x = L₁·cos θ₁ + L₂·cos(θ₁+θ₂) · y = L₁·sen θ₁ + L₂·sen(θ₁+θ₂)
      </Formula>
      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Matriz de transformación de la base al efector
        </p>
        <table className="mt-2 w-full font-mono text-xs tabular-nums">
          <tbody>
            <tr>
              <td>{Math.cos(phi * RAD).toFixed(3)}</td>
              <td>{(-Math.sin(phi * RAD)).toFixed(3)}</td>
              <td className="text-blue-600 dark:text-blue-400">{efector.x.toFixed(2)}</td>
            </tr>
            <tr>
              <td>{Math.sin(phi * RAD).toFixed(3)}</td>
              <td>{Math.cos(phi * RAD).toFixed(3)}</td>
              <td className="text-blue-600 dark:text-blue-400">{efector.y.toFixed(2)}</td>
            </tr>
            <tr className="text-zinc-400">
              <td>0.000</td>
              <td>0.000</td>
              <td>1.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Posición x" valor={efector.x.toFixed(2)} unidad="cm" destacado />
      <Lectura etiqueta="Posición y" valor={efector.y.toFixed(2)} unidad="cm" destacado />
      <Lectura etiqueta="Orientación (θ₁+θ₂)" valor={phi.toFixed(1)} unidad="°" />
      <Lectura etiqueta="Distancia a la base" valor={alcance.toFixed(2)} unidad="cm" />
      <Lectura etiqueta="Alcance máximo" valor={alcanceMax} unidad="cm" />
      <Lectura etiqueta="Radio interior no alcanzable" valor={alcanceMin} unidad="cm" />
      <Lectura etiqueta="Codo en" valor={`(${codo.x.toFixed(1)}, ${codo.y.toFixed(1)})`} />
      <Lectura etiqueta="Puntos trazados" valor={puntos.length} />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Activa el trazo y barre θ₁ de un extremo al otro con θ₂ fijo: el
          efector recorre un arco. Cambia θ₂ y repite. Con paciencia vas
          rellenando el anillo entre los dos círculos punteados — ese anillo es
          el espacio de trabajo.
        </p>
        <p>
          Pon L₁ = L₂ y observa que el círculo interior desaparece: el brazo
          alcanza su propia base. En cuanto los eslabones son distintos aparece
          un hueco de radio |L₁ − L₂| al que no llega por más que gire.
        </p>
      </Nota>
      <Nota titulo="Leer la matriz">
        <p>
          La última columna es la posición del efector y el bloque de 2×2 es su
          orientación, que aquí depende solo de la suma θ₁+θ₂. Dos
          configuraciones distintas pueden dejar el efector en el mismo punto
          con orientaciones diferentes: esa es la pista de que el problema
          inverso tiene más de una solución.
        </p>
        <p>
          La cinemática directa siempre tiene respuesta única: dados los
          ángulos, la posición sale de evaluar dos senos y dos cosenos. La
          inversa es la difícil, y es la que resuelve el controlador cada vez
          que le pides al robot ir a un punto.
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

"use client";

import { useState } from "react";
import MarcoSimulador from "@/components/interactivos/MarcoSimulador";
import { Control, Lectura, Formula, Nota } from "@/components/interactivos/Primitivos";
import {
  cinematicaDirecta,
  jacobiana,
  determinante,
  elipseManipulabilidad,
} from "@/components/interactivos/geometriaBrazo";

const ANCHO = 340;
const ALTO = 300;

export default function SimuladorJacobiana() {
  const [l1, setL1] = useState(20);
  const [l2, setL2] = useState(15);
  const [g1, setG1] = useState(35);
  const [g2, setG2] = useState(60);

  const { codo, efector } = cinematicaDirecta(l1, l2, g1, g2);
  const J = jacobiana(l1, l2, g1, g2);
  const det = determinante(l1, l2, g2);
  const elipse = elipseManipulabilidad(J);

  const alcanceMax = l1 + l2;
  const escala = 120 / alcanceMax;
  const BX = ANCHO / 2;
  const BY = ALTO / 2 + 30;
  const px = (x) => BX + x * escala;
  const py = (y) => BY - y * escala;

  // Umbral práctico de singularidad: el brazo casi estirado o casi plegado.
  const casiSingular = Math.abs(Math.sin((g2 * Math.PI) / 180)) < 0.09;
  const factorElipse = 0.35 * escala;

  const visual = (
    <div className="flex flex-col gap-3">
      <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="w-full" role="img">
        <title>Brazo 2R con su elipse de manipulabilidad</title>
        <circle
          cx={BX}
          cy={BY}
          r={alcanceMax * escala}
          className="fill-none stroke-zinc-200 dark:stroke-zinc-800"
          strokeDasharray="4 4"
        />
        <line x1={BX - 130} y1={BY} x2={BX + 130} y2={BY} className="stroke-zinc-200 dark:stroke-zinc-800" />
        <line x1={BX} y1={BY - 130} x2={BX} y2={BY + 130} className="stroke-zinc-200 dark:stroke-zinc-800" />

        <g transform={`rotate(${-elipse.anguloGrados} ${px(efector.x)} ${py(efector.y)})`}>
          <ellipse
            cx={px(efector.x)}
            cy={py(efector.y)}
            rx={Math.max(1, elipse.sigma1 * factorElipse)}
            ry={Math.max(1, elipse.sigma2 * factorElipse)}
            className={
              casiSingular
                ? "fill-red-500/15 stroke-red-500"
                : "fill-emerald-500/15 stroke-emerald-500"
            }
            strokeWidth="1.5"
          />
        </g>

        <line x1={px(0)} y1={py(0)} x2={px(codo.x)} y2={py(codo.y)} className="stroke-zinc-700 dark:stroke-zinc-200" strokeWidth="6" strokeLinecap="round" />
        <line x1={px(codo.x)} y1={py(codo.y)} x2={px(efector.x)} y2={py(efector.y)} className="stroke-blue-500" strokeWidth="6" strokeLinecap="round" />
        <circle cx={px(0)} cy={py(0)} r="7" className="fill-zinc-900 dark:fill-zinc-100" />
        <circle cx={px(codo.x)} cy={py(codo.y)} r="6" className="fill-white stroke-zinc-700 dark:fill-zinc-900 dark:stroke-zinc-200" strokeWidth="2.5" />
        <circle cx={px(efector.x)} cy={py(efector.y)} r="4" className="fill-blue-500" />

        {casiSingular && (
          <text x={ANCHO / 2} y="24" fontSize="13" textAnchor="middle" className="fill-red-500 font-semibold">
            Singularidad: el brazo perdió una dirección
          </text>
        )}
      </svg>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        La elipse muestra a qué velocidad puede moverse el efector en cada
        dirección, con las articulaciones girando a la misma velocidad. Cuanto
        más aplastada, peor condicionado está el brazo.
      </p>
    </div>
  );

  const controles = (
    <>
      <Control etiqueta="Longitud L₁" valor={l1} onChange={setL1} min={5} max={30} unidad="cm" />
      <Control etiqueta="Longitud L₂" valor={l2} onChange={setL2} min={5} max={30} unidad="cm" />
      <Control etiqueta="Ángulo θ₁ (hombro)" valor={g1} onChange={setG1} min={-180} max={180} unidad="°" />
      <Control etiqueta="Ángulo θ₂ (codo)" valor={g2} onChange={setG2} min={-180} max={180} unidad="°" />
      <Formula>det(J) = L₁·L₂·sen θ₂ · w = σ₁·σ₂ = |det(J)|</Formula>
      <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Jacobiana</p>
        <table className="mt-2 w-full font-mono text-xs tabular-nums">
          <tbody>
            {J.map((fila, k) => (
              <tr key={k}>
                {fila.map((v, j) => (
                  <td key={j}>{v.toFixed(2)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="det(J)" valor={det.toFixed(2)} destacado />
      <Lectura etiqueta="Manipulabilidad" valor={elipse.manipulabilidad.toFixed(2)} />
      <Lectura etiqueta="σ₁ (eje mayor)" valor={elipse.sigma1.toFixed(2)} unidad="cm/rad" />
      <Lectura etiqueta="σ₂ (eje menor)" valor={elipse.sigma2.toFixed(2)} unidad="cm/rad" />
      <Lectura
        etiqueta="Número de condición"
        valor={Number.isFinite(elipse.condicion) ? elipse.condicion.toFixed(1) : "∞"}
        destacado
      />
      <Lectura etiqueta="Ángulo del eje mayor" valor={elipse.anguloGrados.toFixed(1)} unidad="°" />
      <Lectura etiqueta="Distancia a la base" valor={Math.hypot(efector.x, efector.y).toFixed(2)} unidad="cm" />
      <Lectura etiqueta="Estado" valor={casiSingular ? "singular" : "regular"} />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Lleva θ₂ hacia 0°: el brazo se estira, la elipse se aplasta hasta ser
          una raya y el determinante cae a cero. En esa postura el efector puede
          moverse a lo largo del brazo, pero no hay forma de moverlo hacia
          afuera: se perdió una dirección. Eso es una singularidad.
        </p>
        <p>
          Mira el número de condición mientras te acercas: se dispara a
          infinito. Es la medida de cuánto se deforma el movimiento. Cerca de
          una singularidad, pedirle al efector un movimiento pequeño en la
          dirección mala exige velocidades enormes en las articulaciones, y ahí
          es donde un robot real se sacude o se detiene por sobrevelocidad.
        </p>
      </Nota>
      <Nota titulo="Dónde trabaja mejor el brazo">
        <p>
          La manipulabilidad es máxima con θ₂ cerca de ±90°, es decir con el
          codo bien doblado: ahí la elipse es lo más redonda posible y el brazo
          responde parecido en todas las direcciones. Por eso las celdas
          robotizadas se diseñan para que la pieza quede en esa zona y no al
          borde del alcance.
        </p>
      </Nota>
    </>
  );

  return <MarcoSimulador visual={visual} controles={controles} lecturas={lecturas} notas={notas} />;
}

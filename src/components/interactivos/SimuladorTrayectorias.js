"use client";

import { useState } from "react";
import MarcoSimulador from "@/components/interactivos/MarcoSimulador";
import { Control, Lectura, Formula, Nota } from "@/components/interactivos/Primitivos";
import {
  cinematicaDirecta,
  caminoArticular,
  caminoCartesiano,
} from "@/components/interactivos/geometriaBrazo";

const ANCHO = 340;
const ALTO = 300;
const PASOS = 48;

function Brazo({ g1, g2, l1, l2, px, py, color, tenue }) {
  const { codo, efector } = cinematicaDirecta(l1, l2, g1, g2);
  return (
    <g opacity={tenue ? 0.45 : 1}>
      <line x1={px(0)} y1={py(0)} x2={px(codo.x)} y2={py(codo.y)} className={color} strokeWidth="5" strokeLinecap="round" />
      <line x1={px(codo.x)} y1={py(codo.y)} x2={px(efector.x)} y2={py(efector.y)} className={color} strokeWidth="5" strokeLinecap="round" />
      <circle cx={px(efector.x)} cy={py(efector.y)} r="4" className={color.replace("stroke", "fill")} />
    </g>
  );
}

export default function SimuladorTrayectorias() {
  const [l1, setL1] = useState(20);
  const [l2, setL2] = useState(15);
  const [inicioG1, setInicioG1] = useState(120);
  const [inicioG2, setInicioG2] = useState(-70);
  const [finG1, setFinG1] = useState(10);
  const [finG2, setFinG2] = useState(-80);
  const [s, setS] = useState(0.35);

  const inicio = { g1: inicioG1, g2: inicioG2 };
  const fin = { g1: finG1, g2: finG2 };

  const articular = caminoArticular(l1, l2, inicio, fin, PASOS);
  const cartesiano = caminoCartesiano(l1, l2, inicio, fin, PASOS, inicioG2 > 0);

  const alcanceMax = l1 + l2;
  const escala = 120 / alcanceMax;
  const BX = ANCHO / 2;
  const BY = ALTO / 2 + 30;
  const px = (x) => BX + x * escala;
  const py = (y) => BY - y * escala;

  const indice = Math.round(s * PASOS);
  const puntoArt = articular[indice];
  const puntoCar = cartesiano[indice];
  const inalcanzables = cartesiano.filter((p) => !p.alcanzable).length;

  const largo = (puntos) =>
    puntos.reduce(
      (acc, p, k) => (k === 0 ? 0 : acc + Math.hypot(p.x - puntos[k - 1].x, p.y - puntos[k - 1].y)),
      0
    );
  const largoArt = largo(articular);
  const largoCar = largo(cartesiano);

  const visual = (
    <div className="flex flex-col gap-3">
      <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="w-full" role="img">
        <title>Misma partida y llegada por el espacio articular y por el cartesiano</title>
        <circle cx={BX} cy={BY} r={alcanceMax * escala} className="fill-none stroke-zinc-200 dark:stroke-zinc-800" strokeDasharray="4 4" />

        <polyline
          points={articular.map((p) => `${px(p.x)},${py(p.y)}`).join(" ")}
          fill="none"
          className="stroke-blue-500"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        {cartesiano.map((p, k) =>
          k === 0 ? null : (
            <line
              key={k}
              x1={px(cartesiano[k - 1].x)}
              y1={py(cartesiano[k - 1].y)}
              x2={px(p.x)}
              y2={py(p.y)}
              className={p.alcanzable && cartesiano[k - 1].alcanzable ? "stroke-amber-500" : "stroke-red-500"}
              strokeWidth="2"
            />
          )
        )}

        <Brazo g1={inicio.g1} g2={inicio.g2} l1={l1} l2={l2} px={px} py={py} color="stroke-zinc-400" tenue />
        <Brazo g1={fin.g1} g2={fin.g2} l1={l1} l2={l2} px={px} py={py} color="stroke-zinc-400" tenue />
        <Brazo g1={puntoArt.g1} g2={puntoArt.g2} l1={l1} l2={l2} px={px} py={py} color="stroke-blue-500" />
        {puntoCar.alcanzable && (
          <Brazo g1={puntoCar.g1} g2={puntoCar.g2} l1={l1} l2={l2} px={px} py={py} color="stroke-amber-500" />
        )}
        <circle cx={px(0)} cy={py(0)} r="7" className="fill-zinc-900 dark:fill-zinc-100" />
      </svg>
      <button
        type="button"
        onClick={() => {
          setInicioG1(-180);
          setInicioG2(-170);
          setFinG1(-150);
          setFinG2(170);
          setS(0.5);
        }}
        className="self-start rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
      >
        Ver un caso donde la recta es imposible
      </button>
      <div className="flex flex-wrap gap-4 text-xs">
        <span className="text-blue-600 dark:text-blue-400">— — interpolando ángulos (MOVJ)</span>
        <span className="text-amber-600 dark:text-amber-400">—— línea recta (MOVL)</span>
        {inalcanzables > 0 && <span className="text-red-500">—— tramo imposible</span>}
      </div>
    </div>
  );

  const controles = (
    <>
      <Control etiqueta="Avance del movimiento" valor={s} onChange={setS} min={0} max={1} paso={1 / PASOS} decimales={2} />
      <Control etiqueta="Longitud L₁" valor={l1} onChange={setL1} min={5} max={30} unidad="cm" />
      <Control etiqueta="Longitud L₂" valor={l2} onChange={setL2} min={5} max={30} unidad="cm" />
      <Control etiqueta="Partida θ₁" valor={inicioG1} onChange={setInicioG1} min={-180} max={180} unidad="°" />
      <Control etiqueta="Partida θ₂" valor={inicioG2} onChange={setInicioG2} min={-180} max={180} unidad="°" />
      <Control etiqueta="Llegada θ₁" valor={finG1} onChange={setFinG1} min={-180} max={180} unidad="°" />
      <Control etiqueta="Llegada θ₂" valor={finG2} onChange={setFinG2} min={-180} max={180} unidad="°" />
      <Formula>MOVJ: θ(s) = θ₀ + s·Δθ · MOVL: p(s) = p₀ + s·Δp</Formula>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Recorrido interpolando ángulos" valor={largoArt.toFixed(1)} unidad="cm" destacado />
      <Lectura etiqueta="Recorrido en línea recta" valor={largoCar.toFixed(1)} unidad="cm" destacado />
      <Lectura etiqueta="Diferencia" valor={(largoArt - largoCar).toFixed(1)} unidad="cm" />
      <Lectura etiqueta="Puntos fuera de alcance" valor={inalcanzables} />
      <Lectura etiqueta="θ₁ articular" valor={puntoArt.g1.toFixed(1)} unidad="°" />
      <Lectura etiqueta="θ₂ articular" valor={puntoArt.g2.toFixed(1)} unidad="°" />
      <Lectura etiqueta="θ₁ cartesiano" valor={puntoCar.alcanzable ? puntoCar.g1.toFixed(1) : "—"} unidad={puntoCar.alcanzable ? "°" : ""} />
      <Lectura etiqueta="θ₂ cartesiano" valor={puntoCar.alcanzable ? puntoCar.g2.toFixed(1) : "—"} unidad={puntoCar.alcanzable ? "°" : ""} />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Los dos movimientos salen del mismo punto y llegan al mismo punto, y
          aun así no pasan por los mismos lugares. Interpolar ángulos es lo
          barato: cada articulación va de su valor inicial al final a velocidad
          constante. El resultado en el aire es un arco, no una recta.
        </p>
        <p>
          Arrastra el avance y sigue los dos brazos: el azul y el ámbar se
          separan en el medio y solo coinciden en los extremos. Por eso un robot
          soldando una costura recta necesita MOVL, mientras que para ir de una
          pieza a otra por el aire conviene MOVJ, que es más rápido y suave.
        </p>
      </Nota>
      <Nota titulo="Cuando la recta no se puede">
        <p>
          El brazo no alcanza los puntos demasiado cercanos a su base: queda un
          hueco de radio |L₁ − L₂|. Si la recta entre partida y llegada pasa por
          ese hueco, hay puntos intermedios sin solución inversa y el tramo se
          pinta de rojo — pruébalo con el botón de arriba. La interpolación
          articular sigue funcionando, porque se mueve en ángulos y nunca sale
          del espacio de trabajo.
        </p>
        <p>
          Pon L₁ igual a L₂ y el hueco desaparece: con eslabones iguales el
          brazo alcanza su propia base y ninguna recta interior queda fuera. Es
          la razón por la que ese caso imposible solo aparece con eslabones de
          distinta longitud.
        </p>
        <p>
          Es una falla típica al programar: la trayectoria se ve razonable en el
          papel, pero el controlador la rechaza porque algún punto intermedio no
          tiene solución inversa.
        </p>
      </Nota>
    </>
  );

  return <MarcoSimulador visual={visual} controles={controles} lecturas={lecturas} notas={notas} />;
}

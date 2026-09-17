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
  useAnguloAnimado,
} from "@/components/interactivos/Primitivos";
import {
  disponerPar,
  anguloConducido,
  contornoComoPath,
} from "@/components/interactivos/geometriaEngranajes";

const MODULOS = [0.5, 1, 1.5, 2].map((m) => ({
  valor: m,
  etiqueta: `m = ${m} mm`,
}));

const ANCHO = 340;
const ALTO = 240;
const GRADOS_POR_SEGUNDO_MAX = 220;

function Rueda({ cx, cy, radio, cabeza, dientes, angulo, acento }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <path
        d={contornoComoPath(radio, cabeza, dientes, angulo)}
        className={
          acento
            ? "fill-blue-500/15 stroke-blue-500"
            : "fill-zinc-200/60 stroke-zinc-500 dark:fill-zinc-700/50 dark:stroke-zinc-400"
        }
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        r={radio}
        className="fill-none stroke-zinc-400/60 dark:stroke-zinc-500/60"
        strokeDasharray="3 3"
      />
      <g transform={`rotate(${angulo})`}>
        <line
          x1={0}
          y1={0}
          x2={radio * 0.78}
          y2={0}
          className={acento ? "stroke-blue-600" : "stroke-zinc-600 dark:stroke-zinc-300"}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <circle
        r={Math.max(3, radio * 0.12)}
        className="fill-white stroke-zinc-500 dark:fill-zinc-900 dark:stroke-zinc-400"
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

  const par = disponerPar({ z1, z2, modulo, ancho: ANCHO, alto: ALTO });

  // El dibujo va más lento que la realidad para seguir siendo legible, pero la
  // relación entre ambos ejes es exacta: el ángulo del conducido se calcula a
  // partir del motriz.
  const gradosPorSegundo = Math.min(n1 * 6, GRADOS_POR_SEGUNDO_MAX);
  const anguloMotriz = useAnguloAnimado(gradosPorSegundo, animando);
  const anguloSalida = anguloConducido(anguloMotriz, z1, z2);

  const visual = (
    <div className="flex flex-col gap-3">
      <svg viewBox={`0 0 ${ANCHO} ${ALTO}`} className="w-full" role="img">
        <title>
          Par de engranajes engranando: el piñón mueve a la corona en sentido
          contrario
        </title>
        <Rueda
          cx={par.c1x}
          cy={par.cy}
          radio={par.r1}
          cabeza={par.cabeza}
          dientes={z1}
          angulo={anguloMotriz}
          acento
        />
        <Rueda
          cx={par.c2x}
          cy={par.cy}
          radio={par.r2}
          cabeza={par.cabeza}
          dientes={z2}
          angulo={anguloSalida}
        />
        <circle
          cx={par.c1x + par.r1}
          cy={par.cy}
          r="3.5"
          className="fill-amber-500"
        />
        <text
          x={par.c1x + par.r1}
          y={par.cy - 10}
          fontSize="10"
          textAnchor="middle"
          className="fill-amber-600"
        >
          punto de contacto
        </text>
      </svg>

      <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span>Entrada · piñón de {z1} dientes · {n1} rpm</span>
        <span>Salida · corona de {z2} dientes · {n2.toFixed(0)} rpm</span>
      </div>

      <button
        type="button"
        onClick={() => setAnimarManual(!animando)}
        className="self-start rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
      >
        {animando ? "Pausar giro" : "Reanudar giro"}
      </button>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        El giro en pantalla está frenado para que se pueda seguir con la vista.
        Lo fiel es la proporción: cuenta las vueltas de uno y de otro.
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

  const velocidadContacto = w1 * (par.d1 / 2 / 1000);

  const lecturas = (
    <>
      <Lectura etiqueta="Relación de transmisión" valor={`${i.toFixed(2)} : 1`} destacado />
      <Lectura etiqueta="Velocidad de salida" valor={n2.toFixed(1)} unidad="rpm" />
      <Lectura etiqueta="Torque de salida" valor={t2.toFixed(3)} unidad="N·m" destacado />
      <Lectura
        etiqueta="Velocidad en el contacto"
        valor={velocidadContacto.toFixed(2)}
        unidad="m/s"
      />
      <Lectura etiqueta="Potencia de entrada" valor={p1.toFixed(1)} unidad="W" />
      <Lectura etiqueta="Potencia de salida" valor={p2.toFixed(1)} unidad="W" />
      <Lectura etiqueta="Pérdidas" valor={(p1 - p2).toFixed(1)} unidad="W" />
      <Lectura etiqueta="Diámetros primitivos" valor={`${par.d1} / ${par.d2}`} unidad="mm" />
      <Lectura
        etiqueta="Distancia entre centros"
        valor={par.distanciaCentrosMm.toFixed(1)}
        unidad="mm"
      />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Sigue la marca de cada rueda: con la corona en 48 dientes y el piñón
          en 12, el piñón da cuatro vueltas por cada una de la corona. Esa es la
          relación de transmisión, y es también el factor por el que sube el
          torque y baja la velocidad.
        </p>
        <p>
          Mira las dos potencias: la de salida nunca supera la de entrada, y la
          diferencia es lo que se pierde en fricción. Baja el rendimiento al 60%
          y observa cuánta potencia se va en calor.
        </p>
      </Nota>
      <Nota titulo="El punto de contacto">
        <p>
          En el punto amarillo los dos dientes se tocan, así que ahí ambas
          ruedas llevan la misma velocidad lineal: ω₁·r₁ = ω₂·r₂. De esa
          igualdad sale todo lo demás. La rueda grande gira más despacio porque
          tiene que recorrer más circunferencia para la misma velocidad en el
          contacto.
        </p>
        <p>
          Los dientes engranan de verdad en el dibujo: el ángulo de la corona se
          calcula a partir del piñón, con medio paso de desfase, que es lo que
          hace que un diente caiga siempre en un hueco.
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

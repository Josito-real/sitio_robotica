"use client";

import { useState } from "react";
import MarcoSimulador from "@/components/interactivos/MarcoSimulador";
import {
  Control,
  Opciones,
  Lectura,
  Formula,
  Nota,
} from "@/components/interactivos/Primitivos";

const MICROPASOS = [1, 2, 4, 8, 16].map((v) => ({
  valor: v,
  etiqueta: v === 1 ? "paso completo" : `1/${v}`,
}));

const PASOS = [48, 200, 400].map((v) => ({ valor: v, etiqueta: `${v} pasos` }));

const TRAMA_MS = 20;

function Brazo({ angulo, etiqueta, color }) {
  return (
    <svg viewBox="0 0 160 160" className="w-full max-w-[160px]" role="img">
      <title>{etiqueta}</title>
      <circle cx="80" cy="80" r="62" className="fill-zinc-100 stroke-zinc-300 dark:fill-zinc-800 dark:stroke-zinc-700" />
      {[0, 45, 90, 135, 180].map((a) => {
        const rad = ((180 - a) * Math.PI) / 180;
        return (
          <line
            key={a}
            x1={80 + 54 * Math.cos(rad)}
            y1={80 - 54 * Math.sin(rad)}
            x2={80 + 62 * Math.cos(rad)}
            y2={80 - 62 * Math.sin(rad)}
            className="stroke-zinc-400 dark:stroke-zinc-600"
          />
        );
      })}
      <g transform={`rotate(${-angulo} 80 80)`}>
        <line x1="80" y1="80" x2="138" y2="80" className={color} strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="80" cy="80" r="7" className="fill-zinc-700 dark:fill-zinc-200" />
    </svg>
  );
}

export default function SimuladorServoPasoAPaso() {
  const [anchoPulso, setAnchoPulso] = useState(1500);
  const [pasosVuelta, setPasosVuelta] = useState(200);
  const [micro, setMicro] = useState(1);
  const [pasos, setPasos] = useState(0);

  const anguloServo = ((anchoPulso - 1000) / 1000) * 180;
  const dutyServo = (anchoPulso / 1000 / TRAMA_MS) * 100;

  const pasosTotales = pasosVuelta * micro;
  const anguloPorPaso = 360 / pasosTotales;
  const anguloPaso = (pasos * anguloPorPaso) % 360;

  const X0 = 30;
  const X1 = 320;
  const anchoTrama = (X1 - X0) / 2;
  const pulso = [];
  for (let k = 0; k < 2; k += 1) {
    const ini = X0 + k * anchoTrama;
    const corte = ini + (anchoTrama * anchoPulso) / 1000 / TRAMA_MS;
    pulso.push(`${ini},70 ${corte},70 ${corte},20 ${ini + anchoTrama},20`);
  }

  const visual = (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-1 text-sm font-medium">
          Servomotor · trama de {TRAMA_MS} ms
        </p>
        <svg viewBox="0 0 340 90" className="w-full" role="img">
          <title>Tren de pulsos del servo</title>
          <line x1={X0} y1="70" x2={X1} y2="70" className="stroke-zinc-300 dark:stroke-zinc-700" />
          <polyline points={pulso.join(" ")} fill="none" className="stroke-blue-500" strokeWidth="2" />
          <text x={X0} y="86" fontSize="10" className="fill-zinc-500">
            pulso de {anchoPulso} µs
          </text>
          <text x={X1} y="86" fontSize="10" textAnchor="end" className="fill-zinc-500">
            se repite cada {TRAMA_MS} ms
          </text>
        </svg>
      </div>

      <div className="flex flex-wrap items-center justify-around gap-4">
        <div className="text-center">
          <Brazo angulo={anguloServo} etiqueta="Brazo del servo" color="stroke-blue-500" />
          <p className="text-sm font-medium">Servo · {anguloServo.toFixed(1)}°</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            posición absoluta, en lazo cerrado interno
          </p>
        </div>
        <div className="text-center">
          <Brazo angulo={anguloPaso} etiqueta="Eje del motor paso a paso" color="stroke-emerald-500" />
          <p className="text-sm font-medium">Paso a paso · {anguloPaso.toFixed(2)}°</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {pasos} pasos dados, sin saber dónde está
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {[-10, -1, 1, 10].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setPasos((p) => p + d)}
            className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
          >
            {d > 0 ? `+${d}` : d} paso{Math.abs(d) > 1 ? "s" : ""}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPasos(0)}
          className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );

  const controles = (
    <>
      <Control
        etiqueta="Ancho del pulso (servo)"
        valor={anchoPulso}
        onChange={setAnchoPulso}
        min={1000}
        max={2000}
        paso={10}
        unidad="µs"
        ayuda="1000 µs es un extremo del recorrido y 2000 µs el otro."
      />
      <Opciones
        etiqueta="Pasos por vuelta (paso a paso)"
        valor={pasosVuelta}
        onChange={setPasosVuelta}
        opciones={PASOS}
      />
      <Opciones etiqueta="Microstepping" valor={micro} onChange={setMicro} opciones={MICROPASOS} />
      <Control
        etiqueta="Pasos dados"
        valor={pasos}
        onChange={setPasos}
        min={-pasosTotales}
        max={pasosTotales}
        unidad="pasos"
      />
      <Formula>ángulo = (t − 1000)/1000 · 180° · paso = 360° / (N · micro)</Formula>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Ángulo del servo" valor={anguloServo.toFixed(1)} unidad="°" destacado />
      <Lectura etiqueta="Ciclo de trabajo del servo" valor={dutyServo.toFixed(1)} unidad="%" />
      <Lectura etiqueta="Resolución del servo" valor="≈ 0,18" unidad="°/µs" />
      <Lectura etiqueta="Ángulo por paso" valor={anguloPorPaso.toFixed(3)} unidad="°" destacado />
      <Lectura etiqueta="Pasos por vuelta" valor={pasosTotales} />
      <Lectura etiqueta="Posición del paso a paso" valor={anguloPaso.toFixed(2)} unidad="°" />
      <Lectura
        etiqueta="Vueltas completas"
        valor={(pasos / pasosTotales).toFixed(2)}
      />
      <Lectura etiqueta="Trama del servo" valor={TRAMA_MS} unidad="ms" />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Al servo le dices <em>dónde</em> pararse: el ancho del pulso es la
          posición, y su electrónica interna se encarga de llegar y de
          sostenerse ahí. Si algo lo empuja, corrige solo, porque tiene un
          potenciómetro midiendo el eje.
        </p>
        <p>
          Al paso a paso le dices <em>cuánto</em> avanzar: cada pulso lo mueve
          un paso y nada más. Pulsa diez veces el botón de +1 y vuelve a
          reiniciar: el motor no sabe dónde está, solo cuenta pasos desde donde
          arrancó. Si pierde uno por exceso de carga, nadie se entera.
        </p>
      </Nota>
      <Nota titulo="Microstepping">
        <p>
          Sube el microstepping de paso completo a 1/16 y mira cómo el ángulo
          por paso se divide entre 16: con 200 pasos por vuelta pasas de 1,8° a
          0,1125°. Se gana resolución y el movimiento sale mucho más suave.
        </p>
        <p>
          Lo que no se gana es fuerza: el par de retención se reparte entre las
          posiciones intermedias, así que cada micropaso sostiene menos que un
          paso completo. Por eso el microstepping sirve para suavizar, no para
          posicionar con precisión bajo carga.
        </p>
      </Nota>
      <Nota titulo="Cuál usar">
        <p>
          Servo para articulaciones que deben ir a un ángulo conocido y
          quedarse ahí, con recorrido limitado. Paso a paso para ejes que giran
          sin tope y donde interesa el movimiento controlado, como los de una
          impresora 3D o el de una banda transportadora.
        </p>
      </Nota>
    </>
  );

  return (
    <MarcoSimulador visual={visual} controles={controles} lecturas={lecturas} notas={notas} />
  );
}

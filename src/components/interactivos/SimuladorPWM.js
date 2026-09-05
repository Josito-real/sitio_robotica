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

const MODOS = {
  "1-0": { nombre: "Giro horario", sentido: "horario", gira: true },
  "0-1": { nombre: "Giro antihorario", sentido: "antihorario", gira: true },
  "0-0": { nombre: "Rueda libre", sentido: null, gira: false },
  "1-1": { nombre: "Freno", sentido: null, gira: false },
};

const FRECUENCIAS = [490, 980, 4000, 20000].map((f) => ({
  valor: f,
  etiqueta: f >= 1000 ? `${f / 1000} kHz` : `${f} Hz`,
}));

export default function SimuladorPWM() {
  const [duty, setDuty] = useState(60);
  const [vcc, setVcc] = useState(12);
  const [frecuencia, setFrecuencia] = useState(490);
  const [zonaMuerta, setZonaMuerta] = useState(12);
  const [in1, setIn1] = useState(1);
  const [in2, setIn2] = useState(0);

  const menosMovimiento = usePrefiereMenosMovimiento();

  const modo = MODOS[`${in1}-${in2}`];
  const vMedio = (duty / 100) * vcc;
  const periodoMs = 1000 / frecuencia;
  const tOn = (periodoMs * duty) / 100;
  const analogWrite = Math.round((duty / 100) * 255);
  const velocidad = modo.gira
    ? Math.max(0, (duty - zonaMuerta) / (100 - zonaMuerta)) * 100
    : 0;
  const duracionGiro = velocidad > 0 ? Math.max(0.25, 3 / (velocidad / 25)) : 0;
  const animando = velocidad > 0 && !menosMovimiento;

  // Onda: tres periodos dentro del lienzo.
  const X0 = 40;
  const X1 = 324;
  const YAlto = 30;
  const YBajo = 110;
  const anchoPeriodo = (X1 - X0) / 3;
  const puntos = [];
  for (let k = 0; k < 3; k += 1) {
    const inicio = X0 + k * anchoPeriodo;
    const corte = inicio + (anchoPeriodo * duty) / 100;
    const fin = inicio + anchoPeriodo;
    puntos.push(`${inicio},${YAlto} ${corte},${YAlto} ${corte},${YBajo} ${fin},${YBajo}`);
  }
  const yMedio = YBajo - ((YBajo - YAlto) * duty) / 100;

  const visual = (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-1 text-sm font-medium">Señal PWM</p>
        <svg viewBox="0 0 340 140" className="w-full" role="img">
          <title>Onda cuadrada con el ciclo de trabajo seleccionado</title>
          <line x1={X0} y1={YBajo} x2={X1} y2={YBajo} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line x1={X0} y1={YBajo} x2={X0} y2={YAlto - 10} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <polyline
            points={puntos.join(" ")}
            fill="none"
            className="stroke-blue-500"
            strokeWidth="2"
          />
          <line
            x1={X0}
            y1={yMedio}
            x2={X1}
            y2={yMedio}
            className="stroke-amber-500"
            strokeDasharray="4 3"
            strokeWidth="1.5"
          />
          <text x={X0 - 6} y={YAlto + 4} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {vcc} V
          </text>
          <text x={X0 - 6} y={YBajo + 4} fontSize="10" textAnchor="end" className="fill-zinc-500">
            0 V
          </text>
          <text x={X1} y={yMedio - 5} fontSize="10" textAnchor="end" className="fill-amber-600">
            V medio = {vMedio.toFixed(2)} V
          </text>
          <text x={X0 + anchoPeriodo / 2} y={130} fontSize="10" textAnchor="middle" className="fill-zinc-500">
            1 periodo = {periodoMs.toFixed(3)} ms
          </text>
        </svg>
      </div>

      <div className="flex items-center gap-5">
        <svg viewBox="0 0 120 120" className="w-28 shrink-0" role="img">
          <title>Rotor del motor</title>
          <circle cx="60" cy="60" r="46" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-800 dark:stroke-zinc-500" />
          <g
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animationName:
                modo.sentido === "antihorario" ? "girar-antihorario" : "girar-horario",
              animationDuration: `${duracionGiro || 1}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: animando ? "running" : "paused",
            }}
          >
            <circle cx="60" cy="60" r="30" className="fill-white stroke-zinc-400 dark:fill-zinc-900 dark:stroke-zinc-600" />
            <line x1="60" y1="60" x2="60" y2="32" className="stroke-blue-500" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="60" x2="60" y2="88" className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
        <div>
          <p className="font-semibold">{modo.nombre}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {velocidad > 0
              ? `Velocidad relativa ${velocidad.toFixed(0)}%`
              : modo.gira
                ? "El motor no arranca: el ciclo de trabajo no vence la zona muerta."
                : "Sin par motor."}
          </p>
        </div>
      </div>
    </div>
  );

  const controles = (
    <>
      <Control
        etiqueta="Ciclo de trabajo"
        valor={duty}
        onChange={setDuty}
        min={0}
        max={100}
        unidad="%"
      />
      <Control
        etiqueta="Tensión de alimentación"
        valor={vcc}
        onChange={setVcc}
        min={3}
        max={24}
        paso={0.5}
        unidad="V"
        decimales={1}
      />
      <Opciones
        etiqueta="Frecuencia de conmutación"
        valor={frecuencia}
        onChange={setFrecuencia}
        opciones={FRECUENCIAS}
      />
      <Control
        etiqueta="Zona muerta por fricción"
        valor={zonaMuerta}
        onChange={setZonaMuerta}
        min={0}
        max={40}
        unidad="%"
        ayuda="Ciclo de trabajo mínimo que necesita el motor para empezar a girar."
      />
      <div>
        <span className="text-sm font-medium">Entradas del puente H</span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            aria-pressed={in1 === 1}
            onClick={() => setIn1(in1 === 1 ? 0 : 1)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              in1 === 1
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            }`}
          >
            IN1 = {in1}
          </button>
          <button
            type="button"
            aria-pressed={in2 === 1}
            onClick={() => setIn2(in2 === 1 ? 0 : 1)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              in2 === 1
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            }`}
          >
            IN2 = {in2}
          </button>
        </div>
        <ul className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
          {Object.entries(MODOS).map(([clave, valor]) => (
            <li
              key={clave}
              className={
                clave === `${in1}-${in2}`
                  ? "font-semibold text-zinc-900 dark:text-zinc-100"
                  : ""
              }
            >
              IN1={clave[0]} · IN2={clave[2]} → {valor.nombre}
            </li>
          ))}
        </ul>
      </div>
      <Formula>V medio = D · Vcc · analogWrite = D · 255</Formula>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Voltaje medio" valor={vMedio.toFixed(2)} unidad="V" destacado />
      <Lectura etiqueta="Valor de analogWrite()" valor={analogWrite} />
      <Lectura etiqueta="Periodo" valor={periodoMs.toFixed(3)} unidad="ms" />
      <Lectura etiqueta="Tiempo en alto" valor={tOn.toFixed(3)} unidad="ms" />
      <Lectura etiqueta="Tiempo en bajo" valor={(periodoMs - tOn).toFixed(3)} unidad="ms" />
      <Lectura etiqueta="Velocidad relativa" valor={velocidad.toFixed(0)} unidad="%" destacado />
      <Lectura etiqueta="Estado del puente" valor={modo.nombre} />
      <Lectura etiqueta="Conmutaciones por segundo" valor={frecuencia.toLocaleString("es")} />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          El motor nunca ve los 12 V a medias: ve pulsos completos. Lo que
          promedia es su propia inercia mecánica y eléctrica, y por eso el
          voltaje medio es lo que gobierna la velocidad.
        </p>
        <p>
          Sube la zona muerta y baja el ciclo de trabajo: hay una franja donde
          la señal existe pero el motor no arranca porque no vence su fricción
          estática. Es la razón por la que un robot móvil no puede ir
          arbitrariamente lento con control en lazo abierto.
        </p>
      </Nota>
      <Nota titulo="Sobre la frecuencia y el puente H">
        <p>
          La frecuencia no cambia el voltaje medio: cambia el tamaño de los
          pulsos. Muy baja se oye como un zumbido y el par sale a tirones; muy
          alta calienta más los transistores al conmutar. Los 490 Hz son los que
          entrega por defecto <span className="font-mono">analogWrite()</span> en
          la mayoría de los pines de un Arduino UNO.
        </p>
        <p>
          Con IN1 e IN2 en el mismo nivel el motor no gira, pero las dos
          situaciones no son iguales: en rueda libre queda desconectado y sigue
          por inercia, mientras que en freno sus terminales quedan unidos y la
          propia corriente generada lo detiene.
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

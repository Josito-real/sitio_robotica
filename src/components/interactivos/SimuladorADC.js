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

const ESCALAS = [
  { valor: "temp", etiqueta: "Temperatura", min: 0, max: 100, unidad: "°C" },
  { valor: "dist", etiqueta: "Distancia", min: 2, max: 400, unidad: "cm" },
  { valor: "angulo", etiqueta: "Ángulo", min: 0, max: 270, unidad: "°" },
];

const BITS = [8, 10, 12, 16].map((b) => ({ valor: b, etiqueta: `${b} bits` }));
const VREFS = [1.1, 3.3, 5].map((v) => ({ valor: v, etiqueta: `${v} V` }));

// Agrupa de a cuatro desde el bit menos significativo, como se lee un binario.
function binarioAgrupado(codigo, bits) {
  const crudo = codigo.toString(2).padStart(bits, "0");
  const grupos = [];
  for (let fin = crudo.length; fin > 0; fin -= 4) {
    grupos.unshift(crudo.slice(Math.max(0, fin - 4), fin));
  }
  return grupos.join(" ");
}

export default function SimuladorADC() {
  const [bits, setBits] = useState(10);
  const [vref, setVref] = useState(5);
  const [vinCrudo, setVinCrudo] = useState(2.5);
  const [escalaId, setEscalaId] = useState("temp");

  const escala = ESCALAS.find((e) => e.valor === escalaId);
  const niveles = 2 ** bits;
  const lsb = vref / niveles;
  const vin = Math.min(vinCrudo, vref);
  const codigo = Math.min(niveles - 1, Math.floor(vin / lsb));
  const vReconstruido = codigo * lsb;
  const error = vin - vReconstruido;
  const escalado =
    escala.min + (codigo / (niveles - 1)) * (escala.max - escala.min);

  // Ventana de zoom: ocho escalones alrededor del código actual.
  const ventana = 8;
  let cMin = Math.max(0, codigo - 3);
  const cMax = Math.min(niveles - 1, cMin + ventana - 1);
  cMin = Math.max(0, cMax - ventana + 1);
  const vLo = cMin * lsb;
  const vHi = (cMax + 1) * lsb;

  const X0 = 44;
  const X1 = 324;
  const Y0 = 142;
  const Y1 = 22;

  const xGlobal = (v) => X0 + (v / vref) * (X1 - X0);
  const yGlobal = (c) => Y0 - (c / (niveles - 1)) * (Y0 - Y1);
  const xZoom = (v) => X0 + ((v - vLo) / (vHi - vLo)) * (X1 - X0);
  const yZoom = (c) => Y0 - ((c - cMin) / (cMax + 1 - cMin)) * (Y0 - Y1);

  const escalones = [];
  for (let k = cMin; k <= cMax; k += 1) {
    escalones.push(k);
  }

  const visual = (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-1 text-sm font-medium">Curva de transferencia</p>
        <svg viewBox="0 0 340 164" className="w-full" role="img">
          <title>Código digital en función del voltaje de entrada</title>
          <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line x1={X0} y1={Y0} x2={X0} y2={Y1} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line
            x1={xGlobal(0)}
            y1={yGlobal(0)}
            x2={xGlobal(vref)}
            y2={yGlobal(niveles - 1)}
            className="stroke-zinc-400 dark:stroke-zinc-500"
            strokeWidth="1.5"
          />
          <line
            x1={xGlobal(vin)}
            y1={Y0}
            x2={xGlobal(vin)}
            y2={yGlobal(codigo)}
            className="stroke-blue-500"
            strokeDasharray="3 3"
          />
          <line
            x1={X0}
            y1={yGlobal(codigo)}
            x2={xGlobal(vin)}
            y2={yGlobal(codigo)}
            className="stroke-blue-500"
            strokeDasharray="3 3"
          />
          <circle cx={xGlobal(vin)} cy={yGlobal(codigo)} r="4" className="fill-blue-500" />
          <text x={X0} y={158} fontSize="10" className="fill-zinc-500">0 V</text>
          <text x={X1} y={158} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {vref} V
          </text>
          <text x={X0 - 6} y={Y0} fontSize="10" textAnchor="end" className="fill-zinc-500">0</text>
          <text x={X0 - 6} y={Y1 + 8} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {niveles - 1}
          </text>
        </svg>
      </div>

      <div>
        <p className="mb-1 text-sm font-medium">
          Zoom: ocho escalones alrededor del código actual
        </p>
        <svg viewBox="0 0 340 164" className="w-full" role="img">
          <title>Escalones de cuantización alrededor del punto de trabajo</title>
          <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line x1={X0} y1={Y0} x2={X0} y2={Y1} className="stroke-zinc-300 dark:stroke-zinc-700" />
          {escalones.map((k) => (
            <g key={k}>
              <line
                x1={xZoom(k * lsb)}
                y1={yZoom(k)}
                x2={xZoom((k + 1) * lsb)}
                y2={yZoom(k)}
                strokeWidth={k === codigo ? 3 : 1.5}
                className={
                  k === codigo
                    ? "stroke-blue-500"
                    : "stroke-zinc-400 dark:stroke-zinc-500"
                }
              />
              {k < cMax && (
                <line
                  x1={xZoom((k + 1) * lsb)}
                  y1={yZoom(k)}
                  x2={xZoom((k + 1) * lsb)}
                  y2={yZoom(k + 1)}
                  className="stroke-zinc-300 dark:stroke-zinc-600"
                />
              )}
            </g>
          ))}
          <line
            x1={xZoom(Math.min(Math.max(vin, vLo), vHi))}
            y1={Y1}
            x2={xZoom(Math.min(Math.max(vin, vLo), vHi))}
            y2={Y0}
            className="stroke-blue-500"
            strokeDasharray="3 3"
          />
          <text x={X0} y={158} fontSize="10" className="fill-zinc-500">
            {vLo.toFixed(4)} V
          </text>
          <text x={X1} y={158} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {vHi.toFixed(4)} V
          </text>
          <text x={X0 - 6} y={yZoom(codigo) + 3} fontSize="10" textAnchor="end" className="fill-blue-500">
            {codigo}
          </text>
        </svg>
      </div>
    </div>
  );

  const controles = (
    <>
      <Opciones etiqueta="Resolución" valor={bits} onChange={setBits} opciones={BITS} />
      <Opciones
        etiqueta="Voltaje de referencia"
        valor={vref}
        onChange={(v) => {
          setVref(v);
          setVinCrudo((actual) => Math.min(actual, v));
        }}
        opciones={VREFS}
      />
      <Control
        etiqueta="Voltaje de entrada"
        valor={vin}
        onChange={setVinCrudo}
        min={0}
        max={vref}
        paso={0.001}
        unidad="V"
        decimales={3}
      />
      <Opciones
        etiqueta="Magnitud medida"
        valor={escalaId}
        onChange={setEscalaId}
        opciones={ESCALAS.map((e) => ({
          valor: e.valor,
          etiqueta: `${e.etiqueta} (${e.min}–${e.max} ${e.unidad})`,
        }))}
      />
      <Formula>
        código = floor(Vin · 2^n / Vref) · LSB = Vref / 2^n
      </Formula>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Código digital" valor={codigo} destacado />
      <Lectura etiqueta="Resolución (1 LSB)" valor={(lsb * 1000).toFixed(3)} unidad="mV" />
      <Lectura etiqueta="Voltaje reconstruido" valor={vReconstruido.toFixed(4)} unidad="V" />
      <Lectura etiqueta="Error de cuantización" valor={(error * 1000).toFixed(3)} unidad="mV" />
      <Lectura etiqueta="Binario" valor={binarioAgrupado(codigo, bits)} />
      <Lectura
        etiqueta="Hexadecimal"
        valor={`0x${codigo.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), "0")}`}
      />
      <Lectura etiqueta="Niveles" valor={niveles.toLocaleString("es")} />
      <Lectura
        etiqueta={`Valor escalado (${escala.etiqueta.toLowerCase()})`}
        valor={escalado.toFixed(2)}
        unidad={escala.unidad}
        destacado
      />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Sube la resolución de 8 a 16 bits sin mover nada más: el escalón del
          zoom se achica y el error de cuantización baja con él. Ese error nunca
          supera 1 LSB, y es el piso de incertidumbre de la medida por más que
          el sensor sea bueno.
        </p>
        <p>
          Baja Vref a 1,1 V: cada cuenta vale menos milivoltios, así que ganas
          resolución sobre señales pequeñas — pero todo lo que pase de 1,1 V
          satura en el código máximo.
        </p>
      </Nota>
      <Nota titulo="El escalamiento">
        <p>
          El valor escalado usa el código completo:{" "}
          <span className="font-mono">
            valor = min + (código / (2^n − 1)) · (max − min)
          </span>
          . Es lo que hace <span className="font-mono">map()</span> en Arduino.
          Observa que la magnitud física hereda la escalera: entre dos códigos
          consecutivos no hay valores intermedios posibles.
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

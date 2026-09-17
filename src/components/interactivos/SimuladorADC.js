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
import {
  cuantizar,
  escalar,
  pasoDeslizador,
  decimalesUtiles,
  curvaError,
} from "@/components/interactivos/cuantizacion";

const ESCALAS = [
  { valor: "temp", etiqueta: "Temperatura", min: 0, max: 100, unidad: "°C" },
  { valor: "dist", etiqueta: "Distancia", min: 2, max: 400, unidad: "cm" },
  { valor: "angulo", etiqueta: "Ángulo", min: 0, max: 270, unidad: "°" },
];

const BITS = [8, 10, 12, 16].map((b) => ({ valor: b, etiqueta: `${b} bits` }));
const VREFS = [1.1, 3.3, 5].map((v) => ({ valor: v, etiqueta: `${v} V` }));
const VIN_MAX = 6;

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
  const [vin, setVin] = useState(2.5);
  const [escalaId, setEscalaId] = useState("temp");

  const escala = ESCALAS.find((e) => e.valor === escalaId);
  const q = cuantizar(vin, vref, bits);
  const escalado = escalar(q.codigo, q.niveles, escala.min, escala.max);
  const paso = pasoDeslizador(q.lsb);
  const decimales = decimalesUtiles(q.lsb);

  // Ventana del zoom: ocho escalones alrededor del código actual.
  const ventana = 8;
  const cMax = Math.min(q.niveles - 1, Math.max(0, q.codigo - 3) + ventana - 1);
  const cMin = Math.max(0, cMax - ventana + 1);
  const vLo = cMin * q.lsb;
  const vHi = (cMax + 1) * q.lsb;

  const X0 = 44;
  const X1 = 324;
  const Y0 = 142;
  const Y1 = 22;

  const vinDibujo = Math.min(vin, VIN_MAX);
  const xGlobal = (v) => X0 + (v / VIN_MAX) * (X1 - X0);
  const yGlobal = (c) => Y0 - (c / (q.niveles - 1)) * (Y0 - Y1);
  const xZoom = (v) => X0 + ((v - vLo) / (vHi - vLo)) * (X1 - X0);
  const yZoom = (c) => Y0 - ((c - cMin) / (cMax + 1 - cMin)) * (Y0 - Y1);

  const escalones = [];
  for (let k = cMin; k <= cMax; k += 1) escalones.push(k);

  // Diente de sierra del error en la misma ventana del zoom.
  const sierra = curvaError(vref, bits, vLo, vHi, 200);
  const YE0 = 96;
  const YE1 = 16;
  const yError = (e) => YE0 - (Math.min(e, q.lsb) / q.lsb) * (YE0 - YE1);

  const visual = (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-1 text-sm font-medium">
          Curva de transferencia (ideal, con la meseta de saturación)
        </p>
        <svg viewBox="0 0 340 164" className="w-full" role="img">
          <title>Código digital en función del voltaje de entrada</title>
          <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line x1={X0} y1={Y0} x2={X0} y2={Y1} className="stroke-zinc-300 dark:stroke-zinc-700" />

          <line
            x1={xGlobal(0)}
            y1={yGlobal(0)}
            x2={xGlobal(vref)}
            y2={yGlobal(q.niveles - 1)}
            className="stroke-zinc-400 dark:stroke-zinc-500"
            strokeWidth="1.5"
          />
          <line
            x1={xGlobal(vref)}
            y1={yGlobal(q.niveles - 1)}
            x2={xGlobal(VIN_MAX)}
            y2={yGlobal(q.niveles - 1)}
            className="stroke-red-500"
            strokeWidth="1.5"
          />
          <line
            x1={xGlobal(vref)}
            y1={Y0}
            x2={xGlobal(vref)}
            y2={Y1}
            className="stroke-zinc-300 dark:stroke-zinc-600"
            strokeDasharray="2 3"
          />
          <text x={xGlobal(vref)} y={Y1 - 6} fontSize="10" textAnchor="middle" className="fill-zinc-500">
            Vref
          </text>

          <line
            x1={xGlobal(vinDibujo)}
            y1={Y0}
            x2={xGlobal(vinDibujo)}
            y2={yGlobal(q.codigo)}
            className={q.saturado ? "stroke-red-500" : "stroke-blue-500"}
            strokeDasharray="3 3"
          />
          <circle
            cx={xGlobal(vinDibujo)}
            cy={yGlobal(q.codigo)}
            r="4"
            className={q.saturado ? "fill-red-500" : "fill-blue-500"}
          />
          <text x={X0} y={158} fontSize="10" className="fill-zinc-500">0 V</text>
          <text x={X1} y={158} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {VIN_MAX} V
          </text>
          <text x={X0 - 6} y={Y0} fontSize="10" textAnchor="end" className="fill-zinc-500">0</text>
          <text x={X0 - 6} y={Y1 + 8} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {q.niveles - 1}
          </text>
          {q.saturado && (
            <text x={(X0 + X1) / 2} y={Y1 + 4} fontSize="12" textAnchor="middle" className="fill-red-500 font-semibold">
              Saturado: la entrada supera Vref
            </text>
          )}
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
                x1={xZoom(k * q.lsb)}
                y1={yZoom(k)}
                x2={xZoom((k + 1) * q.lsb)}
                y2={yZoom(k)}
                strokeWidth={k === q.codigo ? 3 : 1.5}
                className={k === q.codigo ? "stroke-blue-500" : "stroke-zinc-400 dark:stroke-zinc-500"}
              />
              {k < cMax && (
                <line
                  x1={xZoom((k + 1) * q.lsb)}
                  y1={yZoom(k)}
                  x2={xZoom((k + 1) * q.lsb)}
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
            {vLo.toFixed(decimales)} V
          </text>
          <text x={X1} y={158} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {vHi.toFixed(decimales)} V
          </text>
          <text x={X0 - 6} y={yZoom(cMin) + 3} fontSize="10" textAnchor="end" className="fill-zinc-500">
            {cMin}
          </text>
          <text x={X0 - 6} y={yZoom(q.codigo) + 3} fontSize="10" textAnchor="end" className="fill-blue-500">
            {q.codigo}
          </text>
        </svg>
      </div>

      <div>
        <p className="mb-1 text-sm font-medium">
          Error de cuantización en esa misma ventana
        </p>
        <svg viewBox="0 0 340 116" className="w-full" role="img">
          <title>Diente de sierra del error de cuantización</title>
          <line x1={X0} y1={YE0} x2={X1} y2={YE0} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line x1={X0} y1={YE0} x2={X0} y2={YE1} className="stroke-zinc-300 dark:stroke-zinc-700" />
          <line x1={X0} y1={YE1} x2={X1} y2={YE1} className="stroke-amber-500/60" strokeDasharray="4 3" />
          <text x={X0 - 6} y={YE1 + 4} fontSize="10" textAnchor="end" className="fill-amber-600">
            1 LSB
          </text>
          <text x={X0 - 6} y={YE0} fontSize="10" textAnchor="end" className="fill-zinc-500">0</text>
          <polyline
            points={sierra.map((p) => `${xZoom(p.v)},${yError(p.error)}`).join(" ")}
            fill="none"
            className="stroke-amber-500"
            strokeWidth="1.5"
          />
          <circle
            cx={xZoom(Math.min(Math.max(vin, vLo), vHi))}
            cy={yError(Math.max(0, q.error))}
            r="3.5"
            className="fill-blue-500"
          />
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
        onChange={setVref}
        opciones={VREFS}
      />
      <Control
        etiqueta="Voltaje de entrada"
        valor={vin}
        onChange={setVin}
        min={0}
        max={VIN_MAX}
        paso={paso}
        unidad="V"
        decimales={decimales}
        ayuda={`El paso del deslizador se ajusta solo a la resolución: ahora ${(paso * 1000).toFixed(3)} mV, un cuarto de LSB.`}
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
      <Formula>código = floor(Vin · 2ⁿ / Vref) · LSB = Vref / 2ⁿ</Formula>
    </>
  );

  const lecturas = (
    <>
      <Lectura etiqueta="Código digital" valor={q.codigo} destacado />
      <Lectura etiqueta="Resolución (1 LSB)" valor={(q.lsb * 1000).toFixed(3)} unidad="mV" />
      <Lectura etiqueta="Voltaje reconstruido" valor={q.vReconstruido.toFixed(decimales)} unidad="V" />
      <Lectura etiqueta="Error de cuantización" valor={(q.error * 1000).toFixed(3)} unidad="mV" />
      <Lectura etiqueta="Error en LSB" valor={(q.error / q.lsb).toFixed(3)} unidad="LSB" />
      <Lectura etiqueta="Estado" valor={q.saturado ? "saturado" : "normal"} />
      <Lectura etiqueta="Binario" valor={binarioAgrupado(q.codigo, bits)} />
      <Lectura
        etiqueta="Hexadecimal"
        valor={`0x${q.codigo.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), "0")}`}
      />
      <Lectura etiqueta="Niveles" valor={q.niveles.toLocaleString("es")} />
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
          zoom se achica y el diente de sierra de abajo se vuelve más fino. El
          error nunca llega a 1 LSB — esa línea ámbar es el techo — y es el piso
          de incertidumbre de la medida por bueno que sea el sensor.
        </p>
        <p>
          El deslizador ajusta su paso a la resolución elegida, así que en 16
          bits se mueve de a 10 µV. Con un paso fijo de 1 mV no se podría
          recorrer un solo escalón: cada movimiento saltaría trece códigos.
        </p>
      </Nota>
      <Nota titulo="Saturación">
        <p>
          Lleva la entrada por encima de Vref. El código se queda clavado en el
          máximo, la curva se vuelve una meseta roja y el error deja de estar
          acotado: con 6 V y Vref de 5 V el error es de 1005 mV, más de doscientos
          LSB. Ya no es cuantización, es información perdida.
        </p>
        <p>
          Por eso bajar Vref es un intercambio, no una mejora gratis: con 1,1 V
          cada cuenta vale menos milivoltios y se mide mejor una señal pequeña,
          pero todo lo que pase de 1,1 V se pierde.
        </p>
      </Nota>
      <Nota titulo="El escalamiento">
        <p>
          El valor escalado usa el fondo de escala completo:{" "}
          <span className="font-mono">
            valor = min + (código / (2ⁿ − 1)) · (max − min)
          </span>
          , que es lo que hace <span className="font-mono">map()</span> en
          Arduino. La magnitud física hereda la escalera: entre dos códigos
          consecutivos no hay valores intermedios posibles, y esa distancia es
          la resolución real de tu medida en grados o en centímetros.
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

"use client";

import { useEffect, useRef, useState } from "react";
import MarcoSimulador from "@/components/interactivos/MarcoSimulador";
import { Control, Opciones, Lectura, Nota } from "@/components/interactivos/Primitivos";

const IMAGEN = "/images/carrusel/wall-e.jpg";
const ANCHO = 320;

const NUCLEOS = {
  identidad: { etiqueta: "Identidad", k: [0, 0, 0, 0, 1, 0, 0, 0, 0] },
  desenfoque: { etiqueta: "Desenfoque", k: [1, 1, 1, 1, 1, 1, 1, 1, 1].map((v) => v / 9) },
  nitidez: { etiqueta: "Realce", k: [0, -1, 0, -1, 5, -1, 0, -1, 0] },
  sobelX: { etiqueta: "Sobel X", k: [-1, 0, 1, -2, 0, 2, -1, 0, 1] },
  sobelY: { etiqueta: "Sobel Y", k: [-1, -2, -1, 0, 0, 0, 1, 2, 1] },
  bordes: { etiqueta: "Bordes (magnitud)", k: null },
};

function rgbAHsv(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = 60 * (((g - b) / d) % 6);
    else if (max === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
  }
  if (h < 0) h += 360;
  return [h, max === 0 ? 0 : (d / max) * 100, (max / 255) * 100];
}

function gris(datos, i) {
  return 0.299 * datos[i] + 0.587 * datos[i + 1] + 0.114 * datos[i + 2];
}

export default function SimuladorVision() {
  const lienzo = useRef(null);
  const original = useRef(null);
  const [listo, setListo] = useState(false);
  const [modo, setModo] = useState("hsv");
  const [hMin, setHMin] = useState(20);
  const [hMax, setHMax] = useState(60);
  const [sMin, setSMin] = useState(35);
  const [vMin, setVMin] = useState(25);
  const [nucleo, setNucleo] = useState("bordes");
  const [coincidencias, setCoincidencias] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const alto = Math.round((img.height / img.width) * ANCHO);
      const aux = document.createElement("canvas");
      aux.width = ANCHO;
      aux.height = alto;
      const ctx = aux.getContext("2d");
      ctx.drawImage(img, 0, 0, ANCHO, alto);
      original.current = ctx.getImageData(0, 0, ANCHO, alto);
      setListo(true);
    };
    img.src = IMAGEN;
  }, []);

  useEffect(() => {
    if (!listo || !original.current || !lienzo.current) return;
    const src = original.current;
    const w = src.width;
    const h = src.height;
    lienzo.current.width = w;
    lienzo.current.height = h;
    const ctx = lienzo.current.getContext("2d");
    const salida = ctx.createImageData(w, h);
    let dentro = 0;

    if (modo === "hsv") {
      for (let i = 0; i < src.data.length; i += 4) {
        const [hh, ss, vv] = rgbAHsv(src.data[i], src.data[i + 1], src.data[i + 2]);
        const enRango =
          (hMin <= hMax ? hh >= hMin && hh <= hMax : hh >= hMin || hh <= hMax) &&
          ss >= sMin &&
          vv >= vMin;
        if (enRango) dentro += 1;
        const apagado = gris(src.data, i) * 0.35;
        salida.data[i] = enRango ? src.data[i] : apagado;
        salida.data[i + 1] = enRango ? src.data[i + 1] : apagado;
        salida.data[i + 2] = enRango ? src.data[i + 2] : apagado;
        salida.data[i + 3] = 255;
      }
    } else {
      const k = NUCLEOS[nucleo].k;
      for (let y = 1; y < h - 1; y += 1) {
        for (let x = 1; x < w - 1; x += 1) {
          const i = (y * w + x) * 4;
          let valor = 0;
          if (nucleo === "bordes") {
            let gx = 0;
            let gy = 0;
            for (let dy = -1; dy <= 1; dy += 1) {
              for (let dx = -1; dx <= 1; dx += 1) {
                const g = gris(src.data, ((y + dy) * w + (x + dx)) * 4);
                const idx = (dy + 1) * 3 + (dx + 1);
                gx += g * NUCLEOS.sobelX.k[idx];
                gy += g * NUCLEOS.sobelY.k[idx];
              }
            }
            valor = Math.hypot(gx, gy);
          } else {
            for (let dy = -1; dy <= 1; dy += 1) {
              for (let dx = -1; dx <= 1; dx += 1) {
                valor +=
                  gris(src.data, ((y + dy) * w + (x + dx)) * 4) *
                  k[(dy + 1) * 3 + (dx + 1)];
              }
            }
          }
          const v = Math.max(0, Math.min(255, Math.abs(valor)));
          salida.data[i] = v;
          salida.data[i + 1] = v;
          salida.data[i + 2] = v;
          salida.data[i + 3] = 255;
        }
      }
    }
    ctx.putImageData(salida, 0, 0);
    setCoincidencias(modo === "hsv" ? (dentro / (w * h)) * 100 : 0);
  }, [listo, modo, hMin, hMax, sMin, vMin, nucleo]);

  const visual = (
    <div className="flex flex-col gap-3">
      <canvas
        ref={lienzo}
        className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
      />
      {!listo && <p className="text-sm text-zinc-500">Cargando la imagen…</p>}
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Todo el procesamiento ocurre en tu navegador, píxel por píxel, sobre una
        copia reducida a {ANCHO} px de ancho.
      </p>
    </div>
  );

  const controles = (
    <>
      <Opciones
        etiqueta="Qué hacer con la imagen"
        valor={modo}
        onChange={setModo}
        opciones={[
          { valor: "hsv", etiqueta: "Umbral HSV" },
          { valor: "conv", etiqueta: "Convolución" },
        ]}
      />
      {modo === "hsv" ? (
        <>
          <Control etiqueta="Tono mínimo" valor={hMin} onChange={setHMin} min={0} max={360} unidad="°" />
          <Control etiqueta="Tono máximo" valor={hMax} onChange={setHMax} min={0} max={360} unidad="°" />
          <Control etiqueta="Saturación mínima" valor={sMin} onChange={setSMin} min={0} max={100} unidad="%" />
          <Control etiqueta="Valor mínimo" valor={vMin} onChange={setVMin} min={0} max={100} unidad="%" />
        </>
      ) : (
        <>
          <Opciones
            etiqueta="Núcleo 3×3"
            valor={nucleo}
            onChange={setNucleo}
            opciones={Object.entries(NUCLEOS).map(([valor, v]) => ({
              valor,
              etiqueta: v.etiqueta,
            }))}
          />
          <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {nucleo === "bordes"
                ? "Magnitud: √(Sobel X² + Sobel Y²) — se muestra Sobel X"
                : "Coeficientes"}
            </p>
            <table className="mt-2 w-full font-mono text-xs tabular-nums">
              <tbody>
                {[0, 1, 2].map((f) => (
                  <tr key={f}>
                    {[0, 1, 2].map((c) => (
                      <td key={c}>
                        {(NUCLEOS[nucleo].k ?? NUCLEOS.sobelX.k)[f * 3 + c].toFixed(2)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );

  const lecturas = (
    <>
      <Lectura
        etiqueta="Modo"
        valor={modo === "hsv" ? "Umbral HSV" : NUCLEOS[nucleo].etiqueta}
        destacado
      />
      <Lectura
        etiqueta="Píxeles seleccionados"
        valor={modo === "hsv" ? coincidencias.toFixed(1) : "—"}
        unidad={modo === "hsv" ? "%" : ""}
      />
      <Lectura etiqueta="Ancho de proceso" valor={ANCHO} unidad="px" />
      <Lectura etiqueta="Vecindario" valor="3 × 3" />
    </>
  );

  const notas = (
    <>
      <Nota>
        <p>
          Con el tono entre 20° y 60° y algo de saturación queda seleccionado el
          cuerpo amarillo del robot y se apaga casi todo lo demás. Eso es
          segmentar por color: el punto de partida de un seguidor de línea o de
          un robot que persigue una pelota.
        </p>
        <p>
          Se trabaja en HSV y no en RGB porque el tono aguanta los cambios de
          iluminación: baja el valor mínimo y la selección se mantiene. En RGB
          una sombra cambia los tres canales a la vez y hay que reajustar todo.
        </p>
      </Nota>
      <Nota titulo="La convolución">
        <p>
          Cada píxel de salida es una suma pesada de sus nueve vecinos. Con el
          desenfoque todos los coeficientes valen 1/9 y la imagen se suaviza;
          con Sobel los pesos son opuestos a cada lado, así que el resultado
          solo es grande donde hay un cambio brusco de brillo: un borde.
        </p>
        <p>
          Sobel X responde a los bordes verticales y Sobel Y a los
          horizontales, porque cada uno mide la pendiente en su dirección. La
          magnitud combina los dos y por eso encuentra bordes en cualquier
          orientación. Es exactamente lo que hace <span className="font-mono">cv2.Sobel</span> en
          los scripts de OpenCV del laboratorio.
        </p>
      </Nota>
    </>
  );

  return (
    <MarcoSimulador visual={visual} controles={controles} lecturas={lecturas} notas={notas} />
  );
}

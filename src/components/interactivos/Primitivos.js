"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

// Respeta la preferencia del sistema de reducir animaciones, sin romper el
// render del servidor: allí siempre devuelve false.
export function usePrefiereMenosMovimiento() {
  return useSyncExternalStore(
    (avisar) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", avisar);
      return () => mq.removeEventListener("change", avisar);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

// Ángulo que avanza solo, en grados. Se usa un bucle de animación en vez de
// CSS para poder acoplar la fase de dos piezas que giran juntas y para no
// depender de transform-box, que no todos los navegadores aplican igual.
export function useAnguloAnimado(gradosPorSegundo, activo) {
  const [angulo, setAngulo] = useState(0);

  useEffect(() => {
    if (!activo || gradosPorSegundo === 0) return undefined;
    let cuadro;
    let previo;
    const paso = (ahora) => {
      if (previo !== undefined) {
        const dt = (ahora - previo) / 1000;
        setAngulo((actual) => (actual + gradosPorSegundo * dt) % 360);
      }
      previo = ahora;
      cuadro = requestAnimationFrame(paso);
    };
    cuadro = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(cuadro);
  }, [activo, gradosPorSegundo]);

  return angulo;
}

export function Control({
  etiqueta,
  valor,
  onChange,
  min,
  max,
  paso = 1,
  unidad = "",
  decimales = 0,
  ayuda,
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium">{etiqueta}</span>
        <span className="text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
          {valor.toFixed(decimales)}
          {unidad && ` ${unidad}`}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={paso}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-zinc-900 dark:accent-zinc-100"
      />
      {ayuda && (
        <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
          {ayuda}
        </span>
      )}
    </label>
  );
}

export function Opciones({ etiqueta, valor, onChange, opciones }) {
  return (
    <div>
      <span className="text-sm font-medium">{etiqueta}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {opciones.map((opcion) => (
          <button
            key={opcion.valor}
            type="button"
            aria-pressed={opcion.valor === valor}
            onClick={() => onChange(opcion.valor)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              opcion.valor === valor
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border border-zinc-300 text-zinc-600 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
            }`}
          >
            {opcion.etiqueta}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Lectura({ etiqueta, valor, unidad = "", destacado = false }) {
  return (
    <div
      className={`rounded-lg px-4 py-3 ${
        destacado
          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
          : "bg-zinc-50 dark:bg-zinc-900"
      }`}
    >
      <p
        className={`text-xs ${
          destacado
            ? "text-zinc-300 dark:text-zinc-600"
            : "text-zinc-500 dark:text-zinc-400"
        }`}
      >
        {etiqueta}
      </p>
      <p className="mt-0.5 font-mono text-lg tabular-nums">
        {valor}
        {unidad && (
          <span className="ml-1 text-sm font-normal opacity-70">{unidad}</span>
        )}
      </p>
    </div>
  );
}

export function Formula({ children }) {
  return (
    <p className="rounded-lg bg-zinc-50 px-4 py-3 font-mono text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
      {children}
    </p>
  );
}

export function Nota({ titulo = "Qué observar", children }) {
  return (
    <div className="rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
      <p className="text-sm font-semibold">{titulo}</p>
      <div className="mt-1 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

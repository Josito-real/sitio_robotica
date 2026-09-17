// Geometría de un par de engranajes rectos. Es un módulo puro a propósito:
// no depende de React y puede probarse desde Node sobre todo el rango de
// parámetros que permiten los controles.

export const MARGEN = 14;

// Escala y ubica el par para que quepa completo en el lienzo, mirando tanto
// el ancho (los dos engranajes uno junto al otro) como el alto (el radio del
// más grande). La distancia entre centros es r1 + r2: así engranan.
export function disponerPar({ z1, z2, modulo, ancho, alto }) {
  const r1mm = (modulo * z1) / 2;
  const r2mm = (modulo * z2) / 2;
  const cabezaMm = modulo; // addendum estándar

  const spanH = 2 * (r1mm + r2mm) + 2 * cabezaMm;
  const spanV = 2 * (Math.max(r1mm, r2mm) + cabezaMm);
  const escala = Math.min(
    (ancho - 2 * MARGEN) / spanH,
    (alto - 2 * MARGEN) / spanV
  );

  const r1 = r1mm * escala;
  const r2 = r2mm * escala;
  const cabeza = cabezaMm * escala;
  const distancia = r1 + r2;
  const anchoOcupado = 2 * distancia + 2 * cabeza;

  const c1x = (ancho - anchoOcupado) / 2 + r1 + cabeza;
  return {
    escala,
    r1,
    r2,
    cabeza,
    distancia,
    c1x,
    c2x: c1x + distancia,
    cy: alto / 2,
    d1: modulo * z1,
    d2: modulo * z2,
    distanciaCentrosMm: r1mm + r2mm,
  };
}

// Ángulo del engranaje conducido para que sus dientes caigan siempre en los
// huecos del motriz: gira en sentido contrario, a 1/i de la velocidad, y va
// desfasado medio paso respecto a la línea de centros.
export function anguloConducido(anguloMotriz, z1, z2) {
  const paso2 = 360 / z2;
  return -anguloMotriz * (z1 / z2) + 180 - paso2 / 2;
}

// Contorno de una rueda dentada: por cada diente, dos puntos en la
// circunferencia de raíz y dos en la de cabeza.
export function contornoEngranaje(radio, cabeza, dientes, anguloGrados) {
  const paso = 360 / dientes;
  const raiz = Math.max(radio - cabeza * 1.25, radio * 0.35);
  const punta = radio + cabeza;
  const puntos = [];

  for (let k = 0; k < dientes; k += 1) {
    const centro = anguloGrados + k * paso;
    for (const [angulo, r] of [
      [centro - paso * 0.3, raiz],
      [centro - paso * 0.16, punta],
      [centro + paso * 0.16, punta],
      [centro + paso * 0.3, raiz],
    ]) {
      const rad = (angulo * Math.PI) / 180;
      puntos.push([r * Math.cos(rad), r * Math.sin(rad)]);
    }
  }
  return puntos;
}

export function contornoComoPath(radio, cabeza, dientes, anguloGrados) {
  const puntos = contornoEngranaje(radio, cabeza, dientes, anguloGrados);
  return (
    puntos
      .map(([x, y], k) => `${k === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`)
      .join(" ") + " Z"
  );
}

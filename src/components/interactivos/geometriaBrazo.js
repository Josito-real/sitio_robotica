// Matemática de un manipulador plano 2R. Módulo puro: sin React, probable
// desde Node. Ángulos en grados hacia afuera, radianes por dentro.

const RAD = Math.PI / 180;

export function cinematicaDirecta(l1, l2, g1, g2) {
  const a = g1 * RAD;
  const b = (g1 + g2) * RAD;
  return {
    codo: { x: l1 * Math.cos(a), y: l1 * Math.sin(a) },
    efector: {
      x: l1 * Math.cos(a) + l2 * Math.cos(b),
      y: l1 * Math.sin(a) + l2 * Math.sin(b),
    },
  };
}

// J = [[-L1 s1 - L2 s12, -L2 s12], [L1 c1 + L2 c12, L2 c12]]
export function jacobiana(l1, l2, g1, g2) {
  const a = g1 * RAD;
  const b = (g1 + g2) * RAD;
  return [
    [-l1 * Math.sin(a) - l2 * Math.sin(b), -l2 * Math.sin(b)],
    [l1 * Math.cos(a) + l2 * Math.cos(b), l2 * Math.cos(b)],
  ];
}

// det(J) = L1·L2·sen(θ₂): se anula con el brazo estirado o plegado.
export function determinante(l1, l2, g2) {
  return l1 * l2 * Math.sin(g2 * RAD);
}

// Elipse de manipulabilidad: valores y vectores singulares de J, obtenidos
// de los autovalores de J·Jᵀ (simétrica 2x2, solución cerrada).
export function elipseManipulabilidad(J) {
  const [[j11, j12], [j21, j22]] = J;
  const a = j11 * j11 + j12 * j12;
  const b = j11 * j21 + j12 * j22;
  const d = j21 * j21 + j22 * j22;
  const media = (a + d) / 2;
  const raiz = Math.sqrt(Math.max(0, ((a - d) / 2) ** 2 + b * b));
  const lambda1 = media + raiz;
  const lambda2 = Math.max(0, media - raiz);
  const sigma1 = Math.sqrt(Math.max(0, lambda1));
  const sigma2 = Math.sqrt(lambda2);
  const anguloGrados = (0.5 * Math.atan2(2 * b, a - d)) / RAD;
  return {
    sigma1,
    sigma2,
    anguloGrados,
    manipulabilidad: sigma1 * sigma2,
    condicion: sigma2 > 1e-9 ? sigma1 / sigma2 : Infinity,
  };
}

// Cinemática inversa. Devuelve null si el punto queda fuera del alcance.
export function cinematicaInversa(l1, l2, x, y, codoArriba = true) {
  const r2 = x * x + y * y;
  const coseno = (r2 - l1 * l1 - l2 * l2) / (2 * l1 * l2);
  if (coseno < -1 || coseno > 1) return null;
  const g2 = (codoArriba ? 1 : -1) * Math.acos(coseno);
  const g1 =
    Math.atan2(y, x) - Math.atan2(l2 * Math.sin(g2), l1 + l2 * Math.cos(g2));
  return { g1: g1 / RAD, g2: g2 / RAD };
}

// Interpola en el espacio articular: los ángulos van en línea recta, el
// efector no.
export function caminoArticular(l1, l2, inicio, fin, pasos = 40) {
  const puntos = [];
  for (let k = 0; k <= pasos; k += 1) {
    const s = k / pasos;
    const g1 = inicio.g1 + (fin.g1 - inicio.g1) * s;
    const g2 = inicio.g2 + (fin.g2 - inicio.g2) * s;
    puntos.push({ s, g1, g2, ...cinematicaDirecta(l1, l2, g1, g2).efector });
  }
  return puntos;
}

// Interpola en el espacio cartesiano: el efector va en línea recta y los
// ángulos salen de la inversa. `alcanzable` marca los puntos imposibles.
export function caminoCartesiano(l1, l2, inicio, fin, pasos = 40, codoArriba = true) {
  const pa = cinematicaDirecta(l1, l2, inicio.g1, inicio.g2).efector;
  const pb = cinematicaDirecta(l1, l2, fin.g1, fin.g2).efector;
  const puntos = [];
  for (let k = 0; k <= pasos; k += 1) {
    const s = k / pasos;
    const x = pa.x + (pb.x - pa.x) * s;
    const y = pa.y + (pb.y - pa.y) * s;
    const sol = cinematicaInversa(l1, l2, x, y, codoArriba);
    puntos.push({ s, x, y, alcanzable: sol !== null, ...(sol ?? {}) });
  }
  return puntos;
}

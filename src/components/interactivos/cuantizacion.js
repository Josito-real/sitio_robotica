// Matemática de un convertidor analógico-digital unipolar. Módulo puro:
// sin React, probable desde Node.

export function cuantizar(vin, vref, bits) {
  const niveles = 2 ** bits;
  const lsb = vref / niveles;
  const codigoIdeal = Math.floor(vin / lsb);
  const codigo = Math.max(0, Math.min(niveles - 1, codigoIdeal));
  const saturado = codigoIdeal > niveles - 1;
  const vReconstruido = codigo * lsb;
  return {
    niveles,
    lsb,
    codigo,
    codigoIdeal,
    saturado,
    vReconstruido,
    // Fuera de saturación el error vive en [0, 1 LSB). Al saturar crece sin
    // límite, y esa es justamente la falla que hay que ver.
    error: vin - vReconstruido,
  };
}

// El escalamiento a unidades de ingeniería usa el fondo de escala completo,
// igual que map() en Arduino.
export function escalar(codigo, niveles, minimo, maximo) {
  return minimo + (codigo / (niveles - 1)) * (maximo - minimo);
}

// Paso del deslizador: una fracción del LSB, para que siempre se pueda
// recorrer un escalón, con un tope para que el control no sea inusable.
export function pasoDeslizador(lsb) {
  const crudo = lsb / 4;
  const potencia = 10 ** Math.floor(Math.log10(crudo));
  const paso = Math.max(potencia, 1e-6);
  return Math.min(paso, 0.01);
}

// Ventana del zoom anclada a bloques fijos de códigos. Centrarla en el código
// actual la dejaba idéntica en pantalla para cualquier entrada: el escalón
// resaltado caía siempre en el mismo sitio y la imagen parecía congelada.
// Anclada, el punto recorre la ventana y esta salta cada `ventana` códigos.
export function ventanaZoom(codigo, niveles, ventana = 8) {
  const tope = Math.max(0, niveles - ventana);
  const cMin = Math.min(Math.floor(codigo / ventana) * ventana, tope);
  const cMax = Math.min(niveles - 1, cMin + ventana - 1);
  return { cMin, cMax, posicion: codigo - cMin };
}

export function decimalesUtiles(lsb) {
  if (lsb >= 0.01) return 3;
  if (lsb >= 0.001) return 4;
  if (lsb >= 0.0001) return 5;
  return 6;
}

// Diente de sierra del error de cuantización a lo largo de una ventana.
export function curvaError(vref, bits, desde, hasta, muestras = 240) {
  const puntos = [];
  for (let k = 0; k <= muestras; k += 1) {
    const v = desde + ((hasta - desde) * k) / muestras;
    puntos.push({ v, error: cuantizar(v, vref, bits).error });
  }
  return puntos;
}

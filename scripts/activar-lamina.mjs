// Activa una lámina ya declarada en src/data/materiales.js: copia el PDF desde
// la carpeta de presentaciones a public/laminas, cuenta páginas y peso del
// archivo real, y convierte la entrada "proximamente" en una publicada.
//
//   node scripts/activar-lamina.mjs tema-6-1 tema-6-2
//
// Las páginas se cuentan al activar, no al declarar, para que reflejen la
// versión del PDF que de verdad se publica.

import { copyFileSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { inflateSync } from "node:zlib";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATOS = join(RAIZ, "src", "data", "materiales.js");
const PRESENTACIONES =
  "C:/Users/ASUS/Documents/Unimet/Clases/Robótica/Presentaciones PDF";

function contarPaginas(ruta) {
  const buf = readFileSync(ruta);
  const analizar = (texto) => {
    const cuentas = [...texto.matchAll(/\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
    const paginas = [...texto.matchAll(/\/Type\s*\/Page[^s]/g)].length;
    return Math.max(cuentas.length ? Math.max(...cuentas) : 0, paginas);
  };
  const crudo = buf.toString("latin1");
  let mejor = analizar(crudo);
  if (mejor === 0) {
    // PDF con los objetos comprimidos: hay que inflar los streams.
    const partes = [];
    const re = /stream\r?\n/g;
    let m;
    while ((m = re.exec(crudo)) !== null) {
      const ini = m.index + m[0].length;
      const fin = crudo.indexOf("endstream", ini);
      if (fin < 0) continue;
      try {
        partes.push(inflateSync(buf.subarray(ini, fin)).toString("latin1"));
      } catch {
        /* no era inflable */
      }
    }
    mejor = analizar(partes.join("\n"));
  }
  if (mejor === 0) throw new Error(`no se pudieron contar las páginas de ${ruta}`);
  return mejor;
}

function pesoLegible(bytes) {
  const mb = bytes / 1024 / 1024;
  return mb >= 1
    ? `${mb.toFixed(1).replace(".", ",")} MB`
    : `${Math.round(bytes / 1024)} KB`;
}

const ids = process.argv.slice(2);
if (ids.length === 0) {
  console.error("uso: node scripts/activar-lamina.mjs <id> [<id>...]");
  process.exit(1);
}

const { laminas } = await import(pathToFileURL(DATOS).href);

for (const id of ids) {
  const entrada = laminas.find((l) => l.id === id);
  if (!entrada) throw new Error(`no existe una lámina con id "${id}"`);
  if (entrada.estado !== "proximamente")
    throw new Error(`la lámina "${id}" ya está publicada`);

  const origen = join(PRESENTACIONES, entrada.origen);
  const destino = join(RAIZ, "public", entrada.destino.replace(/^\//, ""));
  copyFileSync(origen, destino);

  const paginas = contarPaginas(destino);
  const peso = pesoLegible(statSync(destino).size);

  const viejo = `    estado: "proximamente",\n    origen: ${JSON.stringify(entrada.origen)},\n    destino: ${JSON.stringify(entrada.destino)},`;
  const nuevo = `    archivo: ${JSON.stringify(entrada.destino)},\n    paginas: ${paginas},\n    peso: ${JSON.stringify(peso)},`;

  const texto = readFileSync(DATOS, "utf8");
  const crlf = texto.includes("\r\n");
  const v = crlf ? viejo.replace(/\n/g, "\r\n") : viejo;
  if (texto.split(v).length - 1 !== 1)
    throw new Error(`no encontré el bloque de "${id}" para reemplazar`);
  writeFileSync(DATOS, texto.replace(v, crlf ? nuevo.replace(/\n/g, "\r\n") : nuevo), "utf8");

  console.log(`activada ${id}: ${entrada.destino} — ${paginas} páginas, ${peso}`);
}

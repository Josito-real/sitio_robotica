import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorTransmision from "@/components/interactivos/SimuladorTransmision";

export const metadata = {
  title: "Transmisión de potencia — Robótica UNIMET",
  description:
    "Simulador de un par de engranajes: relación de transmisión, torque, velocidad y pérdidas.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Transmisión de potencia"
      tema="Tema 3"
      resumen="Un par de engranajes en marcha: cómo la relación de transmisión intercambia velocidad por torque, y por qué la potencia de salida nunca supera a la de entrada."
    >
      <SimuladorTransmision />
    </PaginaSimulador>
  );
}

import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorServoPasoAPaso from "@/components/interactivos/SimuladorServoPasoAPaso";

export const metadata = {
  title: "Servomotor y paso a paso — Robótica UNIMET",
  description:
    "Simulador de control de posición: ancho de pulso en un servo y ángulo por paso con microstepping.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Servomotor y motor paso a paso"
      tema="Tema 7"
      resumen="El ancho del pulso que fija la posición de un servo, y el ángulo por paso de un motor paso a paso según su microstepping. Dos maneras opuestas de mover un eje."
    >
      <SimuladorServoPasoAPaso />
    </PaginaSimulador>
  );
}

import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorVision from "@/components/interactivos/SimuladorVision";

export const metadata = {
  title: "Umbral HSV y convolución — Robótica UNIMET",
  description:
    "Simulador de visión artificial: segmentación por color en HSV y convolución con núcleos 3x3.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Umbral HSV y convolución"
      tema="Tema 11"
      resumen="Segmenta una imagen por color con umbrales HSV y aplica núcleos de convolución para ver de dónde salen los bordes. Todo se procesa en tu navegador."
    >
      <SimuladorVision />
    </PaginaSimulador>
  );
}

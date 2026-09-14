import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorADC from "@/components/interactivos/SimuladorADC";

export const metadata = {
  title: "Escalamiento ADC — Robótica UNIMET",
  description:
    "Simulador de conversión analógico-digital: resolución, error de cuantización y escalamiento a unidades físicas.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Escalamiento ADC"
      tema="Tema 4"
      resumen="Convierte un voltaje en código digital y escálalo a unidades de ingeniería. Ajusta la resolución y la referencia para ver cómo cambian el escalón de cuantización y el error de la medida."
    >
      <SimuladorADC />
    </PaginaSimulador>
  );
}

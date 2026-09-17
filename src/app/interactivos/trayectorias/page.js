import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorTrayectorias from "@/components/interactivos/SimuladorTrayectorias";

export const metadata = {
  title: "Espacio articular vs. cartesiano — Robótica UNIMET",
  description:
    "Simulador de generación de trayectorias: interpolación articular frente a interpolación cartesiana.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Espacio articular vs. cartesiano"
      tema="Tema 9"
      resumen="El mismo punto de partida y de llegada, interpolando ángulos o interpolando en línea recta. Por qué existen MOVJ y MOVL, y cuándo la recta no se puede ejecutar."
    >
      <SimuladorTrayectorias />
    </PaginaSimulador>
  );
}

import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorJacobiana from "@/components/interactivos/SimuladorJacobiana";

export const metadata = {
  title: "Jacobiana y singularidades — Robótica UNIMET",
  description:
    "Simulador de la matriz Jacobiana de un brazo 2R: determinante, manipulabilidad y singularidades.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Jacobiana y singularidades"
      tema="Tema 8"
      resumen="La elipse de manipulabilidad sobre un brazo 2R: en qué direcciones se mueve bien el efector, y qué ocurre cuando el brazo se estira y pierde un grado de libertad."
    >
      <SimuladorJacobiana />
    </PaginaSimulador>
  );
}

import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorCinematica from "@/components/interactivos/SimuladorCinematica";

export const metadata = {
  title: "Cinemática directa 2R — Robótica UNIMET",
  description:
    "Simulador de cinemática directa de un manipulador plano de dos grados de libertad.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="Cinemática directa de un brazo 2R"
      tema="Tema 8"
      resumen="Mueve las dos articulaciones y observa dónde queda el efector final, su matriz de transformación homogénea y el espacio de trabajo que puede alcanzar."
    >
      <SimuladorCinematica />
    </PaginaSimulador>
  );
}

import PaginaSimulador from "@/components/interactivos/PaginaSimulador";
import SimuladorPWM from "@/components/interactivos/SimuladorPWM";

export const metadata = {
  title: "PWM y puente H — Robótica UNIMET",
  description:
    "Simulador de control de motores por PWM con puente H: voltaje medio, ciclo de trabajo y estados del puente.",
};

export default function Pagina() {
  return (
    <PaginaSimulador
      titulo="PWM y puente H"
      tema="Tema 7"
      resumen="Ajusta el ciclo de trabajo y observa el voltaje medio que ve el motor, la forma de onda real y los cuatro estados del puente H."
    >
      <SimuladorPWM />
    </PaginaSimulador>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import PhotoCarousel from "@/components/sections/PhotoCarousel";
import LinkCardGrid from "@/components/sections/LinkCardGrid";
import AboutSection from "@/components/sections/AboutSection";
import {
  enlacesDelCurso,
  enlacesMaterialInteractivo,
} from "@/data/navegacion";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PhotoCarousel />
      <LinkCardGrid title="Explora el curso" items={enlacesDelCurso} />
      <LinkCardGrid
        title="Material interactivo"
        items={enlacesMaterialInteractivo}
        verMas={{ href: "/interactivos", label: "Ver todo el material interactivo" }}
      />
      <AboutSection />
      {/* Añadir aquí nuevas secciones de la landing page conforme se vayan definiendo */}
    </main>
  );
}

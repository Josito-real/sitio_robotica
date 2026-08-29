import HeroSection from "@/components/sections/HeroSection";
import PhotoCarousel from "@/components/sections/PhotoCarousel";
import LinkCardGrid from "@/components/sections/LinkCardGrid";
import AboutSection from "@/components/sections/AboutSection";
import {
  courseAreaLinks,
  interactiveMaterialLinks,
} from "@/data/placeholder-links";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PhotoCarousel />
      <LinkCardGrid title="Explora el curso" items={courseAreaLinks} />
      <LinkCardGrid title="Material interactivo" items={interactiveMaterialLinks} />
      <AboutSection />
      {/* Añadir aquí nuevas secciones de la landing page conforme se vayan definiendo */}
    </main>
  );
}

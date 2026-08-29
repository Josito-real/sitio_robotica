"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

// Nota: en Next 16, imágenes locales con query string de cache-busting
// requieren configurar `images.localPatterns` en next.config.mjs.
const slides = [
  {
    id: 1,
    imageSrc: "/images/carrusel/robot-taller.jpg",
    alt: "Ilustración de un brazo robótico trabajando sobre una cabeza robot",
  },
  {
    id: 2,
    imageSrc: "/images/carrusel/wall-e.jpg",
    alt: "Robot de juguete estilo WALL-E en una calle",
  },
  {
    id: 3,
    imageSrc: "/images/carrusel/robot-saludo.jpg",
    alt: "Ilustración de un robot blanco saludando",
  },
  {
    id: 4,
    imageSrc: "/images/carrusel/robot-entrega-engranaje.jpg",
    alt: "Brazo robótico entregando un engranaje a una mano humana",
  },
];

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section className="py-8">
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative h-64 w-full flex-shrink-0 bg-zinc-100 dark:bg-zinc-900 sm:h-80"
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 768px, 100vw"
                  priority={slide.id === 1}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-zinc-800 shadow transition-colors hover:bg-white dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-zinc-800 shadow transition-colors hover:bg-white dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            ›
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir a la foto ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex
                  ? "bg-zinc-900 dark:bg-white"
                  : "bg-zinc-300 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

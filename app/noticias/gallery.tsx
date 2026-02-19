"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Inicio() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = React.useRef(
    Autoplay({
      delay: 3000, // ← puedes ajustar (2000–5000 ms)
      stopOnInteraction: false,
      stopOnMouseEnter: false, // ← redundante pero más explícito
    }),
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="galerias"
      className="relative md:pt-40 pt-28 flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con mapa */}

      <div className="relative w-full max-w-7xl mx-auto pb-20">
        <div className="flex justify-between items-start md:flex-row flex-col">
          <h1
            className="
            text-3xl md:text-5xl font-bold text-start
            bg-gradient-to-r md:-mx-8 mx-4 from-[#ec0202] to-white
            bg-clip-text text-transparent
          "
          >
            Confederación Peruana de Taekwon-Do ITF
          </h1>
        </div>

        {/* Carrusel: solo 1 imagen visible */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full md:px-8 px-2"
          opts={{
            loop: true,
            dragFree: false, // evita que el usuario "arrastre" manualmente
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-12 pt-16 gap-8 lg:gap-16 items-center">
                  {/* Imagen a la izquierda – ahora más grande y dominante */}
                  <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-4xl">
                    {/* Aspect ratio más cinematográfico y grande */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9] xl:aspect-[2/1]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover transition-transform duration-\\[8000ms\\] ease-linear hover:scale-110"
                      />
                      {/* Degradado más elegante y profesional */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
                    </div>
                  </div>

                  {/* Texto a la derecha – alineado al centro de la imagen */}
                  <div className="lg:col-span-5 flex flex-col justify-center text-left px-4 lg:px-0">
                    <h2
                      className="text-4xl font-noto font-semibold text-white mb-6"
                      style={{
                        textShadow: "2px 2px 16px rgba(255, 255, 255, 0.55)",
                      }}
                    >
                      {item.title}
                    </h2>

                    <p className="text-xl text-white">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicadores elegantes (opcional pero muy pro) */}
        <div className="flex justify-center gap-4 md:mt-20 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-16 h-2 bg-red-500 shadow-lg shadow-yellow-400/50"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Legado",
    description:
      "Más de tres décadas formando campeones con disciplina, respeto y la esencia pura del Taekwon-Do ITF tradicional.",
    image: "/img/Inicio/aa2.jpg",
  },
  {
    title: "Entrenamiento Danes",
    description:
      "Clases dirigidas por Sabonims certificados internacionalmente. Técnica, poder y precisión en cada movimiento.",
    image: "/img/Inicio/port4.jpg",
  },
  {
    title: "Seminarios Internacionales",
    description:
      "Capacitación directa con Grandes Maestros de Corea del Norte y los mejores instructores de América Latina.",
    image: "/img/Inicio/port3.jpg",
  },
  {
    title: "Clases Maestras",
    description:
      "Perfeccionamiento técnico avanzado para cinturones negros y competidores de élite.",
    image: "/img/Inicio/port2.jpg",
  },
  {
    title: "Eventos Internacionales",
    description:
      "Representamos al Perú en Campeonatos Mundiales, Sudamericanos y Copas ITF con orgullo y medallas.",
    image: "/img/Inicio/IIC.jpg",
  },
];

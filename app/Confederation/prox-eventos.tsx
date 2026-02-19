"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Information() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const [carouselState, setCarouselState] = useState({
    current: 0,
    count: 0,
  });

  const [isPaused, setIsPaused] = useState(false);

  /* =======================
     SYNC CAROUSEL STATE
  ======================= */
  useEffect(() => {
    if (!api) return;

    const updateCarouselState = () => {
      setCarouselState({
        current: api.selectedScrollSnap() + 1,
        count: api.scrollSnapList().length,
      });
    };

    // Inicializar estado
    updateCarouselState();

    // Escuchar cambios
    api.on("select", updateCarouselState);

    return () => {
      api.off("select", updateCarouselState);
    };
  }, [api]);

  /* =======================
     AUTOPLAY
  ======================= */
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  /* =======================
     DATA
  ======================= */
  const team = [
    {
      id: "sudamericano-2026",
      name: "Campeonato Sudamericano de Taekwon-Do ITF 2026",
      position: "Lima, Perú",
      description:
        "Lima, Perú se prepara para recibir al Campeonato Sudamericano de Taekwon-Do ITF 2026, un evento que reunirá a las principales delegaciones del continente en una celebración de disciplina, técnica y espíritu marcial. Con orgullo y entusiasmo, el país abre sus puertas a Sudamérica, creando un escenario donde la pasión del público, la calidez de su gente y la excelencia deportiva se unirán en una experiencia inolvidable.",
      member: "/img/Inicio/fl1.png",
    },
    {
      id: "gira-comite",
      name: "Gira del Comité de Formación",
      position: "Lima, Perú",
      description:
        "El Campeonato Sudamericano de Taekwon-Do ITF 2026 reunirá en Lima, Perú a las delegaciones más representativas de Sudamérica en un evento que celebra la excelencia técnica, la disciplina y los valores del arte marcial.",
      member: "/img/covers/comite.png",
    },
    {
      id: "arbitro",
      name: "Curso Internacional de Árbitros Calificador (IUC)",
      position: "Lima, Perú",
      description:
        "La Confederación Peruana de Taekwon-Do ITF organiza el 53º Curso Internacional de Árbitros Calificador (IUC), dirigido por el Gran Maestro Abelardo Benzaquen, IX Dan.",
      member: "/img/Inicio/arbitraje.jpeg",
    },
  ];

  return (
    <div className="md:pt-18 pt-[26px] pb-8 w-full">
      {/* Encabezado */}
      <div className="flex justify-between items-start md:flex-row flex-col px-6 md:px-20">
        <h1
          className="
            text-3xl md:text-5xl font-bold text-start
            text-[#ec0202]
            md:bg-gradient-to-r md:from-[#ec0202] md:to-white
            md:bg-clip-text md:text-transparent
            md:[-webkit-background-clip:text]
            md:[-webkit-text-fill-color:transparent]
          "
        >
          Próximos Eventos
        </h1>
      </div>

      {/* Carrusel */}
      <div className="relative mt-10 w-full flex justify-center">
        <div className="md:w-[70%] w-full max-w-7xl">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            className="w-full"
          >
            <CarouselContent>
              {team.map((member, index) => (
                <CarouselItem
                  key={member.id}
                  className="w-full rounded-2xl overflow-hidden"
                >
                  <div className="w-full flex md:flex-row flex-col md:h-[630px] rounded-2xl overflow-hidden">
                    {/* IMAGEN */}
                    <div
                      onClick={() => setIsPaused((prev) => !prev)}
                      className="md:w-3/4 w-full bg-black/40 flex items-center justify-center relative md:h-full h-[520px] overflow-hidden cursor-pointer"
                    >
                      <div className="w-full h-full relative">
                        <Image
                          src={member.member}
                          alt={member.name}
                          fill
                          className="object-cover"
                          priority={carouselState.current === index + 1}
                        />
                      </div>

                      {isPaused && (
                        <div className="absolute border border-red-500 bottom-6 left-6 bg-black/70 text-white text-base px-4 py-2 rounded-full">
                          Autoplay pausado
                        </div>
                      )}
                    </div>

                    {/* TEXTO */}
                    <div className="md:w-3/4 w-full py-8 md:pb-20 pb-10 md:px-20 px-8 bg-black/40 text-white flex items-end">
                      <div className="w-full">
                        <h3 className="text-lg md:text-2xl font-bold">
                          {member.name}
                        </h3>
                        <p className="text-sm mt-2">{member.position}</p>
                        <p className="mt-4 text-[15px] md:text-base leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <p className="mt-3 text-sm text-white/80 text-center font-light">
              (Click en la imagen para pausar)
            </p>

            {/* DOTS */}
            <div className="mt-3 flex justify-center gap-4">
              {Array.from({ length: carouselState.count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`
                    h-3 w-3 rounded-full transition-all duration-300
                    ${
                      carouselState.current === index + 1
                        ? "bg-red-600 scale-125"
                        : "bg-gray-400 hover:bg-gray-300"
                    }
                  `}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

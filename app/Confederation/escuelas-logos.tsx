"use client";

import React from "react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Carrusel() {
  // Carrusel superior
  const topSponsors = [
    "/img/dojang/logo/cachorro.png",
    "/img/dojang/logo/walter.png",
    "/img/dojang/logo/chonng.png",
    "/img/dojang/logo/fer.cen.png",
    "/img/dojang/logo/nimdo.png",
    "/img/dojang/logo/kibaek.png",
    "/img/dojang/logo/pow-do.png",
    "/img/dojang/logo/vence.png",
    "/img/dojang/logo/rosa.png",
  ];

  // Carrusel inferior
  const bottomSponsors = [
    "/img/dojang/logo/upp.png",
    "/img/dojang/logo/flores.png",
    "/img/dojang/logo/yosi.png",
    "/img/dojang/logo/wolf.png",
    "/img/dojang/logo/inae.png",
    "/img/dojang/logo/yom.png",
    "/img/dojang/logo/marisc.png",
    "/img/dojang/logo/peña.png",
  ];

  return (
    <div className="md:mt-[20px] mt-[250px]">
      {/* Título */}
      <div className="flex justify-between items-start md:flex-row flex-col px-6 md:px-20 pt-0 md:pt-0">
        <h1
            className="
  text-3xl md:text-5xl font-bold text-start
  bg-gradient-to-r from-[#ec0202] to-white  
  bg-clip-text text-transparent
"
          >
            Nuestras Escuelas
          </h1>
      </div>

      {/* Carrusel superior */}
      <div className="relative w-full flex items-center md:mt-8 mt-6 overflow-hidden">
        <Carousel
          className="w-full relative z-10 pt-4"
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              startDelay: 1000,
              stopOnInteraction: false,
              speed: 0.6,
              direction: "forward",
            }),
          ]}
        >
          <CarouselContent className="flex gap-6 md:gap-6 my-6 md:my-10 px-4">
            {topSponsors.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-auto pl-2 md:pl-[31px]"
              >
                <div
                   className="
  w-[160px] md:w-[280px] 
  aspect-[4/3] md:aspect-[5/4] 
  bg-black/10 backdrop-blur rounded-xl 
  flex items-center justify-center overflow-hidden
  border border-red-900/70
  shadow-lg shadow-red-950/50
  transition-all duration-300 ease-out
  hover:shadow-[0_0_15px_4px_rgba(239,68,68,0.5),0_0_30px_8px_rgba(239,68,68,0.3)]
  hover:border-red-600/90
  hover:scale-[1.03]
"
                >
                  <Image
                    src={src}
                    alt={`Escuela ${index}`}
                    fill
                    className="object-contain p-4 md:p-6 opacity-90 hover:opacity-100 transition-opacity"
                    sizes="(max-width: 768px) 160px, 280px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Carrusel inferior */}
      <div className="relative w-full  flex items-center md:pb-8 pb-10 overflow-hidden">
        <Carousel
          className="w-full relative z-10 pt-0"
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              startDelay: 1000,
              stopOnInteraction: false,
              speed: 0.6,
              direction: "backward",
            }),
          ]}
        >
          <CarouselContent className="flex gap-6 md:gap-6 my-6 md:my-2 px-4">
            {bottomSponsors.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-auto pl-2 md:pl-[30px]"
              >
                <div
                  className="
  w-[160px] md:w-[280px] 
  aspect-[4/3] md:aspect-[5/4] 
  bg-black/10 backdrop-blur rounded-xl 
  flex items-center justify-center overflow-hidden
  border border-red-900/70
  shadow-lg shadow-red-950/50
  transition-all duration-300 ease-out
  hover:shadow-[0_0_15px_4px_rgba(239,68,68,0.5),0_0_30px_8px_rgba(239,68,68,0.3)]
  hover:border-red-600/90
  hover:scale-[1.03]
"
                >
                  <Image
                    src={src}
                    alt={`Escuela ${index}`}
                    fill
                    className="object-contain p-4 md:p-6 opacity-90 hover:opacity-100 transition-opacity"
                    sizes="(max-width: 768px) 160px, 280px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

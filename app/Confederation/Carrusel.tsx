"use client";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Carruseles() {
  const sponsors = [
    "/img/IEUJO.png",
    "/img/IEUJO.png",
    "/img/IEUJO.png",
    "/img/IEUJO.png",
    "/img/IEUJO.png",
    "/img/IEUJO.png",
  ];

  const TaekwonDo = [
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
    "/img/LEBLANC.png",
  ];

  return (
    <>
      <Carousel
        className="w-full relative py-6 md:-mt-[140px] -mt-[250px] z-100 bg-gray-800"
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            startDelay: 0,
            stopOnInteraction: false,
            direction: "backward",
            speed: 0.6,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {[...TaekwonDo].map((name, index) => (
            <CarouselItem key={index} className="md:basis-1/4 basis-[70%]">
              <div className="md-px-3 px-1">
                {" "}
                {/* Agregar padding para dar espacio */}
                <Image
                  src={name}
                  width={350} // Reducir el ancho de la imagen
                  height={150} // Reducir la altura de la imagen
                  alt={`Sponsor ${index}`}
                  className="md:w-auto w-[280px] md:h-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        className="w-full py-6 bg-gray-800"
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            startDelay: 0,
            stopOnInteraction: false,
            speed: 1.4,
          }),
        ]}
      >
        <CarouselContent>
          {[...sponsors].map((name, index) => (
            <CarouselItem key={index} className="md:basis-auto basis-[70%]">
              <div className="md:ml-12 ml-4">
                <Image
                  src={name}
                  alt={`Sponsor ${index}`}
                  width={400}
                  height={140}
                  className="w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
export default Carruseles;

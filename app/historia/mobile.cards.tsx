"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "/img/cards/Cortesy.png",
  "/img/cards/INtgr.png",
  "/img/cards/persv.png",
  "/img/cards/autocont.png",
  "/img/cards/espirt.png",
];

export default function Cardx() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    return () => {};
  }, [api]);

  const onNext = () => {
    api?.scrollNext();
  };

  const onPrev = () => {
    api?.scrollPrev();
  };

  return (
    <div
        className="h-[80dvh] relative md:hidden"
      >
        <div className="flex flex-col px-12 md:px-40 pb-10 pt-0 md:pt-0">
          <h1
            className="
    text-3xl md:text-5xl font-bold text-start
    bg-gradient-to-r from-[#ec0202] via-[#e4c8c8] to-white  
    bg-clip-text text-transparent
  "
          >
            Nuestros Principios
            <p className="text-lg text-gray-200 font-semibold text-start">
              (Taekwon-Do Jungshin)
            </p>
          </h1>
        </div>
    <div className="relative md:hidden flex max-w-6xl mx-auto">
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-4">
          {images.map((imageSrc, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[70%]"
            >
              <div className="bg-[#0d0d0d] border border-gray-900 text-left overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={`Card ${index}`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <Button
        variant="destructive"
          onClick={onPrev}
          className="absolute top-1/2 cursor-pointer bg-red-500 text-white -translate-y-1/2 md:left-[31%] left-4"
        >
          <ArrowLeft size={24} />
        </Button>

        <Button
        variant="destructive"
          onClick={onNext}
          className="absolute top-1/2 cursor-pointer bg-red-500 text-white -translate-y-1/2 md:right-[31%] right-4"
        >
          <ArrowRight size={24} />
        </Button>
      </Carousel>
    </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Actives() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    return () => {};
  }, [api]);

  const onNext = () => api?.scrollNext();
  const onPrev = () => api?.scrollPrev();

  const articles = [
    { img: "/img/Inicio/fl1.png", alt: "seminario" },
    { img: "/img/covers/sparring-class.jpeg", alt: "seminario" },
    { img: "/img/covers/1ra-clase.jpg", alt: "seminario" },
    { img: "/img/covers/comite.png", alt: "seminario" },
    { img: "/img/covers/iic.jpg", alt: "seminario" },
    { img: "/img/covers/villanueva.jpg", alt: "seminario" },
    { img: "/img/covers/vatra.jpg", alt: "seminario" },
    { img: "/img/covers/tul-equipos.jpg", alt: "seminario" },
    { img: "/img/covers/torneos.jpg", alt: "seminario" },
    { img: "/img/covers/semi.jpg", alt: "seminario" },
    { img: "/img/covers/clase-dan.jpg", alt: "seminario" },
    { img: "/img/covers/sem-vatrano.jpg", alt: "seminario" },
  ];

  // Componente de imagen con entrada animada + parallax sutil
  const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
      <div ref={ref} className="relative w-full h-full overflow-hidden rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-[-8%] w-[116%] h-[116%]"
        >
          <motion.div style={{ y: parallaxY }} className="w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 85vw, 32vw"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="noticias" className="w-full md:min-h-[2800px] h-auto pb-16 md:pb-32">
      <div className="flex flex-col items-start px-6 md:px-20 pt-4 md:pt-24">
        <h1
          className="
            text-3xl md:text-5xl font-bold text-start
            bg-gradient-to-r from-[#ec0202] to-white
            bg-clip-text text-transparent pb-5 md:pb-6
          "
        >
          Vida Marcial y Formación Integral
        </h1>
        <p className="text-white/90 text-base md:text-lg max-w-7xl leading-relaxed text-justify">
          En la Confederación Peruana de Taekwon-Do ITF, cultivamos el verdadero
          espíritu del arte marcial a través de un programa continuo de
          actividades diseñadas para fortalecer el cuerpo, la mente y los
          valores tradicionales. Cada actividad refuerza los cinco principios
          del Taekwon-Do (Cortesía, Integridad, Perseverancia, Autocontrol y
          Espíritu indomable), promoviendo no solo la excelencia técnica, sino
          un estilo de vida disciplinado, saludable y solidario.
        </p>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 w-full mt-16 md:mt-24 px-8 md:px-12 lg:px-16">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="border border-gray-500/40 p-4 rounded-xl bg-gray-800/30 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[7/10] w-full overflow-hidden rounded-lg">
              <AnimatedImage src={article.img} alt={article.alt} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE CARRUSEL */}
      <div className="md:hidden w-full mt-12 md:px-4">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article, index) => (
              <CarouselItem key={index} className="pl-4 basis-[96%] sm:basis-[75%]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="border border-gray-500/40 p-2 rounded-xl bg-gray-800/30 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[7/10] w-full overflow-hidden rounded-lg">
                    <AnimatedImage src={article.img} alt={article.alt} />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <Button
            variant="outline"
            size="icon"
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-red-900 backdrop-blur-sm"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-red-900 backdrop-blur-sm"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </Button>
        </Carousel>
      </div>
    </section>
  );
}
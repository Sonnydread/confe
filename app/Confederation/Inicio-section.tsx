"use client";

import Image from "next/image";
import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { InView } from "@/components/inview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function InicioSection() {
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
      {/* ================= HERO ================= */}
      <section
        id="inicio"
        className="w-full relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
      >
        {/* Fondo */}
        <Image
          src="/img/bgmap.png"
          width={1292}
          height={260}
          quality={100}
          alt="background"
          className="absolute w-full h-full object-cover opacity-95"
        />

        {/* Contenido */}
        <div className="absolute flex flex-col items-center justify-start md:mt-[10px] -mt-[160px] gap-6">
          <h1
            className="text-white text-center font-noto font-semibold md:text-[50px] text-[26px] md:leading-[56px] leading-[34px] px-2"
            style={{
              textShadow: "2px 2px 16px rgba(255, 255, 255, 0.55)",
            }}
          >
            Asociación Peruana de Taekwon-Do ITF Tradicional
          </h1>

          <h2
            className="text-white font-semibold text-center md:text-3xl text-base md:px-2 px-4"
            style={{
              textShadow: "2px 2px 16px rgba(255, 255, 255, 0.55)",
            }}
          >
            &quot;Formando valores y disciplina a través del Taekwon-Do ITF en
            el Perú&quot;
          </h2>
          <div className="relative flex justify-center items-center w-full md:px-[80px] px-0 md:pt-0 pt-3">
            {/* MOBILE */}
            <div className="w-full md:hidden block rounded-2xl">
              <Image
                src="/img/Inicio/hero.jpg"
                alt="portada"
                width={700}
                height={600}
                className="object-cover"
              />
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block relative w-full max-w-[1100px] mb-10 mx-auto">
              <Image
                src="/img/Inicio/hero.jpg"
                alt="portada"
                width={960}
                height={1280}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARRUSELES ================= */}
      <div className="relative z-10">
        <Carousel
          className="w-full py-6 md:-mt-[140px] -mt-[260px] bg-gray-800"
          opts={{ loop: true }}
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
            {TaekwonDo.map((name, index) => (
              <CarouselItem key={index} className="md:basis-1/4 basis-[70%]">
                <div className="px-1 md:px-3">
                  <Image
                    src={name}
                    width={350}
                    height={150}
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
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              startDelay: 0,
              stopOnInteraction: false,
              speed: 1.4,
            }),
          ]}
        >
          <CarouselContent>
            {sponsors.map((name, index) => (
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
      </div>

      {/* ================= RESEÑA ================= */}
      <section className="px-6 md:px-20 md:py-2 md:pb-0 pb-[160px] py-0 text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewOptions={{ once: true }}
            className="md:pt-20 pt-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg pt-6 leading-relaxed text-justify"
            >
              La <strong>Asociación Peruana de Taekwon-Do ITF</strong>, con sede
              en la <strong>Av. Benavides 3586, Surco</strong>, es la entidad
              que representa y promueve el Taekwon-Do ITF tradicional en el
              Perú. Fundada y dirigida por el Maestro{" "}
              <strong>Tulio Flores</strong>, esta organización se ha consolidado
              como un pilar en la formación de atletas, instructores y jueces
              comprometidos con los principios del General Choi Hong Hi, creador
              del Taekwon-Do.
              <br />
              <br />
              A lo largo de los años, hemos fortalecido nuestra presencia en el
              ámbito nacional e internacional, participando activamente en
              campeonatos y eventos de alto nivel. Nuestra labor no solo se
              centra en el perfeccionamiento técnico, sino también en la
              transmisión de valores fundamentales.
              <br />
              <br />
              La Asociación Peruana de Taekwon-Do ITF continúa su camino con una
              fuerte proyección internacional y una base sólida en el país,
              llevando el arte marcial coreano a nuevas generaciones de
              peruanos.
            </motion.p>
          </InView>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="border-l-4 border-red-500 pl-4 italic text-lg md:text-xl text-white font-semibold"
          >
            “Formando valores y disciplina a través del Taekwon-Do ITF en el
            Perú.”
          </motion.blockquote>
        </div>
      </section>
    </>
  );
}

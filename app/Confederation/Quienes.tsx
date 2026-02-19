"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { InView } from "@/components/inview";

export default function QuienesSomos() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div
      // id="Somos"
      className="relative flex flex-col w-full"
      ref={targetRef}
    >
      {/* Desktop - NO TOCADO, 100% como lo tenías */}
      <div className="z-30 sticky top-0 h-screen w-full md:flex hidden items-center justify-center">
        <div className="flex flex-row w-full h-full">
          {/* Imagen */}
          <div className="w-[40%] h-full ml-28 flex items-center justify-center relative">
            <InView
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              viewOptions={{ once: true }}
            >
              <Image
                src="/img/Escuelas/master.png"
                width={360}
                height={360}
                alt="Imagen"
                className="object-cover rounded-3xl"
              />
            </InView>
          </div>
          {/* Texto */}
         
          <div className="flex w-[100%] flex-col text-center mr-20 justify-center px-8 text-white">
          <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              >

           <h1
          className="
            text-3xl md:text-[40px] pb-2 font-bold text-start
            bg-gradient-to-r from-[#ec0202] to-white
            bg-clip-text text-transparent
          "
        >
            ¿Quiénes somos, hacia dónde vamos?
          </h1>
            <p className="text-[20px] pt-14 text-justify">
              La Confederación Peruana de Taekwon-Do ITF es la organización que,
              representa a la Federación Internacional de Taekwon-Do en el Perú
              . <br />
              Somos parte de la organización más grande de artes marciales en el
              mundo, y velamos por la difusión y correcto uso de las normas de
              la ITF.
              <br /> Estamos abocados a capacitar permanentemente a nuestros
              instructores, a fin de que tengan mejores herramientas que les
              permitan desarrollar a cada estudiante en las diversas escuelas a
              nivel nacional. Cada una de las escuelas afiliadas cumple con una
              serie de requisitos que garantizan que nuestros estudiantes
              reciban la mejor enseñanza y todos los protocolos que aseguran una
              educación formal e integral. Hoy más que nunca es importante
              garantizar la inclusión de valores dentro del proceso formativo de
              cada practicante.
            </p>
          </motion.p>
          </div>
        </div>
      </div>

      {/* Mobile - AHORA SÍ: Texto arriba + Imagen debajo (orden corregido) */}
      <div className="md:hidden sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white px-8 pt-40 pb-10 gap-10">
        
        {/* Texto arriba */}
        <div className="text-center space-y-2">
          <h1
          className="
            text-3xl md:text-5xl font-bold
            bg-gradient-to-r from-[#ec0202] to-white
            bg-clip-text text-transparent
          "
        >
            ¿Quiénes somos, hacia dónde vamos?
          </h1>
        </div>

        {/* Imagen debajo y centrada */}
        <div className="flex justify-center">
          <Image
             src="/img/Escuelas/master.png"
            width={260}
            height={260}
            alt="Imagen"
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Texto descriptivo (opcional: si lo quieres debajo de la imagen, aquí está) */}
        <p className="text-base leading-relaxed text-white/90 text-justify -mt-6">
          La Confederación Peruana de Taekwon-Do ITF es la organización que representa a la Federación Internacional de Taekwon-Do en el Perú. 
          Somos parte de la organización más grande de artes marciales en el mundo, y velamos por la difusión y correcto uso de las normas de la ITF.
          <br /><br />
          Estamos abocados a capacitar permanentemente a nuestros instructores, a fin de que tengan mejores herramientas que les permitan desarrollar a cada estudiante en las diversas escuelas a nivel nacional. 
          Cada una de las escuelas afiliadas cumple con una serie de requisitos que garantizan que nuestros estudiantes reciban la mejor enseñanza y todos los protocolos que aseguran una educación formal e integral. 
          Hoy más que nunca es importante garantizar la inclusión de valores dentro del proceso formativo de cada practicante.
        </p>
      </div>
    </div>
  );
}
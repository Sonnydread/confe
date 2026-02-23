"use client";

import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InView } from "@/components/inview";

export default function Fundacion() {
  const masters = useMemo(() => [
    {
      id: 1,
      title: "Gran Maestro Han Chang Kim",
      description:
        "Pionero del Taekwon-Do en América Latina, enviando o recomendando a otros instructores para la expansión del arte en la región.",
      image: { url: "/img/historia/KimHan.png" },
    },
    {
      id: 2,
      title: "Gran Maestro Park Joong Soo",
      description:
        "Parte del equipo inicial del General Choi en la difusión mundial de nuestro arte. Visitó varios países en Sudamérica en los años 70.",
      image: { url: "/img/historia/ParkJongSoo.png" },
    },
    {
      id: 3,
      title: "Gran Maestro Nam Tae Hi",
      description:
        "Miembro fundador del Taekwon-Do ITF. Aunque no se asentó en Perú, su legado fue parte del linaje técnico de los primeros maestros que llegaron a América Latina.",
      image: { url: "/img/historia/NamTae.png" },
    },
    {
      id: 4,
      title: "Gran Maestro Rhee Ki Ha",
      description:
        "Fue uno de los primeros discípulos del General Choi Hong Hi, su legado perdura como una de las figuras más influyentes en la expansión mundial del Taekwon-Do ITF.",
      image: { url: "/img/historia/Rhee.png" },
    },
  ], []);

  const [activeSection, setActiveSection] = useState<number>(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const sectionProgress = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 0.4, 0.6, 1]
  );

  useEffect(() => {
    const unsubscribe = sectionProgress.onChange((value) => {
      const total = masters.length;
      const sectionSize = 1 / total;
      const index = Math.min(
        Math.floor((value + sectionSize * 0.8) / sectionSize),
        total - 1
      );
      setActiveSection(masters[index].id);
    });
    return () => unsubscribe();
  }, [sectionProgress, masters]);

  const activeData = masters.find((s) => s.id === activeSection) || masters[0];

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 md:pt-4 text-white">
      <div ref={containerRef} className="relative md:h-[400vh] h-[280vh]">
        <div className="sticky md:top-0 top-0 md:h-screen h-[800px] w-full flex justify-center items-center">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewOptions={{ once: true }}
            className="md:pt-0 pt-0 md:pb-0"
          >
            <div className="flex justify-between items-start md:ml-0 ml-6 md:flex-row flex-col md:pt-0">
              <h1
                className="
                  text-3xl md:text-5xl font-bold text-start
                  bg-gradient-to-r from-[#ec0202] mb-8 to-white
                  bg-clip-text text-transparent
                "
              >
                Los Primeros Maestros
              </h1>
            </div>

            <p className="md:text-lg text-justify text-base md:block hidden -mb-[80px] md:mx-auto mx-6">
              La llegada del Taekwon-Do ITF (International Taekwon-Do Federation) al Perú se remonta a los años 70 y 80, cuando los primeros maestros coreanos, enviados por la propia ITF bajo la dirección del General Choi Hong Hi, comenzaron a difundir este arte marcial en América Latina. Se conoce que a inicios de los años 80, el Taekwon-Do ITF fue introducido formalmente en el Perú por maestros coreanos residentes en países vecinos como Argentina, Chile o Bolivia. Algunos de los primeros cinturones negros peruanos formados bajo la ITF fueron los encargados de establecer las primeras escuelas oficiales en Lima y otras ciudades. Estos pioneros participaron activamente en los primeros campeonatos sudamericanos y mundiales, representando al Perú en eventos internacionales. A partir de estas visitas y seminarios, comenzaron a formarse los primeros instructores peruanos.
            </p>

            {/* Versión Desktop */}
            <div className="hidden md:flex w-full max-w-7xl mx-auto px-4 md:px-8 flex-col pt-20 md:flex-row items-center justify-between">
              <div className="w-full md:w-[54%]">
                <motion.div
                  key={activeData.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl text-white font-bold leading-tight">
                    {activeData.title}
                  </h1>

                  <p className="text-white text-xl md:text-lg mt-6">
                    {activeData.description}
                  </p>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                {activeData?.image?.url && (
                  <motion.div
                    key={activeData.image.url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4 }}
                    className="relative w-[300px] md:w-[340px] h-[400px] md:h-[440px]"
                  >
                    <Image
                      src={activeData.image.url}
                      alt={activeData.title}
                      fill
                      className="rounded-xl object-cover"
                      priority
                    />
                  </motion.div>
                )}
              </div>

              <div className="absolute right-4 md:right-20 bottom-[18%] transform -translate-y-1/2 flex flex-col gap-4">
                {masters.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={false}
                    animate={{
                      height: activeSection === section.id ? 42 : 10,
                      backgroundColor:
                        activeSection === section.id
                          ? "#ef4444"
                          : "rgb(75 85 99)",
                      opacity: activeSection === section.id ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-[10px] rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Versión Mobile - AQUÍ ESTÁ LA CORRECCIÓN */}
            <div className="md:hidden px-4 pb-10 flex flex-col gap-6 items-center">
              <div className="flex items-center justify-center gap-4 w-full">
                {activeData?.image?.url && (
                  <motion.div
                    key={activeData.image.url}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-3/4"
                  >
                    <div className="w-[80%] h-[80%]">
                      <Image
                        src={activeData.image.url}
                        alt={activeData.title}
                        width={300}
                        height={300}
                        className="rounded-xl ml-10 object-cover w-full h-[50%]"
                        priority
                      />
                    </div>
                  </motion.div>
                )}
                <div className="flex flex-col items-center gap-2 justify-center">
                  {masters.map((section) => (
                    <motion.div
                      key={section.id}
                      className={`w-[6px] rounded-full transition-all ${
                        activeSection === section.id
                          ? "h-[28px] bg-red-500"
                          : "h-[6px] bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Contenedor con altura mínima reservada para 4 líneas → elimina el salto */}
              <div className="min-h-[140px] flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold leading-tight text-center text-white">
                  {activeData.title}
                </h1>
                <motion.p
                  key={activeData.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-base text-center mt-2 px-4 max-w-[90%]"
                >
                  {activeData.description}
                </motion.p>
              </div>

              <p className="text-justify md:block hidden text-lg pt-4 mx-4">
                La llegada del Taekwon-Do ITF (International Taekwon-Do
                Federation) al Perú se remonta a los años 70 y 80, cuando los
                primeros maestros coreanos, enviados por la propia ITF bajo la
                dirección del General Choi Hong Hi, comenzaron a difundir este
                arte marcial en América Latina. Se conoce que a inicios de los
                años 80, el Taekwon-Do ITF fue introducido formalmente en el
                Perú por maestros coreanos residentes en países vecinos como
                Argentina, Chile o Bolivia. Algunos de los primeros cinturones
                negros peruanos formados bajo la ITF fueron los encargados de
                establecer las primeras escuelas oficiales en Lima y otras
                ciudades. Estos pioneros participaron activamente en los
                primeros campeonatos sudamericanos y mundiales, representando al
                Perú en eventos internacionales. A partir de estas visitas y
                seminarios, comenzaron a formarse los primeros instructores
                peruanos.
              </p>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
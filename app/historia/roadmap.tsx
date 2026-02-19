"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { InView } from "@/components/inview";
import Image from "next/image";

const staticRoadmapData = [
  {
    id: 1,
    title: "Se oficializa el nombre de Taekwon-Do",
    year1: "1955",
    text: "El 22 de Marzo, la ITF fue fundada por el General Choi Hong Hi",
    year2: "1966",
    highlight: "Primer torneo en Asia (Hong Kong)",
    year3: "1969",
    description: "La sede de la ITF se traslada a Toronto, Canadá",
    year4: "1972",
    data: "1955",
  },
  {
    id: 2,
    title: "Primer campeonato del mundo en Montreal, Canadá",
    year1: "1974",
    text: "Primer Campeonato Europeo en Rotterdam, Países bajos",
    year2: "1976",
    highlight: "Primer Campeonato del Pacícifo en Wellington, Nueva Zelanda",
    year3: "1979",
    description: "Se crea la Federación Europea de Taekwon-Do",
    year4: "1979",
    data: "1974",
  },
  {
    id: 3,
    title: " Se crea la Federación Norteamericana",
    year1: "1982",
    text: "Se crea la Federación Centroamericana",
    year2: "1983",
    highlight: "La sede de la ITF se traslada a Viena, Austria",
    year3: "1985",
    description:
      "15 de Junio. Fallecimiento del General Choi Hong Hi. Russell Maclellan asume la presidencia interina.",
    year4: "2002",
    data: "1982",
  },
  {
    id: 4,
    title:
      "13 de Junio. Elección del Maestro Trân Trięu Quân como Presidente de la ITF en el 14º Congreso de la ITF en Varsovia, Polonia",
    year1: "2003",
    text: " 1 de Junio. El Maestro Trân Trięu Quân fue elegido nuevamente como Presidente de la ITF en el 16º Congreso de la ITF en Quebec, Canadá",
    year2: "2007",
    highlight:
      "30 de octubre. La ITF está legalmente registrada en Madrid, España. Rec.Grupo 1/Sec. 2/ número 50813",
    year3: "2007",
    description:
      "Fallecimiento del Gran Maestro Trân Triêu Quân. El Gran Maestro Pablo Trajtenberg asume como Presidente.",
    year4: "2010",
    data: "2003",
  },
  {
    id: 5,
    title:
      "Elección del Gran Maestro Pablo Trajtenberg como Presidente de la ITF",
    year1: "2011",
    text: " Reelección del Gran Maestro Pablo Trajtenberg como Presidente de la ITF",
    year2: "2015",
    highlight:
      " 28 de Abril. Elección del Gran Maestro Paul Weiler como Presidente de la ITF en Inzell, Alemania.",
    year3: "2019",
    description: "",
    year4: "",
    data: "2019",
  },
];

export default function Roadmap() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      // Calibración: umbrales donde cada punto debe activarse
      // Ajusta estos valores según cómo se vea visualmente en tu pantalla
      // El valor es el % de progreso (0 a 1) cuando la línea toca el punto
      const thresholds = [
        0.00,     // primer punto (inicio)
        0.22,     // segundo punto
        0.50,     // tercero
        0.74,     // cuarto
        0.90,     // último punto (casi al final)
      ];

      let newIndex = 0;
      for (let i = thresholds.length - 1; i >= 0; i--) {
        if (v >= thresholds[i]) {
          newIndex = i;
          break;
        }
      }
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [progress]);

  return (
    <div id="historia" ref={containerRef} className="relative md:h-[440vh] h-[380vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto">
           <div className="flex justify-between items-start md:flex-row flex-col">
            <InView
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewOptions={{ once: true }}
            >
             <h1></h1>
            </InView>
          </div>
 <div className="flex justify-between items-start md:flex-row flex-col px-6 md:px-11 pt-0 md:pt-0">
        <h1
          className="
            text-3xl md:text-5xl font-bold text-start
            bg-gradient-to-r from-[#ec0202] mb-8 to-white
            bg-clip-text text-transparent
          "
        >
          Nuestra Historia ITF
        </h1>
      </div>
          <div className="md:block hidden w-full pt-[10px]">
            <div className="grid grid-cols-1 py-8 gap-8 px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.1 }}
                  className="min-h-[240px]"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-x-8 text-gray-300 font-noto text-base leading-[30px]">
                    <span className="text-red-500 text-2xl">
                      {staticRoadmapData[activeIndex].year1}
                    </span>
                    <div>
                      <span className="block font-normal">
                        {staticRoadmapData[activeIndex].title}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 grid grid-cols-[auto_1fr] gap-x-8 text-gray-300 font-noto text-base leading-[30px]">
                    <span className="text-red-500 text-2xl">
                      {staticRoadmapData[activeIndex].year2}
                    </span>
                    <div>
                      <span className="block font-normal">
                        {staticRoadmapData[activeIndex].text}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 grid grid-cols-[auto_1fr] gap-x-8 text-gray-300 font-noto text-base leading-[30px]">
                    <span className="text-red-500 text-2xl">
                      {staticRoadmapData[activeIndex].year3}
                    </span>
                    <div>
                      <span className="block font-normal">
                        {staticRoadmapData[activeIndex].highlight}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 grid grid-cols-[auto_1fr] gap-x-8 text-gray-300 font-noto text-base leading-[30px]">
                    <span className="text-red-500 text-2xl">
                      {staticRoadmapData[activeIndex].year4}
                    </span>
                    <div>
                      <span className="block font-normal">
                        {staticRoadmapData[activeIndex].description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute bottom-[130px] left-0 right-0">
              <InView
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewOptions={{ once: true }}
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="relative flex items-center justify-between w-[80%] mx-auto">
                    <div className="absolute w-full h-[1px] bg-[rgba(255,255,255,0.2)]" />
                    {staticRoadmapData.map((item, index) => (
                      <div
                        key={item.id}
                        className="relative flex flex-col items-center cursor-pointer z-10"
                        onClick={() => setActiveIndex(index)}
                      >
                        <motion.div
                          className="w-4 h-4 rounded-full"
                          animate={{
                            backgroundColor:
                              activeIndex >= index ? "#EF4444" : "#444",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.span
                          className={`mt-8 absolute text-4xl font-noto leading-[32px] font-medium ${
                            activeIndex >= index
                              ? "text-red-500"
                              : "text-[rgba(255,255,255,0.2)]"
                          }`}
                        >
                          {item.data}
                        </motion.span>
                      </div>
                    ))}
                    <motion.div
                      className="absolute h-[0.5px] bg-red-500"
                      style={{
                        width: useTransform(progress, [0, 1], ["0%", "100%"]),
                      }}
                    />
                  </div>
                </div>
              </InView>
            </div>
            <div className="w-full flex flex-row items-center justify-end gap-6 ml-48 mb-8">
  <span className="text-base text-white whitespace-nowrap">
    Fuente Oficial:
  </span>
  <a
    href="https://itftkd.sport/history/our-history/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex"
  >
    <Image
      src="/img/IEUJO.png"
      alt="Taekwondo en Machu Picchu"
      width={480}
      height={480}
      className="rounded-xl w-[60%] cursor-pointer h-auto object-contain transition-transform duration-300 hover:scale-110"
      priority
    />
  </a>
</div>
          </div>

          {/* === Mobile Version === */}
          <div className="block md:hidden w-full px-4">
            <div className="w-full max-w-xl mx-auto flex flex-col justify-start min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6 w-full"
                >
                  {/* year1 + title */}
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 text-gray-300 font-noto leading-[24px]">
                    <span className="text-red-500 text-base">
                      {staticRoadmapData[activeIndex].year1}
                    </span>
                    <span className="block font-normal text-sm">
                      {staticRoadmapData[activeIndex].title}
                    </span>
                  </div>

                  {/* year2 + text */}
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 text-gray-300 font-noto leading-[24px]">
                    <span className="text-red-500 text-base">
                      {staticRoadmapData[activeIndex].year2}
                    </span>
                    <span className="block font-normal text-sm">
                      {staticRoadmapData[activeIndex].text}
                    </span>
                  </div>

                  {/* year3 + highlight */}
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 text-gray-300 font-noto leading-[24px]">
                    <span className="text-red-500 text-base">
                      {staticRoadmapData[activeIndex].year3}
                    </span>
                    <span className="block font-normal text-sm">
                      {staticRoadmapData[activeIndex].highlight}
                    </span>
                  </div>

                  {/* year4 + description */}
                  {staticRoadmapData[activeIndex].description && (
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 text-gray-300 font-noto leading-[24px]">
                      <span className="text-red-500 text-base">
                        {staticRoadmapData[activeIndex].year4}
                      </span>
                      <span className="block font-normal text-sm">
                        {staticRoadmapData[activeIndex].description}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Puntos del timeline */}
            <div className="max-x-3xl absolute bottom-[190px] w-[100%] left-0 right-0">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="relative flex items-center justify-between w-[70%] mx-auto">
                  <div className="absolute w-[100%] h-[1px] bg-[rgba(255,255,255,0.2)]" />
                  {staticRoadmapData.map((item, index) => (
                    <div
                      key={item.id}
                      className="relative flex flex-col items-center cursor-pointer z-10"
                      onClick={() => setActiveIndex(index)}
                    >
                      <motion.div
                        className="w-4 h-4 rounded-full"
                        animate={{
                          backgroundColor:
                            activeIndex >= index ? "#EF4444" : "#444",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        className={`mt-4 absolute text-base font-russo leading-[32px] font-medium ${
                          activeIndex >= index
                            ? "text-red-500"
                            : "text-[rgba(255,255,255,0.2)]"
                        }`}
                      >
                        {item.data}
                      </motion.span>
                    </div>
                  ))}
                  <motion.div
                    className="absolute h-[0.5px] bg-red-500"
                    style={{
                      width: useTransform(progress, [0, 1], ["0%", "100%"]),
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-30 pb-6">
              <h1 className="text-base text-white self-start pl-8 mt-4 pb-4">
                Fuente Oficial:
              </h1>
              <a
                href="https://itftkd.sport/history/our-history/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Image
                  src="/img/IEUJO.png"
                  alt="Taekwondo en Machu Picchu"
                  width={380}
                  height={380}
                  className="rounded-xl w-[60%] cursor-pointer h-auto object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

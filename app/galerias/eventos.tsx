"use client";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

export default function Eventos() {
  const descriptionRef = useRef(null);

  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    margin: "-100px 0px",
  });
const customEase: [number, number, number, number] = [
  0.22,
  0.03,
  0.26,
  1.0,
];

  const tabs = ["Torneos", "Seminarios", "Exámenes"];
  const mobile = ["Torneos", "Seminarios", "Exámenes"];

  const allFeatures = [
    // Torneos
    [
      {
        title: "Selectivo Panamericano 2024",
        description:
          "Evento a llevarse a cabo en la ciudad de Punta del Este, Uruguay ",
        icon: "/img/actividades/torneos/exh1.JPG",
      },
      {
        title: "Copa juvenil por la paz 2022",
        description:
          "Nuestros practicantes compiten en todas la modalidades, inclusive por equipos",
        icon: "/img/actividades/torneos/torne2.jpg",
      },
      {
        title: "Copa Nim-Do 2023",
        description:
          "Como todos los años la escuela Nimdo organiza este gran evento",
        icon: "/img/actividades/torneos/torne3.jpg",
      },
      {
        title: "Torneo destrezas - Kids 2022",
        description:
          "Enfocado en motivar al as nuevas promesas que representarán a nuestro País en eventos internacionales",
        icon: "/img/actividades/torneos/torne4.JPG",
      },
      {
        title: "Selectivo Sudamericano 2023",
        description:
          "Solo los mejores en cada categoría serán parte de la selección, que sin duda llegarán a lo más alto del podio",
        icon: "/img/actividades/torneos/torne5.jpg",
      },
      {
        title: "Torneo de Verano 2025",
        description:
          "Solo los que entrenan con disciplina feroz, luchan con corazón y compiten sin excusas llegarán a lo más alto del podio. ¿Estás listo para demostrar quién manda en el tatami?",
        icon: "/img/actividades/torneos/exh6.JPG",
      },
    ],
    // Seminarios
    [
      {
        title: "Seminario Internacional",
        description:
          "Seminario internacional para identificar que necesitan nuestros practicantes, metodologías de aprendizaje, entrenamiento responsable y mucho más.",
        icon: "/img/actividades/seminarios/sem-internacional.png",
      },
      {
        title: "Seminario Maestro Edgardo Villanueva",
        description:
          "3 días a full Taekwon-Do en este evento tan esperado por todos",
        icon: "/img/Inicio/port3.jpg",
      },
      {
        title: "Encuentro GM Paul Weiler",
        description:
          "Espacio para compartir experiencias, actividades, evaluaciones y entrenamiento conjunto",
        icon: "/img/actividades/seminarios/paul-weiler.JPG",
      },
      {
        title: "International Instructor Course",
        description:
          "Maestros de gran jerarquía a nivel mundial, también nos visitaron cinturones negros de diferentes países",
        icon: "/img/actividades/seminarios/IIC.jpg",
      },
      {
        title: "Comité de Formación",
        description:
          "3 días de capacitación, teoría y práctica sobre temas importantísimos en la vida de un artista marcial.",
        icon: "/img/actividades/seminarios/comite.png",
      },
      {
        title: "Técnicas de lucha y competencia",
        description:
          "Clase de lucha y estratégias de combate para cinturones negros",
        icon: "/img/actividades/seminarios/tec-lucha.JPG",
      },
    ],
    // Exámenes
    [
      {
        title: "Simsa para I Dan",
        description:
          "Los exámenes de grado son mucho más que una simple evaluación técnica: son el momento en que el practicante demuestra no solo dominio de formas, técnicas, sparring y teoría, sino también madurez, disciplina, respeto y perseverancia.",
        icon: "/img/actividades/examen/simsa-dan.jpeg",
      },
      {
        title: "Simsa para Danes",
        description:
          "Los exámenes de grado son mucho más que una simple evaluación técnica: son el momento en que el practicante demuestra no solo dominio de formas, técnicas, sparring y teoría, sino también madurez, disciplina, respeto y perseverancia.",
        icon: "/img/actividades/examen/simsa-nimdo.png",
      },
      {
        title: "Simsa para I Dan",
        description:
          "Los exámenes de grado son mucho más que una simple evaluación técnica: son el momento en que el practicante demuestra no solo dominio de formas, técnicas, sparring y teoría, sino también madurez, disciplina, respeto y perseverancia.",
        icon: "/img/actividades/examen/simsa-dan1.jpeg",
      },
      {
        title: "Simsa para Danes",
        description:
          "Los exámenes de grado son mucho más que una simple evaluación técnica: son el momento en que el practicante demuestra no solo dominio de formas, técnicas, sparring y teoría, sino también madurez, disciplina, respeto y perseverancia.",
        icon: "/img/actividades/examen/simsa-fertex.png",
      },
      {
        title: "Examen de grado Gups",
        description:
          "Los exámenes de grado son mucho más que una simple evaluación técnica: son el momento en que el practicante demuestra no solo dominio de formas, técnicas, sparring y teoría, sino también madurez, disciplina, respeto y perseverancia.",
        icon: "/img/actividades/examen/simsa-nimdo-gups.png",
      },
      {
        title: "Examen de grado Gups",
        description:
          "Los exámenes de grado son mucho más que una simple evaluación técnica: son el momento en que el practicante demuestra no solo dominio de formas, técnicas, sparring y teoría, sino también madurez, disciplina, respeto y perseverancia.",
        icon: "/img/actividades/examen/simsa-upp.jpeg",
      },
    ],
  ];

  const [activeTab, setActiveTab] = useState(0);
  const features = allFeatures[activeTab];

  // Variantes para animación de tarjetas
 const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.4 },
  },
};

  return (
    <section
      id=""
      className="px-6 md:px-20 w-full pb-20 md:pt-22 max-w-[1600px] md:mt-28 mt-12 mx-auto"
    >
      <div className="flex-grow flex flex-col justify-center items-center text-center max-w-4xl mx-auto gap-4 md:gap-6">
        <motion.p
          ref={descriptionRef}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={isDescriptionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
          className="
            text-3xl md:text-5xl font-bold z-50 text-center
            bg-gradient-to-r from-[#ec0202] to-white
            bg-clip-text text-transparent
          "
        >
          Eventos Destacados Organizados por Nuestra Asociación
        </motion.p>
      </div>

      {/* Tabs */}
      <motion.p
        ref={descriptionRef}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isDescriptionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
      >
        <div className="w-full flex justify-center mt-8">
          <div className="md:inline-flex hidden gap-1 md:gap-4 border border-solid border-white/10 rounded-[80px] p-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-10 py-2 rounded-full text-base font-semibold transition-all duration-300
                  ${
                    activeTab === index
                      ? "bg-white/10 text-red-500 border border-red-500 shadow-md"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="md:hidden inline-flex gap-1 md:gap-4 z-50 border border-solid border-white/10 rounded-[80px] p-2">
            {mobile.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeTab === index
                      ? "bg-white/10 text-red-500 border border-red-500 shadow-md"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </motion.p>

      {/* Contenido con animación mejorada */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // clave importante para que AnimatePresence detecte el cambio
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card className="bg-white/5 backdrop-blur-lg border-red-900 py-1 h-full">
                  <CardContent className="p-3 flex flex-col h-full">
                    {/* Imagen con animación suave */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                      className="relative w-full h-64 mb-4 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </motion.div>

                    <h3 className="text-base md:text-[20px] font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white text-sm leading-[18px] flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
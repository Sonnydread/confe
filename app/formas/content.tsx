"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";

const backgroundImages = [
  "/img/tul/neon11.png",
  "/img/tul/neon14.png",
];

const cornerPositions = [
  { bottom: "20%", left: "-10%" },
  { bottom: "20%", right: "-10%" },
];

const colorBelts = [
  {
    title: "CHON-JI",
    description:
      "19 movimientos. Significa literalmente Cielo y Tierra. Representa la creación del mundo y es el Tul inicial realizado por el principiante.",
  },
  {
    title: "DAN-GUN",
    description:
      "21 movimientos. Nombre del legendario fundador de Corea en el año 2333 a.C.",
  },
  {
    title: "DO-SAN",
    description:
      "24 movimientos. Seudónimo del patriota Ahn Chang-Ho, dedicado a la educación e independencia de Corea.",
  },
  {
    title: "WON-HYO",
    description:
      "28 movimientos. Monje que introdujo el Budismo en la Dinastía Silla en el año 686 d.C.",
  },
  {
    title: "YUL-GOK",
    description:
      "38 movimientos. Seudónimo del filósofo Yi I. Representa erudición y conocimiento.",
  },
  {
    title: "JOONG-GUN",
    description:
      "32 movimientos. En honor al patriota Ahn Joong-Gun.",
  },
  {
    title: "TOI-GYE",
    description:
      "37 movimientos. Seudónimo del Maestro Yi Hwang, autoridad en neo-confucionismo.",
  },
  {
    title: "HWA-RANG",
    description:
      "29 movimientos. Nombre del grupo de jóvenes guerreros de la Dinastía Silla.",
  },
  {
    title: "CHOONG-MOO",
    description:
      "30 movimientos. En honor al almirante Yi Sun-Sin.",
  },
];

const blackBelts = [
  { dan: "I DAN", patterns: "KWANG-GAE (39) · PO-EUN (36) · GE-BAEK (44)" },
  { dan: "II DAN", patterns: "EUI-AM (45) · CHOONG-JANG (52) · JUCHE (45)" },
  { dan: "III DAN", patterns: "SAM-IL (33) · YOO-SIN (68) · CHOI-YONG (46)" },
  { dan: "IV DAN", patterns: "YON-GAE (49) · UL-JI (42) · MOON-MOO (61)" },
  { dan: "V DAN", patterns: "SO-SAN (72) · SE-JONG (24)" },
  { dan: "VI DAN", patterns: "TONG-IL (56)" },
];

export default function Tuls({ className = "" }: { className?: string }) {
  const floatAnimation: TargetAndTransition = {
    y: [0, -20, 0],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <section
      className={`relative w-full overflow-hidden text-white ${className}`}
    >
      {/* Imagen superior */}
      <div className="w-full flex justify-center px-4 pt-24 md:pt-32">
        <Image
          src="/img/tul/1.jpg"
          width={1200}
          height={300}
          alt="Tul Header"
          className="w-full max-w-6xl h-auto rounded-2xl object-cover"
        />
      </div>

      {/* Decoraciones */}
      {backgroundImages.map((src, i) => (
        <motion.div
          key={src}
          className="absolute hidden md:block z-0"
          style={cornerPositions[i]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        >
          <motion.div animate={floatAnimation}>
            <Image
              src={src}
              alt="Decoration"
              width={600}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 space-y-20">
        {/* Introducción */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            ¿Tul/Formas en Taekwon-Do ITF?
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Los <strong>Tul</strong> son secuencias preestablecidas de
            movimientos que simulan combate imaginario. Combinan técnicas de
            ataque, defensa y control mental.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Fueron creados por el General Choi Hong Hi. Existen 24 Tul oficiales
            que representan las 24 horas del día.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed font-semibold">
            Son la esencia del Taekwon-Do ITF como arte marcial tradicional.
          </p>
        </div>

        {/* Cinturones de Color */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
            Tul - Cinturones de Color
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {colorBelts.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cinturones Negros */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">
            Tul - Cinturones Negros
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {blackBelts.map((item) => (
              <div
                key={item.dan}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{item.dan}</h3>
                <p className="text-white/70 text-sm md:text-base">
                  {item.patterns}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
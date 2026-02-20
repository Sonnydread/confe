"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";

const backgroundImages = [
  "/img/tul/neon11.png",
  "/img/tul/neon14.png",
 
];

// Posiciones base (desktop)
const cornerPositions = [
  { bottom: "32%",   left: "-14%"  },
  { bottom: "32%",   right: "-14%" },
];

export default function Tuls({ className = "" }: { className?: string }) {
const floatAnimation: TargetAndTransition = {
  y: [0, -25, 0],
  opacity: [0.65, 0.95, 0.65],
  scale: [1, 1.03, 1],
  transition: {
    duration: 7,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },

};
  return (
    <>
      {/* IMAGEN DE ARRIBA */}
      <div className="w-full flex items-center md:pt-[160px] pt-[90px] px-4 justify-center">
        <Image
          src="/img/tul/1.jpg"
          width={1200}
          height={260}
          alt="art background"
          className="max-w-full h-auto rounded-2xl opacity-95 object-contain"
        />
      </div>

      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>

        {/* ==================== VERSIÓN DESKTOP ==================== */}
        {backgroundImages.map((src, i) => (
          <motion.div
            key={src}
            className="absolute z-0 hidden md:block"
            style={cornerPositions[i]}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2.5, delay: i * 0.4 }}
          >
            <motion.div
              initial={false} // Evita mismatch sutil en animación inicial
              animate={floatAnimation}
              className="w-40 h-56 xl:w-[900px] xl:h-[400px]"
            >
              <Image
                src={src}
                alt="Corner tul"
                width={320}
                height={480}
                className="w-full h-full object-contain"
                priority={i < 2}
              />
            </motion.div>
          </motion.div>
        ))}

      

        {/* ==================== TEXTO CENTRAL ==================== */}
        <div className="absolute inset-0 flex flex-col md:pt-[300px] items-center justify-center mx-auto gap-6 md:gap-10 mb-40 md:px-12 px-6 pointer-events-auto z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-3xl w-full text-center"
          >
            <h2 className="text-3xl md:text-4xl pb-4 lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              ¿Tul/Formas en Taekwon-Do ITF?
            </h2>

            <p suppressHydrationWarning className="text-base text-white/70 md:text-lg leading-relaxed text-justify hyphens-auto">
              Los <strong>Tul</strong> (también conocidos como formas o patrones) son secuencias preestablecidas de movimientos que simulan un combate imaginario contra uno o varios oponentes. Cada Tul combina técnicas de ataque, defensa, desplazamientos, posturas, bloqueos, golpes de mano y patadas, ejecutadas con precisión, potencia, equilibrio, ritmo y control mental.
            </p>

            <p suppressHydrationWarning className="mt-5 text-white/70 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              Fueron creados y sistematizados por el General Choi Hong Hi entre 1955 y 1965. Existen <strong>24 Tul oficiales</strong> en el ITF, número simbólico que representa las 24 horas del día o una vida completa dedicada al entrenamiento.
            </p>

            <p suppressHydrationWarning className="mt-5 text-white/70 text-base md:text-lg leading-relaxed text-justify hyphens-auto font-semibold">
              Los Tul son la esencia del Taekwon-Do ITF como arte marcial tradicional: perfeccionan la técnica física, forjan el carácter, preservan la herencia cultural y preparan al practicante para aplicar los principios del arte en la vida diaria y en situaciones de autodefensa.
            </p>

  {/* ==================== VERSIÓN MOBILE ==================== */}
        <div className="md:hidden">
          {/* 2 arriba */}
          <motion.div
            initial={false}
            animate={floatAnimation}
            transition={{ delay: 0.6 }}
            className="absolute bottom-[1580px] left-6 w-40 h-48 z-10" // Corregido w-46 → w-40
          >
            <Image
              src={backgroundImages[0]}
              alt="Card móvil 1"
              width={300}
              height={400}
              className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={false}
            animate={floatAnimation}
            transition={{ delay: 0.9 }}
            className="absolute bottom-[1580px] right-6 w-40 h-48 z-10" // Corregido w-36 → w-40 (consistencia)
          >
            <Image
              src={backgroundImages[1]}
              alt="Card móvil 2"
              width={300}
              height={400}
              className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>

            <h2 suppressHydrationWarning className="text-3xl md:pt-40 pt-20 md:text-4xl pb-4 lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-700 to-white bg-clip-text text-transparent mx-auto">
              Tul - Cinturones de Color
            </h2>

            {/* Aquí agrego suppressHydrationWarning en cada párrafo con números */}
            <p className="text-2xl font-semibold text-white text-center mb-4">CHON-JI</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              19 movimientos <br />
              Significa literalmente (El Cielo y la Tierra). En Oriente es interpretado como la creación del mundo o el principio de la historia humana, es el Tul inicial realizado por el principiante. Su diagrama está dividido en 2 partes similares, donde una parte representa al Cielo y la otra a la Tierra.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">DAN-GUN</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              21 movimientos <br />
              Es el nombre dado al legendario fundador de Corea, en el año 2.333 antes de Cristo.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">DO-SAN</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              Es el seudónimo del patriota Ahn Chang-Ho (1876-1938). Los 24 movimientos representan su vida entera, dedicada a la educación de Korea y sus movimientos por la independencia.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">WON-HYO</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              28 movimientos <br />
              Fue un notable monje que introdujo el Budismo en la Dinastía Silla en el año 686 después de Cristo.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">YUL-GOK</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              38 movimientos <br />
              Es el seudónimo del gran filósofo y erudito Yi I (1536-1584), el cual era llamado el Confucio de Korea. Los 38 movimientos de su diagrama se refieren a su lugar de nacimiento, a los 38 grados de latitud y el diagrama representa Erudito.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">JOONG-GUN</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              32 movimientos <br />
              Es llamado así al patriota coreano Ahn Joong-Gun quien asesinó a Hiro Bumi Ito, el primer gobernador general japonés de Korea, conocido como el hombre que jugó un rol importante en la unión de Korea y Japón. Los 32 movimientos que tiene el Tul, representan la edad que tenía cuando fue ejecutado en la prisión de Lui-Shung (1910).
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">TOI-GYE</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              37 movimientos <br />
              Es el seudónimo del Maestro Yi Hwang (siglo XVI), quien fue una autoridad sobre el neo-confucionismo. Los 37 movimientos de este Tul se refieren a su lugar de nacimiento, a los 37 grados de latitud y el diagrama representa la palabra Erudito.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">HWA-RANG</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              29 movimientos <br />
              Es el nombre del grupo de guerreros, que se formó durante la Dinastía de Silla en el siglo VII. Los 29 movimientos que tiene el Tul, se refieren a la 29 na. División de Infantería, donde el Taekwon-do maduró y desarrolló.
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">CHOONG-MOO</p>
            <p suppressHydrationWarning className="text-white/70 text-base md:text-lg leading-relaxed text-center hyphens-auto font-semibold max-w-2xl mx-auto">
              30 movimientos <br />
              Es llamado así al patriota coreano Ahn Joong-Gun quien asesinó a Hiro Bumi Ito, el primer gobernador general japonés de Korea, conocido como el hombre que jugó un rol importante en la unión de Korea y Japón. Los 32 movimientos que tiene el Tul, representan la edad que tenía cuando fue ejecutado en la prisión de Lui-Shung (1910).
            </p>




            <h2 suppressHydrationWarning className="text-3xl md:pt-40 pt-[300px] md:text-4xl pb-4 lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-700 to-white bg-clip-text text-transparent mx-auto">
              Tul - Cinturones Negros
            </h2>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">I DAN</p>
            <p suppressHydrationWarning className="text-xl pt-2 font-semibold text-white text-center mb-4">
              KWANG-GAE - 39 movimientos <br />PO-EUN - 36 movimientos <br />GE-BAEK  - 44 movimientos
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">II DAN</p>
            <p suppressHydrationWarning className="text-xl pt-2 font-semibold text-white text-center mb-4">
              EUI-AM - 45 movimientos <br />CHOONG-JANG - 52 movimientos <br />JUCHE  - 45 movimientos
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">III DAN</p>
            <p suppressHydrationWarning className="text-xl pt-2 font-semibold text-white text-center mb-4">
              SAM-IL - 33 movimientos <br />YOO-SIN - 68 movimientos <br />CHOI-YONG  - 46 movimientos
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">IV DAN</p>
            <p suppressHydrationWarning className="text-xl pt-2 font-semibold text-white text-center mb-4">
              YON-GAE - 49 movimientos <br />UL-JI - 42 movimientos <br />MOON-MOO  - 61 movimientos
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">V DAN</p>
            <p suppressHydrationWarning className="text-xl pt-2 font-semibold text-white text-center mb-4">
              SO-SAN - 72 movimientos <br />SE-JONG - 24 movimientos
            </p>

            <p className="text-2xl pt-8 font-semibold text-white text-center mb-4">VI DAN</p>
            <p suppressHydrationWarning className="text-xl pt-2 font-semibold text-white text-center mb-4">
              TONG-IL - 56 movimientos
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
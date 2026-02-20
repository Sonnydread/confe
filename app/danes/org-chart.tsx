"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Variants } from "framer-motion";
import {
  LazyMotion,
  domAnimation,
  motion,
  AnimatePresence,
  PanInfo,
} from "framer-motion";

type Role = "Director" | "Instructor";

interface Person {
  id: string;
  name: string;
  role: Role;
  image: string;
  school: string;
  dojoImage: string;
}

interface DirectorNode extends Person {
  instructors: Person[];
  associationLogo: string;
}

const DIRECTORS: DirectorNode[] = [
  {
    id: "d1",
    name: "Andrés Peñavasquez VII-Dan",
    role: "Director",
    image: "/img/Escuelas/v-andres.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/master-peña.jpg",
    associationLogo: "/img/dojang/logo/peña.png",
    instructors: [],
  },
  {
    id: "d2",
    name: "Tulio Flores VII-Dan",
    role: "Director",
    image: "/img/Escuelas/v-tulio.png",
    school: "Escuela Dragón Azul",
    dojoImage: "/img/dojang/d-confe.jpeg",
    associationLogo: "/img/dojang/logo/yosi.png",
    instructors: [
      {
        id: "i1",
        name: "Walter Contreras IV-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-waltter.jpg",
        school: "Dojo Tigre Blanco",
       dojoImage: "/img/dojang/d-confe.jpeg",
      },
      {
        id: "i2",
        name: "Julio Baltasar III-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-pol.png",
        school: "Dojo Tigre Blanco",
        dojoImage: "/img/dojang/wolf.jpg",
      },
      {
        id: "i3",
        name: "Guillermo Alvarado II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-gville.png",
        school: "Dojo Tigre Blanco",
        dojoImage: "/img/dojang/localupp.jpg",
      },
      {
        id: "i4",
        name: "Anabeth Magallanes I-Dan",
        role: "Instructor",
        image: "/img/Escuelas/mujer-nodisp.jpg",
        school: "Escuela Dragón Azul",
        dojoImage: "/img/dojang/d-confe.jpeg",
      },
      {
        id: "i5",
        name: "Marcelo Fernández I-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-marce.png",
        school: "Dojo Tigre Blanco",
       dojoImage: "/img/dojang/d-confe.jpeg",
      },
      {
        id: "i6",
        name: "Angelo Sánchez I-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-angelo.png",
        school: "Dojo Tigre Blanco",
        dojoImage: "/img/dojang/choong.jpeg",
      },
      {
        id: "i7",
        name: "Israel Picon I-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Dojo Tigre Blanco",
         dojoImage: "/img/dojang/d-confe.jpeg",
      },
    ],
  },
  
  {
    id: "d3",
    name: "Jorge Lecaros VI-Dan",
    role: "Director",
    image: "/img/Escuelas/hombre-nodisp.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/d-confe.jpeg",
    associationLogo: "/img/dojang/logo/inae.png",
    instructors: [
      {
        id: "i1",
        name: "Braulio Aquino V-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Centro Fénix ITF",
        dojoImage: "/img/dojang/d-confe.jpeg",
      },
    ],
  },
  {
    id: "d4",
    name: "Miqui Velasquez V-Dan",
    role: "Director",
    image: "/img/Escuelas/v-miki.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/localnimdo.jpg",
    associationLogo: "/img/dojang/logo/nimdo.png",
    instructors: [
      {
        id: "i1",
        name: "Carlos Sarazu II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-car.png",
        school: "Centro Fénix ITF",
        dojoImage: "/img/dojang/olivos.png",
      },
      {
        id: "i2",
        name: "Erick Quiroz II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-erick.png",
        school: "Academia Cóndor Rojo",
        dojoImage: "/img/dojang/localnimdo.jpg",
      },
      {
        id: "i3",
        name: "Maximo Zuñiga I-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-max.png",
        school: "Academia Cóndor Rojo",
         dojoImage: "/img/dojang/localnimdo.jpg",
      },
    ],
  },
  {
    id: "d5",
    name: "Reigar Calle IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-reig.png",
    school: "Centro Fénix ITF",
            dojoImage: "/img/dojang/d-confe.jpeg",
    associationLogo: "/img/dojang/logo/kibaek.png",
    instructors: [
      {
        id: "i1",
        name: "Nixon Palomino I-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Centro Fénix ITF",
               dojoImage: "/img/dojang/d-confe.jpeg",
      },
    ],
  },
  {
    id: "d6",
    name: "Carlos Aliaga IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-carlos.png",
    school: "Centro Fénix ITF",
            dojoImage: "/img/dojang/d-confe.jpeg",
    associationLogo: "/img/dojang/logo/cachorro.png",
    instructors: [],
  },
  {
    id: "d7",
    name: "Paco Orizano IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-paco.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/villaflo-dojang.jpg",
    associationLogo: "/img/dojang/logo/flores.png",
    instructors: [
      {
        id: "i1",
        name: "Moisés Gómez II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Centro Fénix ITF",
        dojoImage: "/img/dojang/villaflo-dojang.jpg",
      },
      {
        id: "i2",
        name: "Guillermo Irigoyen II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Academia Cóndor Rojo",
        dojoImage: "/img/dojang/villaflo-dojang.jpg",
      },
    ],
  },
  {
    id: "d8",
    name: "Paco Orizano IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-paco.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/mariscal.jpg",
    associationLogo: "/img/dojang/logo/marisc.png",
    instructors: [
      {
        id: "i1",
        name: "Moisés Gómez II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Centro Fénix ITF",
         dojoImage: "/img/dojang/mariscal.jpg",
      },
    ],
  },
  {
    id: "d9",
    name: "Paco Orizano IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-paco.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/vencedores.jpg",
    associationLogo: "/img/dojang/logo/vence.png",
    instructors: [
      {
        id: "i1",
        name: "Jordan Miranda II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/v-jordan.png",
        school: "Centro Fénix ITF",
        dojoImage: "/img/dojang/vencedores.jpg",
      },
    ],
  },
  {
    id: "d10",
    name: "David Rodriguez IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-david.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/localfertex.jpg",
    associationLogo: "/img/dojang/logo/fer.cen.png",
    instructors: [
      {
        id: "i1",
        name: "Ricardo Irigoyen II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Centro Fénix ITF",
        dojoImage: "/img/dojang/localfertex.jpg",
      },
      {
        id: "i2",
        name: "Guillermo Irigoyen II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Academia Cóndor Rojo",
        dojoImage: "/img/dojang/localfertex.jpg",
      },
      {
        id: "i3",
        name: "Sebastian Fernández II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/hombre-nodisp.png",
        school: "Academia Cóndor Rojo",
        dojoImage: "/img/dojang/localfertex.jpg",
      },
    ],
  },
  
  {
    id: "d11",
    name: "Hector Rodriguez IV-Dan",
    role: "Director",
    image: "/img/Escuelas/v-hector.png",
    school: "Centro Fénix ITF",
    dojoImage: "/img/dojang/srdojang.png",
    associationLogo: "/img/dojang/logo/rosa.png",
    instructors: [
      {
        id: "i1",
        name: "Carmiña Guevara II-Dan",
        role: "Instructor",
        image: "/img/Escuelas/mujer-nodisp.jpg",
        school: "Centro Fénix ITF",
        dojoImage: "/img/dojang/srdojang.png",
      },
    ],
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function OrgChart() {
  const [selected, setSelected] = useState<Person | null>(null);

const handleDragEnd = (event: PointerEvent, info: PanInfo) => {
    if (info.offset.y > 120) setSelected(null);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-10 pt-[120px] sm:pt-40 space-y-10">
        <div className="flex justify-between items-start md:flex-row flex-col">
          <h1
            className="text-3xl md:text-5xl font-bold text-start bg-gradient-to-r from-[#ec0202] to-white bg-clip-text text-transparent"
          >
            Nuestros Instructores
          </h1>
        </div>
        {DIRECTORS.map((director) => (
          <motion.section
            key={director.id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-purple-900/40 shadow-xl p-6 sm:p-8 lg:p-12"
          >
            {/* LOGO */}
            <div className="relative mb-6 flex justify-center lg:absolute lg:top-10 lg:right-10 lg:mb-0">
              <Image
                src={director.associationLogo}
                alt="Logo Asociación"
                width={140}
                height={140}
                className="object-contain opacity-90"
              />
            </div>

            {/* DIRECTOR */}
            <div className="flex flex-col items-center">
              <PersonNode
                person={director}
                highlight
                onClick={setSelected}
                priority
              />
            </div>

            {/* INSTRUCTORES */}
            {director.instructors.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 justify-items-center mt-12">
                {director.instructors.map((inst) => (
                  <PersonNode
                    key={inst.id}
                    person={inst}
                    onClick={setSelected}
                  />
                ))}
              </div>
            )}
          </motion.section>
        ))}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-x-0 px-5 bottom-0 sm:inset-auto sm:left-1/2 sm:-translate-x-1/2 sm:bottom-6 w-full sm:w-[70%] lg:w-[46%] max-w-2xl z-50"
            >
              <motion.div
                drag="y"
                dragConstraints={{ top: 0 }}
                onDragEnd={handleDragEnd}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* DRAG INDICATOR */}
                <div className="sm:hidden w-12 h-1.5 bg-gray-400/40 rounded-full mx-auto my-3" />

                <div className="relative w-full h-72">
                  <Image
                    src={selected.dojoImage}
                    alt={selected.school}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute bottom-4 right-4 bg-purple-600 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:bg-purple-700 transition"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}
function PersonNode({
  person,
  onClick,
  highlight = false,
  priority = false,
}: {
  person: Person;
  onClick: (p: Person) => void;
  highlight?: boolean;
  priority?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -6 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onClick(person)}
      className="cursor-pointer flex flex-col items-center text-center"
    >
      <div
        className={`relative rounded-full overflow-hidden shadow-2xl border border-purple-900
          ${
            highlight
              ? "w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
              : "w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56"
          }`}
      >
        <Image
          src={person.image}
          alt={person.name}
          fill
          priority={priority}
          className="object-cover"
        />
      </div>

      <h4 className="mt-4 text-lg sm:text-xl font-semibold text-gray-200">
        {person.name}
      </h4>
      <p className="text-sm text-gray-300">{person.role}</p>
    </motion.div>
  );
}

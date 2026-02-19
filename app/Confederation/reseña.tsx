"use client";

import { motion } from "framer-motion";
import { InView } from "@/components/inview";

export default function Reseña() {
  return (
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
            en la <strong>Av. Benavides 3586, Surco</strong>, es la entidad que
            representa y promueve el Taekwon-Do ITF tradicional en el Perú.
            Fundada y dirigida por el Maestro <strong>Tulio Flores</strong>,
            esta organización se ha consolidado como un pilar en la formación de
            atletas, instructores y jueces comprometidos con los principios del
            General Choi Hong Hi, creador del Taekwon-Do.
            <br />
            <br />
            A lo largo de los años, hemos fortalecido nuestra presencia en el
            ámbito nacional e internacional, participando activamente en
            campeonatos y eventos de alto nivel. Nuestra labor no solo se centra
            en el perfeccionamiento técnico, sino también en la transmisión de
            valores fundamentales.
            <br />
            <br />
            La Asociación Peruana de Taekwon-Do ITF continúa su camino con una
            fuerte proyección internacional y una base sólida en el país,
            llevando el arte marcial coreano a nuevas generaciones de peruanos.
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
  );
}

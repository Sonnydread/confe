"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function Grid() {
  return (
    <>
      <section className="relative md:py-20 pb-6 md:px-16">
        <div className="flex justify-between items-start md:flex-row flex-col px-6 pt-0 md:pt-0">
        <h1
          className="
            text-3xl md:text-5xl font-bold text-start
            bg-gradient-to-r pb-4 from-[#ec0202] to-white
            bg-clip-text text-transparent
          "
        >
          Energía, Esfuerzo y Hermandad
        </h1>
      </div>
        <div className="max-w-7xl md:mx-auto mx-6 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-8 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-2 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                 src="/img/Inicio/sud1.jpeg"
                alt="Ambiente relajante"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-2 h-[260px] row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/actividades/seminarios/internacional.jpg"
                alt="Masaje horizontal"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-2 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/Inicio/fl4.png"
                alt="Sauna con amigos"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/Inicio/alone.png"
                alt="Amigos en sauna"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 row-span-12 h-[300px] relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/actividades/torneos/2prom.png"
                alt="Sauna vertical"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-4 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/Inicio/locnf.png"
                alt="Masaje en pareja"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-3 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/actividades/seminarios/sem2.png"
                alt="Cámara de amigos horizontal"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-3 row-span-12 h-[300px] relative w-full rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/actividades/seminarios/tec-lucha.JPG"
                alt="Masaje en pareja"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-2 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/actividades/torneos/exh2.JPG"
                alt="Masaje con piedras"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-2 row-span-12 h-[240px] relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/actividades/torneos/exh3.JPG"
                alt="Spa individual"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              viewport={{ once: false }}
              className="col-span-1 md:col-span-2 row-span-12 relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/img/Inicio/tymio.jpg"
                alt="Masaje facial"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
          </section>
    </>
  );
}

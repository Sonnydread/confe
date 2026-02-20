"use client";
import Image from "next/image";

export default function PortGaleria() {
  return (
    <section
      id="inicio"
      className="w-full relative overflow-hidden flex flex-col items-center justify-center md:h-full min-h-screen"
    >
      {/* Fondo */}
      <Image
        src="/img/bgmap.png"
        width={1292}
        height={260}
        quality={100}
        alt="art background"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col items-center justify-start md:mt-[120px] mt-[100px] gap-6 px-4 md:px-0">
        
        {/* Imagen */}
        <div className="relative flex justify-center items-center w-full md:px-[80px] px-0 md:pt-0 pt-2">

          {/* MOBILE – controlamos altura y eliminamos espacio sobrante */}
          <div className="w-full md:hidden block rounded-2xl overflow-hidden shadow-lg mb-0 pb-0">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] mb-0"> {/* ratio más natural para fotos verticales */}
              <Image
                src="/img/Inicio/rtada.jpg"
                alt="portada"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* DESKTOP – sin cambios */}
          <Image
            src="/img/Inicio/rtada.jpg"
            alt="portada"
            width={500}
            height={700}
            className="hidden md:block relative mt-6 z-10 w-full h-full rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
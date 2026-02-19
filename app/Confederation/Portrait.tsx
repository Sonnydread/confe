"use client";
import Image from "next/image";

export default function Port() {
  return (
    <section
      id="inicio"
      className="w-full relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
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
      <div className="absolute inset-0 flex flex-col items-center justify-start md:mt-[120px] mt-[100px] gap-6 px-0 md:px-0">
        
        {/* Título Principal */}
        <h1
          className="text-white text-center font-noto font-semibold md:text-[50px] text-[26px] md:leading-[56px] leading-[34px] px-2"
          style={{
            textShadow: "2px 2px 16px rgba(255, 255, 255, 0.55)",
          }}
        >
          Asociación Peruana de Taekwon-Do ITF Tradicional
        </h1>

        {/* Subtítulo */}
        <h2
          className="text-white font-semibold text-center md:text-3xl text-base md:px-2 px-4"
          style={{
            textShadow: "2px 2px 16px rgba(255, 255, 255, 0.55)",
          }}
        >
          &quot;Formando valores y disciplina a través del Taekwon-Do ITF en el Perú&quot;
        </h2>

        {/* Imagen */}
        <div className="relative flex justify-center items-center w-full md:px-[80px] px-0 md:pt-0 pt-3">

          {/* MOBILE */}
          <div className="w-full md:hidden block rounded-2xl">
              <Image
                src="/img/Inicio/hero.jpg"
                alt="portada"
                width={700}
                height={600}
                className="object-cover"
              />
          </div>

       <div className="hidden md:block relative w-full max-w-[1100px] mb-10 mx-auto">
  <Image
    src="/img/Inicio/hero.jpg"
    alt="portada"
    width={960}           // ← ajusta al ancho real que quieras como máximo
    height={1280}         // ← altura proporcional (mantén la relación real de la imagen)
    className="rounded-2xl shadow-lg object-cover w-full"
  />
</div>
        </div>

      </div>
    </section>
  );
}

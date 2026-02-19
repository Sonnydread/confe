"use client";

import Image from "next/image";

interface PdfEventCardProps {
  imageUrl: string;
  pdfUrl: string;
  title?: string;
}

export default function PdfEventCard({
  imageUrl,
  pdfUrl,
  title = "Noticias y Próximos Eventos",
}: PdfEventCardProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        {/* Imagen del evento */}
        <Image
          src={imageUrl}
          alt={title}
          width={1400}
          height={800}
          className="w-full h-[260px] sm:h-[340px] md:h-[620px] object-cover"
          priority
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Contenido encima */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-5 drop-shadow-lg">
            {title}
          </h2>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-lg"
          >
            📄 Abrir PDF
          </a>
        </div>
      </div>
    </div>
  );
}

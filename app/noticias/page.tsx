"use client";

import React from "react";

import MainNav from "../Confederation/Navbar";
import Inicio from "./gallery";
import Actives from "./Actividades";
import { SubscribeForm } from "@/components/ui/subs-form";
import Footer from "../Confederation/footer";
import PdfCarta from "./carta";
import PdfEventCard from "./pdf1";

export default function NoticiasPage() {
  return (
    <div className="flex flex-col">
      <MainNav />
      <div className="md:pt-40 pt-24">
        <PdfEventCard
          imageUrl="/img/Inicio/fl1.png"
          pdfUrl="/docs/brochure.pdf"
          title="Campeonato Sudamericano"
        />
      </div>
      <div className="md:pt-20 pt-24">
       <PdfCarta
  imageUrl="/img/Inicio/carta.jpeg"
  fileUrl="/docs/carta.pdf"
  title="Invitación Oficial IUC"
/>
      </div>
      <Inicio />
      <Actives />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

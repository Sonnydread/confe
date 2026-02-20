"use client";
import React from "react";
import Tuls from "./content";
import MainNav from "../Confederation/Navbar";
import Image from "next/image";
import Footer from "../Confederation/footer";

export default function page() {
  return (
 
     <div>
      <MainNav />
      <Tuls />
      <div className="md:pt-[4000px] pt-[4500px]">
        <div className="relative z-0 w-full md:flex hidden justify-center px-6">
          <Image
            src="/img/tul/team-tul.png"
            width={1200}
            height={260}
            className="rounded-[18px] mb-12"
            alt="Equipo Taekwon-Do"
          />
        </div>
      </div>
        <Footer />
  </div>
  );
}

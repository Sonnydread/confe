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
      <Footer />
    </div>
  );
}

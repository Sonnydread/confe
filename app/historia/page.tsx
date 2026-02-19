"use client";
import React from "react";
import Roadmap from "./roadmap";
import Fundacion from "./fundación";
import MainNav from "../Confederation/Navbar";
import { SubscribeForm } from "@/components/ui/subs-form";
import Cards from "./CardsPrincipios";
import Cardx from "./mobile.cards";
import Footer from "../Confederation/footer";

export default function page() {
  return (
    <div>
      <MainNav />
      <Roadmap />
      <Fundacion />
      <Cardx />
      <Cards />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

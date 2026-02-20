import React from "react";
import MainNav from "../Confederation/Navbar";
import { SubscribeForm } from "@/components/ui/subs-form";
import Footer from "../Confederation/footer";
import Grid from "./grid";
import Eventos from "./eventos";
import Carruseles from "../Confederation/Carrusel";
import PortGaleria from "./port-galleria";



export default function page() {
  return (
    <div>
      <MainNav />
      <PortGaleria />
      <Carruseles />
      <Eventos />
      <Grid />
      <SubscribeForm />
      <Footer />
    </div>
  );
}

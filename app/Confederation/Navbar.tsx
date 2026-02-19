"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import NavLink from "./Navlink";
// import MobileNav from "./MobileNavbar";
import Trigger from "./trigger";
import { Header } from "./Drawermobile";

export default function MainNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (lastScrollY < latest && latest > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(latest);
    });

    return () => unsubscribe();
  }, [lastScrollY, scrollY]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-130%" },
      }}
      animate={hidden ? "hidden" : "visible"} 
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-screen md:px-20 z-50"
    >
      <div className="md:flex hidden px-6 md:px-10 py-4 md:py-6 mt-4 justify-between items-center bg-white/10 rounded-2xl backdrop-blur-lg">
        {/* DESKTOP NAV */}
        <ul className="gap-8 items-center font-noto font-bold hidden md:flex h-fit">
          <NavLink href="/#inicio">Inicio</NavLink>
          <NavLink href="/historia">Historia</NavLink>
          <NavLink href="/escuelas">Escuelas</NavLink>
          <NavLink href="/galerias">Galerías</NavLink>
          <NavLink href="/noticias">Noticias</NavLink>
           <NavLink href="/danes">Instructores</NavLink>
            <NavLink href="/formas">Formas/Tul</NavLink>
        </ul>
        <Trigger />
        {/* LOGO */}
        <div className="flex items-center md:mx-0 w-full md:w-auto justify-between max-h-5">
          <Image
            src="/img/IEUJO.png"
            width={300}
            height={100}
            alt="logo"
            className="md:w-full w-[50%] md:ml-[8%] ml-0"
          />
        </div>
      </div>

        {/* MOBILE NAV TOGGLE */}
        <div className="flex md:hidden">
          <Header />
        </div>
    </motion.nav>
  );
}

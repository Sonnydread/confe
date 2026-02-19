"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Trigger from "./trigger";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: "Inicio", href:"/#inicio" },
    { label: "Historia", href: "/historia" },
    { label: "Escuelas", href: "/escuelas" },
    { label: "Galerías", href: "/galerias" },
    { label: "Noticias", href: "/noticias" },
    { label: "Instructores", href: "/danes" },
       { label: "Formas/Tul", href: "/formas" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-t border-white/5 backdrop-blur-sm bg-white/15">
      <div className="flex items-center justify-between w-full px-4 py-3 md:py-6">
        <Link href="/" className="flex items-center">
          <Image
           src="/img/IEUJO.png"
            alt="Logo"
            width={250}
            height={250}
          />
        </Link>

        <div className="flex items-center gap-0">
          <Button
         
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
            className="rounded-full backdrop-blur-light bg-white/5"
          >
            <Menu size={50} className="text-white "/>
          </Button>
        </div>
      </div>

      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} direction="right">
        <DialogTitle asChild className="b-0. bg-gray-700">
          {/* Accesibilidad */}
          <span className="sr-only">Navigation menu</span>
        </DialogTitle>

        <DrawerContent className="border-0 top-0 fixed h-full z-50 backdrop-blur-sm bg-white/5">
          <div className="flex flex-col h-full py-4 md:py-2 justify-between gap-4">
            <div className="flex justify-between md:justify-end pb-4 md:pb-2 border-b border-white/5 px-6 md:px-10">
              <Link href="/" className="md:hidden flex items-center space-x-2">
                <Trigger />
              </Link>

              <DrawerClose asChild>
                <Button
                  
                  size="icon"
                  aria-label="Close menu"
                  className="rounded-full hover:bg-white hover:text-white backdrop-blur-light bg-white/5"
                >
                  <X className="text-white" size={30} />
                </Button>
              </DrawerClose>
            </div>

            <div className="flex flex-col gap-6 pb-4">
              <div className="flex flex-col mt-4 flex-wrap px-6">
                {items.map(({ label, href }, index) => (
                  <motion.div
                    key={label}
                    className="pb-4"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <Link href={href} key={label}>
                      <span className="text-white hover:text-red-500 transition-colors font-bold text-4xl">
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Trigger from "./trigger";
import { SubscribeForm } from "@/components/ui/subs-form";

export default function Footer() {
  return (
    <footer className="bg-white/4 backdrop-blur-2xl text-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Columna Izquierda */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="md:block hidden text-xl font-semibold">
              Asociación Peruana de Taekwon-Do ITF
            </h2>
<h2 className="md:hidden block text-xl mb-8 font-semibold">
              Asociación Peruana de <br /> Taekwon-Do ITF
            </h2>
           
          </div>

          <div className="flex items-center mb-2 gap-3">
            <FaPhoneAlt className="text-lg" />
            <span>+51 987 713 745</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg" />
            <span>fabiolamejia@gmail.com</span>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="flex flex-col items-start md:items-end gap-8">
          <Trigger />
          <div className="flex gap-8 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=100055111459318"
              aria-label="Facebook"
              className="hover:opacity-50 hover:scale-125 transform transition duration-300"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/campeonatosudamericanotkd2026?igsh=bHM2azdnanNjMjJh&utm_source=qr"
              aria-label="Instagram"
              className="hover:opacity-50 hover:scale-125 transform transition duration-300"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/watch?v=xN5GGexJhE0"
              aria-label="YouTube"
              className="hover:opacity-50 hover:scale-125 transform transition duration-300"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <SubscribeForm />
      {/* Línea separadora */}
      <hr className="my-8 border-gray-600" />

      {/* Derechos y Enlaces */}
      <div className="flex flex-col md:flex-row md:items-center justify-between text-xs text-gray-300 gap-6">
        {/* BLOQUE IZQUIERDO */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="md:flex hidden items-center gap-2">
            <span>
              Derechos Reservados &copy; Asociación Peruana de Taekwon-Do ITF
            </span>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <span>
              Derechos Reservados &copy; Asociación Peruana <br />
              de Taekwon-Do ITF
            </span>
          </div>

          <div className="hidden md:block w-px h-4 bg-gray-400"></div>

          <p className="hover:text-white cursor-pointer">Términos de uso</p>

          <div className="hidden md:block w-px h-4 bg-gray-400"></div>

          <p className="hover:text-white cursor-pointer">
            Política de privacidad
          </p>
        </div>

        {/* BLOQUE DERECHO */}
        <p className="text-xs md:text-right">
          Desarrollado por:{" "}
          <a
            href="https://digital-strategy-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Impacto Digital Estratégico
          </a>
        </p>
      </div>
    </footer>
  );
}

"use client";

import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Trigger from "./trigger";
import { SubscribeForm } from "@/components/ui/subs-form";

export default function Footer() {
  return (
    <footer className="bg-white/4 backdrop-blur-2xl text-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Columna Izquierda */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Asociación Peruana de Taekwon-Do ITF</h2>
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
        <div className="flex flex-col items-start md:items-end gap-4">
          <Trigger />
          <div className="flex gap-8 text-2xl">
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:opacity-50" target="_blank"><FaFacebookF /></a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:opacity-50" target="_blank"><FaInstagram /></a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="hover:opacity-50" target="_blank"><FaYoutube /></a>
          </div>
        </div>
      </div>
  <SubscribeForm />
      {/* Línea separadora */}
      <hr className="my-8 border-gray-600" />

      {/* Derechos y Enlaces */}
      <div className="flex flex-col md:flex-row items-start text-sm text-gray-300 gap-6">
        <div className="md:flex hidden items-center gap-2">
          <span>Derechos Reservados &copy; Asociación Peruana de Taekwon-Do ITF</span>
        </div>
         <div className="flex md:hidden items-center gap-2">
          <span>Derechos Reservados &copy; Asociación Peruana <br /> de Taekwon-Do ITF</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-gray-400"></div>
        <div className="flex gap-4">
          <p className="hover:text-white cursor-pointer">Términos de uso</p>
        </div>
        <div className="hidden md:block w-px h-4 bg-gray-400"></div>
        <div>
          <p className="hover:text-white cursor-pointer">Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
}

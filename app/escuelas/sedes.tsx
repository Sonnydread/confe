"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

interface Store {
  name: string;
  address: string;
  district: string;
  phones: string[];
  facebook: string;
  instagram: string;
  wassap: string;
  email: string;
  images: string[];
  mapLink: string;
}

const stores: Store[] = [
  {
    name: "Asoc. Nacional TKD - Chiclayo",
    address: "Calle Francisco Cabrera 51",
    district: "Chiclayo",
    phones: ["(+51) 950 209 383"],
    facebook: "https://www.facebook.com/tkd.apenavasquez/",
    instagram: "https://www.instagram.com/tkd.apenavasquez/",
    wassap:
      "https://wa.me/51950209383?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "apenavasquezb@gmail.com",
    images: ["/img/dojang/master-peña.jpg", "/img/dojang/logo/peña.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2!2d-79.8442962!3d-6.7732463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef27056f1977%3A0xe0654b6f8a4000cf!2sTaekwon-Do%20Pe%C3%B1avasquez%20-%20Escuela!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Yoo-Sin - Surco",
    address: "Av. Benavides 3586",
    district: "Santiago de Surco, Lima",
    phones: ["(+51) 987 713 745"],
    facebook: "https://www.facebook.com/profile.php?id=61564436910196",
    instagram: "https://www.instagram.com/yoosin.tkd/",
    wassap:
      "https://wa.me/51987713745?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "fabiolamejia@gmail.com",
    images: ["/img/dojang/d-confe.jpeg", "/img/dojang/logo/yosi.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.6914999999997!2d-76.9984359!3d-12.1288036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b808024b2585%3A0x2aaf8a23044928e7!2sAv.%20Alfredo%20Benavides%203586%2C%20Lima%2015038!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Nim-Do - Independencia",
    address: "Calle Tupac Inca 144",
    district: "Independencia, Lima",
    phones: ["(+51) 989 598 088"],
    facebook: "https://www.facebook.com/www.nimdoartesmarciales.pe",
    instagram: "https://www.instagram.com/team.nimdo/",
    wassap:
      "https://wa.me/51989598088?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "team.nimdo@gmail.com",
    images: ["/img/dojang/localnimdo.jpg", "/img/dojang/logo/nimdo.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.006!2d-77.0605585!3d-11.9810586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce4c9125069f%3A0x3e79e978bc2e2c92!2sNIM-DO%20ARTES%20MARCIALES!5e0!3m2!1ses!2spe!4v20260127",
  },
  {
    name: "Nim-Do - Los Olivos",
    address: "Av. Los Olivos 1176",
    district: "San Martín de Porres, Lima",
    phones: ["(+51) 922 500 744"],
    facebook: "https://www.facebook.com/www.nimdoartesmarciales.pe",
    instagram: "https://www.instagram.com/team.nimdo/",
    wassap:
      "https://wa.me/51922500744?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "team.nimdo@gmail.com",
    images: ["/img/dojang/olivos.png", "/img/dojang/logo/nimdo.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.77!2d-77.0981338!3d-11.9846982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfbd80fbddd3%3A0x3d24ea00254d33e1!2sNIM-DO%20SEDE%20OLIVOS!5e0!3m2!1ses!2spe!4v20260127",
  },
  {
    name: "Nim-Do - Carabayllo",
    address: "Av. Universitaria 428",
    district: "Carabayllo, Lima",
    phones: ["(+51) 923 062 581"],
    facebook: "https://www.facebook.com/www.nimdoartesmarciales.pe",
    instagram: "https://www.instagram.com/team.nimdo/",
    wassap:
      "https://wa.me/51923062581?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "team.nimdo@gmail.com",
    images: ["/img/dojang/localnimdo.jpg", "/img/dojang/logo/nimdo.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.006!2d-77.0605585!3d-11.9810586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce4c9125069f%3A0x3e79e978bc2e2c92!2sNIM-DO%20ARTES%20MARCIALES!5e0!3m2!1ses!2spe!4v20260127",
  },
  {
    name: "Cachorros KWAN - El Agustino",
    address: "Gutiérrez Chunqui 466 Urb. La Corporación, El Agustino",
    district: "El Agustino, Lima",
    phones: ["(+51) 993 542 892"],
    facebook: "https://www.facebook.com/profile.php?id=100021732381263",
    instagram: "https://instagram.com/cachorroskwan",
    wassap:
      "https://wa.me/51993542892?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "cachorros_kwan@gmail.com",
    images: ["/img/dojang/d-confe.jpeg", "/img/dojang/logo/cachorro.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.6914999999997!2d-76.9984359!3d-12.1288036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b808024b2585%3A0x2aaf8a23044928e7!2sAv.%20Alfredo%20Benavides%203586%2C%20Lima%2015038!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Ki-Baek - SJL",
    address: "Av. San Martín Oeste 315 Mz-44 Lt-33 2do-piso",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 906 328 411"],
    facebook: "https://www.facebook.com/ki.baek.artes.marciales.2025",
    instagram: "https://www.instagram.com/kibaekartesmarciales/",
    wassap:
      "https://wa.me/51906328411?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "ki.baek@gmail.com",
    images: ["/img/dojang/d-confe.jpeg", "/img/dojang/logo/kibaek.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7!2d-76.9961679!3d-12.1354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80f26a6d65d%3A0x4f517e8b8851c68c!2sEd%C3%A9n%20Spa!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Won-Hyo - SJL",
    address: "Cooperativa Canto Grande, SJL",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 951 310 795"],
    facebook: "https://www.facebook.com/profile.php?id=100055111459318",
    instagram: "https://www.instagram.com/yoosin.tkd/",
    wassap:
      "https://wa.me/51951310795?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "walter_contreras@gmail.com",
    images: ["/img/dojang/d-confe.jpeg", "/img/dojang/logo/walter.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.6914999999997!2d-76.9984359!3d-12.1288036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b808024b2585%3A0x2aaf8a23044928e7!2sAv.%20Alfredo%20Benavides%203586%2C%20Lima%2015038!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Fertex Villa Flores - SJL",
    address: "Av. Los Jardines Este 609, SJL",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 933 601 356"],
    facebook: "https://www.facebook.com/FertexVillaFloress",
    instagram: "https://www.instagram.com/fertexvillaflores/",
    wassap:
      "https://wa.me/51933601356?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "fertexvillaflores@gmail.com",
    images: ["/img/dojang/villaflo-dojang.jpg", "/img/dojang/logo/flores.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.151064871885!2d-77.0981338!3d-12.0058917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c55d77d1b035%3A0x220b1a1847e934e6!2sArtes+Marciales+-+FERTEX+Villa+Flores!5e0!3m2!1ses!2spe!4v20260127",
  },
  {
    name: "Fertex Mariscal - SJL",
    address: "Av. Central 5110, cruce con Av. El Muro, Urb. Mariscal Cáceres",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 933 601 356"],
    facebook: "https://www.facebook.com/FertexVillaFloress",
    instagram: "https://www.instagram.com/fertexvillaflores/",
    wassap:
      "https://wa.me/51933601356?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "fertexvillaflores@gmail.com",
    images: ["/img/dojang/mariscal.jpg", "/img/dojang/logo/marisc.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7388842992055!2d-76.9831007!3d-11.9503921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c50f866b502b%3A0x5631bff9e0050e03!2sTaekwondo%20-%20Fertex%20Mariscal%20C%C3%A1ceres!5e0!3m2!1ses!2spe!4v20260127",
  },
  {
    name: "Fertex Vencedores - SJL",
    address: "Jr. Los Jaspes 1968 2 piso, SJL",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 926 776 339"],
    facebook: "https://www.facebook.com/fertexvencedores",
    instagram: "https://www.instagram.com/fertexvencedores/",
    wassap:
      "https://wa.me/51926776339?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "jordanmiranda9902@gmail.com",
    images: ["/img/dojang/vencedores.jpg", "/img/dojang/logo/vence.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3!2d-76.9999797!3d-11.9982294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5204fbf6931%3A0xba854435c6b3093c!2sFERTEX%20ARTES%20MARCIALES%20VENCEDORES!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Fertex Central - SJL",
    address: "Av. Las Flores de Primavera 1284",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 922 724 276"],
    facebook: "https://www.facebook.com/fertexartesmarciales",
    instagram: "https://www.instagram.com/fertexartesmarciales/",
    wassap:
      "https://wa.me/51922724276?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "fertexartesmarciales@gmail.com",
    images: ["/img/dojang/localfertex.jpg", "/img/dojang/logo/fer.cen.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.0107715!3d-12.0089712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf005af02831%3A0xc973bbe543f5de14!2sFertex%20Artes%20Marciales%20Sede%20Central!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Fertex Guk-Gi - SJL",
    address: "Mz. A6 Lt. 6 Urb Daniel A. Carrión - SJL",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 956 350 286"],
    facebook: "https://www.facebook.com/FertexGukGi",
    instagram: "https://www.instagram.com/fertexgukgi/",
    wassap:
      "https://wa.me/51956350286?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "fertexgukgi@gmail.com",
    images: ["/img/dojang/srdojang.png", "/img/dojang/logo/rosa.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8!2d-76.9910662!3d-11.973442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c56a4368935d%3A0xb1232af138f1c773!2sFertex%20Taekwondo%20GUK%20-%20GI!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Wolf Hope - SJL",
    address: "Av. Los Jardines Oeste 144 4to piso, SJL",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 993 016 897"],
    facebook: "https://www.facebook.com/profile.php?id=61566388631597",
    instagram: "https://www.instagram.com/wolfhope.tkd/",
    wassap:
      "https://wa.me/51993016897?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "wolf_hope@gmail.com",
    images: ["/img/dojang/wolf.jpg", "/img/dojang/logo/wolf.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.0!2d-77.0070331!3d-12.0062277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5fb41cc5093%3A0xe8a29692e37fa654!2sWOLF%20HOPE!5e0!3m2!1ses!2spe!4v1234567890",
  },

  {
    name: "Uppercut Club",
    address: "Av. Santiago de Surco 3717, Surco",
    district: "Santiago de Surco, Lima",
    phones: ["(+51) 925 449 230"],
    facebook: "https://www.facebook.com/uppercutclub",
    instagram: "https://www.instagram.com/uppercut.club/",
    wassap:
      "https://wa.me/51925449230?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "guillermo.alvarado@themeteorlab.io",
    images: ["/img/dojang/localupp.jpg", "/img/dojang/logo/upp.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7!2d-76.9961679!3d-12.1354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80f26a6d65d%3A0x4f517e8b8851c68c!2sEd%C3%A9n%20Spa!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Yom-Chi - Huancayo",
    address: "Av. Jirón Cusco 139 - Huancayo",
    district: "Huancayo, Perú",
    phones: ["(+51) 981 582 301"],
    facebook: "https://www.facebook.com/profile.php?id=100055111459318",
    instagram: "https://www.instagram.com/yoosin.tkd/",
    wassap:
      "https://wa.me/51981582301?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "yom_chi_huancayo@gmail.com",
    images: ["/img/dojang/d-confe.jpeg", "/img/dojang/logo/yom.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7!2d-76.9961679!3d-12.1354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80f26a6d65d%3A0x4f517e8b8851c68c!2sEd%C3%A9n%20Spa!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Power-Do - SJL",
    address: "Mz B lote 28 - Urb, Los Heraldos y Magnolias",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 988 705 635"],
    facebook: "https://www.facebook.com/profile.php?id=61560688936714",
    instagram: "https://instagram.com/power-do",
    wassap:
      "https://wa.me/51988705635?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "lori_14_1994@hotmail.com",
    images: ["/img/dojang/d-confe.jpeg", "/img/dojang/logo/pow-do.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7!2d-76.9961679!3d-12.1354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80f26a6d65d%3A0x4f517e8b8851c68c!2sEd%C3%A9n%20Spa!5e0!3m2!1ses!2spe!4v1234567890",
  },
  {
    name: "Choong-Moo - SJL",
    address: "Av. Próceres de la Independencia Mz. A Lote 25",
    district: "San Juan de Lurigancho, Lima",
    phones: ["(+51) 936 578 893"],
    facebook: "https://www.facebook.com/profile.php?id=100055111459318",
    instagram: "https://www.instagram.com/choongmootaekwondoitf/",
    wassap:
      "https://wa.me/51936578893?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios.",
    email: "choong_moo@gmail.com",
    images: ["/img/dojang/choong.jpeg", "/img/dojang/logo/chonng.png"],
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7!2d-76.9961679!3d-12.1354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80f26a6d65d%3A0x4f517e8b8851c68c!2sEd%C3%A9n%20Spa!5e0!3m2!1ses!2spe!4v1234567890",
  },
];

export default function Locations() {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  return (
    <>
      {/* Título */}
      <div className="flex justify-between items-start md:flex-row flex-col px-6 md:px-20 pt-28 md:pt-[150px]">
        <h1
          className="
            text-3xl md:text-5xl font-bold text-start
            bg-gradient-to-r from-[#ec0202] to-white
            bg-clip-text text-transparent
          "
        >
          Nuestras Escuelas
        </h1>
      </div>

      <section
        id="Dojangs"
        className="px-6 md:px-8 flex items-center justify-center md:flex-row flex-col gap-10 md:gap-[64px] md:pb-20"
      >
        {/* Columna izquierda: Lista de dojangs */}
        <div className="flex items-center justify-center mx-auto w-full md:w-auto">
          <div className="max-w-sm md:max-w-md w-full">
            <div className="rounded-2xl border border-gray-300 bg-white/5 backdrop-blur-sm shadow-lg py-8 md:mt-12 mt-8 md:ml-10 px-14">
              <div className="grid grid-cols-1 gap-y-1">
                {[
                  "Asoc. Nacional TKD - Chiclayo",
                  "Yoo-Sin - Surco",
                  "Nim-Do - Independencia",
                  "Nim-Do - Los Olivos",
                  "Nim-Do - Carabayllo",
                  "Cachorros KWAN - El Agustino",
                  "Ki-Baek - SJL",
                  "Won-Hyo - SJL",
                  "Fertex Villa Flores - SJL",
                  "Fertex Mariscal - SJL",
                  "Fertex Vencedores - SJL",
                  "Fertex Central - SJL",
                  "Fertex Guk-Gi - SJL",
                  "Wolf Hope - SJL",
                  "Uppercut Club - Surco",
                  "Yom-Chi - Huancayo",
                  "Power-Do - SJL",
                  "Choong-Moo - SJL",
                ].map((dojang, idx) => (
                  <p
                    key={idx}
                    onClick={() => {
                      const targetId = dojang
                        .replace(/\s+/g, "-")
                        .toLowerCase();
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="text-base text-gray-200 hover:text-red-500 cursor-pointer text-center transition-colors"
                  >
                    {dojang}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:block hidden relative w-full max-w-[820px] mx-auto">
          <Image
            src="/img/iframe.png"
            width={1200}
            height={500}
            quality={100}
            alt="Mapa de dojangs"
            className="w-full md:w-[110%] object-cover rounded-2xl shadow-xl"
          />

          {/* Texto en esquina inferior izquierda */}
          <div className="absolute bottom-12 left-12 bg-indigo-600 px-6 py-3 rounded-md text-white text-lg font-bold uppercase">
            (Imagen Referencial)
          </div>
        </div>
      </section>

      {/* Tarjetas de cada dojang */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-6 md:mx-28 mx-4 py-20">
        {stores.map((store, index) => (
          <div
            key={index}
            id={store.name.replace(/\s+/g, "-").toLowerCase()}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 backdrop-blur-2xl"
          >
            {/* Imagen principal */}
            {store.images[0] && (
              <Image
                src={store.images[0]}
                alt={`${store.name} hero`}
                width={600}
                height={400}
                className="w-full h-80 object-cover"
                priority={index < 2}
              />
            )}

            {/* Info del dojang */}
            <div className="px-6 py-6">
              {/* Nombre → ocupa todo el ancho disponible y puede salirse */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 break-words overflow-visible">
                {store.name}
              </h3>

              {/* Resto del contenido en grid de 2 columnas */}
              <div className="grid grid-cols-2 gap-6 items-start">
                <div className="space-y-3 text-sm">
                  <p className="text-xs text-gray-600">{store.district}</p>

                  <div className="flex items-start gap-2">
                    <MapPin size={24} className="text-red-600 shrink-0" />
                    <span className="text-gray-700">{store.address}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone size={24} className="fill-green-600 shrink-0" />
                    <span className="text-gray-700">
                      {store.phones.join(" / ")}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Mail size={24} className="text-gray-600 shrink-0" />
                    <span className="text-gray-700 text-sm mt-[2px]">
                      {store.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={store.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                    >
                      <Facebook
                        size={30}
                        className="text-blue-600 fill-blue-500 transition-transform duration-300 ease-out hover:scale-125"
                      />
                    </a>
                    <a
                      href={store.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500"
                    >
                      <Instagram
                        size={30}
                        className="text-pink-600 transition-transform duration-300 ease-out hover:scale-125"
                      />
                    </a>
                    <a
                      href={store.wassap}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <Image
                          src="/img/wassp.png"
                          alt="Navbar logo"
                          width={34}
                          height={34}
                          className="object-cover transition-transform duration-300 ease-out hover:scale-125"
                        />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  {store.images[1] && (
                    <Image
                      src={store.images[1]}
                      alt={`${store.name} logo`}
                      width={120}
                      height={100}
                      className="object-contain rounded"
                    />
                  )}

                  <button
                    onClick={() => setSelectedMap(store.mapLink)}
                    className="flex items-center justify-center md:mr-0 mr-2 gap-2 bg-indigo-600 text-white md:px-5 px-3 md:py-2.5 py-2 md:mt-0 mt-6 text-sm rounded-lg transition-transform duration-300 ease-out hover:scale-110"
                  >
                    <MapPin size={18} className="md:block hidden" />
                    Ver ubicación
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DEL MAPA (se abre dentro de la página) */}
      {selectedMap && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMap(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMap(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 text-black font-bold text-2xl"
            >
              ×
            </button>
            <iframe
              src={selectedMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  );
}

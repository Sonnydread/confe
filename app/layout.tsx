import "@/app/globals.css";
import { Noto_Sans, Russo_One } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import { ScrollProgress } from "./Confederation/scroll-progress";
// import MainNav from "@/components/landing/MainNav";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const russo_one = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Confederación Peruana de Taekwon-Do ITF",
  description: "Asociación Peruana",
  icons: {
    icon: "img/Inicio/locnf.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">  
      <head>
        <meta name="format-detection" content="telephone=no,date=no,email=no,address=no" />
      </head>
      <body
        className={`${noto_sans.variable} ${russo_one.variable} antialiased relative min-h-screen`}
      >
        <Image
          src="/img/bgmap.png"
          alt="Background"
          width={1920}
          height={1080}
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          priority  
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
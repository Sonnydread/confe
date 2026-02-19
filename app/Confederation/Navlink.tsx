"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";  // ← Importante
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export default function NavLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const pathname = usePathname(); // ← Obtiene la ruta actual (ej: "/proyectos")

  // Compara la ruta actual con el href
  // También maneja el caso de la home ("/" vs "/inicio" si usas rutas limpias)
  const isActive = pathname === href || (href === "/" && pathname === "/");

  return (
    <li className="inline-flex items-center justify-center">
      <Link href={href} className="h-fit inline-flex">
        <Button
          variant="link"
          className={cn(
            "text-base text-white underline-offset-[10px] p-0 hover:underline h-5 transition-all",
            isActive && "underline", // ← Solo añade underline si está activo
            className
          )}
          style={{
            textDecorationThickness: "1.5px",
            textShadow: isActive ? "0px 0px 24px rgba(255, 255, 255, 0.8)" : "none",
          }}
        >
          {children}
        </Button>
      </Link>
    </li>
  );
}
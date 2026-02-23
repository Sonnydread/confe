"use client";

import { create } from "zustand";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import { Mail } from "lucide-react";

interface SubscribeStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSubscribeStore = create<SubscribeStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
});

export function SubscribeForm() {
  const { isOpen, setIsOpen } = useSubscribeStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async () => {
  setIsOpen(false);
  form.reset();
  toast.success("Muchas gracias por contactarte!");
};
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="overflow-y-auto ftems-center justify-center backdrop-blur-lg bg-gray-900  flex flex-col gap-4 max-w-none w-full md:max-w-md ">
        <SheetHeader>
         <SheetTitle className="flex items-center gap-3 text-white text-start">
  <span>Contáctanos</span>

  <a
    href="https://wa.me/51987713745?text=Hola!%20Quisiera%20mayor%20información."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex"
  >
    <Image
      src="/img/wassp.png"
      alt="WhatsApp"
      width={34}
      height={34}
      className="object-cover transition-transform duration-300 ease-out hover:scale-125"
    />
  </a>
</SheetTitle>
          <SheetDescription className="text-white text-start">
          ¿Tienes preguntas o quieres saber más? <br></br> Envíanos un mensaje y te responderemos pronto.
          </SheetDescription>
        </SheetHeader>
        <Image
          src="/img/Inicio/port4.jpg"
          alt="form image"
          width={558}
          height={280}
          className="w-full rounded-[24px]"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nombre Completo</FormLabel>
                  <FormControl>
                    <Input  placeholder="Ramiro Díaz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="ramiro@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Mensaje</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escríbenos aquí..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant="outline" size="touch" className="w-full">
              Enviar mensaje
            </Button>

            <p className="text-base ml-5 text-white font-medium mt-4">
              Estamos ubicados en Av. Benavides 3586 - Surco
            </p>
            <div className="flex ml-5 items-start gap-2">
                  <Mail size={20} className="pt-1 text-white" />
                  <span className="text-white">fabiolamejia@gmail.com</span>
                </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

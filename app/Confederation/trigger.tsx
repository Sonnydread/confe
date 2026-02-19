"use client";

import { Button } from "@/components/ui/button";
import { useSubscribeStore } from "@/components/ui/subs-form";

export default function Trigger() {
  const { setIsOpen } = useSubscribeStore();

  return (
    <div>
      <Button variant="outline" size="touch" onClick={() => setIsOpen(true)}>
        Contáctanos
      </Button>
    </div>
  );
}
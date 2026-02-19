import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/20 button-clip",
        destructive: "bg-red-500 text-destructive-foreground shadow-sm hover:bg-destructive/1 button-clip",
        outline: "shadow-sm bg-white hover:bg-white/100 border-1 button-clip button-clip-border",
        outlineToken: "shadow-sm bg-white hover:bg-white/100 border-1 button-clip button-clip-border button-token-border",
        secondary: "bg-gray-800 text-secondary-foreground shadow-sm hover:bg-secondary/10 button-clip",
        ghost: "hover:bg-accent hover:text-accent-foreground button-clip",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-b from-blue-950 to-gray-900 shadow-lg button-clip button-backdrop-filter",
        backdrop: "button-backdrop-filter text-primary-foreground shadow hover:bg-black/10 button-clip",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        "2xl": "h-14 px-7 font-bold text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_30px_-5px_hsl(var(--champagne)/0.3)] hover:shadow-[0_0_50px_-5px_hsl(var(--champagne)/0.5)] hover:-translate-y-0.5",
        hero:
          "bg-gradient-to-r from-champagne to-gold text-background font-bold shadow-[0_0_30px_-5px_hsl(var(--champagne)/0.4)] hover:shadow-[0_0_50px_-5px_hsl(var(--champagne)/0.6)] hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/40",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 hover:border-foreground/20",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "bg-white/5 backdrop-blur-xl border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20",
        dock:
          "bg-gradient-to-r from-champagne to-gold text-background font-bold shadow-[0_0_40px_-5px_hsl(var(--champagne)/0.5)]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-12 w-12",
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
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

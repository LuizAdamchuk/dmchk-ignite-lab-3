import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 w-full bg-cyan-500 rounded flex items-center  justify-center font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:right-2 ring-white",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

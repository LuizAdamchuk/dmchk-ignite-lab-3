import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 w-full bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:right-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}

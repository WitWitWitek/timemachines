import { cn } from "../../lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Wrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
